import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 60px;
  height: 60px;
  background: #4e6bff;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;

  animation: square 20s linear alternate infinite;
  @keyframes square {
    to {
      transform: translate(100vw, 90vh);
    }
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #ff97af;
  opacity: 0.7;
  position: absolute;
  top: 200px;
  left: -100px;
  z-index: -1;

  animation: circle 20s linear alternate infinite;
  @keyframes circle {
    to {
      transform: translate(100vw, 40vh);
    }
  }
`;

const Rect = styled.div`
  width: 100px;
  height: 60px;
  opacity: 0.5;
  background: #669966;
  position: absolute;
  top: 400px;
  left: -50px;
  z-index: -1;

  animation: rect 20s linear alternate infinite;
  @keyframes rect {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;

const AnimatedShapes = () => {
  return (
    <>
      <Square />
      <Circle />
      <Rect />
    </>
  );
};

export default AnimatedShapes;
