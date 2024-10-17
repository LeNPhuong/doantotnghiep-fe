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

const App: React.FC<{}> = () => {
  return (
    <div className="bg-[#F7F8FA]">
      <Header />
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

        {/* <Route path="tra-cuu-dh" element={<LookUpOrders />} />
        <Route path="nmxn" element={<Nmxn />} />
        <Route path="nmqmk" element={<Nmqmk />} />
        <Route path="dmk1" element={<Dmk1 />} />
        <Route path="dmk2" element={<Dmk2 />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
