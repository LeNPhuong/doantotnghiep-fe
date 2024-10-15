import React from 'react';

const DetailsDes: React.FC<{}> = () => {
  return (
    <div className="w-full max-w-[601px]">
      <div className="text-[25px] w-full min-h-[60px] max-h-[60px] text-[#DDF16E] bg-[#004D40] text-center leading-[60px] font-medium">
        Mô tả
      </div>
      <div className="w-full pl-[26px] flex">
        <div className="flex flex-col items-start text-lg text-black rounded-none max-w-[549px] mt-[26px]">
          <div className="mb-[18px]">
            <span className="font-medium">
              Tên sản phẩm: Dưa hấu ruột đỏ trái 2kg-2.2kg
            </span>
          </div>
          <div className="mb-[13px]">
            <span className="font-medium">Xuất xứ: VIETNAM</span>
          </div>
          <div className="w-full max-w-full text-[16px]">
            Dưa hấu thường có vị ngọt mát, chỉ chứa 46 calo mỗi cốc, nhưng rất
            giàu vitamin A, vitamin C và các hợp chất thực vật khác như
            citrulline và lycopene tốt cho sức khỏe. Bên cạnh đó, loại dưa này
            còn mang lại nhiều lợi ích sức khỏe cho người sử dụng, bao gồm cải
            thiện độ nhạy insulin, giảm đau nhức cơ bắp và hạ huyết áp.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsDes;
