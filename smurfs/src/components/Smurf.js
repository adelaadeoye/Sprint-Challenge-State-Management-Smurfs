import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width:200,
    margin:'5px auto'
  },
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
});
 const  Smurf=props=> {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
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
      </CardContent>
    </Card>
  );
}
export default Smurf;