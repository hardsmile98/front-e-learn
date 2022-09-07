import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PageLoader from 'components/PageLoader';
import { useLogoutMutation } from 'api/publicApi';
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
    }
  }, [isSuccess]);

  return <PageLoader title="Выходим..." />;
}

export default Logout;
