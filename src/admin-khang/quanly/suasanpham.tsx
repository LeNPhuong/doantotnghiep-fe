import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Thiết lập phần tử gốc của ứng dụng React

interface SuasanphamProps {
  isOpen: boolean;
  onRequestClose: () => void;
  product: any; // Thông tin sản phẩm được truyền vào
}

const Suasanpham: React.FC<SuasanphamProps> = ({
  isOpen,
  onRequestClose,
  product,
}) => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productStock, setProductStock] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productUnit, setProductUnit] = useState('');
  const [productImage, setProductImage] = useState('');

  useEffect(() => {
    if (product) {
      setProductName(product.name);
      setProductDescription(product.description);
      setProductPrice(product.price);
      setProductStock(product.stock);
      setProductCategory(product.category);
      setProductUnit(product.unit);
      setProductImage(product.image);
    }
  }, [product]); // Khi product thay đổi, cập nhật các giá trị trong form

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý logic cập nhật sản phẩm
    ({
      productName,
      productDescription,
      productPrice,
      productStock,
      productCategory,
      productUnit,
      productImage,
    });
    // Đóng modal sau khi xử lý xong
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Sửa sản phẩm"
      className="modal"
      overlayClassName="overlay"
    >
      <button className="close-button" onClick={onRequestClose}>
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-4 text-center">Sửa sản phẩm</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Tên sản phẩm</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Nhập tên sản phẩm"
          />
        </div>
        <div>
          <label>Mô tả sản phẩm</label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="Mô tả sản phẩm..."
          />
        </div>
        <div>
          <label>Giá sản phẩm</label>
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="Giá sản phẩm"
          />
        </div>
        <div>
          <label>Số lượng sản phẩm</label>
          <input
            type="number"
            value={productStock}
            onChange={(e) => setProductStock(e.target.value)}
            placeholder="Số lượng sản phẩm"
          />
        </div>
        <div>
          <label>Loại sản phẩm</label>
          <input
            type="text"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            placeholder="Loại"
          />
        </div>
        <div>
          <label>Đơn vị</label>
          <input
            type="text"
            value={productUnit}
            onChange={(e) => setProductUnit(e.target.value)}
            placeholder="Đơn vị"
          />
        </div>
        <div>
          <label>Hình ảnh</label>
          <input
            type="text"
            value={productImage}
            onChange={(e) => setProductImage(e.target.value)}
            placeholder="URL hình ảnh..."
          />
        </div>
        <button type="submit">Lưu thay đổi</button>
      </form>
    </Modal>
  );
};

export default Suasanpham;
