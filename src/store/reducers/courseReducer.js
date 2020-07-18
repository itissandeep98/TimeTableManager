import * as ActionTypes from "../ActionTypes";

const initState = {isLoading:true}

const courseReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.DATA_FETCH_LOADING:
			return {...state, isLoading:true}
		case ActionTypes.COURSE_FETCH_SUCCESS:
			var courses = action.courses;
			return { ...state, courses, errmess: null, isLoading: false };
		case ActionTypes.DATA_FETCH_FAILED:
			return { ...state, errmess: action.errmess, isLoading: false};
		default:
			return state;
	}
};

export default courseReducer;