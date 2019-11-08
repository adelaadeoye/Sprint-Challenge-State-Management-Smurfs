import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect, useDispatch } from "react-redux";

import { addSmurf } from "../actions";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red"
      },
      "&:hover fieldset": {
        borderColor: "yellow"
      },
      "&.Mui-focused fieldset": {
        borderColor: "green"
      }
    }
  }
})(TextField);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));


const AddSmurf = props => {
  const classes = useStyles();
  const [inputs, setInputs] = useState({ name: "", age: "", height: "" });
  const dispatch=useDispatch();
  const onSubmit = event => {
    event.preventDefault();
    setInputs({ name: "", age: "", height: "" });
    dispatch(addSmurf(inputs))
  console.log(inputs)
};


  const valueChange = event => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  return (
    <form className={classes.root} noValidate onSubmit={onSubmit} >
      <CssTextField
        className={classes.margin}
        id="custom-css-standard-input"
        label="Name"
        name="name"
        value={inputs.name}
        onChange={valueChange}
      />
      <CssTextField
        className={classes.margin}
        id="custom-css-standard-input"
        label="Age"
        value=""
        name="age"
        type="number"
        value={inputs.age}
        onChange={valueChange}
      />
      <CssTextField
        className={classes.margin}
        id="custom-css-standard-input"
        label="Height"
        name="height"
        value={inputs.height}
        onChange={valueChange}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        type={onSubmit}
      >
        Add Smurf
      </Button>
    </form>
  );
};
const mapStateToProps = state => {
  return {
    // AddSmurf: state.AddSmurf,
    // isFetching: state.isFetching,
    // error: state.error
  };
};


export default connect(
  mapStateToProps,
  {addSmurf}
)(AddSmurf);
