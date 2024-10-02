import React from 'react';
import { FiSend } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="w-full">
        <div className="min-h-[403px] max-h-[403px] w-full max-w-[1440px] mx-auto px-[12px] relative">
          <div className="flex flex-col max-w-[576px] w-full pt-[35px] pb-[50px]">
            <p className="mb-[22px] text-[18px] font-[600] text-[#1EAE8A]">
              We can help you
            </p>
            <p className="text-[40px] font-[500] mb-[25px]">
              You have questions.
            </p>

            <div className="flex flex-row justify-between border-b-[1px] border-b-[#000] pb-[23px] mb-[105px]">
              <input
                type="text"
                placeholder="Your Email"
                className="text-[18px] w-full outline-none text-[#000] placeholder:text-[#000]"
              />
              <button className="text-[25px]">
                <FiSend />
              </button>
            </div>

            <p className="text-[18px]">
              Knowledge makes us humble, ignorance makes us arrogant.
            </p>
          </div>
          <div
            style={{
              clipPath: 'polygon(39% 0, 100% 0%, 100% 100%, 0% 100%)',
            }}
            className="absolute right-0 top-0 bottom-0 max-w-[935px] w-full bg-[#000]"
          >
            <div className="relative w-full h-full">
              <div className="">
                <img
                  src="/src/assets/img/footer.png"
                  alt=""
                  className="w-[486px] ml-[290px] mt-[-43px]"
                />
              </div>
              <div className="flex flex-row text-[#fff] ml-[285px] mt-[-50px]">
                <div className="flex flex-col mr-[115px] gap-[15px]">
                  <h1 className="text-[20px] font-bold">About</h1>
                  <p className="text-[18px]">Exams</p>
                  <p className="text-[18px]">Test</p>
                </div>

                <div className="flex flex-col mr-[115px] gap-[15px]">
                  <h1 className="text-[20px] font-bold">Policy</h1>
                  <p className="text-[18px]">Privacy Policy</p>
                  <p className="text-[18px]">Cookie Policy</p>
                </div>

                <div className="flex flex-col mr-[115px] gap-[15px]">
                  <h1 className="text-[20px] font-bold">Let’s chat!</h1>
                  <p className="text-[18px]">ftest@edu.vn</p>
                  <p className="text-[18px]">Test</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
