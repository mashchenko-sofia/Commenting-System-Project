import { CommentType} from "../types";
export class Comment {
    public create(text: string, user) {
        const newComment: CommentType = {
            icon: user.getIcon(),
            user: user.getNickname(),
            day: new Date().getDate(),
            month: new Date().getMonth() + 1,
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            text: text,
            isFavorite: false,
            rating: 0,
            answers: [],
        }

        this.addToDOM(newComment);
    }
    private addToDOM(comment: CommentType) {
        const commentsBody = document.querySelector('.comments__body') as HTMLElement;
        const newCommentElement = document.createElement('div');
        newCommentElement.classList.add('comment');

        const userIconElement = document.createElement('img');
        userIconElement.classList.add('avatar-icon');
        userIconElement.src = comment.icon;

        const userNameElement = document.createElement('h3');
        userNameElement.classList.add('avatar-name');
        userNameElement.textContent = comment.user;

        const dateElement = document.createElement('span');
        dateElement.classList.add('date');
        dateElement.textContent = `${comment.day}.${comment.month} ${comment.hours}:${comment.minutes}`;

        const textElement = document.createElement('p');
        textElement.classList.add('comment-text');
        textElement.textContent = comment.text;

        newCommentElement.appendChild(userIconElement);
        newCommentElement.appendChild(userNameElement);
        newCommentElement.appendChild(dateElement);
        newCommentElement.appendChild(textElement);

        commentsBody.appendChild(newCommentElement);
    }
}