import React from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BtnAdd = () => {
  return (
    <Link to="add">
      <button className="flex flex-row items-center gap-[10px] bg-[#014C3E] text-[#00E875] p-[8px] rounded-[8px] duration-500 shadow-[0_0_16px_#00000034] hover:bg-orange-700">
        <span>
          <FaPlus />
        </span>
        <span>Thêm sản phẩm</span>
      </button>
    </Link>
  );
};

export default BtnAdd;
