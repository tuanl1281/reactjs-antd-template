import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from 'app/hooks';

const LandingPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (navigate) {
      navigate(isAuthenticated() ? '/home' : '/login');
    }
    // eslint-disable-next-line
  }, []);

  return <div>...</div>;
};

export default LandingPage;
