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

const Loading: React.FC<{}> = () => {
  return (
    <div className="min-h-[900px] flex items-center justify-center">
      <Spiner></Spiner>
    </div>
  );
};

export default Loading;
