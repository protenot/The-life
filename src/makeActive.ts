export function makeActive(this: {
  classList: DOMTokenList;

  box: HTMLDivElement;
}): void {
  if (this.classList.contains("idle")) {
    this.classList.add("active");
    this.classList.remove("idle");
  } else if (this.classList.contains("active")) {
    this.classList.add("idle");
    this.classList.remove("active");
  }
}
