import React from 'react';
import PayCartForm from './PayCartForm';

const PayCartIF: React.FC<{}> = () => {
  return (
    <>
      <p className="text-[18px] font-medium">Thông tin người đặt</p>
      <div className="flex flex-row flex-wrap justify-between">
        <PayCartForm label="Tên người mua" width="452px" />
        <PayCartForm label="Số điện thoại" width="452px" />
        <PayCartForm label="Email" width="452px" />
        <PayCartForm label="Địa chỉ" width="100%" />
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
