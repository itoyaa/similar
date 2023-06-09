import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Victory } from ".ю/Victory";

describe("Victory", () => {
  it("Следующая игра", () => {
    const handleInitMock = jest.fn();
    const setOpenVictoryMock = jest.fn();
    const nextUrl = "http://example.com/game/2";
    delete window.location;
    window.location = { href: nextUrl };

    const { getByText } = render(
      <Victory
        handleInit={handleInitMock}
        setOpenVictory={setOpenVictoryMock}
        answer="example"
        triesCounter={3}
        hintCounter={2}
        isGiveUp={false}
      />
    );

    const nextGameButton = getByText("Следующая игра");
    fireEvent.click(nextGameButton);

    expect(handleInitMock).toHaveBeenCalled();
    expect(setOpenVictoryMock).toHaveBeenCalledWith(false);
    expect(window.location.href).toBe(nextUrl);

    // Restore window.location
    window.location = windowLocation;
  });

  it('Закрыть', () => {
    const setOpenVictoryMock = jest.fn();

    const { getByTitle } = render(
      <Victory
        handleInit={() => {}}
        setOpenVictory={setOpenVictoryMock}
        answer="example"
        triesCounter={3}
        hintCounter={2}
        isGiveUp={false}
      />
    );

    const closeButton = getByTitle("Закрыть");
    fireEvent.click(closeButton);

    expect(setOpenVictoryMock).toHaveBeenCalledWith(false);
  });
});
