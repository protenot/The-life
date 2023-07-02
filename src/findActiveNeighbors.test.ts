import { findActiveNeighbors } from "./findActiveNeighbors";

interface CustomHTMLElement extends HTMLElement {
  countNeighbors?: number;
}

function createCell(className: string): CustomHTMLElement {
  const cell: CustomHTMLElement = document.createElement("div");
  cell.classList.add(className);

  return cell;
}

function createMockHTMLElement(): HTMLElement {
  return document.createElement("div");
}

describe("findActiveNeighbors", () => {
  // beforeEach(() => {

  // });
  it("should update the countNeighbors property correctly for each cell", () => {
    // Mock input data
    const allCells: CustomHTMLElement[] = [
      createCell("active"),
      createCell("active"),
      createCell("idle"),
      createCell("active"),
      createCell("idle"),
      createCell("idle"),
      createCell("active"),
      createCell("active"),
      createCell("idle"),
    ];
    // console.log(allCells.length)
    const generationCounter = 0;
    const inputX = 3;
    const counter = createMockHTMLElement();

    findActiveNeighbors(allCells, generationCounter, inputX, counter);

    // Verify the countNeighbors property is updated correctly

    expect(allCells[0].countNeighbors).toBe(2);

    expect(allCells[1].countNeighbors).toBe(2);
    expect(allCells[2].countNeighbors).toBe(1);
    expect(allCells[3].countNeighbors).toBe(4);
    expect(allCells[4].countNeighbors).toBe(5);
    expect(allCells[5].countNeighbors).toBe(2);
    expect(allCells[6].countNeighbors).toBe(2);
    expect(allCells[7].countNeighbors).toBe(2);
    expect(allCells[8].countNeighbors).toBe(1);
  });

  it("should populate newArr with active cells", () => {
    // Prepare the test data
    const allCells: CustomHTMLElement[] = [
      createCell("active"),
      createCell("active"),
      createCell("idle"),
      createCell("active"),
      createCell("idle"),
      createCell("idle"),
      createCell("active"),
      createCell("active"),
      createCell("idle"),
    ];
    const generationCounter = 0;
    const inputX = 3;
    const counter = createMockHTMLElement();

    // Call the function
    findActiveNeighbors(allCells, generationCounter, inputX, counter);

    // Assert the result
    const activeCells = allCells.filter((cell) =>
      cell.classList.contains("active")
    );

    expect(allCells[0].className).toBe("active");
    expect(allCells[1].className).toBe("active");
    expect(allCells[2].className).toBe("idle");
    expect(allCells[3].className).toBe("idle");
    expect(allCells[4].className).toBe("idle");
    expect(allCells[5].className).toBe("idle");
    expect(allCells[6].className).toBe("active");
    expect(allCells[7].className).toBe("active");
    expect(allCells[8].className).toBe("idle");

    expect(activeCells.length).toEqual(4);
  });
});
