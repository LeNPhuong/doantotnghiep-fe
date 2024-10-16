import React from 'react';
import CartControl from './CartControl';

const CartItem: React.FC<{}> = () => {
  return (
    <div className="flex flex-row w-full min-h-[80px] max-h-[80px] mt-[19px]">
      <div className="w-full max-w-[543px] flex items-center pl-[9px]">
        <div className="min-h-[20px] min-w-[20px] max-h-[20px] max-w-[20px] rounded-full border-[3px] border-[#D9D9D9] mr-[12px]"></div>
        <img
          src="https://brgshopping.vn/web/image/product.template/2929/image"
          className="w-[80px] h-[80px] rounded-[10px] shadow-[0_0_4px_rgba(0,0,0,0.25)]"
          alt=""
        />
        <p className="text-[16px] leading-[20px] ml-[12px]">
          Nước tăng lực Sting với mùi vị thơm ngon, sảng khoái cùng hương dâu dễ
          chịu. Sting  giúp cơ thể bù đắp nước, bổ sung năng lượng...
        </p>
      </div>
      <div className="max-w-[120px] w-full flex flex-row items-center justify-center text-[16px] text-[#FF0000] font-medium">
        100.000đ
      </div>
      <div className="max-w-[120px] w-full flex flex-row items-center justify-center">
        <CartControl />
      </div>
      <div className="max-w-[120px] w-full flex flex-row items-center justify-center text-[16px] font-medium text-[#004D40]">
        Chai
      </div>
      <button className='text-[#FF0000] font-bold'>Xoá</button>
    </div>
  );
};

export default CartItem;
