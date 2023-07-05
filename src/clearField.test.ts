import { clearField } from "./clearField.ts";

/* const sleep = (x) =>
  new Promise((resolve) => {
    setTimeout(resolve, x);
  }); */
function createCell(className: string): HTMLElement {
  const cell: HTMLElement = document.createElement("div");
  cell.classList.add(className);

  return cell;
}
describe("clearField", () => {
  let allCells: HTMLElement[];
  let generationCounter: { value: number };
  let counter: HTMLElement;
  let speed: { value: number };

  beforeEach(() => {
    allCells = [createCell("active"), createCell("idle"), createCell("active")];
    console.log(allCells[0]);

    // allCells[0].classList.add("active");
    // allCells[1].classList.add("idle");
    // allCells[2].classList.add("active");

    // allCells  = Array.from(document.querySelectorAll('div'));
    generationCounter = { value: 3 };
    counter = document.createElement("p");
    counter.innerText =
      "Quantity of rebirth: " + generationCounter.value.toString();
    //  console.log(counter.innerText)
    speed = { value: 30 };
    // console.log(JSON.stringify(allCells));
  });

  it("clears 'active' class and resets generationCounter and counter text", () => {
    clearField(
      allCells,
      (generationCounter = { value: 3 }),
      counter,
      (speed = { value: 30 })
    );
    // sleep(200);

    // console.log(JSON.stringify(allCells));

    expect(allCells[0].className).toBe("idle");
    expect(allCells[1].className).toBe("idle");
    // expect(allCells[2].classList.contains("active")).toBeFalsy();

    expect(generationCounter.value).toBe(0);
    // expect(counter.innerText).toBe("Quantity of rebirth: 0");
    expect(speed.value).toBe(0);
  });

  it("does nothing if no cell has 'active' class", () => {
    clearField([allCells[1]], generationCounter, counter, speed);

    expect(allCells[1].classList.contains("active")).toBeFalsy();

    expect(generationCounter.value).toBe(0);
    expect(speed.value).toBe(0);
  });
});
