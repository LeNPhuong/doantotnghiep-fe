import React from 'react';
import { IoClose } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Sale } from '../../assets/icons';
import { useGetProfileV2Query } from '../../service/profile';
import { setVoucherData } from '../../redux/user/UserSlice';

const BoxUseVoucher: React.FC<{
  setVoucher: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setVoucher }) => {
  const dispatch = useAppDispatch();
  const voucherData = useAppSelector((e) => e.user.voucher);
  const { data, isFetching, isLoading } = useGetProfileV2Query();

  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#00000061] flex justify-center items-center">
      <div className="w-full max-w-[700px] bg-[#fff]  pb-[20px]">
        <div className="flex flex-row justify-between py-[30px] px-[42px] border-b-[1px] border-[rgba(0,0,0,0.3)]">
          <p className="font-medium text-[24px] text-[#004D40]">Chọn Voucher</p>
          <button
            onClick={() => setVoucher(false)}
            className="text-[rgba(0,0,0,0.4)] text-[30px]"
          >
            <IoClose />
          </button>
        </div>
        <div className="w-full flex flex-col px-[42px] pt-[30px]">
          {/*  */}
          {data && data.data.vouchers.length === 0 && (
            <p className="text-center py-[20px]">Bạn chưa có voucher nào</p>
          )}
          {data ? (
            data.data.vouchers.map((e, index) => (
              <div
                key={index}
                className="border-[2px] border-[#004D40] rounded-[10px] w-full flex flex-row"
              >
                <div className="w-full max-w-[90px] px-[10px] flex flex-row items-center">
                  <img
                    className="md:max-w-[80px] max-w-[40px]"
                    src={Sale}
                    alt=""
                  />
                </div>
                <div className="flex flex-row justify-between items-center px-[22px] py-[20px] w-full">
                  <div className="flex flex-col">
                    <p className="text-[24px] text-[#004D40] font-medium">
                      {e.code}
                    </p>
                    <p className="text-[18px]">{e.description}</p>
                  </div>
                  {voucherData && voucherData.id === e.id ? (
                    <button
                      onClick={() => dispatch(setVoucherData(null))}
                      className="bg-[#ccc] text-[12px] w-full max-w-[120px] font-bold px-[10px] py-[20px] text-[#fff]"
                    >
                      Đang áp dụng
                    </button>
                  ) : (
                    <button
                      onClick={() => dispatch(setVoucherData(e))}
                      className="bg-[#004D40] text-[12px] w-full max-w-[120px] font-bold px-[10px] py-[20px] text-[#fff]"
                    >
                      Áp dụng
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center py-[20px]">Đang tải...</p>
          )}

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default BoxUseVoucher;
