import { CommentType} from "../types.js";

export class Comment {
    private newComment: CommentType;
    private comments: CommentType[] = [];
    constructor(text: string, user: any) {
        this.newComment = {
            icon: user.getIcon(),
            nickName: user.getNickname(),
            day: new Date().getDate(),
            month: new Date().getMonth() + 1,
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            text: text,
            isFavorite: false,
            rating: 0,
            answers: [],
        }

        this.addToDOM(this.newComment);

        this.comments.push(this.newComment);
        this.saveComment(this.comments);
    }
   
    private addToDOM(comment: CommentType) {
        const parentElement = document.querySelector('.comments__body') as HTMLElement;
        const newCommentElement = document.createElement('div');
        newCommentElement.classList.add('comment');

        const userIconElement = document.createElement('img');
        userIconElement.classList.add('comment__icon');
        userIconElement.src = comment.icon;

        const userNameElement = document.createElement('h3');
        userNameElement.classList.add('comment__nickName');
        userNameElement.textContent = comment.nickName;

        const dateElement = document.createElement('span');
        dateElement.classList.add('comment__date');
        dateElement.textContent = `${comment.day}.${comment.month} ${comment.hours}:${comment.minutes}`;

        const textElement = document.createElement('p');
        textElement.classList.add('comment__text');
        textElement.textContent = comment.text;

        newCommentElement.appendChild(userIconElement);
        newCommentElement.appendChild(userNameElement);
        newCommentElement.appendChild(dateElement);
        newCommentElement.appendChild(textElement);

        parentElement.appendChild(newCommentElement);
    }
    private saveComment(comments: CommentType[]) {
        localStorage.setItem('comments', JSON.stringify(comments));
    }
}