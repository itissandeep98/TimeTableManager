import axios from "axios";
import * as ActionTypes from "./ActionTypes";
import { jsonUrl } from "../shared/baseUrl";


export const courseFetchAction = () => {
	return async (dispatch) => {
		return await axios.get(jsonUrl+"/courses")
			.then(response => {
				if (response.data)
					dispatch({ type: ActionTypes.COURSE_FETCH_SUCCESS, courses: response.data })
				else
					dispatch({ type: ActionTypes.COURSE_FETCH_FAILED, errmess: "Courses Can't be Fetched" })
			})
			.catch(error => {
				dispatch({ type: ActionTypes.COURSE_FETCH_FAILED, errmess: "Error in connection with Server" })
			})
	}
}

export const scheduleFetchAction = () => {
	return async (dispatch) => {
		return await axios.get(jsonUrl + "/schedule")
			.then(response => {
				if (!response.data.errmess)
					dispatch({ type: ActionTypes.SCHEDULE_FETCH_SUCCESS, schedule: response.data })
				else
					dispatch({ type: ActionTypes.SCHEDULE_FETCH_FAILED, errmess: "Schedule Can't be Fetched" })
			})
			.catch(error => {
				dispatch({ type: ActionTypes.SCHEDULE_FETCH_FAILED , errmess: "Error in connection with Server" })
			})
	}
}