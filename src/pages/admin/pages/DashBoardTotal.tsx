import React from 'react';
import {
  useAdminGetDashBoardQuery,
  useAdminGetListCategoryQuery,
  useAdminGetProductQuery,
  useAdminGetUnitsQuery,
} from '../../../service/apiAdmin';
import { Loading } from '../../../components';

const DashBoardTotal: React.FC<{}> = () => {
  const { data, isFetching } = useAdminGetDashBoardQuery();
  const { data: dataProduct, isFetching: fetchProduct } =
    useAdminGetProductQuery();
  const { data: dataCategory, isFetching: fetchCategory } =
    useAdminGetListCategoryQuery();

  const { data: dataUnit, isFetching: fetchUnit } = useAdminGetUnitsQuery();

  if (isFetching) return <Loading />;
  if (fetchProduct) return <Loading />;
  if (fetchCategory) return <Loading />;
  if (fetchUnit) return <Loading />;

  console.log(data);

  return (
    <div className="flex flex-col py-[35px] w-full px-[35px] h-full overflow-y-auto">
      <div className="flex flex-row items-center justify-between w-full">
        <p className="text-[24px] font-[500] capitalize ">Phân tích cửa hàng</p>
      </div>
      <div className="w-full mt-[30px]">
        <div className="flex flex-row flex-wrap gap-[30px] w-full">
          <div className="w-full flex flex-row max-w-[300px] gap-[5px] p-[30px] bg-[#014C3E] shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-[5px]">
            <p className="text-[18px] font-medium text-[#DDF16E]">Đơn hàng:</p>
            {data?.data.total_orders && (
              <p className="text-[18px] font-medium text-[#DDF16E]">
                {data?.data.total_orders}
              </p>
            )}
          </div>

          <div className="w-full flex flex-row max-w-[300px] gap-[5px] p-[30px] bg-[#014C3E] shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-[5px]">
            <p className="text-[18px] font-medium text-[#DDF16E]">
              Người dùng:
            </p>
            {data?.data.new_members && (
              <p className="text-[18px] font-medium text-[#DDF16E]">
                {data?.data.new_members}
              </p>
            )}
          </div>

          <div className="w-full flex flex-row max-w-[300px] gap-[5px] p-[30px] bg-[#014C3E] shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-[5px]">
            <p className="text-[18px] font-medium text-[#DDF16E]">
              Sản phẩm bán ra:
            </p>
            {data?.data.total_products_sold && (
              <p className="text-[18px] font-medium text-[#DDF16E]">
                {data?.data.total_products_sold}
              </p>
            )}
          </div>

          <div className="w-full flex flex-row max-w-[300px] gap-[5px] p-[30px] bg-[#014C3E] shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-[5px]">
            <p className="text-[18px] font-medium text-[#DDF16E]">
              Tổng doanh thu tuần:
            </p>
            {data?.data.weekly_revenue !== null && (
              <p className="text-[18px] font-medium text-[#DDF16E]">
                {data?.data.weekly_revenue}
              </p>
            )}
          </div>

          <div className="w-full flex flex-row max-w-[300px] gap-[5px] p-[30px] bg-[#014C3E] shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-[5px]">
            <p className="text-[18px] font-medium text-[#DDF16E]">
              Tổng doanh thu:
            </p>
            {data?.data.total_revenue !== null && (
              <p className="text-[18px] font-medium text-[#DDF16E]">
                {data?.data.total_revenue}
              </p>
            )}
          </div>

          <div className="w-full flex flex-row max-w-[300px] gap-[5px] p-[30px] bg-[#014C3E] shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-[5px]">
            <p className="text-[18px] font-medium text-[#DDF16E]">
              Tổng sản phẩm:
            </p>
            {dataProduct?.data && (
              <p className="text-[18px] font-medium text-[#DDF16E]">
                {dataProduct?.data.length}
              </p>
            )}
          </div>

          <div className="w-full flex flex-row max-w-[300px] gap-[5px] p-[30px] bg-[#014C3E] shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-[5px]">
            <p className="text-[18px] font-medium text-[#DDF16E]">
              Tổng loại sản phẩm:
            </p>
            {dataCategory?.data && (
              <p className="text-[18px] font-medium text-[#DDF16E]">
                {dataCategory?.data.length}
              </p>
            )}
          </div>

          <div className="w-full flex flex-row max-w-[300px] gap-[5px] p-[30px] bg-[#014C3E] shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-[5px]">
            <p className="text-[18px] font-medium text-[#DDF16E]">
              Tổng đơn vị:
            </p>
            {dataUnit?.data && (
              <p className="text-[18px] font-medium text-[#DDF16E]">
                {dataUnit?.data.length}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardTotal;
