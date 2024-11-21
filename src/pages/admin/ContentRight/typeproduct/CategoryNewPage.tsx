import React, { useState } from 'react';
import {
  useAdminCreateCategoryMutation,
  useAdminGetUnitsQuery,
} from '../../../../service/apiAdmin';
import { LoadingModal } from '../../../../components';
import FIeldForm from '../FIeldForm';
import slugify from 'react-slugify';

const CategoryNewPage: React.FC<{}> = () => {
  const [create, { isLoading }] = useAdminCreateCategoryMutation();
  const { data, isFetching } = useAdminGetUnitsQuery();

  const [name, setName] = useState<string | undefined>('');
  const [cateId, setCateId] = useState<string | undefined>('');

  function handleCreate() {
    if (name!.length === 0 || cateId?.length === 0) {
      return alert('Vui lòng điền đầy đủ thông tin');
    }

    const unitCustome = cateId?.split(',').map((e) => Number(e));

    const dataCore = {
      name: name!.toUpperCase(),
      key: slugify(name!),
      active: 1,
      unit_ids: unitCustome!,
    };

    create(dataCore)
      .unwrap()
      .then(() => {
        alert('Tạo thành công');
        return location.reload();
      })
      .catch(() => {
        alert('Tạo thất bại vui lòng kiểm tra lại thông tin');
        return location.reload();
      });
  }

  if (isFetching) return <LoadingModal />;

  return (
    <div>
      <div className="w-full flex flex-row items-start justify-between">
        <div className="w-full max-w-[48%] flex flex-col">
          <FIeldForm type="text" init={name!} setInit={setName!} label="Tên" />

          <FIeldForm
            type="text"
            init={cateId!}
            setInit={setCateId!}
            label="Mã đơn vị (Bảng đơn vị bên phải, hãy nhập mã ví dụ 1,2,3)"
          />
        </div>
        <div className="flex flex-col w-full max-w-[48%]">
          <p className="text-center font-[500] text-[18px] py-[20px]">
            Bảng chi tiết các loại đơn vị
          </p>
          <div className="w-full grid grid-cols-[1fr_1fr]">
            <div className="border-[1px] border-[#ccc] text-center">Mã</div>
            <div className="border-[1px] border-[#ccc] text-center">Tên</div>
          </div>
          {data?.data &&
            data?.data.map((e) => (
              <div key={e.id} className="w-full grid grid-cols-[1fr_1fr]">
                <div className="border-[1px] border-[#ccc] text-center">
                  {e.id}
                </div>
                <div className="border-[1px] border-[#ccc] text-center">
                  {e.name}
                </div>
              </div>
            ))}
        </div>
      </div>
      <button
        onClick={handleCreate}
        className="bg-[#014C3E] text-[#00E875] text-[20px] font-medium px-[25px] py-[8px] rounded"
      >
        Thêm
      </button>
      {isLoading && <LoadingModal />}
    </div>
  );
};

export default CategoryNewPage;
