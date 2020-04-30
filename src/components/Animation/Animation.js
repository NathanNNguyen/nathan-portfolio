import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(to left, #000000, #EB5757)',
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(0),
  },
}));

export default function SimpleGrow(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  return (
    <div className={classes.root}>
      <Grow
        in={checked}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked ? { timeout: 1500 } : {})}
      >
        <Paper elevation={4} className={classes.paper}>
          {props.children}
        </Paper>
      </Grow>
    </div >
  );
}