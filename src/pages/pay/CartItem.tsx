import React from 'react';
import CartControl from './CartControl';
import { delete_cart, IFCartStore } from '../../redux/cart/CartSlice';
import ChangeCurrentcy from '../../ultils/ChangeCurrentcy';
import { useAppDispatch } from '../../redux/store';

const CartItem: React.FC<{ data: IFCartStore }> = ({ data }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex md:flex-row flex-col w-full py-[15px] px-[20px] border-b-[1px] border-[#ccc]">
      <div className="w-full xl:max-w-[543px] lg:max-w-[400px] md:max-w-[350px] flex items-center">
        <img
          src={data.img}
          className="w-[80px] h-[80px] rounded-[10px] shadow-[0_0_4px_rgba(0,0,0,0.25)]"
          alt=""
        />
        <div className="md:text-[16px] text-[14px] leading-[20px] ml-[12px]">
          {data.description}
          <div className="lg:max-w-[120px] xl:max-w-[90px] max-w-[120px] w-full md:hidden flex-row items-center justify-center text-[16px] text-[#FF0000] font-medium block">
            {ChangeCurrentcy(
              Number(data.price) -
                (Number(data.price) * Number(data.sale)) / 100,
            )}
          </div>
        </div>
      </div>
      {/*  */}
      <div className="lg:max-w-[120px] max-w-[120px] w-full md:flex flex-row items-center justify-center text-[16px] text-[#FF0000] font-medium hidden">
        {ChangeCurrentcy(
          (Number(data.price) -
            (Number(data.price) * Number(data.sale)) / 100) *
            data.qtt,
        )}
      </div>
      <div className="lg:max-w-[120px] md:max-w-[90px] max-w-[120px] w-full md:flex hidden flex-row items-center justify-center">
        <CartControl id={data.id} data={data.qtt} />
      </div>
      <div className="lg:max-w-[120px] md:max-w-[90px] max-w-[120px] w-full md:flex hidden flex-row items-center justify-center text-[16px] font-medium text-[#004D40]">
        {data.category.active_units[0].name}
      </div>
      <button
        onClick={() => dispatch(delete_cart(data.id))}
        className="text-[#FF0000] font-bold md:block hidden"
      >
        Xoá
      </button>
      {/*  */}
      <div className="flex flex-row md:hidden mt-[5px] justify-end">
        <div className="max-w-[120px] w-full flex flex-row items-center justify-center">
          <CartControl id={data.id} data={data.qtt} />
        </div>
        <div className="max-w-[80px] w-full flex flex-row items-center justify-center text-[16px] font-medium text-[#004D40]">
          {data.category?.active_units[0].name}
        </div>
        <button
          onClick={() => dispatch(delete_cart(data.id))}
          className="text-[#FF0000] font-bold"
        >
          Xoá
        </button>
      </div>
    </div>
  );
};

export default CartItem;
