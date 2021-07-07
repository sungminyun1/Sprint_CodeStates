import React, { useState } from 'react';
import styled from 'styled-components';

// TODO: Styled-Component 라이브러리를 활용해 TabMenu 와 Desc 컴포넌트의 CSS를 구현합니다.

const TabMenu = styled.ul`
  background-color: #dcdcdc;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;

  .submenu {
    width: 100%;
    height: 3em;
    text-align: center;
    line-height: 3em;
    transition: all ease 0.3s 0s;
    cursor: pointer;
  }

  .focused {
    background-color: #4000c7;
    color: white;
    cursor: pointer;
  }
`;

const Desc = styled.div`
  text-align: center;

  > p {
    cursor: text;
  }
`;

export const Tab = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: 'Tab1', content: 'Tab menu ONE' },
    { name: 'Tab2', content: 'Tab menu TWO' },
    { name: 'Tab3', content: 'Tab menu THREE' },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <>
      <div>
        <TabMenu>
          {menuArr.map((el, idx) => {
            return (
            <li
              key={idx}
              className={currentTab === idx ? "submenu focused" : "submenu"}
              onClick={() => selectMenuHandler(idx)}
            >
              {el.name}
            </li>
            )
          })}
        </TabMenu>
        <Desc>
          <p>{menuArr[currentTab].content}</p>
        </Desc>
      </div>
    </>
  );
};
