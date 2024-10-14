import React from 'react';

const Signin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      ``
      <div className="bg-white rounded-lg shadow-lg py-10 w-[500px]">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-10">
          Đăng nhập
        </h2>
        <form className="mt-4 w-[300px] mx-auto">
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
              type="password"
              placeholder="Mật khẩu"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-green-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition duration-200"
          >
            Đăng nhập
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Bạn chưa có tài khoản ?
          <a href="#" className="text-red-600 hover:underline">
            Đăng ký
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
