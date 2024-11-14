import React from 'react';
import PayCartForm from './PayCartForm';
import { useAppSelector } from '../../redux/store';

const PayCartIF: React.FC<{}> = () => {
  const user = useAppSelector((e) => e.user.profile);

  return (
    <>
      <p className="text-[18px] font-medium">Thông tin người đặt</p>
      <div className="flex flex-row flex-wrap justify-between">
        <PayCartForm
          value={user?.data.name!}
          label="Tên người mua"
          width="452px"
        />
        <PayCartForm
          value={user?.data.phone!}
          label="Số điện thoại"
          width="452px"
        />
        <PayCartForm value={user?.data.email!} label="Email" width="452px" />
        <PayCartForm
          value={user?.data?.addresses?.find((e) => e.active === 1)?.address!}
          label="Địa chỉ (Nếu chưa có vào trang thông tin và chọn quản lý địa chỉ và thêm địa chỉ)"
          width="100%"
        />
        <textarea
          className="mt-[15px] w-full border-[1px] border-[#DAB4B4] rounded-[5px] p-[13px] min-h-[178px] max-h-[178px] outline-none"
          name=""
          id=""
          placeholder="Ghi chú (Có thể bỏ qua)"
        ></textarea>
      </div>
    </>
  );
};

export default PayCartIF;
