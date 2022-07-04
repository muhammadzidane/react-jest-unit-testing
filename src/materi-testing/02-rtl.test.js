import { render, screen } from "@testing-library/react";
import App from "../App";

it("Menyapa apakah ada zidane?", () => {
  render(<App />)
  const text = screen.getByText(/Hello Zidane/i);

  expect(text).toBeInTheDocument();
});
