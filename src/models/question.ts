export default interface Question {
    id: number;
    quiz_id: string;
    question: string;
    image_url: string;
    option_1: string;
    option_2: string;
    option_3: string;
    option_4: string;
    answer: string;
}