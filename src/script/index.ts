import  {Comment}  from "./classes/Comment.js";
import  {Answer}  from "./classes/Answer.js";
import  {User} from "./classes/User.js";




const submitButton = document.querySelector('.submit-button') as HTMLButtonElement;
submitButton.addEventListener('click', () => {
    const text = document.querySelector('.template__input') as HTMLTextAreaElement;
    const newUser: User = new User('../imgs/avatar.svg', 'Your Name');
    const comment: Comment = new Comment(text.value, newUser);
   
    console.log(comment);
    text.value = '';
});