import axios from 'axios';

// action types
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

// action creator
export const fetchFacts = () => dispatch => {
  // action objects
  dispatch({ type: START_FETCHING });
  // do some async action and dispatch an error or success action
  axios
    .get(
      'http://localhost:3333/smurfs'
    )
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};
