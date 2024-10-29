import React from 'react';
import { Link } from 'react-router-dom';
import { TienLoiXanhImg } from '../../assets/icons';

const FooterInfor: React.FC<{}> = () => {
  return (
    <div className="flex flex-col gap-[5px] md:items-start items-center">
      <Link to="" className="">
        <img
          src={TienLoiXanhImg}
          className="w-full xl:max-w-[300px] md:max-w-[250px] max-w-[250px]"
          alt=""
        />
      </Link>
      <p className="xl:text-[20px] md:text-[17px] font-semibold">
        Tien Loi Xanh VIETNAM
      </p>
      <p className="xl:text-[20px] md:text-[17px]">
        Copyright © 2024 TienLoiXanh
      </p>
      <p className="xl:text-[18px] md:text-[15px] font-bold md:text-start text-center">
        Địa chỉ:{' '}
        <span className="font-normal text-[#000] inline-block ">
          Tòa nhà QTSC9 (toà T), đường Tô Ký, phường Tân Chánh Hiệp, quận 12, TP
          HCM.
        </span>
      </p>
      <p className="xl:text-[18px] md:text-[15px] text-[#37764C] font-bold">
        Người đại diện:{' '}
        <span className="text-[#000] inline-block">Tiện Lợi Xanh</span>
      </p>
      <p className="xl:text-[18px] md:text-[15px] text-[#37764C] font-bold">
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
