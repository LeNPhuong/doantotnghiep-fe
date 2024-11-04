import React from 'react';
import PayCartItemMethod from './PayCartItemMethod';

const PayCartMethod: React.FC<{}> = () => {
  return (
    <div className="mt-[20px]">
      <p className="text-[18px] font-medium mb-[14px]">
        Chọn phương thức thanh toán
      </p>
      <div className="flex flex-col shadow-[0_0_3px_rgba(0,0,0,0.25)] md:rounded-[10px]">
        <PayCartItemMethod
          name="Thanh toán khi nhận hàng"
          img="/src/assets/icons/money.png"
          border={true}
        />
        <PayCartItemMethod
          name="Thanh toán bằng Momo"
          img="/src/assets/icons/momo.png"
          border={true}
        />
        <PayCartItemMethod
          name="Thanh toán bằng ATM"
          img="/src/assets/icons/bank.png"
          border={false}
        />
      </div>
    </div>
  );
};

export default PayCartMethod;
