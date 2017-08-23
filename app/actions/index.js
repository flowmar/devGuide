// helper to make AJAX request
import axios from 'axios';

import { FETCH_USER, FETCH_PROJECTS } from './types';

// Whenever the Action Creator is called, it will return a function
// Redux Thunk will see we returned a function, 
// and it will automatically call this function with dispatch as an argument.
// We then make our request and wait to get the response back from our API
// once we have our response (which is the User model) we will dispatch our action.
// The Dispatch Function sends the action to all the different reducers in the store,
// causing them to instantly recalculate the app state. 

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res.data}
    );
};

export const fetchProjects = () => async dispatch => {
    const res = await axios.get('/api/projects');
    dispatch({type: FETCH_PROJECTS, payload: res.data}
    );
};