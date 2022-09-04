import React, { useEffect } from 'react';
import PageLoader from 'components/PageLoader';

function Logout() {
  useEffect(() => {
    // logout
  }, []);

  return <PageLoader title="Выходим..." />;
}

export default Logout;
