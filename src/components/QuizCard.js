import React from 'react';

// MUI
import Paper from '@material-ui/core/Paper';

export default function QuizCard({ activeQuestion }) {
  return <Paper>{activeQuestion.question}</Paper>;
}
