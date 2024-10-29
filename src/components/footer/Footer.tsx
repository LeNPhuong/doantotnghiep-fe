import React from 'react';
import FooterInfor from './FooterInfor';
import FooterItems from './FooterItems';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F7F8FA] border-t-[1px] border-t-[rgba(0, 0, 0, 0.3)] xl:px-[0px] md:px-[30px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="w-full flex md:flex-row xl:flex-nowrap md:flex-wrap pt-[20px] pb-[28px] gap-y-[20px] flex-col md:justify-start justify-center">
          <FooterInfor />
          <div className="xl:flex flex-[1_1_0] hidden"></div>
          <div className="flex flex-col xl:mr-[60px] md:mr-[30px] md:items-start items-center">
            <h1 className="xl:text-[22px] md:text-[20] text-[#004D40] xl:mb-[25px] md:mb-[5px] font-semibold">
              Hỗ trợ
            </h1>
            <FooterItems name="Trung tâm hỗ trợ" />
            <FooterItems name="Cách mua hàng" />
            <FooterItems name="Cách thanh toán" />
          </div>
          <div className="flex flex-col xl:mr-[60px] md:mr-[30px] md:items-start items-center">
            <h1 className="xl:text-[22px] md:text-[20] text-[#004D40] xl:mb-[25px] md:mb-[5px] font-semibold">
              Chính sách
            </h1>
            <FooterItems name="Chính sách mua hàng" />
            <FooterItems name="Đảm bảo an toàn" />
            <FooterItems name="Bảo vệ thông tin cá nhân" />
            <FooterItems name="Đổi trả huỷ và hoàn tiền" />
          </div>
          <div className="flex flex-col md:items-start items-center">
            <h1 className="xl:text-[22px] md:text-[20] text-[#004D40] xl:mb-[25px] md:mb-[5px] font-semibold">
              About
            </h1>
            <FooterItems name="Quá trình thiết kế" />
            <FooterItems name="Bảng vẽ" />
            <FooterItems name="Thành viên phát triển" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
