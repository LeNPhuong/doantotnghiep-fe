import React from 'react';
import { Link } from 'react-router-dom';
import { IFProduct } from '../../types/IFProducts';
import ChangeCurrentcy from '../../ultils/ChangeCurrentcy';
import { Tooltip } from '@mui/material';
import { useAppDispatch } from '../../redux/store';
import { add_cart /* handleLoading*/ } from '../../redux/cart/CartSlice';
import {
  useAddCheckoutMutation,
  // useGetOrderByIdMutation,
  useGetOrderCheckMutation,
} from '../../service/profile';
import { checkTotalPriceRaw } from '../../ultils/CheckPrice';

const CardItem: React.FC<{
  data: IFProduct;
}> = ({ data }) => {
  const tokenCheck = JSON.parse(localStorage.getItem('token_access')!);
  const dispatch = useAppDispatch();
  const [add] = useAddCheckoutMutation();
  const [dataCheck] = useGetOrderCheckMutation();
  // const [orderById] = useGetOrderByIdMutation();
  //-------------------------------------------------

  async function addCart(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const dataProduct = {
      id: Number(data.id),
      quantity: 1,
      unit: data.category.active_units[0].id.toString(),
      price: Number(data.price),
      sale: Number(data.sale),
    };

    if (!tokenCheck) {
      dispatch(add_cart(data));
    } else {
      const orderUser = await dataCheck()
        .unwrap()
        .then((data) => {
          return data;
        });

      const orderChecking = orderUser.data.find((e) => e.status.id === 1);

      if (!orderChecking) {
        add({
          cart: [
            {
              id: dataProduct.id,
              quantity: dataProduct.quantity,
              unit: dataProduct.unit,
              price: checkTotalPriceRaw(dataProduct.price, dataProduct.sale),
            },
          ],
        })
          .unwrap()
          .then(() => alert('Thêm thành công'))
          .catch(() => alert('Thêm thất bại'));
      } else if (orderChecking) {
        const cartOldArr = orderChecking.order_details;
        console.log(cartOldArr);
      }
      //
    }
  }
  //-------------------------------------------------

  return (
    <Link
      to={`/san-pham/${data.id}`}
      className="w-full md:max-w-[250px] max-w-[200px] shadow-[0_0_4px_rgba(0,0,0,0.25)] md:rounded-[10px] rounded-[5px] md:mx-[7px] mx-[3px]"
    >
      <div className="w-full relative">
        <div className="w-full absolute top-[5px] text-[12px] font-semibold right-[5px] bg-[#FF0000] max-w-[40px] min-h-[18px] text-[#fff] text-center leading-[18px] rounded-[3px]">
          {data.sale}%
        </div>
        <div className="w-full flex flex-row justify-center pt-[29px] mb-[19px]">
          <img className="max-h-[150px]" src={data.img} alt="" />
        </div>
        <div className="px-[17px] mb-[18px]">
          <Tooltip title={data.name}>
            <p className="md:text-[16px] text-[14px] font-normal">
              {data.name.length > 15
                ? data.name.slice(0, 15) + '...'
                : data.name}
            </p>
          </Tooltip>
        </div>
        <div className="bg-[#014C3E] md:rounded-b-[10px] rounded-b-[5px]">
          <div className="flex flex-row justify-between items-center px-[17px] py-[16px]">
            <div className="flex flex-col">
              <p className="text-[#00E875] md:text-[18px] text-[16px] font-semibold">
                {ChangeCurrentcy(
                  Number(data.price) -
                    (Number(data.price) * Number(data.sale)) / 100,
                )}
              </p>
              <p className="text-[#fff] line-through md:text-[14px] text-[12px]">
                {ChangeCurrentcy(Number(data.price))}
              </p>
            </div>
            <button
              onClick={(e) => {
                addCart(e);
              }}
              className="uppercase w-full lg:py-[10px] py-[7px] lg:max-w-[102px] max-w-[70px] bg-[#DDF16E] text-[#014C3E] lg:text-[16px] text-[13px] font-semibold rounded-[5px] hover:bg-[#c9e529] relative z-[9999] outline-none"
            >
              mua
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardItem;
