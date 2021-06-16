import { combineReducers } from 'redux';
import scheduleReducer from './scheduleReducer';
import infoReducer from './infoReducer';
import extraLinks from './extraLinks';

const rootReducer = combineReducers({
	schedule: scheduleReducer,
	info: infoReducer,
	extra: extraLinks,
});

export default rootReducer;
