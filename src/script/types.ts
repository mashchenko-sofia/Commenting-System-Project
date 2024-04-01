export interface CommentType {
    icon: string;
    nickName: string;
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
    nickName: string;
    day: number;
    month: number;
    hours: number;
    minutes: number;
    text: string;
    isFavorite: boolean;
    rating: number;
}
export interface UserType {
    icon: string;
    nickName: string;
    id: number;
}