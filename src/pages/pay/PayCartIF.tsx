import React, { useEffect } from 'react';
import PayCartForm from './PayCartForm';
import { useGetProfileV2Query } from '../../service/profile';
import { Loading } from '../../components';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setNote } from '../../redux/cart/CartSlice';
import { setProfile } from '../../redux/user/UserSlice';

const PayCartIF: React.FC<object> = () => {
  const note = useAppSelector((e) => e.cart.note);
  const dispatch = useAppDispatch();
  const { data, isFetching, isError, isSuccess } = useGetProfileV2Query();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setProfile(data));
    }
  }, []);

  if (isFetching) return <Loading />;

  if (isError) {
    alert('Vui lòng đăng nhập lại');
    return <Navigate to="/home" />;
  }

  return (
    <>
      <p className="text-[18px] font-medium">Thông tin người đặt</p>
      <div className="flex flex-row flex-wrap justify-between">
        {data?.data.name && (
          <PayCartForm
            value={data?.data.name as string}
            label="Tên người mua"
            width="452px"
          />
        )}
        {data?.data.phone && (
          <PayCartForm
            value={data?.data.phone as string}
            label="Số điện thoại"
            width="452px"
          />
        )}

        {data?.data.email && (
          <PayCartForm
            value={data?.data.email as string}
            label="Email"
            width="452px"
          />
        )}

        {data?.data?.addresses?.find((e) => e.active === 1) ? (
          <PayCartForm
            value={data?.data?.addresses?.find((e) => e.active === 1)!.address}
            label="Địa chỉ (Nếu chưa có vào trang thông tin và chọn quản lý địa chỉ và thêm địa chỉ)"
            width="100%"
          />
        ) : (
          <p className="w-full p-[10px] bg-red-500 mt-[15px] font-medium text-[#fff]">
            Bạn chưa có địa chỉ ! Vui lòng cập nhật địa chỉ trong phần chi tiết
            người dùng
          </p>
        )}

        <textarea
          className="mt-[15px] w-full border-[1px] border-[#DAB4B4] rounded-[5px] p-[13px] min-h-[178px] max-h-[178px] outline-none"
          name=""
          id=""
          placeholder="Ghi chú (Có thể bỏ qua)"
          value={note}
          onChange={(e) => dispatch(setNote(e.target.value))}
        ></textarea>
      </div>
    </>
  );
};

export default PayCartIF;
