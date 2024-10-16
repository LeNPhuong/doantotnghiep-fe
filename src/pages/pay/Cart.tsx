import React from 'react';
import CartHeader from './CartHeader';
import CartItem from './CartItem';

const Cart: React.FC<{}> = () => {
  return (
    <div className="shadow-[0_0_3px_rgba(0,0,0,0.25)] rounded-[10px] pb-[41px]">
      <CartHeader />
      <div className="flex flex-col">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
};

export default Cart;
