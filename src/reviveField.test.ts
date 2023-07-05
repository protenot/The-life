import { reviveField } from "./reviveField";

describe("reviveField", () => {
  let element: HTMLElement;
  let x: number;
  let y: number;

  beforeEach(() => {
    // Create a mock element
    element = document.createElement("div");

    // Set up other necessary variables
    x = 5;
    y = 5;
  });
  afterEach(() => {
    // Clean up the element after each test
    element.innerHTML = "";
  });

  it("is a function", () => {
    expect(reviveField).toBeInstanceOf(Function);
  });
  it("should add elements to the element", () => {
    reviveField(element, x, y);
    const input: HTMLInputElement = element.querySelector(".speed");

    expect(element.querySelector(".counter")).toBeTruthy();
    expect(input).toBeTruthy();
    expect(input.type).toBe("range");
    expect(input.value).toBe("30");
  });
  it("should set initial values correctly", () => {
    reviveField(element, x, y);

    expect(element.querySelectorAll(".box").length).toBe(x * y);
  });
});
