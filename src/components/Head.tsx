// src/components/Head.tsx

import React from 'react';
import NextHead from 'next/head';

const Head: React.FC = () => {
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Insurai - Insurance Agency HTML Template</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" type="image/x-icon" href="/assets/img/logo/favicon.png" />
    </NextHead>
  );
};

export default Head;
