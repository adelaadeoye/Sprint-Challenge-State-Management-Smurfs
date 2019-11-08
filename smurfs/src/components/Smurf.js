import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme =>({
  card: {
    display:"flex",
    
    width:200,
    margin:'5px auto'
  },
  button: {
    display:"block",
    margin: theme.spacing(0.5)},
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));
 const  Smurf=props=> {
  const classes = useStyles();

  return (
    <div className="cards">
    <Card className={classes.card}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
        {props.smurf.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
       Age: {props.smurf.age}

        </Typography>
        <Typography variant="body2" component="p">
       height: {props.smurf.height}

        </Typography>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        
      >
        Edit
      </Button><Button
        variant="contained"
        color="secondary"
        className={classes.button}
        
      >
        
        Delete
      </Button>
      </CardContent>
    </Card>
    </div>
  );
}
export default Smurf;