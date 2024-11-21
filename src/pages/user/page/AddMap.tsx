import React, { SetStateAction, useEffect, useState } from 'react';
import { callMap } from '../../../service/mapAPI';
import { useAddMapMutation } from '../../../service/profile';
import { LoadingModal } from '../../../components';

const AddMap: React.FC<{
  setAddModal: React.Dispatch<SetStateAction<boolean>>;
}> = ({ setAddModal }) => {
  const [mapData, setMapdata] = useState<string>('');
  const [arrMap, setArrMap] = useState<any>(null);
  const [active, setActive] = useState<boolean>(false);
  const [create, { isLoading }] = useAddMapMutation();

  useEffect(() => {
    (async function () {
      if (mapData.length > 2) {
        const data = await callMap(mapData);
        if (data.length !== 0) {
          setArrMap(data.predictions);
        } else {
          setArrMap(null);
        }
      }
    })();
  }, [mapData]);

  function handleSave() {
    if (mapData.length === 0) {
      alert('Vui lòng nhập địa chỉ');
    } else {
      const map = {
        address: mapData,
        active: active,
      };
      create(map)
        .unwrap()
        .then((data) => {
          (data);

          if (data.success) {
            alert('Thêm địa chỉ thành công');
            setActive(false);
            setMapdata('');
            setArrMap(null);
            setAddModal(false);
            location.reload();
          }
        });
    }
  }

  return (
    <>
      <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 pt-[50px]">
        <div className="bg-white p-3 rounded-xl w-[100%] max-w-[600px] mx-auto space-y-6 relative">
          <h2 className="text-lg font-semibold text-center">
            {/* {isEditing ? 'Sửa địa chỉ' : 'Thêm địa chỉ mới'} */}
          </h2>
          <div className="space-y-4 relative">
            <div className="flex flex-col">
              <label className="text-[#949191]">Địa chỉ</label>
              <input
                type="text"
                name="name"
                value={mapData}
                onChange={(e) => setMapdata(e.target.value)}
                className="border-b-2 pb-2 outline-none"
              />
            </div>
            <div className="flex flex-row items-start gap-[5px]">
              <input
                checked={active}
                onChange={() => setActive(!active)}
                type="checkbox"
                name=""
                className="mt-[5px]"
                id=""
              />
              <label htmlFor="">Đặt làm địa chỉ mặc định</label>
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setAddModal(false)}
              className="text-gray-500"
            >
              Hủy
            </button>
            <button
              onClick={handleSave}
              className="bg-[#004D40] text-white px-4 py-2 rounded-lg"
            >
              Lưu
            </button>
          </div>

          {mapData.length !== 0 && (
            <div className="flex flex-col text-[16px] gap-[10px] bg-white absolute left-0 right-0 p-[10px] rounded-[5px]">
              {arrMap !== null &&
                arrMap.map((e, index: number) => (
                  <div
                    key={index}
                    onClick={() => setMapdata(e.description)}
                    className="pb-[10px] border-b-[2px] border-b-[#ccc] cursor-pointer"
                  >
                    {e.description}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      {isLoading && <LoadingModal />}
    </>
  );
};

export default AddMap;
