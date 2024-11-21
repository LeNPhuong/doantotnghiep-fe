import React, { useEffect, useState } from 'react';
import FIeldForm from '../FIeldForm';
import {
  useAdminGetCategoryByIdQuery,
  useAdminGetUnitsQuery,
  useAdminUpdateCategoryMutation,
} from '../../../../service/apiAdmin';
import { useParams } from 'react-router-dom';
import { Loading, LoadingModal } from '../../../../components';
import { IFUpdateCategory } from '../../../../types/AdminType';
import slugify from 'react-slugify';

const EditCategoryPage: React.FC<{}> = () => {
  const { id } = useParams();

  const { data: dataCate, isFetching: cateLoading } =
    useAdminGetCategoryByIdQuery(Number(id));
  const { data: dataUnits, isFetching: unitLoading } = useAdminGetUnitsQuery();
  const [update, { isLoading: updateLoading }] =
    useAdminUpdateCategoryMutation();

  const [name, setName] = useState<string | undefined>('');
  const [active, setActive] = useState<boolean>(false);
  const [unit, setUnit] = useState<string | undefined>('');

  useEffect(() => {
    if (dataCate?.data) {
      setName(dataCate.data.name);

      if (dataCate.data.deleted_at) {
        setActive(false);
      } else {
        setActive(true);
      }

      let stringUnit: string = '';

      dataCate.data.units.map(
        (e) =>
          (stringUnit +=
            e.id === dataCate.data.units[dataCate.data.units.length - 1].id
              ? e.id.toString()
              : e.id.toString() + ','),
      );

      setUnit(stringUnit);
    }
  }, [dataCate?.data]);

  if (cateLoading || unitLoading) return <Loading />;

  function handleUpdate() {
    const check = confirm('Bạn có muốn cập nhật');

    if (check) {
      const objUpdate: IFUpdateCategory = {};

      const units: { unit_id: number }[] = [];

      const arrUnitsParse = unit?.split(',');

      arrUnitsParse?.map((e) =>
        units.push({
          unit_id: Number(e),
        }),
      );

      objUpdate.name = name;
      objUpdate.key = slugify(name);
      objUpdate.active = active;
      objUpdate.units = units;

      update({ id: Number(id), data: objUpdate })
        .unwrap()
        .then((data) => {
          alert(data.message);
          location.reload();
        })
        .catch(() => {
          alert('Cập nhật thất bại');
          location.reload();
        });
    }
  }

  return (
    <div>
      <div className="w-full flex flex-row justify-between">
        <div className="w-full max-w-[48%] flex flex-col">
          <FIeldForm type="text" init={name!} setInit={setName!} label="Tên" />
          <FIeldForm
            type="text"
            init={unit!}
            setInit={setUnit!}
            label="Mã đơn vị (Bảng đơn vị bên dưới, hãy nhập mã ví dụ 1,2,3)"
          />
          <div className="flex flex-col w-full">
            <p className="text-center font-[500] text-[18px] py-[20px]">
              Bảng chi tiết các loại đơn vị
            </p>
            <div className="w-full grid grid-cols-[1fr_1fr]">
              <div className="border-[1px] border-[#ccc] text-center">Mã</div>
              <div className="border-[1px] border-[#ccc] text-center">Tên</div>
            </div>
            {dataUnits?.data &&
              dataUnits?.data.map((e) => (
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
        <div className="w-full max-w-[48%] flex flex-col">
          <div className="flex flex-col w-full mb-[10px]">
            <label htmlFor="" className="mb-[3px] text-[18px] font-medium">
              Trạng thái
            </label>
            <select
              className="outline-none border-[#014C3E] border-[2px] text-[18px] px-[10px] py-[5px] rounded-[5px]"
              name=""
              id=""
              value={active ? 1 : 0}
              onChange={(e) =>
                setActive(Number(e.target.value) === 1 ? true : false)
              }
            >
              <option value={1}>Hoạt động</option>
              <option value={0}>Vô hiệu</option>
            </select>
          </div>
        </div>
      </div>
      <button
        onClick={handleUpdate}
        className="bg-[#014C3E] text-[#00E875] text-[20px] font-medium px-[25px] py-[8px] rounded mt-[20px]"
      >
        Cập nhật
      </button>
      {updateLoading && <LoadingModal />}
    </div>
  );
};

export default EditCategoryPage;
