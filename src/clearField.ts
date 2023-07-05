export function clearField(
  allCells: HTMLElement[]
  // generationCounter: { value: number },
  // counter: HTMLElement,
  // speed: { value: number }
): void {
  allCells = Array.from(document.querySelectorAll(".box"));

  for (let i = 0; i < allCells.length; i++) {
    // console.log(allCells.length)
    if (allCells[i]?.classList.contains("active")) {
      allCells[i].classList.add("idle");
      allCells[i].classList.remove("active");
      // generationCounter.value = 0;
      //  counter.innerText =
      //   "Quantity of rebirth: " + generationCounter.value.toString();
    }
  }
  // generationCounter.value = 0;
  // "Quantity of rebirth: " + generationCounter.value.toString();
  // speed.value = 0;
  // window.location.reload();
  // throw ""
  // new Error("Game is over");
}
