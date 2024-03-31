import { AnswerType } from "../types";
export class Answer {
    public create(text: string, user) {
        const newAnswer: AnswerType = {
            icon: user.getIcon(),
            user: user.getNickname(),
            day: new Date().getDate(),
            month: new Date().getMonth() + 1,
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            text: text,
            isFavorite: false,
            rating: 0,
        }

        this.addToDOM(newAnswer);
    }
    private addToDOM(answer: AnswerType) {
        const commentsBody = document.querySelector('.comments__body') as HTMLElement;
        const newAnswerElement = document.createElement('div');
        newAnswerElement.classList.add('comment');

        const userIconElement = document.createElement('img');
        userIconElement.classList.add('avatar-icon');
        userIconElement.src = answer.icon;

        const userNameElement = document.createElement('h3');
        userNameElement.classList.add('avatar-name');
        userNameElement.textContent = answer.user;

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

        commentsBody.appendChild(newAnswerElement);
    }
}