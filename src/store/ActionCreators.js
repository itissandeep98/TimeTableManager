import axios from "axios";
import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";


export const courseFetchAction = () => {
	return async (dispatch) => {
		return await axios.get(baseUrl+'/courses')
			.then(response => {
				if (response.data.success)
					dispatch({ type: ActionTypes.COURSE_FETCH_SUCCESS, courses: response.data.courses })
				else
					dispatch({ type: ActionTypes.COURSE_FETCH_FAILED, errmess: "Courses Can't be Fetched" })
			})
			.catch(error => {
				dispatch({ type: ActionTypes.COURSE_FETCH_FAILED, errmess: "Error in connection with Server" })
			})
	}
}