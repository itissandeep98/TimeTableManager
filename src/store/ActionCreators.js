import axios from "axios";
import * as ActionTypes from "./ActionTypes";
import { jsonUrl,localJsonUrl } from "../shared/baseUrl";


export const dataFetchAction = () => {
	const url = process.env.NODE_ENV === 'production' ?jsonUrl:localJsonUrl
	return async (dispatch) => {
		dispatch({type:ActionTypes.DATA_FETCH_LOADING})
		return await axios.get(url)
			.then(response => {
				if (!response.data.errmess){
					dispatch({ type: ActionTypes.SCHEDULE_FETCH_SUCCESS, schedule: response.data.schedule })
					dispatch({ type: ActionTypes.INFO_FETCH_SUCCESS, info: response.data.info })

				}
				else{
					dispatch({ type: ActionTypes.DATA_FETCH_FAILED, errmess: "Error in fetched data. Try reloading" })
				}
			})
			.catch(error => {
				dispatch({ type: ActionTypes.DATA_FETCH_FAILED, errmess: "Error in connection with Server. Try reloading" })
			})
	}
}
