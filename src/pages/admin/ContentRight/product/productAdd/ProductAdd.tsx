import React, { useState } from 'react';
import Image from './Image';
import { DataMenuList } from '../../../../../data';
import { useAdminCreateProductMutation } from '../../../../../service/apiAdmin';
import { LoadingModal } from '../../../../../components';

const ProductAdd: React.FC = () => {
  const [create, { isLoading }] = useAdminCreateProductMutation();

  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<number>(0);
  const [sale, setSale] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState<string>('');

  function handleAddProduct() {
    if (name.length === 0) return alert('Vui lòng nhập tên');
    if (price < 1) return alert('Vui lòng nhập giá');
    if (category === 0) return alert('Vui lòng chọn loại');
    if (sale === 0) return alert('Vui lòng nhập giảm giá');
    if (description.length === 0) return alert('Vui lòng nhập mô tả');
    if (quantity === 0) return alert('Vui lòng nhập tồn kho');
    if (image === null) return alert('Vui lòng chọn ảnh');

    const data = {
      cate_id: category,
      name,
      price,
      sale,
      quantity,
      description,
      made: 'VIETNAM',
      img: image,
      active: 1,
    };

    create(data)
      .unwrap()
      .then((data) => {
        alert(data.message);
        location.reload();
      });
  }

  return (
    <div className="">
      <form>
        <div className="flex flex-row gap-[30px]">
          <div className="flex flex-col w-[50%]">
            <label htmlFor="">Tên sản phẩm</label>
            <input
              className="outline-none border-[1px] border-[#ccc] text-[18px] p-[5px] rounded-[5px] font-[400]"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Giá sản phẩm</label>
            <input
              className="outline-none border-[1px] border-[#ccc] text-[18px] p-[5px] rounded-[5px] font-[400]"
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            <label htmlFor="">Giảm giá (%)</label>
            <input
              className="outline-none border-[1px] border-[#ccc] text-[18px] p-[5px] rounded-[5px] font-[400]"
              type="number"
              value={sale}
              onChange={(e) => setSale(Number(e.target.value))}
            />
            <label htmlFor="">Số lượng trong kho</label>
            <input
              className="outline-none border-[1px] border-[#ccc] text-[18px] p-[5px] rounded-[5px] font-[400]"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <label htmlFor="" className="text-[16px]">
              Loại sản phẩm
            </label>
            <select
              name="category"
              id=""
              className="h-[30px] shadow-[0_0_5px_#00000046] rounded-[5px]"
              value={category}
              onChange={(e) => setCategory(Number(e.target.value))}
            >
              <option value={0}>Chọn loại</option>
              {DataMenuList.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
            <label htmlFor="">Mô tả sản phẩm</label>
            <textarea
              className="outline-none border-[1px] border-[#ccc] text-[18px] p-[5px] rounded-[5px] font-[400]"
              id=""
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Image setImage={setImage} />
        </div>
        <button
          onClick={handleAddProduct}
          className="bg-orange-500 w-full mt-[100px] text-[18px] font-[500] py-[8px] px-[15px] rounded-[5px] text-[#fff]"
          type="button"
        >
          Thêm
        </button>
      </form>
      {isLoading && <LoadingModal />}
    </div>
  );
};

export default ProductAdd;
