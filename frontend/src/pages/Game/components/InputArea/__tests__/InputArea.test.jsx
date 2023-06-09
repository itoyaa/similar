import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { InputArea } from "./InputArea";

describe("InputArea", () => {
  it("should call onClick when DarkButton is clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <InputArea
        onClick={onClickMock}
        answer=""
        lastTry={null}
        triesCounter={0}
        shake={false}
        handleInit={() => {}}
      />
    );

    const darkButton = getByText("Отправить");
    fireEvent.click(darkButton);

    expect(onClickMock).toHaveBeenCalled();
  });

  it("should call handleInit and change location when DarkButton is clicked and answer prop is truthy", () => {
    const handleInitMock = jest.fn();
    Object.defineProperty(window, "location", {
      value: {
        href: "http://example.ru/1",
        assign: jest.fn(),
      },
      writable: true,
    });

    const { getByText } = render(
      <InputArea
        onClick={() => {}}
        answer="example"
        lastTry={null}
        triesCounter={0}
        shake={false}
        handleInit={handleInitMock}
      />
    );

    const darkButton = getByText("Следующая игра");
    fireEvent.click(darkButton);

    expect(handleInitMock).toHaveBeenCalled();
  });

  it("should call onChange when Input value changes", () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(
      <InputArea
        onClick={() => {}}
        answer=""
        lastTry={null}
        triesCounter={0}
        shake={false}
        handleInit={() => {}}
      />
    );

    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });

    expect(onChangeMock).toHaveBeenCalled();
  });

  it("should call handleAddOnEnterPress when Enter key is pressed", () => {
    const handleAddOnEnterPressMock = jest.fn();
    const { getByRole } = render(
      <InputArea
        onClick={() => {}}
        answer=""
        lastTry={null}
        triesCounter={0}
        shake={false}
        handleInit={() => {}}
      />
    );

    const input = getByRole("textbox");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(handleAddOnEnterPressMock).toHaveBeenCalled();
  });
});
