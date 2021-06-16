import * as ActionTypes from '../ActionTypes';

const initState = { isLoading: false };

const scheduleReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.SCHEDULE_FETCH_LOADING:
			return { ...state, isLoading: true };
		case ActionTypes.SCHEDULE_FETCH_SUCCESS:
			var schedule = action.schedule;
			return { ...state, schedule, errmess: null };
		case ActionTypes.SCHEDULE_FETCH_FAILED:
			return { ...state, errmess: action.errmess, isLoading: false };
		default:
			return state;
	}
};

export default scheduleReducer;
