import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PageLoader from 'components/PageLoader';
import { publicApi, useLogoutMutation } from 'api/publicApi';
import { changeIsAuth } from 'store/slices/auth';

function Logout() {
  const dispatch = useDispatch();
  const [onLogout, { isSuccess }] = useLogoutMutation();

  useEffect(() => {
    onLogout({});
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(changeIsAuth(false));
      dispatch(publicApi.util.resetApiState());
    }
  }, [isSuccess]);

  return <PageLoader title="Выходим..." />;
}

export default Logout;
