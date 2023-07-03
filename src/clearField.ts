export function clearField(
  allCells: HTMLElement[],
  generationCounter: number,
  counter: HTMLElement,
  speed: number
): void {
  for (let i = 0; i < allCells.length; i++) {
    if (allCells[i].classList.contains("active")) {
      allCells[i].classList.add("idle");
      allCells[i].classList.remove("active");
      generationCounter = 0;
      counter.innerText =
        "Quantity of rebirth: " + generationCounter.toString();
    }
  }
  generationCounter = 0;
  speed = 0;
  // window.location.reload();
  // throw ""
  // new Error("Game is over");
}
