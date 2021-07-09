import React from 'react';
import { cleanup, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal, ModalBtn } from '../BareMinimumRequirements/Modal'
import TestRenderer from 'react-test-renderer';

describe("Modal 버튼 기능 테스트", () => {
  afterAll(() => {
    cleanup();
  });

  it("Modal 창을 띄워 줄 Open Modal 버튼이 있어야 합니다.", () => {
    const testRenderer = TestRenderer.create(<Modal />);
    const testInstance = testRenderer.root;
    const ModalButton = testInstance.findByType(ModalBtn)
    expect(ModalButton).toBeTruthy();
  });

  it("버튼을 클릭하면 Modal 컴포넌트 내부에 Modal배경, Modal창 div 엘리먼트가 렌더링됩니다.", async () => {
    const { container, queryByRole } = render(<Modal />);
    const ModalButton = container.querySelector("button");

    await userEvent.click(ModalButton); 
    await waitFor(() => {
      expect(queryByRole('dialog')).toBeTruthy();
    });
  });

  it("버튼을 한 번 더 클릭하면 Modal배경, Modal창 div 엘리먼트가 사라집니다.", async () => {
    const { container, queryByRole } = render(<Modal />);
    const ModalButton = container.querySelector("button");

    await userEvent.click(ModalButton); 
    await userEvent.click(ModalButton); 
    await waitFor(() => {
      expect(queryByRole('dialog')).toBeFalsy();
    });
  });

  it("Modal 창 밖을 클릭하면, Modal배경, Modal창 div 엘리먼트가 사라집니다.", async () => {
    const { container, queryByRole } = render(<Modal />);
    const ModalButton = container.querySelector("button");
    const ModalOutside = container.querySelector("div");

    await userEvent.click(ModalButton); 
    await userEvent.click(ModalOutside); 
    await waitFor(() => {
      expect(queryByRole('dialog')).toBeFalsy();
    });
  });
})
