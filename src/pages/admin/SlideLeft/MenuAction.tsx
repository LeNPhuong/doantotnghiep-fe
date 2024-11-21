import React, { ReactNode } from 'react';
import { PiUnite } from 'react-icons/pi';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import StoreIcon from '@mui/icons-material/Store';
import ItemsList from './ItemsList';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DashboardIcon from '@mui/icons-material/Dashboard';

const typelist: {
  id: number;
  name: string;
  icons: ReactNode;
  links: string;
}[] = [
  {
    id: 1,
    name: 'Tổng kết',
    icons: <DashboardIcon />,
    links: 'trang-chu',
  },
  {
    id: 2,
    name: 'Sản phẩm',
    icons: <ProductionQuantityLimitsIcon />,
    links: 'product',
  },
  {
    id: 3,
    name: 'Tài khoản',
    icons: <ManageAccountsIcon />,
    links: 'account',
  },
  {
    id: 4,
    name: 'Loại sản phẩm',
    icons: <ReceiptLongIcon />,
    links: 'type',
  },
  {
    id: 5,
    name: 'Đơn vị sản phẩm',
    icons: <PiUnite />,
    links: 'don-vi',
  },
  { id: 6, name: 'Đơn hàng', icons: <StoreIcon />, links: 'bill' },
];

const MenuAction: React.FC = () => {
  return (
    <div className="px-[20px] mt-[10px]">
      <div className="flex items-center gap-[15px] bg-[#cccccc5f] p-[5px] rounded-[8px]">
        <span className="">
          <AccountCircleIcon
            sx={{
              width: '45px',
              height: '45px',
            }}
          />
        </span>
        <div className="flex flex-col">
          <span className="text-[18px] font-[500]">Phuong</span>
          <span className="text-[13px] capitalize font-[400] text-[#a8a29e]">
            Admin
          </span>
        </div>
      </div>

      <p className="text-[16px] font-[600] uppercase my-[20px]">Chức năng</p>
      <div className="flex flex-col gap-[10px]">
        {typelist.map((e) => (
          <ItemsList key={e.id} data={e} />
        ))}
      </div>
    </div>
  );
};

export default MenuAction;
