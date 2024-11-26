import React from 'react';
import styled from 'styled-components';

const Spiner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #004d40;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingModal: React.FC<{}> = () => {
  return (
    <div className="fixed bg-[#cccccc9e] top-0 right-0 bottom-0 left-0 z-[99999]">
      <div className="w-full h-[100vh] flex flex-col justify-center items-center gap-[20px]">
        <Spiner></Spiner>
        <p className="capitalize">Đang tải...</p>
      </div>
    </div>
  );
};

export default LoadingModal;
