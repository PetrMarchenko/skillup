import React from 'react';
import LoginPage from 'components/screan/LoginPage';
import * as PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import { rolePermissions } from 'constants/auth/permissions';


const RoutAuth = props => {
  const {
    userRole,
    path,
    component,
    redirect
  } = props;

  const check = () => {

    const role = userRole;
    const permissions = rolePermissions;
    const redirectPage = (redirect) ? redirect : LoginPage;

    const index = permissions.findIndex(element => element.role === role);

    if (index < 0) {
      return redirectPage;
    }

    const permission = permissions[index];


    const can = permission.page.findIndex(element => element === path);
    if (can >= 0) {
      return component;
    }

    return redirectPage;
  };


  return (
    <Route
      path = {path}
      component={check()}
    />
  );
};

RoutAuth.propTypes = {
  userRole: PropTypes.string
};

export default RoutAuth;
