import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button.component";

describe("Button Component", () => {
  test("renders button with correct text", () => {
    render(<Button>Click Button</Button>);
    expect(
      screen.getByRole("button", { name: /click button/i })
    ).toBeInTheDocument();
  });

  test("applies custom class name", () => {
    render(<Button className="custom-class">Click Custom Button</Button>);
    expect(screen.getByRole("button", { name: /click custom button/i })).toHaveClass(
      "custom-class"
    );
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Handler</Button>);
    fireEvent.click(screen.getByRole("button", { name: /click handler/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("does not call onClick handler when disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Disabled Button
      </Button>
    );
    fireEvent.click(screen.getByRole("button", { name: /disabled button/i }));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
