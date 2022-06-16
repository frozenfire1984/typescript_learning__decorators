var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const PropsUpdate = (Constructor) => {
    return class extends Constructor {
        constructor(arg) {
            super(arg);
            Object.defineProperty(this, "id", {
                enumerable: false,
                configurable: false,
                writable: false
            });
            Object.defineProperty(this, "age", {
                writable: false
            });
            Object.defineProperty(this, "random_scores", {
                enumerable: true,
                configurable: false,
                writable: false,
                value: Math.floor(Math.random() * 10000)
            });
        }
    };
};
const HtmlOutput = (config) => {
    return (Constructor) => {
        return class extends Constructor {
            constructor(arg) {
                super(arg);
                const purpose_tag = document.querySelector(config.selector);
                let template = config.template;
                for (let prop in arg) {
                    template = template.replace(new RegExp(`{{(${prop})}}`, "gi"), arg[prop]);
                }
                purpose_tag.innerHTML += template;
            }
        };
    };
};
let User = class User {
    constructor(argObj) {
        this.id = argObj.id;
        this.firstName = argObj.firstName;
        this.lastName = argObj.lastName;
        this.age = argObj.age;
        this.position = argObj.position;
    }
};
User = __decorate([
    PropsUpdate,
    HtmlOutput({
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
], User);
let user1 = new User({ id: 1, firstName: "John", lastName: "Jones", age: 30, position: "fighter" });
let user2 = new User({ id: 2, firstName: "Daniel", lastName: "Cormier", age: 40, position: "fighter" });
let user3 = new User({ id: 3, firstName: "Dana", lastName: "White", age: 50, position: "president" });
let user4 = new User({ id: 4, firstName: "Joe", lastName: "Rogan", age: 50, position: "podcaster, commentator" });
const users = [user1, user2, user3, user4];
try {
    user3.age = 100;
}
catch (err) {
    console.warn(new Error(err));
    console.warn(user3);
}
users.forEach(item => {
    for (let prop in item) {
        console.log(`${prop}: ${item[prop]}`);
    }
    console.log("-------------------");
});
export {};
//# sourceMappingURL=decorator.js.map