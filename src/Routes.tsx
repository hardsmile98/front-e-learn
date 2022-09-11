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
import BonusModal from 'components/BonusModal';
import {
  useProfileMeQuery,
  useProfileInfoQuery,
  useAccrueBonusMutation,
} from 'api/publicApi';
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
  const { data = {}, isLoading } = useProfileInfoQuery({});
  const { isFirstEntry } = data;

  const [accureBonus, {
    isSuccess: isSuccessAccureBonus, data: dataAccure = {},
  }] = useAccrueBonusMutation();
  const { coins } = dataAccure;

  useEffect(() => {
    if (isFirstEntry) {
      accureBonus({});
    }
  }, [isFirstEntry]);

  if (isLoading) {
    return <PageLoader title="Загрузка..." />;
  }

  return (
    <>
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

      {isSuccessAccureBonus && (
        <BonusModal coins={coins} />
      )}
    </>
  );
}

function Routes() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state:RootState) => state.auth);

  const { data = {}, error, isLoading } = useProfileMeQuery({});
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
