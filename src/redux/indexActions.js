export const SAVE_ANSWERS = 'SAVE_ANSWERS';
export const SET_CURRENT_ANSWER_STATE = 'SET_CURRENT_ANSWER_STATE';

export function saveAnswers(answers) {
    return {
        type: SAVE_ANSWERS,
        answers,
    };
}

export function setCurrentAnswerState(currentAnswerState) {
    return {
        type: SET_CURRENT_ANSWER_STATE,
        currentAnswerState,
    };
}
