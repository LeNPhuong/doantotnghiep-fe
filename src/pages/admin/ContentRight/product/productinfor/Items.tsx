import React from 'react';
import { Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import { Link } from 'react-router-dom';
import { IFProduct } from '../../../../../types/IFProducts';
import ChangeCurrentcy from '../../../../../ultils/ChangeCurrentcy';
import {
  useAdminActiveProductByIdMutation,
  useAdminDeleteProductByIdMutation,
} from '../../../../../service/apiAdmin';
import { LoadingModal } from '../../../../../components';

const Items: React.FC<{ data: IFProduct }> = ({ data }) => {
  const [disable, { isLoading: Disload }] = useAdminDeleteProductByIdMutation();
  const [active, { isLoading: Actload }] = useAdminActiveProductByIdMutation();

  function disStatus() {
    const result = confirm('Bạn có muốn vô hiệu hoá sản phẩm này');
    if (result) {
      disable(data.id)
        .unwrap()
        .then((data) => {
          alert(data.message);
          return location.reload();
        })
        .catch(() => {});
    }
  }

  function actStatus() {
    const result = confirm('Bạn có muốn kích hoạt sản phẩm này');
    if (result) {
      active(data.id)
        .unwrap()
        .then((data) => {
          alert(data.message);
          return location.reload();
        })
        .catch(() => {});
    }
  }

  return (
    <>
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_2fr] items-center content-center justify-items-center w-full">
        {/* hình ảnh */}
        <div className=" rounded-[8px] shadow-[0_0_6px_#0000004b]">
          <div className="w-[85px] min-h-[85px] rounded-[8px] overflow-hidden">
            <img
              className="min-h-[85px] max-h-[85px] object-fill"
              src={data.img}
              alt=""
            />
          </div>
        </div>
        {/* tên */}
        <p className="text-center text-[14px] font-[500]">{data.name}</p>
        {/* giá */}
        <p className="text-[16px] font-[500] text-red-600">
          {ChangeCurrentcy(Number(data.price))}
        </p>

        {/* giá */}
        <p className="text-[16px] font-[500] text-red-600">{data.sale}%</p>
        {/* trạng thái */}

        <Typography
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'end',
            gap: '10px',
            textAlign: 'center',
          }}
        >
          <span
            className={`text-[14px] font-[500] ${data.active ? 'text-[#ea580c]' : 'text-[#9ca3af]'}`}
          >
            {data.active ? 'Đang bán' : 'Không bán'}
          </span>
          <span>
            {data.active ? (
              <DoneIcon
                sx={{
                  color: '#ea580c',
                }}
              />
            ) : (
              <DoNotDisturbIcon
                sx={{
                  color: '#9ca3af',
                }}
              />
            )}
          </span>
        </Typography>
        {/* hành động*/}
        <div className="flex justify-center">
          {data.active ? (
            <button
              onClick={disStatus}
              className="text-[14px] mx-[10px] font-[500] bg-[#ef4444] p-[8px] text-[#fff] rounded-[5px] hover:bg-[#b91c1c] duration-500"
            >
              Vô hiệu
            </button>
          ) : (
            <button
              onClick={actStatus}
              className="text-[14px] mx-[10px] font-[500] bg-[#f97316] p-[8px] text-[#fff] rounded-[5px] hover:bg-[#c2410c] duration-500"
            >
              Kích Hoạt
            </button>
          )}
          <Link to={`edit/${data.id}`}>
            <button className="text-[14px] mx-[10px] font-[500] bg-[#38bdf8] p-[8px] text-[#fff] rounded-[5px] hover:bg-[#0369a1] duration-500">
              Chỉnh sửa
            </button>
          </Link>
        </div>
      </div>
      {Disload && <LoadingModal />}
      {Actload && <LoadingModal />}
    </>
  );
};

export default Items;
