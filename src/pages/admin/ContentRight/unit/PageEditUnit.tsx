import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  useAdminGetUnitByIdQuery,
  useAdminUpdateUnitMutation,
} from '../../../../service/apiAdmin';
import { LoadingModal } from '../../../../components';
import FIeldForm from '../FIeldForm';

const PageEditUnit: React.FC<{}> = () => {
  const { id } = useParams();
  const { data, isFetching } = useAdminGetUnitByIdQuery(Number(id!));
  const [update, { isLoading }] = useAdminUpdateUnitMutation();
  const [name, setName] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (data) {
      console.log(data.data.name);

      setName(data.data.name);
    }
  }, [data]);

  if (isFetching) {
    return <LoadingModal />;
  }

  function handleUpdate() {
    if (name && name.length === 0) {
      return alert('Vui lòng nhập tên đơn vị');
    }
    console.log(name);

    update({ id: Number(id!), data: { name: name!, active: true } })
      .unwrap()
      .then((data) => {
        alert('Cập nhật thành công');
        location.reload();
      })
      .catch(() => {
        alert('Cập nhật thất bại');
      });
  }

  return (
    <div>
      <div className="w-full flex flex-row justify-between">
        <div className="w-full max-w-[48%] flex flex-col">
          {name && (
            <FIeldForm type="text" init={name!} setInit={setName} label="Tên" />
          )}
        </div>
      </div>
      <button
        onClick={handleUpdate}
        className="bg-[#014C3E] text-[#00E875] text-[20px] font-medium px-[25px] py-[8px] rounded mt-[20px]"
      >
        Cập nhật
      </button>
      {isLoading && <LoadingModal />}
    </div>
  );
};

export default PageEditUnit;
