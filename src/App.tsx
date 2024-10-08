import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import MainLayout from './layout/MainLayout';
import {
  Cart,
  Categories,
  Details,
  Home,
  Login,
  Register,
  User,
} from './pages';

const App: React.FC = () => {
  return (
    <>
      <Header />

      <MainLayout>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/trang-chu" element={<Home />} />
          <Route path="/danh-muc/:category" element={<Categories />} />
          <Route path="/san-pham/:id" element={<Details />} />
          <Route path="/gio-hang" element={<Cart />} />
          <Route path="/nguoi-dung" element={<User />}>
            <Route path="dang-nhap" element={<Login />} />
            <Route path="dang-ky" element={<Register />} />
          </Route>
        </Routes>
      </MainLayout>

      <Footer />
    </>
  );
};

export default App;
