import { UserType } from "../types.js";
export class User {
    private newUser: UserType;
    private users: UserType[] = [];

    constructor(icon: string, nickname: string) {
        this.newUser = {
            icon: icon,
            nickName: nickname,
            id: Number(Math.random() * 1000000),
        }
        this.users.push(this.newUser);
        this.save(this.users);
    }   
    private save(users: UserType[]) {
        localStorage.setItem('users', JSON.stringify(users));
    }
    public getIcon() {
        return this.newUser.icon;
    }
    public getNickname() {
        return this.newUser.nickName;
    }
}