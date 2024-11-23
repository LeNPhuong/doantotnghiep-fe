import React, { useEffect } from 'react';

import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

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
  Search,
  Tracking,
  TrackingIF,
  TrackSearch,
  User,
} from './pages';

import Client from './layout/Client';
import BoxMain from './layout/BoxMain';
import UserClient from './pages/user/UserClient';
import Infor from './pages/user/page/Infor';
import UserOrder from './pages/user/page/UserOrder';
import MapData from './pages/user/page/MapData';
import DetailsOrder from './pages/user/page/DetailsOrder';
import ListOrder from './pages/user/page/ListOrder';
import Dashboard from './pages/admin/pages/Dashboard';
import ProductManagement from './pages/admin/pages/ProductManagement';
import ProductInfor from './pages/admin/ContentRight/product/productinfor/ProductInfor';
import ProductEdit from './pages/admin/ContentRight/product/productEdit/ProductEdit';
import ProductAdd from './pages/admin/ContentRight/product/productAdd/ProductAdd';
import AccountManagement from './pages/admin/pages/AccountManagement';
import TypeManagement from './pages/admin/pages/TypeManagement';
import BillManagement from './pages/admin/pages/BillManagement';
import BoxInfor from './pages/admin/ContentRight/bill/inforbill/BoxInfor';
import BoxDetails from './pages/admin/ContentRight/bill/detailsbill/BoxDetails';
import BoxUser from './pages/admin/ContentRight/user/BoxUser';
import AccountDetails from './pages/admin/ContentRight/user/DetailsAccount/AccountDetails';
import AccountNewPage from './pages/admin/ContentRight/user/NewAccount/AccountNewPage';
import BoxTypeProduct from './pages/admin/ContentRight/typeproduct/BoxTypeProduct';
import CategoryNewPage from './pages/admin/ContentRight/typeproduct/CategoryNewPage';
import EditCategoryPage from './pages/admin/ContentRight/typeproduct/EditCategoryPage';
import UnitsManagement from './pages/admin/pages/UnitsManagement';
import PageUnits from './pages/admin/ContentRight/unit/PageUnits';
import PageNewUnit from './pages/admin/ContentRight/unit/PageNewUnit';
import PageEditUnit from './pages/admin/ContentRight/unit/PageEditUnit';
import DashBoardTotal from './pages/admin/pages/DashBoardTotal';

const App: React.FC<object> = () => {
  const path = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path.pathname]);

  return (
    <BoxMain>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
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

          <Route path="/tim-kiem-san-pham/:type" element={<Search />} />

          <Route path="/thong-tin-nguoi-dung" element={<UserClient />}>
            <Route path="ca-nhan" element={<Infor />} />
            <Route index element={<Infor />} />
            <Route path="don-hang" element={<UserOrder />}>
              <Route path="danh-sach" element={<ListOrder />} />
              <Route index element={<ListOrder />} />
              <Route path="chi-tiet/:code" element={<DetailsOrder />} />
            </Route>
            <Route path="dia-chi" element={<MapData />} />
          </Route>

          <Route path="/tra-cuu" element={<Tracking />}>
            <Route index element={<TrackSearch />} />
            <Route path=":key" element={<TrackingIF />} />
          </Route>
        </Route>
        {/* -------------------------- */}
        <Route path="/admin-quan-ly" element={<Dashboard />}>
          <Route path="trang-chu" element={<DashBoardTotal />} />
          <Route index element={<Navigate to="trang-chu" />} />

          <Route path="product" element={<ProductManagement />}>
            <Route path="inforprd" element={<ProductInfor />} />
            <Route index element={<ProductInfor />} />
            <Route path="edit/:id" element={<ProductEdit />} />
            <Route path="add" element={<ProductAdd />} />
          </Route>

          <Route path="account" element={<AccountManagement />}>
            <Route path="danh-sach" element={<BoxUser />} />
            <Route index element={<BoxUser />} />
            <Route path="chinh-sua/:id" element={<AccountDetails />} />
            <Route path="tao-moi" element={<AccountNewPage />} />
          </Route>

          <Route path="type" element={<TypeManagement />}>
            <Route path="danh-sach" element={<BoxTypeProduct />} />
            <Route index element={<BoxTypeProduct />} />
            <Route path="tao-moi" element={<CategoryNewPage />} />
            <Route path="chinh-sua/:id" element={<EditCategoryPage />} />
          </Route>

          <Route path="bill" element={<BillManagement />}>
            <Route path="infor" element={<BoxInfor />} />
            <Route index element={<BoxInfor />} />
            <Route path="details/:id" element={<BoxDetails />} />
          </Route>

          <Route path="don-vi" element={<UnitsManagement />}>
            <Route index element={<PageUnits />} />
            <Route path="danh-sach" element={<PageUnits />} />
            <Route path="chinh-sua/:id" element={<PageEditUnit />} />
            <Route path="them-moi" element={<PageNewUnit />} />
          </Route>
        </Route>
        {/* -------------------------- */}

        {/* Admin dashboard */}
      </Routes>
    </BoxMain>
  );
};

export default App;
