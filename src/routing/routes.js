import React from 'react';
import { Switch } from 'react-router-dom';

import SkillsPage from 'components/screan/SkillsPage/component';
import UsersPage from 'components/screan/UsersPage/component';
import LoginPage from 'components/screan/LoginPage';
import AppPage from 'components/screan/AppPage/App';
import UserPage from 'components/screan/UserPage/component';

import { USERS_PAGE, USER_PAGE,  SKILLS_PAGE, HOME_PAGE, LOGIN_PAGE } from 'constants/routes';
import RoutAuth from 'components/commons/RouteAuth';

import Header from 'components/layout/Header/component';
import Footer from 'components/layout/Footer/component';

import { Route } from 'react-router-dom';

export default () => (
  <div  className="app" >
    <Header/>
    <Switch>
        <RoutAuth
          exact
          path={HOME_PAGE}
          component={AppPage}
        />
        <RoutAuth
            path={USER_PAGE}
            component={UserPage}
        />
        <RoutAuth
          exact
          path={USERS_PAGE}
          component={UsersPage}
        />
        <RoutAuth
          exact
          path={SKILLS_PAGE}
          component={SkillsPage}
        />
        <RoutAuth
          exact
          path={LOGIN_PAGE}
          component={LoginPage}
          redirect={AppPage}
        />
    </Switch>
    <Footer/>
  </div>
);