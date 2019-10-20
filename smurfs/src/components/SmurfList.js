import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

import { fetchSmurfs } from '../actions';

import Smurf from './Smurf';

const SmurfList = props => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  if (props.isFetching) {
    // usually a spinner (react-loader-spinner)
    return <Loader
    type="Circles"
    color="#00BFFF"
    height={100}
    width={100}
    timeout={3000} //3 secs

 />;
  }

  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.SmurfList.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    SmurfList: state.SmurfList,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(SmurfList);
