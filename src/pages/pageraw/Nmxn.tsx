import React, { useState } from 'react';
import FormAuth from '../../components/other/FormAuth';
import LayoutAuth from '../../layout/LayoutAuth';

const Nmxn = () => {
  const [init, setInit] = useState(""); // Initialize the state

  return (
    <LayoutAuth label="Mã xác nhận">
      <form className="max-w-[396px] w-full mx-auto">
        <FormAuth h="58px" label="Nhập mã xác nhận" init={init} setInit={setInit} />
        <div className="mt-[16px]"></div>

        <div className="flex w-full justify-center my-[30px]">
          <button
            type="submit"
            className="w-full max-w-[232px] min-h-[58px] max-h-[58px] bg-[#004D40] text-[24px] text-[#DDF16E] font-semibold rounded-[5px]"
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </LayoutAuth>
  );
};

export default Nmxn;