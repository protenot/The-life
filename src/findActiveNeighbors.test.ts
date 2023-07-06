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
  it("should update the countNeighbors property correctly for each cell", () => {
   
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
    const generationCounter: { value: number } = { value: 0 };
    const inputX = 3;
    const counter = createMockHTMLElement();

    findActiveNeighbors(allCells, generationCounter, inputX, counter);

    

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

  it("should make newArr with active cells", () => {
    
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
    const generationCounter: { value: number } = { value: 0 };
    const inputX = 3;
    const counter = createMockHTMLElement();

    
    findActiveNeighbors(allCells, generationCounter, inputX, counter);

   
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

    expect(generationCounter.value).toEqual(1);

    expect(counter.innerText).toBe("Quantity of rebirth: 1");
  });

  it("should make cell active or idle if 3, 2, 1 cells alive around", () => {
    const allCells: CustomHTMLElement[] = [
      createCell("active"),
      createCell("active"),
      createCell("active"),
      createCell("idle"),
      createCell("idle"),
      createCell("idle"),
      createCell("idle"),
      createCell("idle"),
      createCell("idle"),
    ];
    const generationCounter: { value: number } = { value: 0 };
    const inputX = 3;
    const counter = createMockHTMLElement();

    findActiveNeighbors(allCells, generationCounter, inputX, counter);
   
    expect(generationCounter.value).toEqual(1);
   
    // changed class to 'active' if 'idle' and 3 'alive' around

    expect(allCells[4].className).toBe("active");
    
    // changed class to "idle" if 'alive' and 1 'alive' around
   
    expect(allCells[0].className).toBe("idle");
    expect(allCells[2].className).toBe("idle");
   
    // nothing changes if 2 'alive' around
    
    expect(allCells[1].className).toBe("active");
  });
});
