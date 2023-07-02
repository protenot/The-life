export function makeActive(this: Element): void {
  if (this.classList.contains("idle")) {
    this.classList.add("active");
    this.classList.remove("idle");
  } else if (this.classList.contains("active")) {
    this.classList.add("idle");
    this.classList.remove("active");
  }
}
