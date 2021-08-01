export const SAVE_ANSWERS = 'SAVE_ANSWERS';

export function saveAnswers(answers) {
    return {
        type: SAVE_ANSWERS,
        answers,
    };
}
