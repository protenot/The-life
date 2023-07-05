import { findActiveNeighbors } from "./findActiveNeighbors";

interface CustomHTMLElement extends HTMLElement {
  countNeighbors?: number;
}
export function updatesProcess(
  allCells: CustomHTMLElement[],
  generationCounter: { value: number },
  inputX: number,
  counter: HTMLElement,
  speed: { value: number }
): void {
  allCells = Array.from(document.querySelectorAll(".box"));
  // console.log(allCells)

  setTimeout(function () {
    findActiveNeighbors(allCells, generationCounter, inputX, counter, speed);

    updatesProcess(allCells, generationCounter, inputX, counter, speed);
  }, 1200 / speed.value);
}
