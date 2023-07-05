import { makeActive } from "./makeActive.ts";
import { updatesProcess } from "./updatesProcess.ts";
import { clearField } from "./clearField.ts";

interface CustomHTMLElement extends HTMLElement {
  countNeighbors?: number;
}

export function createMarkup(
  element: HTMLElement,
  totalQuantity: number,
  allCells: CustomHTMLElement[],
  generationCounter: { value: number },
  inputX: number,
  counter: HTMLElement,
  speed: { value: number }
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
  // console.log(document.querySelectorAll(".box"));

  const buttonStart = document.createElement("button");
  buttonStart.classList.add("start");

  buttonStart.innerText = "Start";

  element.append(buttonStart);
  // buttonStart.addEventListener("click", updatesProcess);
  buttonStart.addEventListener("click", function () {
    updatesProcess(allCells, generationCounter, inputX, counter, speed);
 
 
  });

  const buttonClear = document.createElement("button");
  buttonClear.classList.add("clear");
  buttonClear.innerText = "Clear field";
  element.append(buttonClear);

  buttonClear.addEventListener("click", function () {
    clearField(allCells, generationCounter, counter, speed);
  });
  /* const buttonRestart = document.createElement("button");
  buttonRestart.classList.add("start");
  
  buttonRestart.innerText = "Restart";
 
  element.append(buttonRestart);

  buttonRestart.addEventListener("click",  ()=> {
    history.go(0);
    setTimeout(function(){
      window.location.reload();
      history.go(0);
    });
 
 
  });*/

}
