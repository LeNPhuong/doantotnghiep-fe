export interface IFProduct {
  id: number;
  cate_id: number;
  description: string;
  img: string;
  made: string;
  name: string;
  price: string;
  quantity: number;
  sale: number;
  active: number;
  category: {
    id: number;
    deleted_at: null;
    key: string;
    name: string;
    units: { id: number; name: string; active: number }[];
  };
}
