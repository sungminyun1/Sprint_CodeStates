import React, { useState } from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div`
// TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 20em;
`;

export const ModalBackdrop = styled.div`
 // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  display: grid;
  justify-content: center;
  align-items: center;
  position:fixed; 
  z-index: 1;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: grey;
`;

export const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
  margin-top: 5px;
`;

export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
// TODO : Modal창 CSS를 구현합니다.
  background-color: white;
  text-align: center;
  border-radius: 30px;
  width: 20em;
  height: 6em;

  > .close {
    margin-top: 4px;
    cursor: pointer;
  }

  > .text {
    line-height: 3em;
    color: #4000c7;
  }
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalContainer onClick = {isOpen ? openModalHandler : null}>
        <ModalBtn onClick = {openModalHandler}>
          {/* TODO : 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때는 ModalBtn의 내부 텍스트가 'Opened!' 로 Modal이 닫힌 상태(isOpen이 false인 상태)일 때는 ModalBtn 의 내부 텍스트가 'Open Modal'이 되도록 구현해야 합니다. */}
          {isOpen ? "Opened!" : "Open Modal"}
        </ModalBtn>
        {/* TODO : 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때만 모달창과 배경이 뜰 수 있게 구현해야 합니다. */}
        {isOpen ? <ModalBackdrop>
          <ModalView>
            <div className="close">&times;</div>
            <div className="text">CODESTATES</div>
          </ModalView>
        </ModalBackdrop> : null}
      </ModalContainer>
    </>
  );
};