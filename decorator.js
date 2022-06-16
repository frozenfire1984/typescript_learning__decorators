"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logMethod(target, propName, descriptor) {
    console.log(target);
    console.log(propName);
    console.log(descriptor);
}
const HtmlOutput = (config) => {
    return (Constructor) => {
        return class extends Constructor {
            constructor(...args) {
                super(...args);
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
                const purpose_tag = document.querySelector(config.selector);
                purpose_tag.innerHTML += `<div id="user_id_${args[0]}">${config.template}</div>`;
                const value_name_tag = purpose_tag.querySelector(`#user_id_${args[0]} .user__row_name .user__value`);
                value_name_tag.textContent = `${args[1]} ${args[2]}`;
                const value_age_tag = purpose_tag.querySelector(`#user_id_${args[0]} .user__row_age .user__value`);
                value_age_tag.textContent = args[3];
                const value_pos_tag = purpose_tag.querySelector(`#user_id_${args[0]} .user__row_pos .user__value`);
                value_pos_tag.textContent = args[4];
            }
        };
    };
};
let User = class User {
    constructor(id, firstName, lastName, age, position) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.position = position;
    }
    getFullInfo() {
        return `name: ${this.firstName} ${this.lastName}, age: ${this.age}, job: ${this.position}`;
    }
};
User = __decorate([
    HtmlOutput({
        selector: '#user',
        template: `
        <div class="user">
          <div class="user__row user__row_name">
            <span class="user__label">name:</span>
            <span class="user__value"></span>
          </div>
          <div class="user__row user__row_age">
            <span class="user__label">age:</span>
            <span class="user__value"></span>
          </div>
          <div class="user__row user__row_pos">
            <span class="user__label">position:</span>
            <span class="user__value"></span>
          </div>
        </div>
    `
    })
], User);
let user1 = new User(1, "John", "Jones", 30, "fighter");
let user2 = new User(2, "Daniel", "Cormier", 40, "fighter");
let user3 = new User(3, "Dana", "White", 50, "president");
let user4 = new User(4, "Joe", "Rogan", 50, "podcaster, commentator");
const users = [user1, user2, user3, user4];
try {
    user2.age = 100;
}
catch (err) {
    console.warn(new Error(err));
    console.warn(user2);
}
users.forEach(item => {
    for (let prop in item) {
        console.log(`${prop}: ${item[prop]}`);
    }
    console.log("-------------------");
});
//# sourceMappingURL=decorator.js.map