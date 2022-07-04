import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import ComponentUserEvent from "./ComponentUserEvent";

it("Testing onChange event ketika typing", () => {
  render(<App />);
  const input = screen.getByTestId("inputValue");
  userEvent.type(input, "Muhammad Zidane");
  const text = screen.getByText(/Anda mengetik sebuah/);
  expect(text).toBeInTheDocument();
});

it("testing onCLick pada component user event", () => {
  const MOCK_SUBMIT_BUTTON = jest.fn();

  render(<ComponentUserEvent onSubmit={MOCK_SUBMIT_BUTTON} />);
  const buttonSubmit = screen.getByTestId("submit");
  userEvent.click(buttonSubmit);
  expect(MOCK_SUBMIT_BUTTON).toHaveBeenCalled();
});