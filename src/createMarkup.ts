import { makeActive } from "./makeActive.ts";
import { updatesProcess } from "./updatesProcess.ts";
import { clearField } from "./clearField.ts";

export function createMarkup(
  element: HTMLElement,
  totalQuantity: number
): void {
  const field = document.createElement("div");
  field.classList.add("field");
  element.prepend(field);

  for (let i = 0; i < totalQuantity; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.classList.add("idle");
    box.addEventListener("click", makeActive);

    field.appendChild(box);
  }

  const buttonStart = document.createElement("button");
  buttonStart.classList.add("start");
  console.log(buttonStart.className);
  buttonStart.innerText = "Start";
  console.log(buttonStart.innerText);
  element.append(buttonStart);
  buttonStart.addEventListener("click", updatesProcess);
  // "click",
  // updatesProcess as (
  // ev: MouseEvent,

  //    ) => unknown,
  // );
  const buttonClear = document.createElement("button");
  buttonClear.classList.add("clear");
  buttonClear.innerText = "Clear field";
  element.append(buttonClear);
  buttonClear.addEventListener("click", clearField);
}
