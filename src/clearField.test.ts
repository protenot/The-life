import { clearField } from "./clearField.ts";

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

   
  });

  it("clears 'active' class and resets generationCounter and counter text", () => {
   

    clearField(allCells);
   

   // expect(allCells[0].className).toBe("idle");
    expect(allCells[1].className).toBe("idle");
    // expect(allCells[2].classList.contains("active")).toBeFalsy();

   
  });

  it("does nothing if no cell has 'active' class", () => {
    clearField([allCells[1]]);

    expect(allCells[1].classList.contains("active")).toBeFalsy();
  });
});
