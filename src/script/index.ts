import  {Comment}  from "./classes/Comment";
import  {Answer}  from "./classes/Answer";
import  {User} from "./classes/User";




const submitButton = document.querySelector('.submit-button') as HTMLButtonElement;
submitButton.addEventListener('click', () => {
    const text = document.querySelector('.textarea') as HTMLTextAreaElement;
    const newUser: User = new User('./imgs/avatar.svg', 'Your Name');
    const comment: Comment = new Comment(text.value, newUser);
   
    console.log(comment);
    text.value = '';
});