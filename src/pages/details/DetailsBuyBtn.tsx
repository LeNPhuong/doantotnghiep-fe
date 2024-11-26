import React from 'react';
import { useAppDispatch } from '../../redux/store';
import { IFProduct } from '../../types/IFProducts';
import { add_cart, handleLoading } from '../../redux/cart/CartSlice';
import {
  useAddCheckoutMutation,
  useGetOrderByIdMutation,
  useGetOrderCheckMutation,
} from '../../service/profile';
import { checkTotalPriceRaw } from '../../ultils/CheckPrice';

const DetailsBuyBtn: React.FC<{ data: IFProduct }> = ({ data }) => {
  const tokenCheck = JSON.parse(localStorage.getItem('token_access')!);

  const dispatch = useAppDispatch();
  const [add] = useAddCheckoutMutation();
  const [dataCheck] = useGetOrderCheckMutation();
  const [orderById] = useGetOrderByIdMutation();

  function addCart(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
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
      const cart = { cart: [dataProduct] };
      dataCheck()
        .unwrap()
        .then((data) => {
          data.data.forEach((el) => {
            if (el.status.id === 1) {
              const oldCart: {
                id: number;
                quantity: number;
                unit: string;
                price: number;
              }[] = [];

              const checkExits = el.order_details.find(
                (e) => e.product_id.toString() === dataProduct.id.toString(),
              );

              if (checkExits) {
                const handleDataExits = {
                  id: checkExits.product_id,
                  quantity: Number(checkExits.quantity) + 1,
                  unit: checkExits.unit.toString(),
                  price:
                    checkTotalPriceRaw(dataProduct.price, dataProduct.sale) *
                    (Number(checkExits.quantity) + 1),
                };
                oldCart.push(handleDataExits);
              } else {
                const handleDataExits = {
                  id: dataProduct.id,
                  quantity: 1,
                  unit: dataProduct.unit,
                  price: checkTotalPriceRaw(
                    dataProduct.price,
                    dataProduct.sale,
                  ),
                };
                oldCart.push(handleDataExits);
              }

              el.order_details.forEach((dataCall) => {
                if (dataCall.product_id !== dataProduct.id) {
                  oldCart.push({
                    id: dataCall.product_id,
                    quantity: dataCall.quantity,
                    unit: dataCall.unit,
                    price: dataCall.price,
                  });
                }
              });

              const cartSuccess = oldCart;

              const dataPost: {
                cart?: {
                  id: number;
                  quantity: number;
                  unit: string;
                  price: number;
                }[];
              } = { cart: cartSuccess };

              add(dataPost)
                .unwrap()
                .then((data) => {
                  orderById({ code: data.data.code })
                    .unwrap()
                    .then(() => {
                      dispatch(handleLoading(false));
                      alert('Thêm sản phẩm thành công');
                      location.reload();
                    });
                })
                .catch(() => {});
              //2
            }
            //1
          });
        })
        .catch((data) => {
          if (data.data.message == 'Không có đơn hàng nào!') {
            add(cart)
              .unwrap()
              .then(() => {
                dispatch(handleLoading(false));
                alert('Thêm sản phẩm thành công');
                location.reload();
              })
              .catch(() => {});
          }
        });
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
