import { createMarkup } from "./createMarkup";
import { findActiveNeighbors } from "./findActiveNeighbors";
import { makeActive } from "./makeActive";
export function reviveField(element: HTMLElement, x: number, y: number): void {
  const generationCounter = 0;

  const counter: HTMLElement = document.createElement("div");
  counter.classList.add("counter");
  element.append(counter);

  const speedInput: HTMLInputElement = document.createElement("input");
  speedInput.classList.add("speed");
  speedInput.type = "range";
  speedInput.min = "0";
  speedInput.max = "60";
  speedInput.value = "30";

  element.append(speedInput);

  const speed = Number(speedInput.value);
  const inputX: number = x;
  const inputY: number = y;
  const totalQuantity: number = inputX * inputY;

  createMarkup(element, totalQuantity);

  // interface CustomHTMLElement extends HTMLElement {
  //     countNeighbors?: number;
  //  }
  //  console.log (document.querySelectorAll(".box"))
  const allCells: HTMLElement[] = Array.from(document.querySelectorAll(".box"));
  console.log(allCells.length);
  findActiveNeighbors(allCells, generationCounter, inputX, counter, speed);
}
