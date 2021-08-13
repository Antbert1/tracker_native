export const SAVE_ANSWERS = 'SAVE_ANSWERS';
export const SET_CURRENT_ANSWER_STATE = 'SET_CURRENT_ANSWER_STATE';
export const SHOW_BUTTON = 'SHOW_BUTTON';
export const PERIOD_ENABLED = 'PERIOD_ENABLED';

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

export function setShowButton(showButton) {
    return {
        type: SHOW_BUTTON,
        showButton,
    };
}

export function setPeriodEnabled(periodEnabled) {
    return {
        type: PERIOD_ENABLED,
        periodEnabled,
    };
}

