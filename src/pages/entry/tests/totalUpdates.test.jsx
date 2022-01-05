import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OrderDetailsProvider } from "../../../context/OrderDetails";
import Options from "../Options";

beforeEach(() => {});

afterEach(() => {});

test("updated scoop subtotal when scoop change", async () => {
  render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

  // make sure subtotal start out as $0.00
  const scoopSubtotal = screen.getByText("Scoops total $", { exact: false });
  expect(scoopSubtotal).toHaveTextContent("0.00");

  // update vinalla scoops to 1 and check the subtotal
  const vinillaInput = await screen.findByRole("spinbutton", {
    name: "Vinilla",
  });
  userEvent.clear(vinillaInput);
  userEvent.type(vinillaInput, "1");
  expect(scoopSubtotal).toHaveTextContent("2.00");

  // update chocolate scoops to 2 and check the subtotal
  const chocolatInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  userEvent.clear(chocolatInput);
  userEvent.type(chocolatInput, "2");
  expect(scoopSubtotal).toHaveTextContent("3.00");
});
