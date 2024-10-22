import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';

import {
  Cart,
  Categories,
  ChangePassword,
  ChangeSucces,
  Details,
  Forgot,
  ForgotPassword,
  Home,
  Login,
  Pay,
  PayCart,
  Register,
  Tracking,
  TrackingIF,
  TrackSearch,
  User,
} from './pages';

import Admin from './admin-khang/a_index';
import Sanpham from './admin-khang/quanly/sanpham';
import Users from './admin-khang/quanly/users';
import Danhmuc from './admin-khang/quanly/danhmuc';
import Client from './layout/Client';
import AdminDashBoard from './layout/AdminDashBoard';

const App: React.FC<{}> = () => {
  return (
    <div className="bg-[#F7F8FA]">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Client />}>
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
            <Route path="doi-mat-khau" element={<ChangePassword />} />

            <Route path="quen-mat-khau" element={<Forgot />}>
              <Route index element={<ForgotPassword />} />
              <Route path="doi-mat-khau" element={<ChangeSucces />} />
            </Route>
          </Route>

          <Route path="tra-cuu" element={<Tracking />}>
            <Route index element={<TrackSearch />} />
            <Route path=":key" element={<TrackingIF />} />
          </Route>
        </Route>
        {/* Admin dashboard */}
        <Route path="/dashboard" element={<AdminDashBoard />}>
          <Route path="main" element={<Admin />} />
          <Route path="sanpham" element={<Sanpham />} />
          <Route path="users" element={<Users />} />
          <Route path="danhmuc" element={<Danhmuc />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
