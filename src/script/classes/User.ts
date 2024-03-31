export class User {
    public icon: string
    public nickname: string;
    public id: number;

    public create(icon: string, nickname: string) {
        this.icon = icon;
        this.nickname = nickname;
        this.id = Number(Math.random() * 1000000);
    }   
}