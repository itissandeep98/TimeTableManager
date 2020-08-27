import * as ActionTypes from "../ActionTypes";

const initState = { isLoading: true }

const infoReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.INFO_FETCH_LOADING:
			return { ...state, isLoading: true }
		case ActionTypes.INFO_FETCH_SUCCESS:
			var info = action.info;
			return { ...state, info, errmess: null, isLoading: false };
		case ActionTypes.INFO_FETCH_FAILED:
			return { ...state, errmess: action.errmess, isLoading: false };
		default:
			return state;
	}
};

export default infoReducer;