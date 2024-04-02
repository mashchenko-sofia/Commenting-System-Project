"use strict";

// Object.defineProperty(exports, "__esModule", { value: true });
// const Comment_js_1 = require("./classes/Comment.js");
// const User_js_1 = require("./classes/User.js");
// const submitButton = document.querySelector('.submit-button');
// submitButton.addEventListener('click', () => {
//     const text = document.querySelector('.template__input');
//     const newUser = new User_js_1.User('../imgs/avatar.svg', 'Your Name');
//     const comment = new Comment_js_1.Comment(text.value, newUser);
//     console.log(comment);
//     text.value = '';
// });

// Object.defineProperty(exports, "__esModule", { value: true });
import { Comment } from "./classes/Comment.js";
import { User } from "./classes/User.js";
const submitButton = document.querySelector('.template__submit-button');
submitButton.addEventListener('click', () => {
    const text = document.querySelector('.template__input');
    const newUser = new User('../imgs/avatar.svg', 'Your Name');
    const comment = new Comment(text.value, newUser);
    console.log(comment);
    text.value = '';
});
