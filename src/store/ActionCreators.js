import * as ActionTypes from "./ActionTypes";
import fire from '../config/fire'


// export const dataFetchAction = () => { // not using this function, shifted to firebase
// 	const url = process.env.NODE_ENV === 'production' ?jsonUrl:localJsonUrl
// 	return async (dispatch) => {
// 		dispatch({type:ActionTypes.DATA_FETCH_LOADING})
// 		return await axios.get(url)
// 			.then(response => {
// 				if (!response.data.errmess){
// 					dispatch({ type: ActionTypes.SCHEDULE_FETCH_SUCCESS, schedule: response.data.schedule })
					
// 					console.log(response.data.schedule);

// 				}
// 				else{
// 					dispatch({ type: ActionTypes.DATA_FETCH_FAILED, errmess: "Error in fetched data. Try reloading" })
// 				}
// 			})
// 			.catch(error => {
// 				dispatch({ type: ActionTypes.DATA_FETCH_FAILED, errmess: "Error in connection with Server. Try reloading" })
// 			})
// 	}
// }

export const dataFetchInfoFirebase=()=>{
	return async (dispatch)=>{
		dispatch({ type: ActionTypes.INFO_FETCH_LOADING })
		return fire.database().ref('/info').on('value',(data)=>{
			dispatch({ type: ActionTypes.INFO_FETCH_SUCCESS, info: data.val() })
		})
	}
}

export const dataFetchScheduleFirebase = () => {
	return async (dispatch) => {
		dispatch({ type: ActionTypes.SCHEDULE_FETCH_LOADING })
		return fire.database().ref('/schedule').on('value', (data) => {
			console.log(data.val());
			dispatch({ type: ActionTypes.SCHEDULE_FETCH_SUCCESS, schedule: data.val() })
		})
	}
}