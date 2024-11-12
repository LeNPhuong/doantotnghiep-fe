import React from 'react';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import { useAppSelector } from '../../redux/store';

const Cart: React.FC<object> = () => {
  const cartStore = useAppSelector((e) => e.cart.dataCart);

  return (
    <div className="shadow-[0_0_3px_rgba(0,0,0,0.25)] md:rounded-[10px]">
      <CartHeader />
      <div className="flex flex-col">
        {cartStore == null || cartStore == undefined ? (
          <p className="text-center mt-[30px] text-[20px]">Giỏ hàng trống</p>
        ) : (
          cartStore?.map((e) => <CartItem key={e.id} data={e} />)
        )}
      </div>
    </div>
  );
};

export default Cart;
