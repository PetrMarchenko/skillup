import React from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import { useStyles } from './useStyles';
import Login from './Login';
import history from 'src/history';
import { HOME_PAGE, USERS_PAGE, SKILLS_PAGE } from 'constants/routes';



function Header() {

  const classes = useStyles();

  return (
    <header className={classes.footer}>
      <CssBaseline/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"/>
      <Typography variant="h6" align="center" gutterBottom>
        <Link
          component="button"
          variant="body2"
          onClick={() => {
            history.push(HOME_PAGE);
          }}
        >
          Header
        </Link>

          <Link
              component="button"
              variant="body2"
              onClick={() => {
                  history.push(USERS_PAGE);
              }}
          >
              Users
          </Link>

          <Link
              component="button"
              variant="body2"
              onClick={() => {
                  history.push(SKILLS_PAGE);
              }}
          >
              Skills
          </Link>

        <Login/>
      </Typography>
    </header>
  );
}

export default Header;