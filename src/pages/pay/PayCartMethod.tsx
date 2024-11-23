import React from 'react';
import PayCartItemMethod from './PayCartItemMethod';

const PayCartMethod: React.FC<object> = () => {
  return (
    <div className="mt-[20px]">
      <p className="text-[18px] font-medium mb-[14px]">
        Chọn phương thức thanh toán
      </p>
      <div className="flex flex-col shadow-[0_0_3px_rgba(0,0,0,0.25)] md:rounded-[10px]">
        <PayCartItemMethod
          name="Thanh toán khi nhận hàng"
          img="/src/assets/icons/money.png"
          border={false}
          value={1}
        />
      </div>
    </div>
  );
};

export default PayCartMethod;
