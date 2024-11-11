import React from 'react';
import { Sale } from '../../assets/icons';
import { IFVoucher } from '../../types/Voucher';
import { useAddVoucherMutation } from '../../service/profile';
import LoadingModal from './LoadingModal';

const Voucher: React.FC<{
  data: IFVoucher;
}> = ({ data }) => {
  const [addVoucher, { isLoading }] = useAddVoucherMutation();

  function handleVoucher() {
    const token = JSON.parse(localStorage.getItem('token_access')!);
    if (!token) {
      return alert('Vui lòng đăng nhập để lấy mã');
    }
    addVoucher({ voucher_id: data.id })
      .unwrap()
      .then((data) => {
        alert(data.message);
      })
      .catch(() => {
        alert('Thêm thất bại hoặc đã được thêm');
      });
  }

  return (
    <div className="w-full xl:max-w-[400px] max-w-[350px] shadow-[0_0_5px_rgba(0,0,0,0.25)] bg-[#F7F8FA]">
      <div className="w-full flex flex-row">
        <div className="w-full md:max-w-[113px] max-w-[80px] border-r-[1px] flex justify-center items-center border-[#D9D9D9] border-dotted mr-[15px]">
          <img className="md:max-w-[80px] max-w-[40px]" src={Sale} alt="" />
        </div>
        <div className="w-full pt-[15px]">
          <p className="text-[#014C3E] xl:text-[20px] text-[12px] font-semibold xl:mb-[81px] mb-[30px]">
            {data.description}
          </p>
          <div className="flex flex-row justify-between items-center w-full pb-[9px] pr-[10px]">
            <p className="xl:text-[18px] text-[10px] font-semibold text-[#FF0000]">
              {data.code}
            </p>
            <button
              onClick={handleVoucher}
              className="bg-[#FF0000] w-full max-w-[100px] xl:py-[13px] xl:text-[20px] text-[12px] font-semibold xl:rounded-[10px] py-[3px] rounded-[5px] text-[#fff] hover:bg-[#da2d2d]"
            >
              Lấy mã
            </button>
          </div>
        </div>
      </div>
      {isLoading && <LoadingModal />}
    </div>
  );
};

export default Voucher;
