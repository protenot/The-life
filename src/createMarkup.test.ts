import { createMarkup } from "./createMarkup";

import * as updatesProcess from "./updatesProcess";
import * as clearField from "./clearField";

describe("createMarkup", () => {
  let container: HTMLElement;

  beforeEach(() => {
    // Create a container element before each test
    container = document.createElement("div");
    document.body.append(container);
  });

  afterEach(() => {
    // Clean up the container element after each test
    container.remove();
  });
  interface CustomHTMLElement extends HTMLElement {
    countNeighbors?: number;
  }

  function createCell(className: string): CustomHTMLElement {
    const cell: CustomHTMLElement = document.createElement("div");
    cell.classList.add(className);

    return cell;
  }

  function createMockHTMLElement(): HTMLElement {
    return document.createElement("div");
  }
  const allCells: CustomHTMLElement[] = [
    createCell("active"),
    createCell("active"),
    createCell("idle"),
    createCell("active"),
    createCell("idle"),
    createCell("idle"),
    createCell("active"),
    createCell("active"),
    createCell("idle"),
  ];
  // console.log(allCells.length)
  const generationCounter: { value: number } = { value: 0 };
  const inputX = 3;
  const counter = createMockHTMLElement();
  const speed = { value: 30 };

  it("creates markup correctly", () => {
    const totalQuantity = 9;
    createMarkup(
      container,
      totalQuantity,
      allCells,
      generationCounter,
      inputX,
      counter,
      speed
    );

    // Check that the container has a field div
    const field = container.querySelector(".field");
    expect(field).toBeTruthy();

    // Check that the container has the specified number of box divs
    const boxElements = field.querySelectorAll(".box");
    expect(boxElements.length).toBe(totalQuantity);

    // Check that the box changes class from 'idle'to 'active'
    const box = field.querySelector(".idle");
    box.dispatchEvent(new Event("click"));
    expect(box.className).toEqual("box active");

    // Assert that the buttons are created and have the correct text
    const startButton: HTMLButtonElement = container.querySelector(".start");
    console.log(startButton.innerText);
    expect(startButton).toBeTruthy();
    expect(startButton.innerText).toBe("Start");

    const clearButton: HTMLButtonElement = container.querySelector(".clear");
    expect(clearButton).toBeTruthy();
    expect(clearButton.innerText).toBe("Clear field");

    // Test event listeners

    const updatesProcessSpy = jest.spyOn(updatesProcess, "updatesProcess");
    startButton.dispatchEvent(new MouseEvent("click"));
    expect(updatesProcessSpy).toHaveBeenCalled();

    const clearFieldSpy = jest.spyOn(clearField, "clearField");
    clearButton.dispatchEvent(new MouseEvent("click"));
    expect(clearFieldSpy).toHaveBeenCalled();
  });
});
