import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import scheduleReducer from './scheduleReducer'
import { createForms } from "react-redux-form";
import { InitialFeedback } from '../Feedback';

const rootReducer = combineReducers({
	courses: courseReducer,
	schedule: scheduleReducer,
	...createForms({
		feedback: InitialFeedback
	})
})

export default rootReducer