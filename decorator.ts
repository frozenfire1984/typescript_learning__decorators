import {HtmlOutputConfig, TypeUser} from './interfaces'

/*const CountGetFullInfo = (Constructor: any, propName: string | Symbol, descriptor: PropertyDescriptor):any => {

}*/

const PropsUpdate = (Constructor: any):any => {
    return class extends Constructor {
        constructor(arg: TypeUser) {
            super(arg);
            Object.defineProperty(this, "id", {
                enumerable: false,
                configurable: false,
                writable: false
            })

            Object.defineProperty(this, "age", {
                writable: false
            })

            Object.defineProperty(this, "random_scores", {
                enumerable: true,
                configurable: false,
                writable: false,
                value: Math.floor(Math.random() * 10000)
            })
        }
    }
}

const HtmlOutput = (config: HtmlOutputConfig) => {
    return (Constructor: any):any => {
        return class extends Constructor {
            constructor(arg: TypeUser | any) {
                super(arg);
                const purpose_tag = document.querySelector(config.selector)!
                let template = config.template
                for (let prop in arg) {
                    template = template.replace(new RegExp(`{{(${prop})}}`, "gi"), arg[prop])
                }
                purpose_tag.innerHTML += template
            }
        }
    }
}

@PropsUpdate
@HtmlOutput({
    selector: '#user',
    template: `
        <div class="user user_{{id}}">
          <div class="user__row">
            <span class="user__label">name:</span>
            <span class="user__value">{{firstName}} {{LastName}}</span>
          </div>
          <div class="user__row">
            <span class="user__label">age:</span>
            <span class="user__value">{{age}}</span>
          </div>
          <div class="user__row">
            <span class="user__label">position:</span>
            <span class="user__value">{{position}}</span>
          </div>
        </div>
    `
})
class User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    position: string

    constructor(argObj: TypeUser) {
        this.id = argObj.id
        this.firstName = argObj.firstName
        this.lastName = argObj.lastName
        this.age = argObj.age
        this.position = argObj.position
    }

    //@CountGetFullInfo
    /*public getFullInfo() {
        return `name: ${this.firstName} ${this.lastName}, age: ${this.age}, job: ${this.position}`
    }*/
}

let user1: TypeUser = new User({id: 1, firstName: "John", lastName: "Jones", age: 30, position: "fighter"})
let user2: TypeUser = new User({id: 2, firstName: "Daniel", lastName: "Cormier", age: 40, position: "fighter"})
let user3: TypeUser = new User({id: 3, firstName: "Dana", lastName: "White", age:  50, position:  "president"})
let user4: TypeUser = new User({id: 4, firstName: "Joe", lastName: "Rogan", age: 50, position: "podcaster, commentator"})

const users: any[] = [user1, user2, user3, user4]

try {
    user3.age = 100
} catch (err: any) {
    console.warn(new Error(err))
    console.warn(user3)
}

users.forEach(item => {
    for (let prop in item) {
        console.log(`${prop}: ${item[prop]}`)
    }
    console.log("-------------------")
})