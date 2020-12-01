import * as ActionTypes from "../ActionTypes";

const initState = { isLoading: true, links:{} }

const extraLinks = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.EXTRA_LINKS_FETCH_LOADING:
			return { ...state, isLoading: true }
		case ActionTypes.EXTRA_LINKS_FETCH_SUCCESS:
			var links = action.links;
			return { ...state, links:links, errmess: null, isLoading: false };
		case ActionTypes.EXTRA_LINKS_FETCH_FAILED:
			return { ...state, errmess: action.errmess, isLoading: false };
		default:
			return state;
	}
};

export default extraLinks;