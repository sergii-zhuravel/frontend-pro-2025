import { render, screen } from "@testing-library/react";
import MainSection from ".";

describe("App.test.jsx", () => {
  it("Should have the 'Vite + React' text visible in the User Agent", () => {
    const result = render(<MainSection />);

    expect(screen.getByText("MainSection2: 4")).toBeInTheDocument();
    expect(result).toMatchSnapshot();
  });
});
