import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import OrderEntry from "../OrderEntry";
import { server } from "../../../mocks/server";

test("handles error for scoop and toppings routes", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
      return res(ctx.status(500));
    }),
    rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<OrderEntry />);

  await waitFor(async () => {
    const alert = await screen.findAllByRole("alert");
    expect(alert).toHaveLength(2);
  });

  //   const alerts = await screen.findAllByRole("alert");
  //   expect(alerts).toHaveLength(2);
});
