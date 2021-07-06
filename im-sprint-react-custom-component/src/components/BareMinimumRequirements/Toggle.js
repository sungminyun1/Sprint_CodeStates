import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: relative;
  margin-top: 8rem;
  left: 47%;
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: #8b8b8b;
    transition: all ease 0.5s 0s;
    // TODO : .toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현합니다.
    &.toggle--checked {
      background-color: #4000c7;
    }
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ffffff;
    transition: all ease 0.5s 0s;
    // TODO : .toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현합니다.
    &.toggle--checked {
      left: 27px;
    }
  }
`;

const Desc = styled.div`
  // TODO : 설명 부분의 CSS를 구현합니다.
  text-align: center;
`;

export const Toggle = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    // TODO : isOn의 상태를 변경하는 메소드를 구현합니다.
    setisOn(!isOn);
  };

  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        <div className={isOn ? "toggle-container toggle--checked" : "toggle-container"}/>
        <div className={isOn ? "toggle-circle toggle--checked" : "toggle-circle"}/>
      </ToggleContainer>
      <Desc>{isOn ? "Toggle Switch ON" : "Toggle Switch OFF"}</Desc>
    </>
  );
};
