import { render, screen } from "@testing-library/react";
import App from "../App";
import { data } from "./ComponentVariant";

it("Melakukan testing untuk queryBy dan findBy", async () => {
  render(<App />)
  const text = screen.queryByText(/Selamat Datang/i);
  expect(text).toBeNull();

  const text2 = await screen.findByText(/Selamat Datang/i);
  expect(text2).toBeInTheDocument();
});

it("Melakukan render li sebanyak total hari", () => {
  render(<App />);
  expect(screen.getAllByTestId("hari")).toHaveLength(data.length);
});
