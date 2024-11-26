import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAdminGetOrderByIdQuery } from '../../../../../service/apiAdmin';
import { Loading } from '../../../../../components';
import { ChangeDate } from '../../../../../ultils/ChangeDate';
import ItemDetails from './ItemDetails';
import AdminDetailsInfor from './AdminDetailsInfor';
import ActionControl from './ActionControl';

const BoxDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isFetching } = useAdminGetOrderByIdQuery(Number(id!));

  if (isFetching) return <Loading />;

  return (
    <div className="flex flex-col">
      <div className="flex-col bg-[#004D40] py-[15px] px-[30px] rounded-t-[8px] mt-[10px]">
        <h2 className="text-[#DDF16E] text-[26px] font-medium">
          {data?.data.status.text_status}
        </h2>
        <div className="flex justify-between items-center flex-wrap text-white">
          <p className="text-[20px] font-medium">
            Mã đơn hàng: {data?.data?.code}
          </p>
          <p className="xl:text-[18px] md:text-[14px] text-[16px] font-medium">
            Đặt ngày {ChangeDate(data?.data?.created_at)}
          </p>
        </div>
      </div>

      <div className="w-full shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-b-[8px] pb-[20px]">
        {data?.data?.order_details?.map((e, index) => (
          <ItemDetails key={index} data={e} />
        ))}

        <AdminDetailsInfor data={data?.data} />
        <ActionControl id={Number(id)} data={data?.data} />
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
