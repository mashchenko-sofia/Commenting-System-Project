System.register("script/types", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("script/classes/Comment", [], function (exports_2, context_2) {
    "use strict";
    var Comment;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            Comment = class Comment {
                newComment;
                comments = [];
                constructor(text, user) {
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
                    userIconElement.classList.add('avatar-icon');
                    userIconElement.src = comment.icon;
                    const userNameElement = document.createElement('h3');
                    userNameElement.classList.add('avatar-name');
                    userNameElement.textContent = comment.nickName;
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
                    parentElement.appendChild(newCommentElement);
                }
                saveComment(comments) {
                    localStorage.setItem('comments', JSON.stringify(comments));
                }
            };
            exports_2("Comment", Comment);
        }
    };
});
System.register("script/classes/Answer", [], function (exports_3, context_3) {
    "use strict";
    var Answer;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            Answer = class Answer {
                newAnswer;
                answers = [];
                constructor(text, user, parentElement) {
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
                    };
                    this.addToDOM(this.newAnswer, parentElement);
                    this.answers.push(this.newAnswer);
                }
                addToDOM(answer, parentElement) {
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
            };
            exports_3("Answer", Answer);
        }
    };
});
System.register("script/classes/User", [], function (exports_4, context_4) {
    "use strict";
    var User;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
            User = class User {
                newUser;
                users = [];
                constructor(icon, nickname) {
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
            };
            exports_4("User", User);
        }
    };
});
System.register("script/index", ["script/classes/Comment", "script/classes/User"], function (exports_5, context_5) {
    "use strict";
    var Comment_1, User_1, submitButton;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (Comment_1_1) {
                Comment_1 = Comment_1_1;
            },
            function (User_1_1) {
                User_1 = User_1_1;
            }
        ],
        execute: function () {
            submitButton = document.querySelector('.submit-button');
            submitButton.addEventListener('click', () => {
                const text = document.querySelector('.textarea');
                const newUser = new User_1.User('./imgs/avatar.svg', 'Your Name');
                const comment = new Comment_1.Comment(text.value, newUser);
                console.log(comment);
                text.value = '';
            });
        }
    };
});
System.register("script/classes/Config", [], function (exports_6, context_6) {
    "use strict";
    var Config;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [],
        execute: function () {
            Config = class Config {
                constructor() {
                }
            };
            exports_6("Config", Config);
        }
    };
});
System.register("script/classes/Event", [], function (exports_7, context_7) {
    "use strict";
    var Event;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [],
        execute: function () {
            Event = class Event {
                constructor() {
                }
            };
            exports_7("Event", Event);
        }
    };
});
System.register("script/classes/FilterEngine", [], function (exports_8, context_8) {
    "use strict";
    var FilterEngine;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [],
        execute: function () {
            FilterEngine = class FilterEngine {
                constructor() {
                }
            };
            exports_8("FilterEngine", FilterEngine);
        }
    };
});
System.register("script/classes/Main", [], function (exports_9, context_9) {
    "use strict";
    var Main;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [],
        execute: function () {
            Main = class Main {
                constructor() {
                }
            };
            exports_9("Main", Main);
        }
    };
});
System.register("script/classes/SortEngine", [], function (exports_10, context_10) {
    "use strict";
    var SortEngine;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [],
        execute: function () {
            SortEngine = class SortEngine {
                constructor() {
                }
            };
            exports_10("SortEngine", SortEngine);
        }
    };
});
