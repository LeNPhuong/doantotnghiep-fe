import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BoxInforUser from './BoxInforUser';
import BoxInforPrd from './BoxInforPrd';

const BoxDetails: React.FC = () => {
  const params = useParams().id;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <p className="text-[22px] font-[500] mt-[20px] uppercase text-orange-500">
        Thông tin của đơn hàng
      </p>
      {/* <p className="text-[22px] font-[500] mt-[20px]">#{data?.code}</p> */}
      <p className="text-[14px] font-[500] text-stone-400 mb-[10px]">
        {/* Đặt vào lúc: {data?.date} */}
      </p>

      <div className="w-full flex flex-row gap-[10px]">
        {/* <BoxInforUser data={data!} /> */}
        {/* <BoxInforPrd data={data!} /> */}
      </div>
      <button
        onClick={() => navigate(-1)}
        className="bg-orange-500 text-[16px] text-[#fff] font-[500] self-start py-[6px] px-[15px] rounded-[6px] hover:bg-orange-700 duration-500 mt-[30px]"
      >
        Quay lại
      </button>
    </div>
  );
};

export default BoxDetails;
