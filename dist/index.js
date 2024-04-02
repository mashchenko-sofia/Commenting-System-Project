"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Comment_1 = require("./classes/Comment");
const User_1 = require("./classes/User");
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', () => {
    const text = document.querySelector('.textarea');
    const newUser = new User_1.User('./imgs/avatar.svg', 'Your Name');
    const comment = new Comment_1.Comment(text.value, newUser);
    console.log(comment);
    text.value = '';
});
