import * as ActionTypes from "../ActionTypes";

const initState = {}

const scheduleReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.SCHEDULE_FETCH_SUCCESS:
			var schedule = action.schedule;
			return { ...state, schedule, errmess: null };
		default:
			return state;
	}
};

export default scheduleReducer;