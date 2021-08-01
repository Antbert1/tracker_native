import { combineReducers } from 'redux';
import { SAVE_ANSWERS } from './indexActions';
const dataState = {
    answers: [
        { name: 1, active: false },
        { name: 2, active: false },
        { name: 3, active: false },
        { name: 4, active: false },
        { name: 5, active: false },
    ],
};

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case SAVE_ANSWERS:
            state = Object.assign({}, state, { answers: action.answers });
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    dataReducer,
});

export default rootReducer;
