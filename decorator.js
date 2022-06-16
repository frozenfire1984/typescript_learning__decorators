"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function htmlOutput(flag) {
    if (flag) {
        return function (constructorFn) {
            constructorFn.prototype.showHtml = function (css_class = "") {
                const output_tag = document.createElement("div");
                css_class.length ? output_tag.classList.add(css_class) : null;
                output_tag.innerHTML = JSON.stringify(this);
                document.body.appendChild(output_tag);
                Object.defineProperty(this, "id", {
                    enumerable: false,
                    configurable: false,
                    writable: false
                });
                Object.defineProperty(this, "showHtml", {
                    enumerable: false,
                    configurable: false,
                    writable: false
                });
            };
        };
    }
    return;
}
function logMethod(target, propName, descriptor) {
    console.log(target);
    console.log(propName);
    console.log(descriptor);
}
let User = class User {
    constructor(id, name, age, job) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.job = job;
    }
    getFullInfo() {
        return `name: ${this.name}, age: ${this.age}, job: ${this.job}`;
    }
    get userName() {
        return this.name;
    }
};
__decorate([
    logMethod
], User.prototype, "getFullInfo", null);
User = __decorate([
    htmlOutput(true)
], User);
let user = new User(1, "John Jones", 30, "fighter");
user.showHtml("foo");
let user2 = new User(2, "Daniel Cormier", 40, "fighter");
user2.showHtml();
let user3 = new User(3, "Dana White", 50, "director");
user3.showHtml("bar");
let user4 = new User(4, "Joe Rogan", 50, "interviewer");
user4.showHtml("lorem");
for (let prop in user) {
    console.log(`${prop}: ${user[prop]}`);
}
console.log(user.getFullInfo());
//# sourceMappingURL=decorator.js.map