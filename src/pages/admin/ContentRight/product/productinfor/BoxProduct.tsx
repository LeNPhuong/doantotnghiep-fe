import React, { useState } from 'react';
import Items from './Items';
import Paginate from './Paginate';
import { useAdminGetProductQuery } from '../../../../../service/apiAdmin';
import { Loading } from '../../../../../components';
import { DataMenuList } from '../../../../../data';
import slugify from 'react-slugify';

const BoxProduct: React.FC<{}> = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isFetching } = useAdminGetProductQuery();
  const [fillter, setFillter] = useState<string>('');
  const [fillSelect, setFillSelect] = useState<string>('');

  if (isFetching) return <Loading />;
  console.log(fillter);

  return (
    <div className="p-[10px] w-full shadow-[0_0_15px_#ccc] rounded-[8px] h-full flex flex-col">
      {/*  */}
      <div className="w-full flex justify-center py-[12px]">
        <div className="flex flex-row items-center w-full">
          <input
            type="text"
            placeholder="Nhập tên sản phẩm cần tìm"
            className="border-[#014C3E] border-[2px] px-[5px] outline-none h-[30px] w-full max-w-[400px] mx-auto"
            value={fillter}
            onChange={(e) => {
              setFillter(e.target.value);
              setFillSelect('');
            }}
          />
        </div>
        <div className="self-end">
          <select
            className="w-full min-w-[200px] text-[18px] py-[5px] outline-none border-[2px] border-[#014C3E]"
            name=""
            id=""
            value={fillSelect}
            onChange={(e) => {
              setFillSelect(e.target.value);
              setFillter('');
            }}
          >
            <option value="">Tất cả</option>
            {DataMenuList.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* header */}
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_2fr] content-center w-full bg-gray-200 p-[10px] rounded-[8px]">
        <p className="capitalize text-center text-[14px] font-[500]">
          hình ảnh
        </p>
        <p className="capitalize text-center text-[14px] font-[500]">tên</p>
        <p className="capitalize text-center text-[14px] font-[500]">giá</p>
        <p className="capitalize text-center text-[14px] font-[500]">
          Khuyến mãi
        </p>

        <p className="capitalize text-center text-[14px] font-[500]">
          trạng thái
        </p>
        <p className="capitalize text-center text-[14px] font-[500]">
          hành động
        </p>
      </div>
      {/* body */}

      {fillter?.length === 0 && fillSelect.length === 0 && (
        <div className="flex flex-col gap-[20px] mt-[10px]">
          {data?.data?.map(
            (data, index) =>
              index >= (page - 1) * 5 &&
              index < page * 5 && <Items key={data.id} data={data} />,
          )}
        </div>
      )}

      {fillter?.length !== 0 && (
        <div className="flex flex-col gap-[20px] mt-[10px]">
          {data?.data?.map(
            (data) =>
              slugify(data.name)
                // .toLowerCase()
                // .normalize('NFD')
                // .replace(/[\u0300-\u036f]/g, '')
                .includes(slugify(fillter!)) && (
                <Items key={data.id} data={data} />
              ),
          )}
        </div>
      )}

      {fillSelect.length !== 0 && (
        <div className="flex flex-col gap-[20px] mt-[10px]">
          {data?.data?.map(
            (data) =>
              data.cate_id.toString() === fillSelect.toString() && (
                <Items key={data.id} data={data} />
              ),
          )}
        </div>
      )}

      {/* paginate */}
      <div className="my-[40px] flex flex-row justify-center">
        {fillter?.length === 0 && fillSelect.length === 0 && (
          <Paginate
            page={page}
            setPage={setPage}
            length={data?.data ? data?.data?.length : 0}
          />
        )}
      </div>
    </div>
  );
};

export default BoxProduct;
