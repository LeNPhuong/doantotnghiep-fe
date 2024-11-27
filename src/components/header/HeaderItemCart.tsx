import React, { useEffect, useState } from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { handleLoading, setCart2 } from '../../redux/cart/CartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useGetOrderCheckMutation } from '../../service/profile';

const HeaderItemCart: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const [total, setTotal] = useState<number>(0);
  const [dataCheck] = useGetOrderCheckMutation();

  const tokenCheck = JSON.parse(localStorage.getItem('token_access')!);

  const cartData = useAppSelector((e) => e.cart.dataCart);

  useEffect(() => {
    (async function () {
      if (tokenCheck) {
        dispatch(handleLoading(true));
        const ResultData = await dataCheck()
          .unwrap()
          .then((data) => {
            return data;
            // const dataCheck = data.data.find((e) => e.status.id === 1);
            // let total = 0;
            // dataCheck?.order_details.forEach((dataEl) => {
            //   total += dataEl.quantity;
            // });

            // const cartArr: {
            //   id: number;
            //   name: string;
            //   price: number;
            //   sale: number;
            //   des: string;
            //   img: string;
            //   qtt: number;
            //   unit: string;
            // }[] = [];

            // dataCheck?.order_details.map((el) => {
            //   cartArr.push({
            //     id: el.product_id,
            //     name: el.product.name,
            //     price: Number(el.product.price),
            //     sale: el.product.sale,
            //     qtt: el.quantity,
            //     img: el.product.img,
            //     des: el.product.description,
            //     unit: el.unit,
            //   });
            // });

            // dispatch(setCart2(cartArr));
            // setTotal(total);
            // dispatch(handleLoading(false));
          })
          .catch(() => {
            // setTotal(0);
            // dispatch(setCart2([]));
            // dispatch(handleLoading(false));
            return null;
          });

        if (ResultData) {
          const dataCheck = ResultData.data.find((e) => e.status.id === 1);
          let total = 0;
          dataCheck?.order_details.forEach((dataEl) => {
            total += dataEl.quantity;
          });

          const cartArr: {
            id: number;
            name: string;
            price: number;
            sale: number;
            des: string;
            img: string;
            qtt: number;
            unit: string;
          }[] = [];

          dataCheck?.order_details.map((el) => {
            cartArr.push({
              id: el.product_id,
              name: el.product.name,
              price: Number(el.product.price),
              sale: el.product.sale,
              qtt: el.quantity,
              img: el.product.img,
              des: el.product.description,
              unit: el.unit,
            });
          });

          dispatch(setCart2(cartArr));
          setTotal(total);
          dispatch(handleLoading(false));
        } else {
          setTotal(0);
          dispatch(setCart2([]));
          dispatch(handleLoading(false));
        }
      }
    })();
  }, []);

  return (
    <Link
      to="/gio-hang"
      className="flex flex-col items-center text-[#004D40] relative"
    >
      <span className="xl:text-[24px] md:text-[20px] text-[16px]">
        {<BsCartPlus />}
      </span>
      <p className="xl:text-[14px] md:text-[11px] text-[8px] font-[600] whitespace-nowrap">
        Giỏ hàng
      </p>
      {/*  */}
      {tokenCheck ? (
        total === 0 ? (
          ''
        ) : (
          <div className="absolute md:top-[-8px] xl:right-[8px] md:right-[4px] xl:min-w-[20px] xl:max-w-[20px] xl:min-h-[20px] xl:max-h-[20px] md:min-w-[15px] md:max-w-[15px] md:min-h-[15px] md:max-h-[15px] bg-red-500 rounded-full text-center text-[10px] text-[#fff] xl:leading-[20px] md:leading-[15px] min-h-[12px] min-w-[12px] max-w-[12px] max-h-[12px] leading-[12px] right-[5px] top-[-5px]">
            {total}
          </div>
        )
      ) : cartData ? (
        <div className="absolute md:top-[-8px] xl:right-[8px] md:right-[4px] xl:min-w-[20px] xl:max-w-[20px] xl:min-h-[20px] xl:max-h-[20px] md:min-w-[15px] md:max-w-[15px] md:min-h-[15px] md:max-h-[15px] bg-red-500 rounded-full text-center text-[10px] text-[#fff] xl:leading-[20px] md:leading-[15px] min-h-[12px] min-w-[12px] max-w-[12px] max-h-[12px] leading-[12px] right-[5px] top-[-5px]">
          {cartData.reduce((acc, cur) => acc + cur.qtt, 0)}
        </div>
      ) : (
        ''
      )}
      {/*  */}
    </Link>
  );
};

export default HeaderItemCart;
