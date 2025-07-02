import React from 'react';
import { Helmet } from 'react-helmet-async';

const DrawPage = () => {
  return (
    <>
      <Helmet>
        <title>낙서하기</title>
      </Helmet>
      <h1>그림</h1>
    </>
  );
};

export default React.memo(DrawPage);
