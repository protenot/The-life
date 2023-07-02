import { createMarkup } from "./createMarkup";
import { makeActive } from "./makeActive";
import { updatesProcess } from "./updatesProcess";
import { clearField } from "./clearField";

describe("createMarkup", () => {
  let container: HTMLElement;

  beforeEach(() => {
    // Create a container element before each test
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // Clean up the container element after each test
    container.remove();
  });

  test("creates markup correctly", () => {
    const totalQuantity = 5;
    createMarkup(container, totalQuantity);

    // Assert that the container has a field div
    const fieldElement = container.querySelector(".field");
    expect(fieldElement).toBeTruthy();

    // Assert that the container has the specified number of box divs
    const boxElements = container.querySelectorAll(".box");
    expect(boxElements.length).toBe(totalQuantity);

    // Assert that the buttons are created and have the correct text
    const startButton = container.querySelector(".start");
    expect(startButton).toBeTruthy();
    expect(startButton.textContent).toBe("Start");

    const clearButton = container.querySelector(".clear");
    expect(clearButton).toBeTruthy();
    expect(clearButton.textContent).toBe("Clear field");

    // Test event listeners
    const makeActiveSpy = jest.spyOn(makeActive);
    boxElements[0].dispatchEvent(new MouseEvent("click"));
    expect(makeActiveSpy).toHaveBeenCalled();

    const updatesProcessSpy = jest.spyOn(updatesProcess);
    startButton.dispatchEvent(new MouseEvent("click"));
    expect(updatesProcessSpy).toHaveBeenCalled();

    const clearFieldSpy = jest.spyOn(clearField);
    clearButton.dispatchEvent(new MouseEvent("click"));
    expect(clearFieldSpy).toHaveBeenCalled();
  });
});
