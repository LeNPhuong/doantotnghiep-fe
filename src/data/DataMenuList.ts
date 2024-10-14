import {
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
    link: 'sua',
    name: 'SỮA',
    img: MilkImg,
  },
  { link: 'nuoc-uong', name: 'NƯỚC UỐNG', img: WaterImg },
  { link: 'mi', name: 'MÌ CÁC LOẠI', img: NoodlesImg },
  { link: 'banh-keo', name: 'BÁNH KẸO', img: SnackImg },
  { link: 'ngu-coc', name: 'NGŨ CỐC, HẠT', img: RiceImg },
  { link: 'rau-cu', name: 'RAU CỦ', img: VegestableImg },
  { link: 'trai-cay', name: 'TRÁI CÂY', img: FruitImg },
  { link: 'gia-vi', name: 'GIA VỊ', img: SpiceImg },
];

export default DataMenuList;
