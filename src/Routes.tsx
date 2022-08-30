import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from 'react-router-dom';
import Loader from 'components/Loader';
import styled from '@emotion/styled';
import { COLORS } from 'mytheme/theme';
import Layout from 'components/Layout';

const Container = styled.div`
  background-color: ${COLORS.BG};
  height: 100%;
  color: ${COLORS.WHITE};
`;

const Auth = React.lazy(() => import('pages/Auth'));
const Profile = React.lazy(() => import('pages/Profile'));

function Main() {
  return (
    <Layout>
      <Switch>
        <Route path="/" element={<Profile />} />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Switch>
    </Layout>
  );
}

function Routes() {
  const isAuth = true;

  return (
    <Suspense fallback={<Loader />}>
      <Container>
        <BrowserRouter>
          <Switch>
            {isAuth ? (
              <Route path="/*" element={<Main />} />
            ) : (
              <Route path="/" element={<Auth />} />
            )}

            <Route
              path="*"
              element={<Navigate to="/" />}
            />
          </Switch>
        </BrowserRouter>
      </Container>
    </Suspense>
  );
}

export default Routes;
