import { Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';

const SkelontonItem = () => {
  return (
    <Link
      to=""
      className="w-full md:max-w-[250px] max-w-[200px] shadow-[0_0_4px_rgba(0,0,0,0.25)] md:rounded-[10px] rounded-[5px] md:mx-[7px] mx-[3px]"
    >
      <div className="w-full relative ">
        <Skeleton className="w-full absolute top-[5px] text-[12px] font-semibold right-[5px] bg-[#FF0000] max-w-[40px] min-h-[20px] text-[#fff] text-center leading-[18px] rounded-[3px]"></Skeleton>
        <Skeleton
          sx={{ width: '100%' }}
          className="!w-full max-h-[150px] flex flex-row justify-center pt-[29px] mb-[19px] !mx-[10px]"
        >
          <img
            className="max-h-[150px] !w-[200px]"
            src="https://cdn.tgdd.vn/Products/Images/2526/77684/bhx/kem-dac-co-duong-ngoi-sao-phuong-nam-xanh-la-hop-1-284kg-202311271357577976.jpg"
            alt=""
          />
        </Skeleton>
        <Skeleton className="!mx-[10px] !mb-[18px]"></Skeleton>
        <div className="bg-[#e9e7e7] md:rounded-b-[10px] rounded-b-[5px]">
          <div className="flex flex-row justify-between items-center px-[17px] py-[16px]">
            <div className="flex flex-col">
              <Skeleton className="text-[#00E875] md:text-[18px] text-[16px] font-semibold !w-[30px]"></Skeleton>
              <Skeleton className="text-[#fff] md:text-[14px] text-[12px] !w-[30px]"></Skeleton>
            </div>
            <Skeleton>
              <button className="uppercase w-full lg:py-[10px] py-[7px] lg:max-w-[102px] max-w-[70px] bg-[#DDF16E] text-[#014C3E] lg:text-[16px] text-[13px] font-semibold rounded-[5px] hover:bg-[#c9e529] relative z-[9999] outline-none">
                mua
              </button>
            </Skeleton>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SkelontonItem;
