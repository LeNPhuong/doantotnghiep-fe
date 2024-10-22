import React from 'react';
import { Footer, Header } from '../components';
import { Outlet } from 'react-router-dom';

const Client: React.FC<{}> = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Client;
