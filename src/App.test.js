import { render, screen, within } from "@testing-library/react";
import App from "./App";

test("renders navbar Home link", () => {
  render(<App />);
  const nav = screen.getByRole("navigation");
  const homeLink = within(nav).getByRole("link", { name: /^home$/i });
  expect(homeLink).toBeInTheDocument();
});
