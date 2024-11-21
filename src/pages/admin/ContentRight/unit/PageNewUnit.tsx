import React, { useState } from 'react';
import FIeldForm from '../FIeldForm';
import {
  useAdminCreateUnitMutation,
  useAdminGetUnitsQuery,
} from '../../../../service/apiAdmin';
import { Loading, LoadingModal } from '../../../../components';
import slugify from 'react-slugify';

const PageNewUnit: React.FC<{}> = () => {
  const { data, isFetching } = useAdminGetUnitsQuery();
  const [create, { isLoading }] = useAdminCreateUnitMutation();
  const [name, setName] = useState<string | undefined>('');

  if (isFetching) {
    return <Loading />;
  }

  function handleCreate() {
    if (name?.length === 0) {
      return alert('Vui lòng nhập tên đơn vị');
    }

    let check = false;
    data?.data.forEach((el) => {
      if (slugify(el.name) === slugify(name)) {
        check = true;
      }
    });

    if (check) {
      return alert('Đơn vị đã tồn tại');
    }

    if (name) {
      create(name)
        .unwrap()
        .then((data) => {
          alert('Tạo thành công');
          location.reload();
        })
        .catch(() => {
          alert('Có lỗi xảy ra trong lúc tạo');
        });
    }
  }

  return (
    <div>
      <div className="w-full flex flex-row items-start justify-between">
        <div className="w-full max-w-[48%] flex flex-col">
          <FIeldForm type="text" init={name!} setInit={setName!} label="Tên" />
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

export default PageNewUnit;
