import { makeActive } from "./makeActive";

describe("makeActive", () => {
  let element: HTMLElement;

  beforeEach(() => {
    // Create a element before each test
    element = document.createElement("div");
  });

  it("adds 'active' class if element has 'idle' class", () => {
    element.classList.add("idle");

    makeActive.call(element);

    expect(element.classList.contains("active")).toBeTruthy();
    expect(element.classList.contains("idle")).toBeFalsy();
  });

  it("adds 'idle' class if element has 'active' class", () => {
    element.classList.add("active");

    makeActive.call(element);

    expect(element.classList.contains("idle")).toBeTruthy();
    expect(element.classList.contains("active")).toBeFalsy();
  });
});
