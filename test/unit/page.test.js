import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../../app/page";

jest.mock("../../api/gqlQuery/getCountries", () => ({
  useGetCountries: jest.fn(() => ({
    countries: [
      { code: "US", name: "United States" },
      { code: "CA", name: "Canada" },
    ],
    isLoading: false,
  })),
}));

jest.mock("../../api/gqlQuery/getCountryInfo", () => ({
  getCountryInfo: jest.fn(() =>
    Promise.resolve({
      capital: "Washington D.C.",
      currency: "USD",
      phone: "+1",
    })
  ),
}));

test("renders country list and additional country info on click", async () => {
  render(<Home />);

  // Check if the country list is rendered
  const countryList = screen.getByTestId("country-list");
  expect(countryList).toBeInTheDocument();

  // Check if the country buttons are rendered
  const countryButtons = screen.getAllByTestId(/^country-button-/);
  expect(countryButtons).toHaveLength(2);
  expect(countryButtons[0]).toHaveTextContent("United States");
  expect(countryButtons[1]).toHaveTextContent("Canada");

  // Simulate a click on a country button
  userEvent.click(countryButtons[0]);

  // Wait for additional country info to load
  await waitFor(() => {
    expect(screen.getByText("Capital: Washington D.C.")).toBeInTheDocument();
    expect(screen.getByText("Currency: USD")).toBeInTheDocument();
    expect(screen.getByText("Phone: +1")).toBeInTheDocument();
  });
});
