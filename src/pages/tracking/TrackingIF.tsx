import React, { useState } from 'react';
import TrackingIFProgress from './TrackingIFProgress';
import { S1, S2, S3, S4 } from '../../assets/icons';
import TrackingIFLine from './TrackingIFLine';
import TrackingIFHeader from './TrackingIFHeader';
import TrackingIFLabelItem from './TrackingIFLabelItem';
import TrackingIFItems from './TrackingIFItems';
import TrackingIFTotal from './TrackingIFTotal';
import RemoveOrder from './RemoveOrder';

const TrackingIF: React.FC<{}> = () => {
  const [remove, setRemove] = useState<boolean>(false);
  return (
    <>
      <div className="min-h-[206px] w-full shadow-[0_0_4px_rgba(0,0,0,0.25)]">
        <div className="min-h-[62px] max-h-[62px] bg-[#37764C] flex items-center justify-center text-[22px] font-bold text-[#DDF16E] mb-[26px]">
          Tiến trình xử lý
        </div>
        <div className="w-full flex flex-row items-center justify-center relative gap-[10px]">
          <TrackingIFProgress active={true} name="Đặt hàng" img={S1} />
          <TrackingIFLine />
          <TrackingIFProgress active={true} name="Đang đóng gói" img={S2} />
          <TrackingIFLine />
          <TrackingIFProgress active={true} name="Đang vận chuyển" img={S3} />
          <TrackingIFLine />
          <TrackingIFProgress
            active={true}
            name="Gia hàng thành công"
            img={S4}
          />
        </div>
      </div>
      <div className="mt-[55px]"></div>
      <div className="shadow-[0_0_4px_rgba(0,0,0,0.25)]">
        <TrackingIFHeader />
        <TrackingIFLabelItem />
        <TrackingIFItems />
        <TrackingIFItems />
        <TrackingIFItems />
        <TrackingIFTotal />
      </div>
      <div className="flex justify-center mt-[31px] mb-[78px]">
        <button
          onClick={() => setRemove(true)}
          className="min-w-[177px] min-h-[42px] rounded-[10px] bg-[#D9D9D9] text-[14px] font-semibold hover:bg-[#cac7c7] duration-300"
        >
          Huỷ đơn hàng
        </button>
      </div>
      {remove && <RemoveOrder setRemove={setRemove} />}
    </>
  );
};

export default TrackingIF;
