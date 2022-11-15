import { render, screen } from "@testing-library/react";
import App from "./App";
import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("renders a page", () => {
  render(<App />);
  const heading = screen.getAllByText("Women Algo Crew");
  expect(heading).toHaveLength(1);
});
