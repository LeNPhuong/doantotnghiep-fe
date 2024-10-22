import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <button type="button">
                <img src="/src/assets/icons/h1.png" alt="" />
                <Link to="/" style={{ color: "white" }}>Dashboard</Link> {/* Sử dụng Link */}
            </button>           
            <ul>
                <li>
                    <img src="/src/assets/icons/h2.png" alt="" />
                    <Link to="/admin/users">NGƯỜI DÙNG</Link> {/* Sử dụng Link */}
                </li>
                <li>
                    <img src="/src/assets/icons/h3.png" alt="" />
                    <Link to="#">ĐƠN HÀNG</Link> {/* Sử dụng Link */}
                </li>
                <li>
                    <img src="/src/assets/icons/h4.png" alt="" />
                    <Link to="/admin/sanpham">SẢN PHẨM</Link> {/* Sử dụng Link */}
                </li>
                <li>
                    <img src="/src/assets/icons/h5.png" alt="" />
                    <Link to="#">SALES REPORT</Link> {/* Sử dụng Link */}
                </li>
                <li>
                    <img src="/src/assets/icons/h6.png" alt="" />
                    <Link to="#">TIN NHẮN</Link> {/* Sử dụng Link */}
                </li>
                <li>
                    <img src="/src/assets/icons/h7.png" alt="" />
                    <Link to="/admin/danhmuc">DANH MỤC</Link> {/* Sử dụng Link */}
                </li>
                <li>
                    <img src="/src/assets/icons/h7.png" alt="" />
                    <Link to="#">CÀI ĐẶT</Link> {/* Sử dụng Link */}
                </li>
                <li>
                    <img src="/src/assets/icons/h8.png" alt="" />
                    <Link to="#">ĐĂNG XUẤT</Link> {/* Sử dụng Link */}
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;