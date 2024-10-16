import React from 'react'
import icon from "../../../public/iconclock.png";

const LookUpOrders = () => {
  return (
    <div className="bg-[#F7F8FA] mt-[100px] h-screen space-y-4">
      <div className="flex justify-center items-center gap-2">
        <img className="w-10" src={icon} alt="" />
        <p className="text-[#004D40] text-xl">Vui lòng nhập mã đơn hàng</p>
      </div>

      <form className="w-[1000px] h-[57px] mx-auto">
        <div className="mb-4">
          <input
            className="shadow  border rounded-xl w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-500 text-center"
            type="text"
            placeholder="Nhập mã đơn hàng"
          />
        </div>
      </form>

      <div className="flex justify-center">
        <button
          className="bg-[#D9D9D9] hover:bg-[#004D40] text-[#004D40] hover:text-white font-bold py-2 px-4 rounded duration-300"
          type="button"
        >
          Tra cứu
        </button>
      </div>
    </div>
  )
}

export default LookUpOrders