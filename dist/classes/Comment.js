"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.Comment = void 0;
// class Comment {
//     constructor(text, user) {
//         this.comments = [];
//         this.newComment = {
//             icon: user.getIcon(),
//             nickName: user.getNickname(),
//             day: new Date().getDate(),
//             month: new Date().getMonth() + 1,
//             hours: new Date().getHours(),
//             minutes: new Date().getMinutes(),
//             text: text,
//             isFavorite: false,
//             rating: 0,
//             answers: [],
//         };
//         this.addToDOM(this.newComment);
//         this.comments.push(this.newComment);
//         this.saveComment(this.comments);
//     }
//     addToDOM(comment) {
//         const parentElement = document.querySelector('.comments__body');
//         const newCommentElement = document.createElement('div');
//         newCommentElement.classList.add('comment');
//         const userIconElement = document.createElement('img');
//         userIconElement.classList.add('comment__icon');
//         userIconElement.src = comment.icon;
//         const userNameElement = document.createElement('h3');
//         userNameElement.classList.add('comment__nickName');
//         userNameElement.textContent = comment.nickName;
//         const dateElement = document.createElement('span');
//         dateElement.classList.add('comment__date');
//         dateElement.textContent = `${comment.day}.${comment.month} ${comment.hours}:${comment.minutes}`;
//         const textElement = document.createElement('p');
//         textElement.classList.add('comment__text');
//         textElement.textContent = comment.text;
//         newCommentElement.appendChild(userIconElement);
//         newCommentElement.appendChild(userNameElement);
//         newCommentElement.appendChild(dateElement);
//         newCommentElement.appendChild(textElement);
//         parentElement.appendChild(newCommentElement);
//     }
//     saveComment(comments) {
//         localStorage.setItem('comments', JSON.stringify(comments));
//     }
// }
// exports.Comment = Comment;


// Object.defineProperty(exports, "__esModule", { value: true });
// const _Comment = void 0;
// export { _Comment as Comment };
class Comment {
    constructor(text, user) {
        this.comments = [];
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
        };
        this.addToDOM(this.newComment);
        this.comments.push(this.newComment);
        this.saveComment(this.comments);
    }
    addToDOM(comment) {
        const parentElement = document.querySelector('.comments__body');
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
    saveComment(comments) {
        localStorage.setItem('comments', JSON.stringify(comments));
    }
}
// const _Comment = Comment;
export {Comment};
