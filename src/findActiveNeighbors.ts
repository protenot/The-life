interface CustomHTMLElement extends HTMLElement {
  countNeighbors?: number;
}

const arrayAllNext: Element[] = [];

export function findActiveNeighbors(
  allCells: CustomHTMLElement[],
  generationCounter: { value: number },
  inputX: number,
  counter: HTMLElement
  // speed: { value: number }
): void {
  let newArr: Element[] = [];
  // let arrayAllPrevious:Element[];
  // let arrayAllNext:Element[]=[];
  for (let i = 0; i < allCells.length; i++) {
    //  arrayAllPrevious.push( allCells[i]);
    // console.log(arrayAllPrevious.length)

    allCells[i].countNeighbors = 0;
    // проверяем первую ячейку
    if (i === 0) {
      if (allCells[i + 1].classList.contains("active")) {
        // console.log(allCells[i].classList);
        allCells[i].countNeighbors++;
        // console.log(i);
        // console.log("соседи В " + allCells[i].countNeighbors);
      }

      if (allCells[inputX].classList.contains("active")) {
        allCells[i].countNeighbors++;
        // console.log(i);
        // console.log("соседи Ю" + allCells[i].countNeighbors);
      }
      if (allCells[inputX + 1].classList.contains("active")) {
        allCells[i].countNeighbors++;
        // console.log(i);
        // console.log("соседи ЮВ " + allCells[i].countNeighbors);
      }
    }
    if (i === 1) {
      if (allCells[i - 1].classList.contains("active")) {
        // console.log(allCells[i].classList);
        allCells[i].countNeighbors++;
        // console.log(i);
        // console.log("соседи Z " + allCells[i].countNeighbors);
      }
      if (allCells[i + 1].classList.contains("active")) {
        allCells[i].countNeighbors++;
        // console.log(i);
        // console.log("соседи В " + allCells[i].countNeighbors);
      }
      if (allCells[inputX].classList.contains("active")) {
        allCells[i].countNeighbors++;
        // console.log(i);
        // console.log("соседи Ю" + allCells[i].countNeighbors);
      }

      if (allCells[inputX - 1].classList.contains("active")) {
        allCells[i].countNeighbors++;
        // console.log(i);
        // console.log("соседи ЮЗ " + allCells[i].countNeighbors);
      }
      if (allCells[inputX + 1].classList.contains("active")) {
        allCells[i].countNeighbors++;
        // console.log(i);
        // console.log("соседи ЮВ " + allCells[i].countNeighbors);
      }
    } else {
      if (i > 1 && i <= allCells.length - 1) {
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
        if (
          i - inputX >= 0 &&
          allCells[i - inputX].classList.contains("active")
        ) {
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
          //  console.log("соседи СВ " + allCells[i].countNeighbors);
          // console.log( '6 яч ' + allCells[i+inputX].className)
        }

        // проверяем клетку на востоке
        if (
          (i + 1) % inputX !== 0 &&
          i + 1 &&
          i + 1 <= allCells.length - 1 &&
          allCells[i + 1].classList.contains("active")
        ) {
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
          //  console.log(i);
          //  console.log("соседи Ю" + allCells[i].countNeighbors);
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
    if (allCells[i].classList.contains("active")) {
      newArr.push(allCells[i]);
    }
    arrayAllNext.push(allCells[i]);
  }
  // console.log(arrayAllNext.length);
  // alert ('prev'+(arrayAllPrevious.length))

  if (newArr.length > 0) {
    generationCounter.value++;

    counter.innerText =
      "Quantity of rebirth: " + generationCounter.value.toString();
  } else {
    generationCounter.value = 0;
    counter.innerText =
      "Quantity of rebirth: " + generationCounter.value.toString();

    // alert("Everybody sleep!");
    // window.location.reload();
  }

  // } catch (err) {throw new Error("Game is over");}
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
  }

  newArr = [];
}
