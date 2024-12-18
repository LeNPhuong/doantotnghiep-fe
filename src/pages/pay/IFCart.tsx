import React, { SetStateAction } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import FieldInfor from './FieldInfor';
import { clearCart, IFCartStore } from '../../redux/cart/CartSlice';
import ChangeCurrentcy from '../../ultils/ChangeCurrentcy';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  useCheckOutCartMutation,
  usePaymentCartMutation,
} from '../../service/profile';
import { CartCheckout, CheckOutData } from '../../types/IFProducts';
import { LoadingModal } from '../../components';
import { PaymentData } from '../../types/User';
import { ClearVoucher } from '../../redux/user/UserSlice';

const IFCart: React.FC<{
  data: IFCartStore[];
  setVoucher: React.Dispatch<SetStateAction<boolean>>;
}> = ({ data, setVoucher }) => {
  const dispatch = useAppDispatch();
  const path = useLocation().pathname;
  const user = useAppSelector((e) => e.user.profile?.data);
  const token = JSON.parse(localStorage.getItem('token_access')!);
  // const dataCart = useAppSelector((e) => e.cart.dataCart);
  const dataCartV2 = useAppSelector((e) => e.cart.dataCart2);
  const methodPay = useAppSelector((e) => e.cart.methodPay);
  const [checkOutMutation, { isLoading: checkoutLoading }] =
    useCheckOutCartMutation();
  const [paymentMutation, { isLoading: paymentLoading }] =
    usePaymentCartMutation();
  const voucher = useAppSelector((e) => e.user.voucher);
  const naviagte = useNavigate();
  const noteData = useAppSelector((e) => e.cart.note);
  const cartStorev2 = useAppSelector((e) => e.cart.dataCart2);

  function handleDiscount(price: number, discount: number) {
    return Number(price) - (Number(price) * Number(discount)) / 100;
  }

  function handleTotalNo() {
    if (!data) {
      return 0;
    } else {
      const total = data.reduce(
        (acc, cur) =>
          acc +
          (Number(cur.price) - (Number(cur.price) * Number(cur.sale)) / 100) *
            cur.qtt,
        0,
      );
      return total;
    }
  }

  function handleTotal() {
    if (!data) {
      return 0;
    } else {
      const total = data.reduce(
        (acc, cur) =>
          acc +
          (Number(cur.price) - (Number(cur.price) * Number(cur.sale)) / 100) *
            cur.qtt,
        0,
      );
      if (!voucher) {
        return total;
      } else {
        return total - total * (Number(voucher.discount_value) / 100);
      }
    }
  }

  function handleVoucher() {
    if (!voucher) {
      return 0;
    } else {
      if (!data) {
        return 0;
      } else {
        const total = data.reduce(
          (acc, cur) =>
            acc +
            (Number(cur.price) - (Number(cur.price) * Number(cur.sale)) / 100) *
              cur.qtt,
          0,
        );
        return total * (Number(voucher.discount_value) / 100);
      }
    }
  }

  async function handlePayNext() {
    if (!token) {
      alert('Vui lòng đăng nhập để thanh toán');
    } else {
      if (!path.includes('thanh-toan')) {
        if (cartStorev2.length === 0) {
          return alert('Giỏ hàng đang trống');
        }

        naviagte('/gio-hang/thanh-toan');
      } else {
        const cart: CartCheckout[] = [];
        const checkOut: CheckOutData = {};

        cartStorev2.forEach((e) => {
          cart.push({
            id: e.id,
            quantity: e.qtt,
            unit: e.unit,
            price: handleDiscount(e.price, e.sale),
          });
        });

        checkOut.cart = cart;

        if (voucher) {
          checkOut.voucher_id = Number(voucher.id);
        }

        const Payment: PaymentData = {};

        const mapUser =
          user?.addresses && user?.addresses.length > 0
            ? user?.addresses.find((e) => e.active === 1)?.address
            : null;

        if (!mapUser) {
          return alert('Vui lòng nhập địa chỉ');
        }

        Payment.address = mapUser;
        Payment.name = user?.name;
        Payment.email = user?.email;
        Payment.phone = user?.phone;
        if (noteData.length > 0) {
          Payment.note = noteData;
        }

        if (methodPay === 0 || methodPay === null || methodPay === undefined) {
          return alert('Vui lòng chọn phương thức thanh toán');
        }

        Payment.payment_method = methodPay === 1 ? 'cod' : 'momo';
        // nếu có voucher
        if (voucher) {
          // checkout trước khi thanh toán
          const resultData = await checkOutMutation(checkOut)
            .unwrap()
            .then((data) => {
              return data;
            })
            .catch(() => {
              return null;
            });
          // nếu checkout thất bại
          if (!resultData) {
            return alert('Đặt hàng thất bại');
          }
          // nếu checkout thành công
          else if (resultData) {
            // check thanh toán
            const resultPayment = await paymentMutation({
              ...Payment,
              voucher_id: voucher.id,
            })
              .unwrap()
              .then((data) => {
                return data;
              })
              .catch(() => {
                return null;
              });
            // nếu đặt hàng thất bại

            if (!resultPayment) {
              return alert('Đặt hàng thất bại');
            }
            // nếu đặt hàng thành công
            else {
              if (resultPayment.payUrl) {
                console.log(resultPayment.payUrl);
                return (location.href = resultPayment.payUrl);

                // return naviagte(resultPayment.payUrl);
              } else {
                dispatch(clearCart());
                dispatch(ClearVoucher());
                alert('Đặt hàng thành công');
                naviagte('/thong-tin-nguoi-dung/don-hang');
                location.reload();
              }
            }
          }
        }
        // không có voucher
        else if (!voucher) {
          // checkout trước khi thanh toán
          const resultPayment = await paymentMutation(Payment)
            .unwrap()
            .then((data) => {
              return data;
            })
            .catch(() => {
              return null;
            });

          // nếu checkout thất bại
          if (!resultPayment) {
            return alert('Đặt hàng thất bại');
          }

          // nếu đặt hàng thành công
          else {
            if (resultPayment.payUrl) {
              console.log(resultPayment.payUrl);
              return (location.href = resultPayment.payUrl);
              // return naviagte(resultPayment.payUrl);
            } else {
              dispatch(clearCart());
              dispatch(ClearVoucher());
              alert('Đặt hàng thành công');
              naviagte('/thong-tin-nguoi-dung/don-hang');
              location.reload();
            }
          }
        }
      }
    }
  }

  function handleTotalLogin() {
    if (dataCartV2.length === 0) {
      return 0;
    } else {
      const totalPrice = dataCartV2.reduce(
        (acc, cur) =>
          acc +
          (Number(cur.price) - (Number(cur.price) * Number(cur.sale)) / 100) *
            cur.qtt,
        0,
      );
      return totalPrice;
    }
  }

  function handleVoucherLogin() {
    if (!voucher) {
      return 0;
    } else {
      if (dataCartV2.length === 0) {
        return 0;
      } else {
        const total = dataCartV2.reduce(
          (acc, cur) =>
            acc +
            (Number(cur.price) - (Number(cur.price) * Number(cur.sale)) / 100) *
              cur.qtt,
          0,
        );
        return total * (Number(voucher.discount_value) / 100);
      }
    }
  }

  function handleTotalPriceLogin() {
    if (dataCartV2.length === 0) {
      return 0;
    } else {
      const total = dataCartV2.reduce(
        (acc, cur) =>
          acc +
          (Number(cur.price) - (Number(cur.price) * Number(cur.sale)) / 100) *
            cur.qtt,
        0,
      );

      if (!voucher) {
        return total;
      } else {
        return total - total * (Number(voucher.discount_value) / 100);
      }
    }
  }

  return (
    <>
      <div className="w-full xl:max-w-[404px] lg:max-w-[350px] shadow-[0_0_3px_rgba(0,0,0,0.25)] md:rounded-[10px] px-[27px] py-[11px] self-start">
        {token ? (
          <button
            onClick={() => setVoucher(true)}
            className="w-full min-h-[46px] bg-[#004D40] shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-[10px] flex flex-row items-center justify-between px-[20px] text-[#DDF16E] xl:text-[16px] text-[14px] font-medium"
          >
            <p>Nhập mã giảm giá để được ưu đãi</p>
            <span>
              <FaChevronRight />
            </span>
          </button>
        ) : (
          <button className="w-full min-h-[46px] bg-[#004D40] shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-[10px] flex flex-row items-center justify-between px-[20px] text-[#DDF16E] xl:text-[16px] text-[14px] font-medium">
            Đăng nhập để sử dụng mã giảm giá
          </button>
        )}

        <div className="pt-[26px]"></div>
        <div className="flex flex-col gap-[10px]">
          <FieldInfor
            weight="400"
            size="16px"
            label="Tổng sản phẩm:"
            value={
              token
                ? dataCartV2.reduce((acc, cur) => acc + cur.qtt, 0)
                : data
                  ? data.reduce((acc, cur) => acc + cur.qtt, 0)
                  : 0
            }
          />
          {token && (
            <FieldInfor
              weight="400"
              size="16px"
              color="#004D40"
              label="Giảm giá từ voucher:"
              value={
                token
                  ? ChangeCurrentcy(handleVoucherLogin())
                  : ChangeCurrentcy(handleVoucher())
              }
            />
          )}

          <FieldInfor
            weight="400"
            size="16px"
            label="Tổng tiền sản phẩm:"
            value={
              token
                ? ChangeCurrentcy(handleTotalLogin())
                : ChangeCurrentcy(handleTotalNo())
            }
          />
        </div>
        <div className="pt-[16px]"></div>
        <div className="h-[2px] w-full bg-[#ECD6D6]"></div>
        <div className="pt-[9px]"></div>
        <FieldInfor
          size="22px"
          color1="#000"
          color2="#01E778"
          label="Tổng tiền:"
          value={
            token
              ? ChangeCurrentcy(handleTotalPriceLogin())
              : ChangeCurrentcy(handleTotal())
          }
          weight="500"
        />
        <div className="pt-[20px]"></div>
        <button
          onClick={handlePayNext}
          className="w-full min-h-[46px] bg-[#004D40] shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-[50px] px-[20px] text-[#DDF16E] text-[16px] font-semibold"
        >
          Mua hàng
        </button>
        <div className="pt-[14px]"></div>
      </div>
      {checkoutLoading && <LoadingModal />}
      {paymentLoading && <LoadingModal />}
    </>
  );
};

export default IFCart;
