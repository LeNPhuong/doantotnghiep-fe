import React from 'react';
import { ResultCategoryAdmin } from '../../../../types/AdminType';
import { Link } from 'react-router-dom';
import {
  useAdminActiveCategoryByIdMutation,
  useAdminDisableCategoryByIdMutation,
} from '../../../../service/apiAdmin';
import { LoadingModal } from '../../../../components';

const TypeItems: React.FC<{
  data: ResultCategoryAdmin;
}> = ({ data }) => {
  const [disable, { isLoading: disLoading }] =
    useAdminDisableCategoryByIdMutation();
  const [active, { isLoading: actLoading }] =
    useAdminActiveCategoryByIdMutation();

  function handleDisable() {
    const check = confirm('Bạn có chắc muốn vô hiệu loại hiện tại');
    if (check) {
      disable(data.id)
        .unwrap()
        .then(() => {
          alert('Cập nhật thành công');
          return location.reload();
        });
    }
  }

  function handleActive() {
    const check = confirm('Bạn có chắc muốn kích hoạt loại hiện tại');
    if (check) {
      active(data.id)
        .unwrap()
        .then(() => {
          alert('Cập nhật thành công');
          return location.reload();
        });
    }
  }

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr] content-center items-center w-full p-[10px]">
      <p className="capitalize max-w-[99%] text-[16px] text-center font-[500] w-full bg-[#014C3E] p-[8px] text-[#00E875] rounded-[5px]">
        {data.name}
      </p>
      <p
        className={`capitalize text-[16px] ${
          data.deleted_at ? 'bg-red-500' : 'bg-orange-500'
        } py-[10px] rounded-[8px] text-[#fff] text-center font-[500] w-full max-w-[99%]`}
      >
        {data.deleted_at ? 'Vô hiệu' : 'Hoạt động'}
      </p>
      <div className="flex flex-row justify-between">
        <Link className="w-full max-w-[48%]" to={`chinh-sua/${data.id}`}>
          <button className="text-[16px] w-full max-w-[99%] mx-[10px] font-[500] bg-[#38bdf8] py-[10px] text-[#fff] rounded-[5px] hover:bg-[#0369a1] duration-500">
            Chỉnh sửa
          </button>
        </Link>
        {data.deleted_at ? (
          <button
            onClick={handleActive}
            className="w-full max-w-[48%] bg-[#f97316] text-[#fff] rounded-[5px]"
          >
            Kích hoạt
          </button>
        ) : (
          <button
            onClick={handleDisable}
            className="w-full max-w-[48%] bg-[#ef4444] text-[#fff] rounded-[5px]"
          >
            Vô hiệu
          </button>
        )}
      </div>
      {disLoading && <LoadingModal />}
      {actLoading && <LoadingModal />}
    </div>
  );
};

export default TypeItems;
