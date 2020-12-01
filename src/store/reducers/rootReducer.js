import { combineReducers } from 'redux';
import scheduleReducer from './scheduleReducer'
import { createForms } from "react-redux-form";
import { InitialFeedback } from '../Feedback';
import infoReducer from './infoReducer';
import extraLinks from './extraLinks';

const rootReducer = combineReducers({
	schedule: scheduleReducer,
	info: infoReducer,
	extra: extraLinks,
	...createForms({
		feedback: InitialFeedback
	})
})

export default rootReducer