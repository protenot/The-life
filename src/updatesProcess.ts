import { findActiveNeighbors } from "./findActiveNeighbors";

interface CustomHTMLElement extends HTMLElement {
  countNeighbors?: number;
}
export function updatesProcess(
  speed: number,
  allCells: CustomHTMLElement[],
  generationCounter: number,
  inputX: number,
  counter: HTMLElement
): void {
  setTimeout(function () {
    findActiveNeighbors(allCells, generationCounter, inputX, counter, speed);
    updatesProcess(speed, allCells, generationCounter, inputX, counter);
  }, 1200 / speed);
}
