import React, { useEffect, useState } from 'react';
import ItemOrderDetails from './ItemOrderDetails';
import InforOrderDetails from './InforOrderDetails';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useCancleOrderByIdMutation,
  useGetOrderByIdMutation,
} from '../../../service/profile';
import { OrderByCode } from '../../../types/IFProducts';
import { Loading, LoadingModal } from '../../../components';
import { ChangeDate } from '../../../ultils/ChangeDate';

const DetailsOrder: React.FC<object> = () => {
  const [details, setDetails] = useState<OrderByCode | null | undefined>(
    undefined,
  );
  const code = useParams().code?.toUpperCase();
  const [getOrder, { isLoading }] = useGetOrderByIdMutation();
  const [cancel, { isLoading: LoadingCancel }] = useCancleOrderByIdMutation();
  const navigate = useNavigate();

  useEffect(() => {
    getOrder({ code: code! })
      .unwrap()
      .then((data) => {
        setDetails(data);
      })
      .catch(() => {
        setDetails(null);
      });
  }, [code]);

  if (isLoading) {
    return <Loading />;
  }

  if (!details) {
    return <p>Không tìm thấy đơn hàng của mã {code}</p>;
  }

  function handleCancel() {
    const check = confirm('Bạn có muốn huỷ đơn hàng');
    if (check) {
      cancel({ id: details?.data.id! })
        .unwrap()
        .then((data) => {
          alert('Huỷ đơn hàng thành công');
          return navigate('/thong-tin-nguoi-dung/don-hang');
        })
        .catch((data) => {
          alert('Huỷ thất bại');
        });
    }
  }

  return (
    <>
      <div className="flex-col bg-[#004D40] md:py-[30px] py-[15px] md:px-[27px] px-[10px] md:rounded-t-[8px]">
        <h2 className="text-[#DDF16E] xl:text-[40px] md:text-[24px] text-[26px] font-medium">
          {details?.data.status.text_status}
        </h2>
        <div className="flex justify-between items-center flex-wrap text-white">
          <p className="xl:text-[24px] md:text-[18px] text-[20px] font-medium">
            Mã đơn hàng: {details?.data.code}
          </p>
          <p className="xl:text-[18px] md:text-[14px] text-[16px] font-medium">
            Hoàn thành ngày {ChangeDate(details?.data.created_at!)}
          </p>
        </div>
      </div>

      <div className="w-full shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-b-[8px] pb-[20px]">
        {details?.data.order_details.map((e) => (
          <ItemOrderDetails key={e.id} data={e} />
        ))}

        <InforOrderDetails details={details!} />
        <div className="flex flex-row justify-center">
          {details.data.status.text_status === 'Đã hủy' ? null : (
            <button
              onClick={handleCancel}
              className="bg-red-500 text-[#fff] text-[18px] rounded-[5px] px-[10px] py-[8px]"
            >
              Huỷ đơn hàng
            </button>
          )}
        </div>
      </div>
      {LoadingCancel && <LoadingModal />}
    </>
  );
};

export default DetailsOrder;
