import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from 'app/hooks';

const LandingPage = () => {
  const history = useHistory();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (history) {
      history.push(isAuthenticated() ? '/home' : '/login');
    }
    // eslint-disable-next-line
  }, []);

  return <div>...</div>;
};

export default LandingPage;
