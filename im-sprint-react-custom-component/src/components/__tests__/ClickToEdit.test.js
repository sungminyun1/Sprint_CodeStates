import React from "react";
import { cleanup, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { resq$ } from 'resq';

import { MyInput } from "../AdvancedChallenges/ClickToEdit";

describe("input 창 클릭 기능 테스트", () => {
  afterAll(() => {
    cleanup();
  });

  it("이름과 나이가 적힌 창을 클릭하면 EditMode가 true로 바뀌는 handleClick 메소드가 실행됩니다.", () => {
    const { container } = render(<MyInput />);
    const handler = resq$('span', container).props.onClick;
    expect(typeof handler).toBe('function');
  });

  it("EditMode일 때 변화가 감지되면 새로운 값을 설정하는 handleInputChange 메소드가 실행됩니다.", async () => {
    const { container } = render(<MyInput />);
    const EditInput = container.querySelector("span");

    await userEvent.click(EditInput);
    await waitFor(() => {
        const handler = resq$('input', container).props.onChange;
        expect(typeof handler).toBe('function');
    });
  });

  it("EditMode일 때 input 창이 아닌 다른 곳을 클릭하면 EditMode가 false로 바뀌는 handleBlur 메소드가 실행됩니다.", async () => {
    const { container } = render(<MyInput />);
    const EditInput = container.querySelector("span");

    await userEvent.click(EditInput);
    await waitFor(() => {
        const handler = resq$('input', container).props.onBlur;
        expect(typeof handler).toBe('function');
    });
  });
});
