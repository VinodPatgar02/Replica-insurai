// src/pages/index.tsx
import React from 'react';
import Head from '../components/Head';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Head />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
