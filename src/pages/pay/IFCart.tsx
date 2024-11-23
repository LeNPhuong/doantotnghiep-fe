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
  const path = useLocation().pathname;
  const user = useAppSelector((e) => e.user.profile?.data);
  const dispatch = useAppDispatch();
  const token = JSON.parse(localStorage.getItem('token_access')!);
  const dataCart = useAppSelector((e) => e.cart.dataCart);
  const methodPay = useAppSelector((e) => e.cart.methodPay);
  const [checkOutMutation, { isLoading: checkoutLoading }] =
    useCheckOutCartMutation();
  const [paymentMutation, { isLoading: paymentLoading }] =
    usePaymentCartMutation();
  const voucher = useAppSelector((e) => e.user.voucher);
  const naviagte = useNavigate();

  function handleDiscount(price: string, discount: number) {
    return Number(price) - (Number(price) * Number(discount)) / 100;
  }

  function handleTotalNo() {
    if (!data) {
      return 0;
    } else {
      let total = data.reduce(
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
      let total = data.reduce(
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
        let total = data.reduce(
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

  function handlePayNext() {
    if (!token) {
      alert('Vui lòng đăng nhập để thanh toán');
    } else {
      if (!path.includes('thanh-toan')) {
        naviagte('/gio-hang/thanh-toan');
      } else {
        const cart: CartCheckout[] = [];
        const checkOut: CheckOutData = {};

        dataCart?.map((e) =>
          cart.push({
            id: e.id,
            quantity: e.qtt,
            unit: e.category.active_units[0].id.toString(),
            price: handleDiscount(e.price, e.sale),
          }),
        );

        checkOut.cart = cart;

        if (voucher) {
          checkOut.voucher_id = voucher.id;
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

        if (methodPay === 0 || methodPay === null || methodPay === undefined) {
          return alert('Vui lòng chọn phương thức thanh toán');
        }

        Payment.payment_method = methodPay === 1 ? 'cod' : 'momo';

        checkOutMutation(checkOut)
          .unwrap()
          .then((data) => {
            if (data.success) {
              paymentMutation(Payment)
                .unwrap()
                .then((data) => {
                  if (data.success) {
                    dispatch(clearCart());
                    dispatch(ClearVoucher());
                    alert('Đặt hàng thành công');
                    return naviagte('/thong-tin-nguoi-dung/don-hang');
                  }
                })
                .catch(() => {
                  return alert('Đặt hàng thất bại');
                });
            }
          })
          .catch(() => {
            alert('Đặt hàng thất bại');
          });
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
            value={data ? data.reduce((acc, cur) => acc + cur.qtt, 0) : 0}
          />
          {token && (
            <FieldInfor
              weight="400"
              size="16px"
              color="#004D40"
              label="Giảm giá từ voucher:"
              value={ChangeCurrentcy(handleVoucher())}
            />
          )}

          <FieldInfor
            weight="400"
            size="16px"
            label="Tổng tiền sản phẩm:"
            value={ChangeCurrentcy(handleTotalNo())}
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
          value={ChangeCurrentcy(handleTotal())}
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
