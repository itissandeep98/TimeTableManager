import axios from "axios";
import * as ActionTypes from "./ActionTypes";
import { jsonUrl,origUrl } from "../shared/baseUrl";


export const dataFetchAction = () => {
	return async (dispatch) => {
		dispatch({type:ActionTypes.DATA_FETCH_LOADING})
		return await axios.get(jsonUrl)
			.then(response => {
				if (!response.data.errmess){
					dispatch({ type: ActionTypes.COURSE_FETCH_SUCCESS, courses: response.data.courses })
					dispatch({ type: ActionTypes.SCHEDULE_FETCH_SUCCESS, schedule: response.data.schedule })
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
export const sendChat=(data)=>{
	return async(dispatch)=>{
		return await axios.get(origUrl+"sendmail",{params:data})
		.then(response=>{
			// console.log(response.data);
		})
	}
}
