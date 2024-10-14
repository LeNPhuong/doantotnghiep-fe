import React from 'react';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg py-10 w-[625px]">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-10">
          Đăng Ký
        </h2>
        <form className="mt-4 w-2/3 mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Họ và tên"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-green-600"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-green-600"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Số điện thoại"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-green-600"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Mật khẩu"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-green-600"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Nhập lại mật khẩu"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-green-600"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="terms" className="mr-2" required />
            <label htmlFor="terms" className="text-sm text-gray-600">
              Đồng ý điều khoản và chính sách
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition duration-200"
          >
            Đăng ký
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Bạn đã có tài khoản?{' '}
          <a href="#" className="text-red-600 hover:underline">
            Đăng nhập
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
