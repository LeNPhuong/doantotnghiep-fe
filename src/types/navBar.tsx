import { ReactNode } from 'react';
import { BsPersonVideo3 } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { RiBookLine } from 'react-icons/ri';

export interface IMenu {
  name: string;
  link: string;
  icons: ReactNode;
}

export const menuData: IMenu[] = [
  {
    name: 'Trang chủ',
    link: '/1',
    icons: <FaHome />,
  },
  {
    name: 'Các lớp học',
    link: '/2',
    icons: <BsPersonVideo3 />,
  },
  {
    name: 'Thư viện',
    link: '/3',
    icons: <RiBookLine />,
  },
];
