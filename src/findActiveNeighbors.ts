import { clearField } from "./clearField.ts";

interface CustomHTMLElement extends HTMLElement {
  countNeighbors?: number;
}

export function findActiveNeighbors(
  allCells: CustomHTMLElement[],
  generationCounter: { value: number },
  inputX: number,
  counter: HTMLElement,
  speed: number
): void {
  let newArr: Element[] = [];

  for (let i = 0; i < allCells.length; i++) {
    // newArrayAll.push( allCells[i]);

    allCells[i].countNeighbors = 0;
    // проверяем первую ячейку
    if (i === 0) {
      if (allCells[i + 1].classList.contains("active")) {
        // console.log(allCells[i].classList);
        allCells[i].countNeighbors++;
      }
      // console.log(allCells[4].className)
      if (allCells[inputX].classList.contains("active")) {
        allCells[i].countNeighbors++;
      }
      if (allCells[inputX + 1].classList.contains("active")) {
        allCells[i].countNeighbors++;
      }
      //  console.log(allCells[i].countNeighbors)
    } else {
      if (i > 0 && i <= allCells.length - 1) {
        // проверяем клетку на юго-западе
        if (
          i % inputX !== 0 &&
          i + inputX - 1 &&
          i + inputX - 1 <= allCells.length - 1 &&
          allCells[i + inputX - 1].classList.contains("active")
        ) {
          allCells[i].countNeighbors++;

          // console.log(i);
          // console.log("соседи ЮЗ " + allCells[i].countNeighbors);
        }
        // проверяем клетку на западе
        if (
          i % inputX !== 0 &&
          i - 1 >= 0 &&
          allCells[i - 1].classList.contains("active")
        ) {
          allCells[i].countNeighbors++;
          // console.log(i);
          // console.log("соседи З " + allCells[i].countNeighbors);
          // console.log( '5 яч ' + allCells[5].className)
        }

        // проверяем клетку на северо-западе

        if (
          i % inputX !== 0 &&
          i - inputX - 1 >= 0 &&
          allCells[i - inputX - 1].classList.contains("active")
        ) {
          allCells[i].countNeighbors++;
          // console.log(i);
          // console.log("соседи СЗ " + allCells[i].countNeighbors);
        }
        // проверяем клетку на севере
        if (i - inputX >= 0) {
          if (allCells[i - inputX].classList.contains("active")) {
            // console.log(i);
            allCells[i].countNeighbors++;

            // console.log("соседи С " + allCells[i].countNeighbors);
            // console.log(allCells[3].className)
            // console.log( '4 яч ' + allCells[4].className)
          }
          // проверяем клетку на северо-востоке
          if (
            (i + 1) % inputX !== 0 &&
            i - inputX + 1 > 0 &&
            allCells[i - inputX + 1].classList.contains("active")
          ) {
            allCells[i].countNeighbors++;
            // console.log(i);
            // console.log("соседи СВ " + allCells[i].countNeighbors);
            // console.log( '6 яч ' + allCells[i+inputX].className)
          }

          // проверяем клетку на востоке
          if (
            (i + 1) % inputX !== 0 &&
            i + 1 &&
            i + 1 <= allCells.length - 1 &&
            allCells[i + 1].classList.contains("active")
          ) {
            // console.log(i)
            allCells[i].countNeighbors++;
            // console.log(i);
            // console.log("соседи В " + allCells[i].countNeighbors);
          }

          // проверяем клетку на юге
          if (
            i + inputX &&
            i + inputX <= allCells.length - 1 &&
            allCells[i + inputX].classList.contains("active")
          ) {
            // console.log( '5 яч ' + allCells[5].className)
            allCells[i].countNeighbors++;
            // console.log(i);
            // console.log("соседи Ю" + allCells[i].countNeighbors);
          }
          // проверяем клетку на юго-востоке
          if (
            (i + 1) % inputX !== 0 &&
            i + inputX + 1 <= allCells.length - 1 &&
            allCells[i + inputX + 1].classList.contains("active")
          ) {
            allCells[i].countNeighbors++;
            // console.log(i);
            // console.log("все соседи ЮВ " + allCells[i].countNeighbors);
          }
        }
      }
    }
    if (allCells[i].classList.contains("active")) {
      newArr.push(allCells[i]);
    }
  }
  if (newArr.length > 0) {
    console.log(newArr.length);
    // if (newArrayAll.toString() === oldArrayAll.toString()){
    //  console.log(newArrayAll.toString());
    // console.log(oldArrayAll.toString());
    //     alert( 'Stop game! Push button "Clear feild"'  )
    // throw""
    // }else{
    generationCounter.value++;
    console.log(generationCounter);
    counter.innerText =
      "Quantity of rebirth: " + generationCounter.value.toString();
    // }
  } else {
    clearField(allCells, generationCounter, counter, speed);
    // alert('Everybody sleep!')
    // throw""
  }

  for (let i = 0; i < allCells.length; i++) {
    if (allCells[i]?.countNeighbors === 3) {
      if (allCells[i]?.classList.contains("idle")) {
        // console.log(i);
        allCells[i]?.classList.add("active");
        allCells[i]?.classList.remove("idle");
      }
    } else if (allCells[i]?.classList.contains("active")) {
      if (allCells[i]?.countNeighbors === 2) {
        // console.log(i);
        allCells[i]?.classList.add("active");
        allCells[i]?.classList.remove("idle");
      } else {
        // console.log(i);
        allCells[i]?.classList.add("idle");
        allCells[i]?.classList.remove("active");
      }
    } else {
      //  console.log(i);
      if (allCells[i].classList.contains("active")) {
        allCells[i].classList.add("idle");
        allCells[i].classList.remove("active");
      }
    }

    /* if (allCells[i].classList.contains("active")) {
      newArr.push(allCells[i]);
     
    } */
  }

  // let oldArrayAll =newArrayAll;
  //  newArrayAll = [];

  newArr = [];
}
