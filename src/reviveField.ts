import { createMarkup } from "./createMarkup";
// import { findActiveNeighbors } from "./findActiveNeighbors";
// import { makeActive } from "./makeActive";
export function reviveField(element: HTMLElement, x: number, y: number): void {
  const generationCounter: { value: number } = { value: 0 };
  // generationCounter = { value: 0 };

  const counter: HTMLElement = document.createElement("div");
  counter.classList.add("counter");
  element.append(counter);

  const speedInput: HTMLInputElement = document.createElement("input");
  speedInput.classList.add("speed");
  speedInput.type = "range";
  speedInput.min = "0";
  speedInput.max = "60";
  speedInput.value = "30";
  speedInput.addEventListener("input", function() {
    speed.value = Number(speedInput.value);
  });
  element.append(speedInput);

  const speed: { value: number } = { value: Number(speedInput.value) };
  console.log(speed);
  const inputX: number = x;
  const inputY: number = y;
  const totalQuantity: number = inputX * inputY;
  const allCells: HTMLElement[] = Array.from(document.querySelectorAll(".box"));

  createMarkup(
    element,
    totalQuantity,
    allCells,
    generationCounter,
    inputX,
    counter,
    speed
  );

  // interface CustomHTMLElement extends HTMLElement {
  //     countNeighbors?: number;
  //  }
  //  console.log (document.querySelectorAll(".box"))
  //
  // console.log(allCells.length);
  // findActiveNeighbors(allCells, generationCounter, inputX, counter, speed);
}
