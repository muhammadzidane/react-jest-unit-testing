import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("Testing select element dan di jadikan expect value", () => {
  it("Mengecek toggle text", () => {
    render(<App />);
    const text = screen.getByText("Saya sedang sembunyi");

    expect(text).toBeInTheDocument();
  });

  it("Mengecek button text toggle", () => {
    render(<App />);
    const text = screen.getByText("Munculkan");

    expect(text).toBeInTheDocument();
  });
});

describe("Testing event handlers", () => {
  it("Memastikan text didalam button sesuai setelah button diclick", () => {
    render(<App />);
    const button = screen.getByTestId("hideShow");
    fireEvent.click(button);
    const buttonResult = screen.getByText("Sembunyikan");

    expect(buttonResult).toBeInTheDocument();
  })
});
