import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import {
  Cart,
  Categories,
  Details,
  Home,
  Login,
  PayCart,
  Register,
  User,
} from './pages';

import Pay from './pages/pay/Pay';

const App: React.FC = () => {
  return (
    <div className="bg-[#F7F8FA]">
      <Header />

      {/* <MainLayout> */}
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/trang-chu" element={<Home />} />
        <Route path="/danh-muc/:category" element={<Categories />} />
        <Route path="/san-pham/:id" element={<Details />} />
        <Route path="/gio-hang" element={<Pay />}>
          <Route path="chi-tiet" element={<Cart />} />
          <Route index element={<Cart />} />
          <Route path="thanh-toan" element={<PayCart />} />
        </Route>
        <Route path="/nguoi-dung" element={<User />}>
          <Route path="dang-nhap" element={<Login />} />
          <Route path="dang-ky" element={<Register />} />
        </Route>
      </Routes>
      {/* </MainLayout> */}

      <Footer />
    </div>
  );
};

export default App;
