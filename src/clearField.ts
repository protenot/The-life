export function clearField(
  allCells: HTMLElement[]
  
): void {
  allCells = Array.from(document.querySelectorAll(".box"));

  for (let i = 0; i < allCells.length; i++) {
   
    if (allCells[i]?.classList.contains("active")) {
      allCells[i].classList.add("idle");
      allCells[i].classList.remove("active");
      
    }
  }
  
}
