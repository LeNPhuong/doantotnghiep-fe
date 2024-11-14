import {
  Belonging,
  FruitImg,
  MilkImg,
  NoodlesImg,
  RiceImg,
  SnackImg,
  SpiceImg,
  VegestableImg,
  WaterImg,
} from '../assets/icons';
import IMenuList from '../types/IMenuList';

const DataMenuList: IMenuList[] = [
  {
    id: 4,
    link: 'sua',
    name: 'SỮA',
    img: MilkImg,
  },
  { id: 8, link: 'nuoc-uong', name: 'NƯỚC UỐNG', img: WaterImg },
  { id: 6, link: 'mi-mien', name: 'MÌ CÁC LOẠI', img: NoodlesImg },
  { id: 5, link: 'banh-keo', name: 'BÁNH KẸO', img: SnackImg },
  { id: 3, link: 'gao-bot', name: 'NGŨ CỐC, HẠT', img: RiceImg },
  { id: 1, link: 'rau-cu', name: 'RAU CỦ', img: VegestableImg },
  { id: 7, link: 'do-dung', name: 'ĐỒ DÙNG', img: Belonging },
  { id: 2, link: 'gia-vi', name: 'GIA VỊ', img: SpiceImg },
];

export default DataMenuList;
