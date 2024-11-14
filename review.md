/* Admin.css */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

body,
html {
  font-family: 'Poppins', sans-serif;
  /* Đặt font cho toàn bộ trang */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.admin-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #004D40;
}

.flex-container {
  display: flex;
  flex: 1;
}

.sidebar {
  width: 15rem;
  background-color: #2D3748;
  color: white;
  height: 100vh;
  padding: 20px;
}

.sidebar h2 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1.25rem;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 1rem;
  /* space-y-4 */
}

.sidebar a {
  color: white;
  text-decoration: none;
  transition: color 0.2s;
  /* transition-colors duration-200 */
}

.sidebar a:hover {
  color: #A0AEC0;
}

.main-content {
  flex: 1;
  padding: 40px;
  background-color: #004D40;
  color: #000;
}

.main-content h1 {
  font-size: 1.875rem;
  font-weight: bold;
  color: #fff;
}

.main-content p {
  margin-top: 1rem;
  /* mt-4 */
}

.sidebar {
  width: 16rem;
  background-color: #fff;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.sidebar button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #004D40;
  border: 2px solid white;
  padding: 12px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #fff;
}

.sidebar button:hover {
  background-color: #3B4452;
  border-color: #A0AEC0;
}

.sidebar img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 1.5rem;
  margin-left: 20px;
  display: flex;
}

.sidebar ul a {
  color: #000;
  text-decoration: none;
  transition: color 0.2s;
}

.sidebar a:hover {
  color: #A0AEC0;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* Khoảng cách giữa các box */
}

.box {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.box-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.statistics {
  display: flex;
  gap: 20px;
}

.statistics-box {
  flex: 1;
  background-color: #E0F7FA;
  padding: 20px;
  border-radius: 10px;
}

.statistics-box img {
  width: 35%;
}

.statistics-box p {
  font-weight: 800;
  font-size: 20px;
}

.statistics-box h2 {
  font-size: 15px;
}

/* Biểu đồ doanh thu tuần */
.chart {
  margin-top: 20px;
}

/* Sản phẩm hot tuần */
.product-list {
  list-style: none;
  padding: 0;
}

.product-list li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.popularity-bar {
  width: 100px;
  height: 10px;
  background-color: #E0E0E0;
  position: relative;
  margin: 0 10px;
}

.bar-fill {
  height: 100%;
  background-color: #4CAF50;
}

.price-discount {
  color: #D32F2F;
  font-weight: bold;
}

/* Tiêu đề box */
.box-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

/* Bảng sản phẩm */
.product-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.product-table th,
.product-table td {
  border: none;
  text-align: center;
  padding: 10px;
}

/* Đầu bảng (th) */
.product-table th {
  font-weight: bold;
  border-bottom: 2px solid #ddd;
}

.product-table tr {
  border-bottom: 1px solid #ddd;
  /* Viền dưới cho hàng */
}

/* Thanh độ phổ biến (progress bar) */
.popularity-bar {
  width: 100%;
  background-color: #f0f0f0;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}

/* Phần độ đầy của thanh độ phổ biến */
.bar-fill {
  height: 100%;
  background-color: #4CAF50;
  border-radius: 5px;
}

/* Định dạng cho các cột giá giảm */
.price-discount {
  color: red;
  font-weight: bold;
}

/* Modal overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Modal container */
.modal {
  background: #fff;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

/* Close button */
.close-button {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

/* Form title */
.modal h2 {
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  color: #333;
}

/* Form styling */
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Form labels */
form label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #555;
}

/* Form inputs and textarea */
form input,
form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1rem;
}

form input::placeholder,
form textarea::placeholder {
  color: #999;
}

/* Submit button */
form button[type="submit"] {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

form button[type="submit"]:hover {
  background-color: #218838;
}