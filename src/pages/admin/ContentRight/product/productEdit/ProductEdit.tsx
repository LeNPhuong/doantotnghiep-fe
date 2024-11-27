import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  useAdminGetProductByIdQuery,
  useAdminUpdateProductByIdMutation,
} from '../../../../../service/apiAdmin';
import { Loading, LoadingModal } from '../../../../../components';
import ItemsForm from './ItemsForm';
import { DataMenuList } from '../../../../../data';
import { IFFormData } from '../../../../../types/User';

const ProductEdit: React.FC<object> = () => {
  const { id } = useParams();
  const { data, isFetching } = useAdminGetProductByIdQuery(Number(id));
  const [updateProduct, { isLoading }] = useAdminUpdateProductByIdMutation();

  const [name, setName] = useState<string>('');
  const [sale, setSale] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [des, setDes] = useState<string>('');

  const [fileImage, setFileImage] = useState<File | null>(null);

  useEffect(() => {
    if (data) {
      setName(data.data.name);
      setSale(data.data.sale.toString());
      setPrice(data.data.price);
      setCategory(data.data.cate_id.toString());
      setDes(data.data.description);
    }
  }, [data]);

  if (isFetching) return <Loading />;

  function handleImage() {
    const formData: IFFormData = {};

    if (name !== data?.data.name) {
      formData.name = name;
    }

    if (Number(sale) !== Number(data?.data.sale)) {
      formData.sale = sale;
    }

    if (Number(price) !== Number(data?.data.price)) {
      formData.price = price;
    }

    if (Number(category) !== Number(data?.data.cate_id)) {
      formData.cate_id = category;
    }

    if (des !== data?.data.description) {
      formData.description = des;
    }

    if (fileImage !== null) {
      formData.img = fileImage;
    }

    let checkEmpty = false;

    Object.keys(formData).forEach((el) => {
      if (formData[el as keyof IFFormData]?.toString().length === 0) {
        checkEmpty = checkEmpty = true;
      }
    });

    if (checkEmpty) {
      return alert('Vui lòng không để trống bất kỳ một trường nào');
    }

    if (Object.keys(formData).length === 0) {
      return alert('Không có gì để cập nhật');
    } else {
      updateProduct({ id: id!, data: formData })
        .unwrap()
        .then(() => {
          location.reload();
        })
        .catch(() => {});
    }
  }

  return (
    <>
      <div className="w-full">
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex flex-row items-start justify-between">
            <div className="w-full max-w-[370px] min-w-[370px] shadow-[0_0_16px_#00000058] rounded-[8px] overflow-hidden flex flex-col">
              {data?.data.img && (
                <img
                  className="w-full max-w-[370px] min-w-[370px]"
                  src={data?.data.img}
                  alt=""
                />
              )}

              <div className="p-[10px]">
                <input
                  type="file"
                  className="outline-none"
                  onChange={(e) => setFileImage(e.target.files![0])}
                />
              </div>
            </div>

            <div className="flex flex-row flex-wrap items-center w-full ml-[30px]">
              <ItemsForm
                init={name}
                setInit={setName}
                label="Tên sản phẩm"
                place="Tên sản phẩm"
              />

              <ItemsForm
                init={price}
                setInit={setPrice}
                label="Giá"
                place="Giá"
              />

              <ItemsForm
                init={sale}
                setInit={setSale}
                label="Giảm giá"
                place="Giảm giá"
              />

              <div className="flex flex-col gap-[5px]">
                <label htmlFor="" className="text-[16px]">
                  Loại sản phẩm
                </label>
                <select
                  name="category"
                  id=""
                  className="h-[30px] shadow-[0_0_5px_#00000046] rounded-[5px]"
                  value={category}
                  onChange={(e) => setCategory(e.target.value.toString())}
                >
                  {DataMenuList.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="" className="text-[16px] mb-[10px]">
                  Chi tiết sản phẩm
                </label>
                <textarea
                  name="des"
                  className="outline-none border-[2px] border-[#ccc] rounded-[8px] p-[5px] w-full"
                  rows={5}
                  cols={100}
                  value={des}
                  onChange={(e) => setDes(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          <button
            onClick={handleImage}
            className="bg-[#f97316] mt-[20px] p-[10px] font-[500] text-[18px] text-[#fff] rounded-[8px] shadow-[0_0_16px_#0000002c]"
          >
            Cập nhật
          </button>
        </div>
      </div>
      {isLoading && <LoadingModal />}
    </>
  );
};

export default ProductEdit;
