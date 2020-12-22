import { combineReducers } from 'redux';

import auth from './Auth';
import group from './Group';

export default combineReducers({auth, group});