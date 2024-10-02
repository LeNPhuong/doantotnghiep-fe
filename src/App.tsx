import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import Home from './pages/home/Home';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
