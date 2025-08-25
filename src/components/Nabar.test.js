import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Nabar";

describe("Navbar responsive behavior", () => {
  test("hamburger toggles the mobile menu", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /toggle menu/i });
    // initially collapsed
    expect(screen.getByRole("navigation")).toBeInTheDocument();

    // open menu
    fireEvent.click(button);
    const links = screen.getByText(/home/i);
    expect(links).toBeVisible();

    // close menu
    fireEvent.click(button);
    // after close, aria-expanded should be false
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  test("clicking a link closes the menu", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const button = screen.getByRole("button", { name: /toggle menu/i });
    fireEvent.click(button);
    const homeLink = screen.getByText(/home/i);
    fireEvent.click(homeLink);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});
