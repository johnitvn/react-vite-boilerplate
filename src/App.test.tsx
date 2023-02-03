import {describe, expect, test} from "vitest";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App.tsx", () => {
  test("Should render h1", () => {
    const {container} = render(<App />);
    const h1 = container.querySelector("h1");
    expect(h1?.textContent).toBe("React + Vite + Vite Test");
  });
});
