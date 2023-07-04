import { clearField } from "./clearField.ts";

describe("clearField", () => {
  let allCells: HTMLElement[];
  const generationCounter: { value: number } = { value: 0 };
  let counter: HTMLElement;
  let speed: { value: number };

  beforeEach(() => {
    allCells = [
      document.createElement("div"),
      document.createElement("div"),
      document.createElement("div"),
    ];
    allCells[0].classList.add("active");
    allCells[1].classList.add("idle");
    allCells[2].classList.add("active");

    const generationCounter: { value: number } = { value: 3 };
    counter = document.createElement("p");
    counter.innerText = "Quantity of rebirth: " + generationCounter.toString();
    speed = { value: 30 };
  });

  it("clears 'active' class and resets generationCounter and counter text", () => {
    clearField(allCells, generationCounter, counter, speed);

    expect(allCells[0].classList.contains("active")).toBeFalsy();
    expect(allCells[1].classList.contains("idle")).toBeTruthy();
    expect(allCells[2].classList.contains("active")).toBeFalsy();

    expect(generationCounter.value).toBe(0);
    expect(counter.innerText).toBe("Quantity of rebirth: 0");
  });
  /*
  it("does nothing if no cell has 'active' class", () => {
    clearField([allCells[1]], generationCounter, counter, speed);

    expect(allCells[1].classList.contains("active")).toBeFalsy();

    expect(generationCounter.value).toBe(0);
    expect(counter.innerText).toBe("Quantity of rebirth: 3");
  }); */
});
