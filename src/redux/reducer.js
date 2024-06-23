import { ReduxConstant } from "./constatnts";

const initialState = {
    personal_data: {
        data: []
    },
    educational_data: {
        data: []
    },
    previous_skills_data: {
        data: []
    },
}

export const getPersonalDetails = (state = initialState, action) => {
    switch (action.type) {
        case ReduxConstant.ADD_PERSONAL_DETAILS:
            return Object.assign({}, state, {
                ...state,
                personal_data: {
                    data: action.data,
                },
            });
        case ReduxConstant.ADD_EDUCATIONAL_DETAILS:
            return Object.assign({}, state, {
                ...state,
                educational_data: {
                    data: action.data,
                },
            });
        case ReduxConstant.ADD_PREVIOUS_SKILLS:
            return Object.assign({}, state, {
                ...state,
                previous_skills_data: {
                    data: action.data,
                },
            });
        default: return state
    }
}