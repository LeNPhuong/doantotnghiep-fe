import React from 'react';

const MainContent: React.FC = () => {
  return (
    <div className="main-content">
      <div>
        <img src="" alt="" />
        <h1>Dashboard</h1>
      </div>
      {/* Box 1: Thống kê tuần qua */}
      <div className="box">
        <h2 className="box-title">TỔNG THỐNG KÊ TUẦN QUA</h2>
        <div className="statistics">
          <div
            className="statistics-box"
            style={{ backgroundColor: '#FFE2E5' }}
          >
            <img src="/src/assets/icons/h9.png" alt="" />
            <p>100,000,000 VND</p>
            <h2>Tổng Doanh Thu</h2>
          </div>
          <div
            className="statistics-box"
            style={{ backgroundColor: '#FFF4DE' }}
          >
            <img src="/src/assets/icons/h10.png" alt="" />
            <p>200</p>
            <h2>Tổng Đơn Hàng</h2>
          </div>
          <div
            className="statistics-box"
            style={{ backgroundColor: '#DCFCE7' }}
          >
            <img src="/src/assets/icons/h11.png" alt="" />
            <p>500</p>
            <h2>Sản Phẩm Bán</h2>
          </div>
          <div
            className="statistics-box"
            style={{ backgroundColor: '#F3E8FF' }}
          >
            <img src="/src/assets/icons/h12.png" alt="" />
            <p>50</p>
            <h2>Thành Viên Mới</h2>
          </div>
        </div>
      </div>

      {/* Box 2: Tổng doanh thu tuần */}
      <div className="box">
        <h2 className="box-title">TỔNG DOANH THU TUẦN</h2>
        <div className="chart"></div>
      </div>

      {/* Box 3: Sản phẩm hot tuần */}
      <div className="box" style={{ width: '800px' }}>
        <h2 className="box-title">SẢN PHẨM HOT TUẦN</h2>
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên sản phẩm</th>
              <th>Độ phổ biến</th>
              <th>Giảm giá (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SP01</td>
              <td>Sản phẩm A</td>
              <td>
                <div className="popularity-bar">
                  <div className="bar-fill" style={{ width: '80%' }}></div>
                </div>
              </td>
              <td>-20%</td>
            </tr>
            <tr>
              <td>SP02</td>
              <td>Sản phẩm B</td>
              <td>
                <div className="popularity-bar">
                  <div className="bar-fill" style={{ width: '60%' }}></div>
                </div>
              </td>
              <td>-15%</td>
            </tr>
            <tr>
              <td>SP03</td>
              <td>Sản phẩm C</td>
              <td>
                <div className="popularity-bar">
                  <div className="bar-fill" style={{ width: '90%' }}></div>
                </div>
              </td>
              <td>-10%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainContent;
