/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import DefaultLayout from '../../layout/DefaultLayout';

const isAuth = true;
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() =>
        isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />
      }
    />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.instanceOf(Element).isRequired,
};

export default PrivateRoute;
