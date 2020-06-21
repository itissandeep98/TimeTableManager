import * as ActionTypes from "../ActionTypes";

const initState = {}

const courseReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.COURSE_FETCH_SUCCESS:
			var courses = action.courses;
			return { ...state, courses, errmess: null };
		case ActionTypes.COURSE_FETCH_FAILED:
			return { ...state, errmess: action.errmess};
		default:
			return state;
	}
};

export default courseReducer;