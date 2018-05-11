import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

import NavReducer from '../actions/NavReducer';
import AuthReducer from '../actions/AuthReducer';

const AppReducer = combineReducers({
    nav: NavReducer,
    auth: AuthReducer
});

export default AppReducer;