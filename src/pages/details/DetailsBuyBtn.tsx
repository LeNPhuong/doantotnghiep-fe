import React from 'react';
import { useAppDispatch } from '../../redux/store';
import { IFProduct } from '../../types/IFProducts';
import { add_cart } from '../../redux/cart/CartSlice';

const DetailsBuyBtn: React.FC<{ data: IFProduct }> = ({ data }) => {
  const dispatch = useAppDispatch();

  function handleBuy() {
    dispatch(add_cart(data));
  }

  return (
    <button
      onClick={handleBuy}
      className="flex justify-center items-center bg-white rounded-md border border-emerald-900 border-solid xl:min-w-[168px] xl:max-w-[168px] xl:min-h-[40px] min-h-[30px] max-w-[130px] min-w-[130px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] xl:text-[14px] text-[10px] font-semibold"
    >
      Thêm vào giỏ hàng
    </button>
  );
};

export default DetailsBuyBtn;
