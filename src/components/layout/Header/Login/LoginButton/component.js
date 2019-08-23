import React from 'react';
import { LOGIN_PAGE, } from 'constants/routes';

import history from 'src/history';
import Button from '@material-ui/core/Button';


const LoginButton = () => {
  return (
    <div>
      <Button onClick={() => {
        history.push(LOGIN_PAGE);
      }} color="inherit">Login</Button>
    </div>
  );
};

export default LoginButton;
