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
import LookUpOrders from './pages/pageraw/LookUpOrders';
import Nmxn from './pages/pageraw/Nmxn';
import Nmqmk from './pages/pageraw/Nmqmk';
import Dmk1 from './pages/pageraw/Dmk1';
import Dmk2 from './pages/pageraw/Dmk2';



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
        <Route path="tra-cuu-dh" element={<LookUpOrders />} />
        <Route path="nmxn" element={<Nmxn />} />
        <Route path="nmqmk" element={<Nmqmk />} />
        <Route path="dmk1" element={<Dmk1 />} />
        <Route path="dmk2" element={<Dmk2 />} />
      </Routes>
      {/* </MainLayout> */}

      <Footer />
    </div>
  );
};

export default App;
