import { reviveField } from "./reviveField";

describe("reviveField", () => {
  let element: HTMLElement;
  let x: number;
  let y: number;

  beforeEach(() => {
   
    element = document.createElement("div");

   
    x = 5;
    y = 5;
  });
  afterEach(() => {
   
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
