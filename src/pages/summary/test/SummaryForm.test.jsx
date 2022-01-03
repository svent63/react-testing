import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SummaryForm from "../SummaryForm";

describe("SummaryForm component", () => {
  test("initial condition", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();

    const orderButton = screen.getByRole("button", { name: "Confirm order" });
    expect(orderButton).toBeDisabled();

    userEvent.click(checkbox);
    expect(orderButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(orderButton).toBeDisabled();
  });

  test("enable button when checkbox is checked", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox");
    const orderButton = screen.getByRole("button");

    userEvent.click(checkbox);
    expect(orderButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(orderButton).toBeDisabled();
  });

  test("popover rendered when hover", async () => {
    render(<SummaryForm />);

    // popover start out hidden
    const nullPopover = screen.queryByText(
      /No ice cream will acctualy be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();

    // popover appear on mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);
    const popover = screen.getByText(
      /No ice cream will acctualy be delivered/i
    );
    expect(popover).toBeInTheDocument();

    // popover disappear when we mouse out
    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() =>
      screen.queryByText(/No ice cream will acctualy be delivered/i)
    );
  });
});
