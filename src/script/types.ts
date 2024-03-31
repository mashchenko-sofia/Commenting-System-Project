export interface CommentType {
    icon: string;
    user: string;
    day: number;
    month: number;
    hours: number;
    minutes: number;
    text: string;
    isFavorite: boolean;
    rating: number;
    answers: AnswerType[];
}
export interface AnswerType {
    icon: string;
    user: string;
    day: number;
    month: number;
    hours: number;
    minutes: number;
    text: string;
    isFavorite: boolean;
    rating: number;
}
// interface UserType {
//     getIcon(): string;
//     getNickname(): string;
// }