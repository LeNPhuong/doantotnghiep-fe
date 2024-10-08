import React from 'react';
import Logo from '../other/Logo';

const FooterInfor: React.FC<{}> = () => {
  return (
    <div className="flex flex-col">
      <Logo widthSet={300} />
      <p className="text-[20px] font-semibold">Tien Loi Xanh VIETNAM</p>
      <p className="text-[20px]">Copyright © 2024 TienLoiXanh</p>
      <p className="text-[18px] font-bold">
        Địa chỉ:{' '}
        <span className="font-normal text-[#000] inline-block">
          Tòa nhà QTSC9 (toà T), đường Tô Ký, phường Tân Chánh Hiệp, quận 12, TP
          HCM.
        </span>
      </p>
      <p className="text-[18px] text-[#37764C] font-bold mb-[15px]">
        Người đại diện:{' '}
        <span className="text-[#000] inline-block">Tiện Lợi Xanh</span>
      </p>
      <p className="text-[18px] text-[#37764C] font-bold">
        Email:{' '}
        <span className="font-normal text-[#000] inline-block">
          tienloixanh@gmail.com
        </span>
      </p>
      <p className="font-bold text-[#37764C]">Hotline: 1900 1880</p>
      <img
        src="/src/assets/img/img-footer.png"
        className="w-full max-w-[134px]"
        alt=""
      />
    </div>
  );
};

export default FooterInfor;
