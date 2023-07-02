export function clearField(
  allCells: HTMLElement[],
  generationCounter: number,
  counter: HTMLElement
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
}
