import { combineReducers } from 'redux';
import { SAVE_ANSWERS, SET_CURRENT_ANSWER_STATE } from './indexActions';
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
        { name: 'Cramps', subtext: defaultText, value: null },
        { name: 'Boobs', subtext: '1 for normal, 5 for huge', value: null },
        { name: 'Sex Drive', subtext: '1 for bad, 5 for good', value: null },
        { name: 'Sweating', subtext: defaultText, value: null },
        { name: 'Mood', subtext: defaultText, value: null },
        { name: 'Anxiety', subtext: defaultText, value: null },
        { name: 'Appetite', subtext: '1 for bad, 5 for good', value: null },
        { name: 'Headache', subtext: defaultText, value: null },
        { name: 'Acne', subtext: defaultText, value: null },
        { name: 'Temperature', subtext: defaultText, value: null },
        { name: 'Sleep', subtext: defaultText, value: null },
        { name: 'Nightmares', subtext: defaultText, value: null },
        { name: 'Ovulation Guess', subtext: '1 for definitely not, 5 for definitely', value: null },
    ],
};

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case SAVE_ANSWERS:
            state = Object.assign({}, state, { answers: action.answers });
            return state;
        case SET_CURRENT_ANSWER_STATE:
            state = Object.assign({}, state, { currentAnswerState: action.currentAnswerState });
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    dataReducer,
});

export default rootReducer;
