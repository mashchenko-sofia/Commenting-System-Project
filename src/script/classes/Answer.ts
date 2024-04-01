import { AnswerType } from "../types";
export class Answer {
    private newAnswer: AnswerType;
    private answers: AnswerType[] = [];
    constructor(text: string, user: any, parentElement: Element) {
        this.newAnswer = {
            icon: user.getIcon(),
            nickName: user.getNickname(),
            day: new Date().getDate(),
            month: new Date().getMonth() + 1,
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            text: text,
            isFavorite: false,
            rating: 0,
        }
        this.addToDOM(this.newAnswer, parentElement);

        this.answers.push(this.newAnswer);
    }
    private addToDOM(answer: AnswerType, parentElement: Element): void {
        const newAnswerElement = document.createElement('div');
        newAnswerElement.classList.add('comment');

        const userIconElement = document.createElement('img');
        userIconElement.classList.add('avatar-icon');
        userIconElement.src = answer.icon;

        const userNameElement = document.createElement('h3');
        userNameElement.classList.add('avatar-name');
        userNameElement.textContent = answer.nickName;

        const dateElement = document.createElement('span');
        dateElement.classList.add('date');
        dateElement.textContent = `${answer.day}.${answer.month} ${answer.hours}:${answer.minutes}`;

        const textElement = document.createElement('p');
        textElement.classList.add('comment-text');
        textElement.textContent = answer.text;

        newAnswerElement.appendChild(userIconElement);
        newAnswerElement.appendChild(userNameElement);
        newAnswerElement.appendChild(dateElement);
        newAnswerElement.appendChild(textElement);

        parentElement.appendChild(newAnswerElement);
    }
}