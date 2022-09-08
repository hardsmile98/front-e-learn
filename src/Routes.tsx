import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from 'react-router-dom';
import styled from '@emotion/styled';
import { COLORS } from 'mytheme/theme';
import Layout from 'components/Layout';
import Logout from 'components/Logout';
import PageLoader from 'components/PageLoader';
import { useProfileInfoQuery } from 'api/publicApi';
import { changeIsAuth } from 'store/slices/auth';

const Container = styled.div`
  background-color: ${COLORS.BG};
  height: 100%;
  color: ${COLORS.WHITE};
`;

const Auth = React.lazy(() => import('pages/Auth'));
const Home = React.lazy(() => import('pages/Home'));
const Learn = React.lazy(() => import('pages/Learn'));

function Main() {
  return (
    <Layout>
      <Switch>
        <Route path="/learn/:id" element={<Learn />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Switch>
    </Layout>
  );
}

function Routes() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state:RootState) => state.auth);

  const { data = {}, error, isLoading } = useProfileInfoQuery({});
  const { success: isSuccessAuth } = data;

  useEffect(() => {
    if (error) {
      dispatch(changeIsAuth(false));
    }
  }, [error]);

  useEffect(() => {
    if (isSuccessAuth) {
      dispatch(changeIsAuth(true));
    }
  }, [isSuccessAuth]);

  if (isLoading) {
    return <PageLoader title="Загрузка..." />;
  }

  return (
    <Suspense fallback={<PageLoader title="Загрузка..." />}>
      <Container>
        <BrowserRouter>
          <Switch>
            {isAuth ? (
              <>
                <Route path="/logout" element={<Logout />} />
                <Route path="/*" element={<Main />} />
              </>
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
