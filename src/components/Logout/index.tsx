import React, { useEffect } from 'react';
import PageLoader from 'components/PageLoader';
import { useLogoutMutation } from 'api/publicApi';

function Logout() {
  const [onLogout] = useLogoutMutation();

  useEffect(() => {
    onLogout({});
  }, []);

  return <PageLoader title="Выходим..." />;
}

export default Logout;
