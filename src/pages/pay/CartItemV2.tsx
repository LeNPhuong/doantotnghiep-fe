import React from 'react';
import ChangeCurrentcy from '../../ultils/ChangeCurrentcy';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { extractValueAndUnit } from '../../ultils/ChangeUnit';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useAddCheckoutMutation } from '../../service/profile';
import { handleLoading } from '../../redux/cart/CartSlice';

const CartItemV2: React.FC<{
  data: {
    id: number;
    name: string;
    price: number;
    sale: number;
    qtt: number;
    img: string;
    des: string;
    unit: string;
  };
}> = ({ data }) => {
  const [add] = useAddCheckoutMutation();
  const cartV2 = useAppSelector((e) => e.cart.dataCart2);
  const dispatch = useAppDispatch();

  function handleIncre() {
    const cartNew: {
      id: number;
      quantity: number;
      unit: string;
      price: number;
    }[] = [];
    const items = structuredClone(cartV2.find((e) => e.id === data.id));

    if (items) {
      if (items.qtt > 1) {
        items.qtt -= 1;
        cartNew.push({
          id: Number(items?.id),
          quantity: Number(items?.qtt),
          unit: items?.unit,
          price: Number(items?.price),
        });

        cartV2.forEach((e) => {
          if (e.id !== items?.id) {
            cartNew.push({
              id: Number(e?.id),
              quantity: Number(e?.qtt),
              unit: e?.unit,
              price: Number(e?.price),
            });
          }
        });

        dispatch(handleLoading(true));
        add({ cart: cartNew })
          .unwrap()
          .then(() => {
            dispatch(handleLoading(false));
            alert('Cập nhật thành công');
            location.reload();
          })
          .catch(() => {
            alert('Cập nhật thất bại');
            location.reload();
          });
      }
    }
  }

  function handleAdd() {
    const cartNew = [];
    const items = structuredClone(cartV2.find((e) => e.id === data.id));
    if (items) {
      items.qtt += 1;
      cartNew.push({
        id: Number(items?.id),
        quantity: Number(items?.qtt),
        unit: items?.unit,
        price: Number(items?.price),
      });

      // cartNew.push(items);

      cartV2.forEach((e) => {
        if (e.id !== items?.id) {
          cartNew.push({
            id: Number(e?.id),
            quantity: Number(e?.qtt),
            unit: e?.unit,
            price: Number(e?.price),
          });
        }
      });

      dispatch(handleLoading(true));
      add({ cart: cartNew })
        .unwrap()
        .then(() => {
          dispatch(handleLoading(false));
          alert('Cập nhật thành công');
          location.reload();
        })
        .catch(() => {
          alert('Cập nhật thất bại');
          location.reload();
        });
    }
  }

  function handleDelete() {
    const filterCheckOut = structuredClone(
      cartV2.filter((e) => e.id !== data.id),
    );

    const newCheckout: {
      id: number;
      quantity: number;
      unit: string;
      price: number;
    }[] = [];

    filterCheckOut.forEach((el) => {
      newCheckout.push({
        id: Number(el.id),
        quantity: Number(el.qtt),
        unit: el.unit,
        price: Number(el.price),
      });
    });

    dispatch(handleLoading(true));
    add({ cart: newCheckout })
      .unwrap()
      .then(() => {
        dispatch(handleLoading(false));
        alert('Cập nhật thành công');
        location.reload();
      })
      .catch(() => {
        alert('Cập nhật thất bại');
        location.reload();
      });
  }

  return (
    <div className="flex md:flex-row flex-col w-full py-[15px] px-[20px] border-b-[1px] border-[#ccc]">
      <div className="w-full xl:max-w-[543px] lg:max-w-[400px] md:max-w-[350px] flex items-center">
        <img
          src={data.img}
          className="w-[80px] h-[80px] rounded-[10px] shadow-[0_0_4px_rgba(0,0,0,0.25)]"
          alt=""
        />
        <div className="md:text-[16px] text-[14px] leading-[20px] ml-[12px]">
          {data.des}
          <div className="lg:max-w-[120px] xl:max-w-[90px] max-w-[120px] w-full md:hidden flex-row items-center justify-center text-[16px] text-[#FF0000] font-medium block">
            {ChangeCurrentcy(
              (Number(data.price) -
                (Number(data.price) * Number(data.sale)) / 100) *
                data.qtt,
            )}
          </div>
        </div>
      </div>
      {/*  */}
      <div className="lg:max-w-[120px] max-w-[120px] w-full md:flex flex-row items-center justify-center text-[16px] text-[#FF0000] font-medium hidden">
        {ChangeCurrentcy(
          Number(data.price) - (Number(data.price) * Number(data.sale)) / 100,
        )}
      </div>
      <div className="lg:max-w-[120px] md:max-w-[90px] max-w-[120px] w-full md:flex hidden flex-row items-center justify-center">
        <div className="flex justify-between bg-white rounded-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] w-full md:max-w-[100px] max-w-[150px]">
          <button
            onClick={handleIncre}
            className="bg-white border-r-[1px] border-r-[#E4C4C4] md:min-h-[32px] md:min-w-[32px] min-w-[40px] min-h-[40px] rounded-l-[20px] flex justify-center items-center cursor-pointer"
          >
            <FiMinus />
          </button>
          <div className="w-full md:max-w-[36px] max-w-[40px] text-center leading-[40px] md:text-[14px] text-[16px] font-medium">
            {data.qtt}
          </div>
          <button
            onClick={handleAdd}
            className=" bg-white border-l-[1px] border-l-[#E4C4C4] md:min-h-[32px] md:min-w-[32px] min-w-[40px] min-h-[40px] rounded-r-[20px] flex justify-center items-center cursor-pointer"
          >
            <FiPlus />
          </button>
        </div>
      </div>
      <div className="lg:max-w-[120px] md:max-w-[90px] max-w-[120px] w-full md:flex hidden flex-row items-center justify-center text-[16px] font-medium text-[#004D40]">
        {extractValueAndUnit(data.name!)?.unit}
      </div>
      <button
        onClick={handleDelete}
        className="text-[#FF0000] font-bold md:block hidden"
      >
        Xoá
      </button>
      {/*  */}
      {/* <div className="flex flex-row md:hidden mt-[5px] justify-end">
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
      </div> */}
    </div>
  );
};

export default CartItemV2;
