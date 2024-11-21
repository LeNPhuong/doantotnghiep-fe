import React from 'react';
import { AdminOrder } from '../../../../../types/AdminType';
import {
  useAdminAcceptOrderMutation,
  useAdminCancelOrderMutation,
} from '../../../../../service/apiAdmin';
import { LoadingModal } from '../../../../../components';
import { useNavigate } from 'react-router-dom';

const ActionControl: React.FC<{ data: AdminOrder | undefined; id: number }> = ({
  data,
  id,
}) => {
  const [updateOrder, { isLoading: acceptLoading }] =
    useAdminAcceptOrderMutation();
  const [cancel, { isLoading: cancelLoading }] = useAdminCancelOrderMutation();
  const navigate = useNavigate();

  function handleCancleOrder() {
    const check = confirm('Bạn có chắc muốn huỷ đơn hàng');
    if (check) {
      cancel(id)
        .unwrap()
        .then(() => {
          alert('Đơn hàng đã được huỷ');
          navigate(-1);
        })
        .catch((data) => {
          console.log(data);

          alert(data.message);
        });
    }
  }

  function handleAcceptOrder() {
    const check = confirm('Bạn có chắc muốn cập nhật đơn hàng');
    if (check) {
      updateOrder(Number(data?.id))
        .unwrap()
        .then((data) => {
          alert(data.message);
          location.reload();
        })
        .catch((data) => {
          alert(data.error);
          location.reload();
        });
    }
  }

  return (
    <div className="flex flex-row pl-[30px]">
      {data?.status?.id! < 4 && (
        <>
          <button
            onClick={handleAcceptOrder}
            className="bg-[#014C3E] hover:bg-[#014c3ed4] rounded-[5px] py-[8px] px-[10px] font-medium text-[#00E875] mr-[10px]"
          >
            Duyệt đơn
          </button>
          <button
            onClick={handleCancleOrder}
            className="bg-red-500 rounded-[5px] py-[8px] px-[10px] font-medium text-[#fff]"
          >
            Huỷ đơn hàng
          </button>
        </>
      )}
      {acceptLoading && <LoadingModal />}
      {cancelLoading && <LoadingModal />}
    </div>
  );
};

export default ActionControl;
