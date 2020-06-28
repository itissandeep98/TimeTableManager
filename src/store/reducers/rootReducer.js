import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import scheduleReducer from './scheduleReducer'

const rootReducer = combineReducers({
	courses: courseReducer,
	schedule: scheduleReducer,
})

export default rootReducer