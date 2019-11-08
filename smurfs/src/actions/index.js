import axios from 'axios';

// action types
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const EDIT_SMURF = 'EDIT_SMURF';

// action creator
export const fetchSmurfs = () => dispatch => {
  // action objects
  dispatch({ type: START_FETCHING });
  // do some async action and dispatch an error or success action
  axios
    .get(
      'http://localhost:3333/smurfs'
    )
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data })})
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

export const addSmurf = smurf => dispatch => {
  axios.post('http://localhost:3333/smurfs',smurf)
      .then(resp => {
          console.log(resp)
          dispatch({type: FETCH_SUCCESS, payload: resp.data})
      })
      .catch(err => {
          console.error(err)
          dispatch({type: FETCH_FAILURE, payload: err.response})
      })
}

export const deleteSmurf= id=>dispatch=>{
  axios.delete(`http://localhost:3333/smurfs/${id}`)
  .then(resp => {
      console.log(resp)
      dispatch({type: FETCH_SUCCESS, payload: resp.data})
  })
  .catch(err => {
      console.error(err)
      dispatch({type: FETCH_FAILURE, payload: err.response})
  })
}
export const editSmurf= smurf=>dispatch=>{
  dispatch({ type: START_FETCHING });
  console.log(smurf.id)
  axios.put(`http://localhost:3333/smurfs/${smurf}`)
  .then(resp => {
      console.log(resp)
      dispatch({type: FETCH_SUCCESS, payload: resp.data})
  })
  .catch(err => {
      console.error(err)
      dispatch({type: FETCH_FAILURE, payload: err.response})
  })
}