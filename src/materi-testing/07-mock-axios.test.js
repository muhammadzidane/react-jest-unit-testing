import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import App from "../App";

jest.mock("axios");

it("Untuk memastikan list user dengan call axios", async () => {
  const users = [
    {
      id: 1,
      name: "Zidane",
    },
    {
      id: 2,
      name: "Siti",
    },
    {
      id: 3,
      name: "Maya",
    },
  ]
  axios.get.mockImplementation(() => Promise.resolve({ data: users }));
  render(<App />);

  const button = screen.getByTestId("get-users");
  userEvent.click(button);
  await waitFor(() => {
    expect(screen.getAllByTestId("user-name")).toHaveLength(users.length)
  });
});