import axios from 'axios';

export const START_SMURF_FETCH = 'START_SMURF_FETCH';
export const SUCCESS_SMURF_FETCH = 'SUCCESS_SMURF_FETCH';
export const FAILED_SMURF_FETCH = 'FAILED_SMURF_FETCH';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_ERROR_VALUE = 'ADD_ERROR_VALUE';


export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({type: START_SMURF_FETCH});
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                dispatch({type:SUCCESS_SMURF_FETCH, payload:res.data});
            })
            .catch(err => {
                dispatch({type:FAILED_SMURF_FETCH, err})
            })
    }
}


export const addSmurf = (updatedSmurfs) => {
    return dispatch => {
        axios
             .post('http://localhost:3333/smurfs', updatedSmurfs)
             .then((res) => {
                 dispatch({type: SUCCESS_SMURF_FETCH, payload: res.data})
             })
             .catch(err => {
                 dispatch({type: FAILED_SMURF_FETCH, err})
             })
    } 
}

export const setError = () => {
    return dispatch => {
        dispatch({ type: ADD_ERROR_VALUE  });
    }
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
