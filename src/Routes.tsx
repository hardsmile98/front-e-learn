import React from 'react';
import useAuth from 'hooks/useAuth';
import Auth from 'pages/Auth';
import Job from 'pages/Job';
import Main from 'pages/Main';
import Profile from 'pages/Profile';
import AddJob from 'pages/AddJob';
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './components/Layout';

function Routes() {
  const { isAuth } = useAuth();

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" element={<Main />} />
          <Route path="/job/:id" element={<Job />} />

          {isAuth ? (
            <>
              <Route path="/profile" element={<Profile />} />
              <Route path="/add" element={<AddJob />} />
            </>
          ) : (
            <Route path="/auth" element={<Auth />} />
          )}

          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Routes;
