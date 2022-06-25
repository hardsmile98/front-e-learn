import Auth from 'pages/Auth';
import Job from 'pages/Job';
import Main from 'pages/Main';
import Profile from 'pages/Profile';
import React from 'react';
import {
  BrowserRouter,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import Layout from './components/Layout';

function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/job/:id" element={<Job />} />
          <Route path="/auth" element={<Auth />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Routes;
