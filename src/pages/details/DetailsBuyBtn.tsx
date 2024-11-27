import React from 'react';
import { useAppDispatch } from '../../redux/store';
import { IFProduct } from '../../types/IFProducts';
import {
  add_cart,
  checkStatus,
  handleLoading,
} from '../../redux/cart/CartSlice';
import {
  useAddCheckoutMutation,
  useGetOrderCheckMutation,
} from '../../service/profile';
import { checkTotalPriceRaw } from '../../ultils/CheckPrice';

const DetailsBuyBtn: React.FC<{ data: IFProduct }> = ({ data }) => {
  const tokenCheck = JSON.parse(localStorage.getItem('token_access')!);

  const dispatch = useAppDispatch();
  const [add] = useAddCheckoutMutation();
  const [dataCheck] = useGetOrderCheckMutation();

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
      dispatch(handleLoading(true));
      const orderUser = await dataCheck()
        .unwrap()
        .then((data) => {
          return data;
        })
        .catch(() => {
          return 'trống';
        });

      if (orderUser === 'trống') {
        const resultAdd = await add({
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
          .then(() => {
            return true;
          })
          .catch(() => {
            return false;
          });
        if (resultAdd) {
          dispatch(handleLoading(false));
          alert('Thêm thành công');
          dispatch(checkStatus());
          return;
        } else {
          dispatch(handleLoading(false));
          alert('Thêm thất bại');
          return;
        }
      }

      const orderChecking =
        typeof orderUser !== 'string' &&
        orderUser.data.find((e) => e.status.id === 1);

      if (!orderChecking) {
        const resultAdd = await add({
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
          .then(() => {
            return true;
          })
          .catch(() => {
            return false;
          });

        if (resultAdd) {
          dispatch(handleLoading(false));
          alert('Thêm thành công');
          dispatch(checkStatus());
          return;
        } else {
          dispatch(handleLoading(false));
          alert('Thêm thất bại');
          return;
        }
      } else if (orderChecking) {
        const newCart: {
          id: number;
          quantity: number;
          unit: string;
          price: number;
        }[] = [];

        const cartOldArr = orderChecking.order_details;

        const checkExits = cartOldArr.find(
          (e) => e.product_id.toString() === dataProduct.id.toString(),
        );

        if (checkExits) {
          newCart.push({
            id: checkExits.product_id,
            quantity: checkExits.quantity + 1,
            unit: checkExits.unit,
            price: checkTotalPriceRaw(dataProduct.price, dataProduct.sale),
          });

          cartOldArr.forEach((el) => {
            if (Number(el.product_id) !== Number(checkExits.product_id)) {
              newCart.push({
                id: el.product_id,
                quantity: el.quantity,
                unit: el.unit,
                price: checkTotalPriceRaw(
                  Number(el.product.price),
                  el.product.sale,
                ),
              });
            }
          });

          const resultAddExits: boolean = await add({ cart: newCart })
            .unwrap()
            .then(() => {
              return true;
            })
            .catch(() => {
              return false;
            });
          if (resultAddExits) {
            dispatch(handleLoading(false));
            alert('Thêm sản phẩm thành công');
            dispatch(checkStatus());
            return;
          } else {
            dispatch(handleLoading(false));
            alert('Thêm sản phẩm thất bại');
            return;
          }
        } else {
          const cartOldArr = orderChecking.order_details;

          cartOldArr.forEach((el) => {
            newCart.push({
              id: el.product_id,
              quantity: el.quantity,
              unit: el.unit,
              price: checkTotalPriceRaw(
                Number(el.product.price),
                dataProduct.sale,
              ),
            });
          });

          newCart.push({
            id: dataProduct.id,
            quantity: 1,
            unit: dataProduct.unit,
            price: checkTotalPriceRaw(
              Number(dataProduct.price),
              dataProduct.sale,
            ),
          });

          dispatch(handleLoading(true));
          const resultAddExits: boolean = await add({ cart: newCart })
            .unwrap()
            .then(() => {
              return true;
            })
            .catch(() => {
              return false;
            });
          if (resultAddExits) {
            dispatch(handleLoading(false));
            alert('Thêm sản phẩm thành công');
            dispatch(checkStatus());
            return;
          } else {
            dispatch(handleLoading(false));
            alert('Thêm sản phẩm thất bại');
            return;
          }
        }
      }
      //
    }
  }

  return (
    <button
      onClick={addCart}
      className="flex justify-center items-center bg-white rounded-md border border-emerald-900 border-solid xl:min-w-[168px] xl:max-w-[168px] xl:min-h-[40px] min-h-[30px] max-w-[130px] min-w-[130px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] xl:text-[14px] text-[10px] font-semibold"
    >
      Thêm vào giỏ hàng
    </button>
  );
};

export default DetailsBuyBtn;
