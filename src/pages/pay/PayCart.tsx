import React from 'react';
import PayCartIF from './PayCartIF';
import PayCartMethod from './PayCartMethod';

const PayCart: React.FC<{}> = () => {
  return (
    <>
      <div className="flex flex-col shadow-[0_0_3px_rgba(0,0,0,0.25)] md:rounded-[10px] pb-[41px] pt-[29px] px-[24px]">
        <PayCartIF />
      </div>
      <PayCartMethod />
    </>
  );
};

export default PayCart;
