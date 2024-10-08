export interface IMenu {
  id: number;
  name: string;
  link: string;
}

export const menuData: IMenu[] = [
  {
    id: 1,
    name: 'KHUYẾN MÃI',
    link: '/khuyen-mai',
  },
  { id: 2, name: 'RAU CỦ NẤM & TRÁI CÂY', link: 'rau-cu' },
  { id: 3, name: 'DẦU ĂN, NƯỚC CHẤM, GIA VỤ', link: 'gia-vi' },
  { id: 4, name: 'GẠO BỘT, ĐỒ KHÔ', link: 'do-kho' },
  { id: 5, name: 'SỮA CÁC LOẠI', link: 'sua' },
  { id: 6, name: 'BÁNH KẸO CÁC LOẠI', link: 'banh-keo' },
  { id: 7, name: 'MÌ, MIẾN, CHÁO, PHỞ', link: 'mi' },
  { id: 8, name: 'ĐỒ DÙNG GIA ĐÌNH', link: 'gia-dinh' },
];
