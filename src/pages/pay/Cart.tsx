import React from 'react';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import { useAppSelector } from '../../redux/store';
import CartItemV2 from './CartItemV2';

const Cart: React.FC<object> = () => {
  const tokenCheck = JSON.parse(localStorage.getItem('token_access')!);
  const cartStorev2 = useAppSelector((e) => e.cart.dataCart2);
  const cartStore = useAppSelector((e) => e.cart.dataCart);

  return (
    <div className="shadow-[0_0_3px_rgba(0,0,0,0.25)] md:rounded-[10px]">
      <CartHeader />
      <div className="flex flex-col">
        {tokenCheck ? (
          cartStorev2.length === 0 ? (
            <p className="text-center mt-[30px] text-[20px]">Giỏ hàng trống</p>
          ) : (
            cartStorev2.map((e) => <CartItemV2 data={e} key={e.id} />)
          )
        ) : cartStore == null || cartStore == undefined ? (
          <p className="text-center mt-[30px] text-[20px]">Giỏ hàng trống</p>
        ) : (
          cartStore?.map((e) => <CartItem key={e.id} data={e} />)
        )}
      </div>
    </div>
  );
};

export default Cart;
