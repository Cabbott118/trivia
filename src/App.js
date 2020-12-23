import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadTrivia } from './redux/actions/dataActions';

// MUI
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Utility
import themeFile from './util/theme';

const theme = createMuiTheme(themeFile);
export default function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loadTrivia());
    console.log('Data: ', data);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Router>
          <h1>Home</h1>
        </Router>
      </div>
    </ThemeProvider>
  );
}
