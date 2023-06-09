import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Menu } from "./Menu";

describe("Menu", () => {
  it("should call handleCloseMenu and setMenuState on close button click", () => {
    const handleCloseMenuMock = jest.fn();
    const setMenuStateMock = jest.fn();

    const { getByTestId } = render(
      <Menu
        isShown={true}
        handleCloseMenu={handleCloseMenuMock}
        setOpenVictory={() => {}}
        handleGiveUp={() => {}}
        handleInit={() => {}}
        setHintCounter={() => {}}
      />
    );

    const closeButton = getByTestId("close-button");
    fireEvent.click(closeButton);

    expect(handleCloseMenuMock).toHaveBeenCalled();
    expect(setMenuStateMock).toHaveBeenCalledWith(0);
  });

  it("should call handleBackToOptions and setMenuState on back button click", () => {
    const handleBackToOptionsMock = jest.fn();
    const setMenuStateMock = jest.fn();

    const { getByTestId } = render(
      <Menu
        isShown={true}
        handleCloseMenu={() => {}}
        setOpenVictory={() => {}}
        handleGiveUp={() => {}}
        handleInit={() => {}}
        setHintCounter={() => {}}
      />
    );

    const backButton = getByTestId("back-button");
    fireEvent.click(backButton);

    expect(handleBackToOptionsMock).toHaveBeenCalled();
    expect(setMenuStateMock).toHaveBeenCalledWith(0);
  });

  it("should render OptionsView component when menuState is Default", () => {
    const { getByText } = render(
      <Menu
        isShown={true}
        handleCloseMenu={() => {}}
        setOpenVictory={() => {}}
        handleGiveUp={() => {}}
        handleInit={() => {}}
        setHintCounter={() => {}}
      />
    );

    const optionsViewHeader = getByText("Меню");
    expect(optionsViewHeader).toBeInTheDocument();
  });

  it("should render FeedbackView component when menuState is Feedback", () => {
    const { getByText } = render(
      <Menu
        isShown={true}
        handleCloseMenu={() => {}}
        setOpenVictory={() => {}}
        handleGiveUp={() => {}}
        handleInit={() => {}}
        setHintCounter={() => {}}
      />
    );

    const feedbackViewHeader = getByText("Фидбэк");
    expect(feedbackViewHeader).toBeInTheDocument();
  });
});
