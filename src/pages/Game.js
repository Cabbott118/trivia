import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Components

// MUI
import Button from '@material-ui/core/Button';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { nextQuestion } from '../redux/actions/dataActions';

const useStyles = makeStyles((theme) => ({
  button: theme.spreadThis.button,
}));

export default function Game({ data }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { question, triviaData } = data;
  //   const [questionBank, setQuestionBank] = useState(results);

  console.log('Question:', question);

  const handleClick = () => {
    dispatch(nextQuestion(triviaData));
  };

  return (
    <>
      <Button
        variant='contained'
        color='primary'
        onClick={handleClick}
        className={classes.button}
      >
        Next
      </Button>
    </>
  );
}
