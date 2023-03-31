/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
import { screen, render, fireEvent, getByText } from "@testing-library/react";
import "@testing-library/jest-dom";
import PopUp from "./PopUp";

describe("PopUp test", () => {
  test("renders a correct title and childrens", () => {
    const children = "Children";
    const title = "Title";
    const { getByText, asFragment } = render(
      <PopUp hideModal={() => {}} isOpen={true} title={title}>
        {children}
      </PopUp>
    );
    console.log(asFragment());
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(children)).toBeInTheDocument();
  });

  test("popup shows a close button", () => {
    const handleClose = jest.fn();
    const children = "Children";

    const { getByText } = render(
      <PopUp hideModal={handleClose} isOpen={true}>
        {children}
      </PopUp>
    );

    fireEvent.click(getByText(/close/i));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
