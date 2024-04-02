"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(icon, nickname) {
        this.users = [];
        this.newUser = {
            icon: icon,
            nickName: nickname,
            id: Number(Math.random() * 1000000),
        };
        this.users.push(this.newUser);
        this.save(this.users);
    }
    save(users) {
        localStorage.setItem('users', JSON.stringify(users));
    }
    getIcon() {
        return this.newUser.icon;
    }
    getNickname() {
        return this.newUser.nickName;
    }
}
exports.User = User;
