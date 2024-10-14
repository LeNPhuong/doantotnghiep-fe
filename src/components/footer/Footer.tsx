import React from 'react';
import FooterInfor from './FooterInfor';
import FooterItems from './FooterItems';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F7F8FA] border-t-[1px] border-t-[rgba(0, 0, 0, 0.3)]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="w-full flex flex-row pt-[20px] pb-[28px]">
          <FooterInfor />
          <div className="flex-[1_1_0]"></div>
          <div className="flex flex-col mr-[60px]">
            <h1 className="text-[22px] text-[#004D40] mb-[25px] font-semibold">
              Hỗ trợ
            </h1>
            <FooterItems name="Trung tâm hỗ trợ" />
            <FooterItems name="Cách mua hàng" />
            <FooterItems name="Cách thanh toán" />
          </div>
          <div className="flex flex-col mr-[60px]">
            <h1 className="text-[22px] text-[#004D40] mb-[25px] font-semibold">
              Chính sách
            </h1>
            <FooterItems name="Chính sách mua hàng" />
            <FooterItems name="Đảm bảo an toàn" />
            <FooterItems name="Bảo vệ thông tin cá nhân" />
            <FooterItems name="Đổi trả huỷ và hoàn tiền" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[22px] text-[#004D40] mb-[25px] font-semibold">
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
