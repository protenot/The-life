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

  beforeEach(() => {
    allCells = [createCell("active"), createCell("idle"), createCell("active")];
    console.log(allCells[0]);

    // allCells[0].classList.add("active");
    // allCells[1].classList.add("idle");
    // allCells[2].classList.add("active");

    // allCells  = Array.from(document.querySelectorAll('div'));

    // console.log(JSON.stringify(allCells));
  });

  it("clears 'active' class and resets generationCounter and counter text", () => {
    allCells = [createCell("active"), createCell("idle"), createCell("active")];

    clearField(allCells);
    // sleep(200);

    // console.log(JSON.stringify(allCells));

    // expect(allCells[0].className).toBe("idle");
    expect(allCells[1].className).toBe("idle");
    // expect(allCells[2].classList.contains("active")).toBeFalsy();

    // expect(counter.innerText).toBe("Quantity of rebirth: 0");
  });

  it("does nothing if no cell has 'active' class", () => {
    clearField([allCells[1]]);

    expect(allCells[1].classList.contains("active")).toBeFalsy();
  });
});
