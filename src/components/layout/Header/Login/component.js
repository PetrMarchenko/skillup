import React from 'react';
import * as PropTypes from 'prop-types';
import LoginButton from './LoginButton/component';
import LoginMenu from './LoginMenu';


const Login = props => {
  const {
    token,
  } = props;

  if (token.length > 0) {
    return <LoginMenu/>;
  }

  return <LoginButton/>;
};

Login.propTypes = {
  token: PropTypes.string,
};

export default Login;
