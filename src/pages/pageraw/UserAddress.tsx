import React from 'react';

const UserAddress = () => {
  return (
    <div className="flex gap-8 px-[100px] my-4">
      <div className="w-1/4 flex-col space-y-6 ">
        <div className="bg-[#004D40] text-white rounded-lg py-10 flex-col ">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="80px"
              viewBox="0 0 448 512 "
              className="mx-auto"
            >
              <path
                fill="white"
                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128m89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4"
              />
            </svg>
          </div>
          <div className="text-center text-xl font-semibold">Anh Long</div>
          <div className="text-center ">099999999</div>
        </div>
        {/* menu */}
        <div className="border-2 border-stone-200 shadow-xl rounded-lg  ">
          {/* row1  */}
          <div className="flex items-center gap-2 p-4  ">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="black"
                    d="M12 2c5.523 0 10 4.477 10 10a9.96 9.96 0 0 1-2.258 6.33l.02.022l-.132.112A9.98 9.98 0 0 1 12 22c-2.95 0-5.6-1.277-7.43-3.307l-.2-.23l-.132-.11l.02-.024A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2m0 15c-1.86 0-3.541.592-4.793 1.406A7.97 7.97 0 0 0 12 20a7.97 7.97 0 0 0 4.793-1.594A8.9 8.9 0 0 0 12 17m0-13a8 8 0 0 0-6.258 12.984C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984A8 8 0 0 0 12 4m0 2a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"
                  />
                </g>
              </svg>
            </div>
            <div className="text-xl font-medium ">Thông tin cá nhân</div>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8.75px"
                height="20px"
                viewBox="0 0 7 16"
              >
                <path
                  fill="black"
                  d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15"
                />
              </svg>
            </div>
          </div>
          {/* row2 */}
          <div className="flex items-center gap-2 p-4  ">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="m4.988 17.452l5.75 3.448a2.45 2.45 0 0 0 2.524 0l5.75-3.448c.366-.219.67-.53.88-.901c.205-.37.315-.786.318-1.21V8.278a2.46 2.46 0 0 0-1.198-2.122l-5.75-3.065a2.51 2.51 0 0 0-2.524 0l-5.75 3.065A2.46 2.46 0 0 0 3.79 8.277v7.065c.003.423.113.839.318 1.209c.21.371.514.682.88.901M19.881 7.078L12 11.81" />
                  <path d="M4.119 7.078L12 11.81v9.44m4.38-8.316V9.179L8.066 4.522" />
                </g>
              </svg>
            </div>
            <div className="text-xl font-medium ">Đơn hàng của tôi</div>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8.75px"
                height="20px"
                viewBox="0 0 7 16"
              >
                <path
                  fill="black"
                  d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15"
                />
              </svg>
            </div>
          </div>
          {/* row3 */}
          <div className="flex items-center gap-2 p-4 bg-[#004D40] ">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  color="white"
                >
                  <path d="M14.5 9a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m3.722 8c1.395 1.988 2.062 3.047 1.665 3.9q-.06.128-.14.247c-.575.853-2.06.853-5.03.853H9.283c-2.97 0-4.454 0-5.029-.853a2 2 0 0 1-.14-.247c-.397-.852.27-1.912 1.665-3.9" />
                  <path d="M13.257 17.494a1.813 1.813 0 0 1-2.514 0c-3.089-2.993-7.228-6.336-5.21-11.19C6.626 3.679 9.246 2 12 2s5.375 1.68 6.467 4.304c2.016 4.847-2.113 8.207-5.21 11.19" />
                </g>
              </svg>
            </div>
            <div className="text-xl font-medium text-white">
              Quản lý sổ địa chỉ
            </div>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8.75px"
                height="20px"
                viewBox="0 0 7 16"
              >
                <path
                  fill="white"
                  d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15"
                />
              </svg>
            </div>
          </div>
          {/* row4 */}
          <div className="flex items-center gap-2 p-4  ">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 16 16"
              >
                <path
                  fill="black"
                  fill-rule="evenodd"
                  d="M11.02 3.77v1.56l1-.99V2.5l-.5-.5h-9l-.5.5v.486L2 3v10.29l.36.46l5 1.72L8 15v-1h3.52l.5-.5v-1.81l-1-1V13H8V4.71l-.33-.46L4.036 3h6.984zM7 14.28l-4-1.34V3.72l4 1.34zm6.52-5.8H8.55v-1h4.93l-1.6-1.6l.71-.7l2.47 2.46v.71l-2.49 2.48l-.7-.7z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="text-xl font-medium ">Đăng xuất</div>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8.75px"
                height="20px"
                viewBox="0 0 7 16"
              >
                <path
                  fill="black"
                  d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 space-y-4">
        <div className="flex justify-between items-center  ">
          <div className="text-3xl font-bold">Quản lý số địa chỉ</div>
          <div className="bg-[#004D40] text-white texl-xl px-8 py-2 rounded-3xl">
            Thêm địa chỉ
          </div>
        </div>
        <div className="bg-white border-2 border-stone-200 flex items-center justify-between py-4 px-6 shadow-sm rounded-lg">
          <div className="flex-col space-y-4">
            <div className="flex gap-2">
              <span className="font-semibold">Phạm Long</span>|
              <span className="text-gray-500 font-medium">099999999</span>
            </div>
            <div className="text-gray-500">Tô Ký Trung Mỹ Tây Q12 TPHCM </div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-1 border-2 border-[#004D40] bg-[#004D40] text-white px-4 py-2 rounded-2xl">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="white"
                        d="M13.228 2.688a2 2 0 0 0-2.456 0l-8.384 6.52C1.636 9.795 2.05 11 3.003 11H4v8a2 2 0 0 0 2 2h4v-6a2 2 0 1 1 4 0v6h4a2 2 0 0 0 2-2v-8h.997c.952 0 1.368-1.205.615-1.791z"
                      />
                    </g>
                  </svg>
                </span>
                Nhà
              </div>
              <div className="border-2 border-[#004D40] text-[#004D40] px-4 py-2 rounded-2xl">
                Mặc định
              </div>
            </div>
          </div>
          <div className="text-[#004D40] font-medium">Sửa</div>
        </div>
      </div>
    </div>
  );
};

export default UserAddress;