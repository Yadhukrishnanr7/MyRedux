import { ReduxConstant } from "./constatnts";

export const AddPersonalDetails = (data) => ({
    type: ReduxConstant.ADD_PERSONAL_DETAILS,
    data: data
})

export const AddEducationDetails = (data) => ({
    type: ReduxConstant.ADD_EDUCATIONAL_DETAILS,
    data: data
})

export const AddPreviousSkills = (data) => ({
    type: ReduxConstant.ADD_PREVIOUS_SKILLS,
    data: data
})