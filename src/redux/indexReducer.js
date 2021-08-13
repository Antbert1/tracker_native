import { combineReducers } from 'redux';
import { SAVE_ANSWERS, SET_CURRENT_ANSWER_STATE, SHOW_BUTTON, PERIOD_ENABLED } from './indexActions';
const defaultText = '1 for fine/nothing, 5 for worst';
const dataState = {
    answers: [
        { name: 1, active: false },
        { name: 2, active: false },
        { name: 3, active: false },
        { name: 4, active: false },
        { name: 5, active: false },
    ],
    currentAnswerState: [
        { "question": "Period", subtext: '1 for light, 5 for heavy', "value": -1 },
        { "question": "Cramps", subtext: defaultText, "value": null },
        { "question": "Boobs", subtext: '1 for normal, 5 for huge', "value": null },
        { "question": "Sex Drive", subtext: '1 for bad, 5 for good', "value": null },
        { "question": "Sweating", subtext: defaultText, "value": null },
        { "question": "Mood", subtext: defaultText, "value": null },
        { "question": "Anxiety", subtext: defaultText, "value": null },
        { "question": "Appetite", subtext: '1 for bad, 5 for good', "value": null },
        { "question": "Headache", subtext: defaultText, "value": null },
        { "question": "Acne", subtext: defaultText, "value": null },
        { "question": "Temperature", subtext: defaultText, "value": null },
        { "question": "Sleep", subtext: defaultText, "value": null },
        { "question": "Nightmares", subtext: defaultText, "value": null },
        { "question": "Ovulation Guess", subtext: '1 for definitely not, 5 for definitely', "value": null },
    ],
    showButton: false,
    periodEnabled: false,
};

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case SAVE_ANSWERS:
            state = Object.assign({}, state, { answers: action.answers });
            return state;
        case SET_CURRENT_ANSWER_STATE:
            state = Object.assign({}, state, { currentAnswerState: action.currentAnswerState });
            return state;
        case SHOW_BUTTON:
            state = Object.assign({}, state, { showButton: action.showButton });
            return state;
        case PERIOD_ENABLED:
            state = Object.assign({}, state, { periodEnabled: action.periodEnabled });
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    dataReducer,
});

export default rootReducer;
