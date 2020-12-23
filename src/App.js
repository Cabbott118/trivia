import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Game from './pages/Game';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadTrivia } from './redux/actions/dataActions';

// MUI
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Utility
import themeFile from './util/theme';
const theme = createMuiTheme(themeFile);

export default function App() {
  const categories = [
    { id: '9', title: 'General Knowledge' },
    { id: '17', title: 'Science & Nature' },
    { id: '26', title: 'Celebrities' },
    { id: '21', title: 'Sports' },
    { id: '27', title: 'Animals' },
    { id: '20', title: 'Mythogology' },
  ];

  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const input = e.currentTarget.value;
    dispatch(loadTrivia(input));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        {data.categorySelected ? (
          <Game data={data} />
        ) : (
          <>
            {categories.map((cat, index) => {
              return (
                <Button
                  key={index}
                  value={cat.id}
                  onClick={handleClick}
                  variant='contained'
                  color='primary'
                  style={{ textTransform: 'none', margin: '10px' }}
                >
                  {cat.title}
                </Button>
              );
            })}
          </>
        )}
        {/* <Router>
          <Switch>
            <Route
              path='/game'
              render={(props) => <Game {...props} data={data} />}
            />
          </Switch>
        </Router> */}
      </div>
    </ThemeProvider>
  );
}
