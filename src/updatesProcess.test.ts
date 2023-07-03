import { updatesProcess } from "./updatesProcess.ts";
import { findActiveNeighbors } from "./findActiveNeighbors";

interface CustomHTMLElement extends HTMLElement {
  countNeighbors?: number;
}

function createCell(className: string): CustomHTMLElement {
  const cell: CustomHTMLElement = document.createElement("div");
  cell.classList.add(className);

  return cell;
}

jest.useFakeTimers();

describe("updatesProcess", () => {
  test("should call findActiveNeighbors and recursively call updatesProcess with the correct arguments", () => {
    const speed = 2;
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
    const generationCounter = 0;
    const inputX = 3;
    const counter = document.createElement("div");
    // const findActiveNeighbors= require ('./findActiveNeighbors')
    const setTimeoutSpy = jest.spyOn(window, "setTimeout");
    // const findActiveNeighborsSpy = jest.spyOn(findActiveNeighbors, 'findActiveNeighbors');
    // const updatesProcessSpy = jest.spyOn(updatesProcess, 'updatesProcess');

    updatesProcess(allCells, generationCounter, inputX, counter, speed);

    /* expect(findActiveNeighbors).toHaveBeenCalledWith(
      allCells,
      generationCounter,
      inputX,
      counter,
      speed
    ); */
    // expect(updatesProcess()).toHaveBeenCalledWith(speed, allCells, generationCounter, inputX, counter);
    expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
    expect(setTimeoutSpy).toHaveBeenLastCalledWith(
      expect.any(Function),
      1200 / speed
    );
  });
});
