import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Result, Button } from 'antd';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={
          <Button
            type="primary"
            onClick={() => navigate('/')}
          >
            Back
          </Button>
        }
      />
    </React.Fragment>
  )
};

export default PageNotFound;