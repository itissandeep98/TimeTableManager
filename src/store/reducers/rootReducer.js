import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import scheduleReducer from './scheduleReducer'
import { createForms } from "react-redux-form";
import { InitialFeedback } from '../Feedback';
import infoReducer from './infoReducer';

const rootReducer = combineReducers({
	courses: courseReducer,
	schedule: scheduleReducer,
	info: infoReducer,
	...createForms({
		feedback: InitialFeedback
	})
})

export default rootReducer