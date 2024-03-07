const options = {
  inline: "start",
  block: "end",
  behavior: "smooth",
};

// Man or woman;
let manOrWoman;
let buttonMan;
let buttonWoman;

function clickedManAndWoman(e) {
  if (buttonWoman) {
    // if the button is created do not run code.
  } else {
    manOrWoman = document.createElement("div");
    manOrWoman.classList.add("manOrWoman");
    document.body.appendChild(manOrWoman);

    // Creating Header for if buttonDrive is clicked
    let headerDrive = document.createElement("h1");
    headerDrive.classList.add("headerDrive");
    headerDrive.innerText = "Hvor mye drikke trenger jeg i kveld?";
    manOrWoman.appendChild(headerDrive);

    // Creating ManORWoman text
    let manOrWomanHeader = document.createElement("h4");
    manOrWomanHeader.classList.add("manOrWomanHeader");
    manOrWomanHeader.innerText = "Velg Kjønn";
    manOrWoman.appendChild(manOrWomanHeader);
    let questionMark = document.createElement("div");
    questionMark.classList.add("questionMark");
    questionMark.innerText = "?";
    manOrWomanHeader.appendChild(questionMark);
    let dropdownManOrWoman = document.createElement("div");
    dropdownManOrWoman.classList.add("dropdownManOrWoman");
    manOrWomanHeader.appendChild(dropdownManOrWoman);
    let dropdownText = document.createElement("div");
    dropdownText.classList.add("dropdownText");
    dropdownText.innerText =
      "Biologi har innvirkning på promillenivå. Kvinner og menn reagerer ulikt på alkohol, derfor gir kalkulatoren et mer nøyaktig resultat om du oppgir kjønn.";
    dropdownManOrWoman.appendChild(dropdownText);
    let close = document.createElement("div");
    close.classList.add("close");
    dropdownManOrWoman.appendChild(close);
    let triangle = document.createElement("div");
    triangle.classList.add("triangleManOrWoman");
    manOrWomanHeader.appendChild(triangle);

    // Creating man button
    buttonMan = document.createElement("div");
    buttonMan.classList.add("buttonMan");
    buttonMan.classList.add("anim");
    let imgMan = document.createElement("img");
    imgMan.classList.add("imgSex");
    imgMan.src = "../Images/icons8-man-64.png";
    buttonMan.appendChild(imgMan);
    let textMan = document.createElement("h4");
    textMan.classList.add("textSex");
    textMan.innerText = "Man";
    buttonMan.appendChild(textMan);
    manOrWoman.appendChild(buttonMan);

    // Creating woman button
    buttonWoman = document.createElement("div");
    buttonWoman.classList.add("buttonWoman");
    buttonWoman.classList.add("anim");
    let imgWoman = document.createElement("img");
    imgWoman.classList.add("imgSex");
    imgWoman.src = "../Images/icons8-woman-64.png";
    buttonWoman.appendChild(imgWoman);
    let textWoman = document.createElement("h4");
    textWoman.classList.add("textSex");
    textWoman.innerText = "Kvinne";
    buttonWoman.appendChild(textWoman);
    manOrWoman.appendChild(buttonWoman);

    // animation for the buttons
    let buttons = document.querySelectorAll(".anim");

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.style.animation = `buttonAnimate 2s ease-out`;
        } else {
          entry.target.style.animation = "none";
        }
      });
    });

    buttons.forEach((button) => {
      observer.observe(button);
    });

    questionMark.addEventListener("click", () => {
      dropdownManOrWoman.classList.toggle("active");
      triangle.classList.toggle("active");
    });

    close.addEventListener("click", () => {
      dropdownManOrWoman.classList.remove("active");
      triangle.classList.remove("active");
    });
  }

  buttonMan.addEventListener("click", () => {
    bodyMass = 1.65;
    calcBAL();
    buttonMan.classList.toggle("active");
    buttonWoman.classList.remove("active");
    upAndDownButtons();
  });

  buttonWoman.addEventListener("click", () => {
    bodyMass = 1.55;
    calcBAL();
    buttonWoman.classList.toggle("active");
    buttonMan.classList.remove("active");
    upAndDownButtons();
  });
}

clickedManAndWoman();

// The weighet container;
let weighet;

function setWeighet(e) {
  if (weighet) {
    // if the weighet container is created do not run code.
  } else {
    // Creating the weighet elements
    weighet = document.createElement("div");
    weighet.classList.add("weighet");
    weighet.id = "weighetContainer";
    document.body.appendChild(weighet);
    let headerWeighet = document.createElement("h4");
    headerWeighet.classList.add("headerWeighet");
    headerWeighet.innerText = "Din Vekt";
    weighet.appendChild(headerWeighet);
    let questionMarkWeighet = document.createElement("div");
    questionMarkWeighet.classList.add("questionMarkWeighet");
    questionMarkWeighet.innerText = "?";
    headerWeighet.appendChild(questionMarkWeighet);
    let dropdownWeighet = document.createElement("div");
    dropdownWeighet.classList.add("dropdownWeight");
    headerWeighet.appendChild(dropdownWeighet);
    let dropdownText = document.createElement("div");
    dropdownText.classList.add("dropdownText");
    dropdownText.innerText =
      "Ved å oppgi vekt kan vi beregne hvor mye kroppsvev alkohol kan fordele seg i. Det har betydning for hvor høy promille du får. Du kan skrive inn vekt helt fritt ved å klikke på tallet over kg.";
    dropdownWeighet.appendChild(dropdownText);
    let close = document.createElement("div");
    close.classList.add("close");
    dropdownWeighet.appendChild(close);
    let triangleWeight = document.createElement("div");
    triangleWeight.classList.add("triangleWeight");
    headerWeighet.appendChild(triangleWeight);
    let inputWeighet = document.createElement("input");
    inputWeighet.type = "number";
    inputWeighet.classList.add("input-weighet");
    weighet.appendChild(inputWeighet);
    let slider = document.createElement("input");
    slider.type = "range";
    slider.min = "0";
    slider.max = "200";
    slider.classList.add("slider");
    weighet.appendChild(slider);
    let kgAndLb = document.createElement("kgAndLb");
    kgAndLb.innerText = "kg";
    kgAndLb.classList.add("kgAndLb");
    weighet.appendChild(kgAndLb);
    let minText = document.createElement("h5");
    minText.innerText = "0";
    minText.classList.add("minText");
    weighet.appendChild(minText);
    let maxText = document.createElement("h5");
    maxText.innerText = "200";
    maxText.classList.add("maxText");
    weighet.appendChild(maxText);

    questionMarkWeighet.addEventListener("click", () => {
      dropdownWeighet.classList.toggle("active");
      triangleWeight.classList.toggle("active");
    });

    close.addEventListener("click", () => {
      dropdownWeighet.classList.remove("active");
      triangleWeight.classList.remove("active");
    });

    // Adding height to the page.
    document.body.style.height = "10000px";

    inputWeighet.value = 70;
    slider.value = 70;

    slider.oninput = sliderTest;

    function sliderTest() {
      inputWeighet.value = slider.value;
      kgAndLb.style.transform = `translateX(${slider.value * 4.38}px)`;
      inputWeighet.style.transform = `translateX(${
        inputWeighet.value * 4.38
      }px)`;
      bodyWeight = slider.value;
      calcBAL();
      newOptionOnDownClick(1);
    }

    sliderTest();

    inputWeighet.oninput = function () {
      if (inputWeighet.value == "") {
        slider.value = 0;
        inputWeighet.style.transform = `translateX(0)`;
        kgAndLb.style.transform = `translateX(0)`;
        downButton.classList.toggle("active");
        // if input equals empty, set all values back to normal.
      } else {
        slider.value = inputWeighet.value;
        if (inputWeighet.value < 201) {
          kgAndLb.style.transform = `translateX(${slider.value * 4.38}px)`;
          inputWeighet.style.transform = `translateX(${
            inputWeighet.value * 4.38
          }px)`;
          bodyWeight = inputWeighet.value;
          calcBAL();
          newOptionOnDownClick(1);
        } else {
          kgAndLb.style.transform = `translateX(${slider.value * 4.38}px)`;
          inputWeighet.style.transform = `translateX(875px)`;
          bodyWeight = inputWeighet.value;
        }
      }
    };
  }
}

let timeSone;
function stopDrinking() {
  // The time you stopt drinking;
  if (timeSone) {
    // if the timeSone container is created do not run code.
  } else {
    timeSone = document.createElement("div");
    timeSone.classList.add("timeSone");
    document.body.appendChild(timeSone);
    let headerTime = document.createElement("h4");
    headerTime.innerText = "Velg tidsrom";
    headerTime.classList.add("headerTime");
    timeSone.appendChild(headerTime);
    let questionMarkTime = document.createElement("div");
    questionMarkTime.classList.add("questionMarkTime");
    questionMarkTime.innerText = "?";
    headerTime.appendChild(questionMarkTime);
    let dropdownTime = document.createElement("div");
    dropdownTime.classList.add("dropdownTime");
    headerTime.appendChild(dropdownTime);
    let dropdownText = document.createElement("div");
    dropdownText.classList.add("dropdownText");
    dropdownText.innerText =
      "I disse feltene skal du velge tidspunktet du drakk din siste alkoholholdige drikk.";
    dropdownTime.appendChild(dropdownText);
    let close = document.createElement("div");
    close.classList.add("close");
    dropdownTime.appendChild(close);
    let triangleTime = document.createElement("div");
    triangleTime.classList.add("triangleTime");
    headerTime.appendChild(triangleTime);
    let glassStart = document.createElement("img");
    glassStart.src = "../Images/glassFull.svg";
    glassStart.classList.add("glassStart");
    timeSone.appendChild(glassStart);
    let glassEnd = document.createElement("img");
    glassEnd.src = "../Images/glass.svg";
    glassEnd.classList.add("glassEnd");
    timeSone.appendChild(glassEnd);
    let timeStart = document.createElement("select");
    timeStart.classList.add("timeStart");
    timeSone.appendChild(timeStart);
    let timeStartHeader = document.createElement("h6");
    timeStartHeader.innerText = "Start";
    timeStartHeader.classList.add("timeStartHeader");
    timeSone.appendChild(timeStartHeader);
    let timeEnd = document.createElement("select");
    timeEnd.classList.add("timeEnd");
    timeSone.appendChild(timeEnd);
    let timeEndHeader = document.createElement("h6");
    timeEndHeader.innerText = "Slutt";
    timeEndHeader.classList.add("timeEndHeader");
    timeSone.appendChild(timeEndHeader);

    questionMarkTime.addEventListener("click", () => {
      dropdownTime.classList.toggle("active");
      triangleTime.classList.toggle("active");
    });

    close.addEventListener("click", () => {
      dropdownTime.classList.remove("active");
      triangleTime.classList.remove("active");
    });

    // Adding options;
    const optionsTidStart = [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
    ];

    optionsTidStart.forEach((e, key) => {
      timeStart[key] = new Option(e, timeStart.options.length);
    });

    optionsTidStart.forEach((e, key) => {
      timeEnd[key] = new Option(e, timeEnd.options.length);
    });

    let today = new Date();
    let hours = Math.ceil(today.getHours());

    timeStart.value = hours;
    timeEnd.value = hours;

    function calcTime() {
      let timeLesOrMore = timeEnd.value - timeStart.value;
      if (timeLesOrMore < 0) {
        let timeStartValue = 23 - parseInt(timeStart.value);
        let timeEndValue = parseInt(timeEnd.value);
        timeDrinking = timeStartValue + timeEndValue;
      } else {
        timeDrinking = timeEnd.value - timeStart.value;
      }

      calcBAL();
    }

    calcTime();

    timeEnd.onchange = calcTime;
    timeStart.onchange = calcTime;

    newOptionOnDownClick(2);
  }
}

let blaCont;
let clickedBlaValue;
function wishedBla(e) {
  if (blaCont) {
    // If drinks is createt dont runn code.
  } else {
    blaCont = document.createElement("div");
    blaCont.classList.add("blaCont");
    document.body.appendChild(blaCont);
    let blaContFirst = document.createElement("div");
    blaContFirst.classList.add("blaContFirst");
    blaCont.appendChild(blaContFirst);
    let blaContSecund = document.createElement("div");
    blaContSecund.classList.add("blaContSecund");
    blaCont.appendChild(blaContSecund);
    let blaContHaedr = document.createElement("h4");
    blaContHaedr.innerText = "Ønsket Promille";
    blaContHaedr.classList.add("blaContHaedr");
    blaCont.appendChild(blaContHaedr);
    let questionMarkBla = document.createElement("div");
    questionMarkBla.classList.add("questionMarkBla");
    questionMarkBla.innerText = "?";
    blaContHaedr.appendChild(questionMarkBla);

    let dropdownBla = document.createElement("div");
    dropdownBla.classList.add("dropdownBla");
    blaContHaedr.appendChild(dropdownBla);
    let dropdownText = document.createElement("div");
    dropdownText.classList.add("dropdownText");
    dropdownText.innerText =
      "Fyll inn så nøyaktig som mulig hvor mye alkohol du drakk i det aktuelle tidsrommet. Vol. % står oppgitt på flasken/boksen. Trykk på ønsket drikke for og legge til!!";
    dropdownBla.appendChild(dropdownText);
    let close = document.createElement("div");
    close.classList.add("close");
    dropdownBla.appendChild(close);
    let triangleBla = document.createElement("div");
    triangleBla.classList.add("triangleBla");
    blaContHaedr.appendChild(triangleBla);
    let textArea = document.createElement("input");
    textArea.type = "text";
    textArea.maxLength = "19";
    textArea.classList.add("textArea");
    blaContFirst.appendChild(textArea);
    let blaInput = document.createElement("select");
    blaInput.classList.add("blaInput");
    blaContFirst.appendChild(blaInput);
    let submitButton = document.createElement("button");
    submitButton.classList.add("submitButton");
    submitButton.innerText = "Legg till";
    blaContFirst.appendChild(submitButton);

    questionMarkBla.addEventListener("click", () => {
      dropdownBla.classList.toggle("active");
      triangleBla.classList.toggle("active");
    });

    close.addEventListener("click", () => {
      dropdownBla.classList.remove("active");
      triangleBla.classList.remove("active");
    });

    const optionsBla = [
      0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5,
      1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3,
    ];

    optionsBla.forEach((e, key) => {
      blaInput[key] = new Option(e, blaInput.options.length);
    });
    blaInput.value = 14;
    let originalBlaOptions = [
      ["Kjørbar", 0.2],
      ["Kjørbar på bygda", 0.3],
      ["Kaptain", 0.7],
      ["Små Brisen", 0.8],
      ["Brisen", 1],
      ["Kanakkas", 1.6],
      ["Sen motroikk", 2],
      ["Pompa", 3],
    ];
    let alleBlaOptions;
    let alleBlaOptionsSecond;
    let alleBlaOptionsThird;
    let newBlaOptionsSecond = [];
    let newBlaOptionsThird = [];

    function pushNewOptionToArray() {
      if (newBlaOptionsSecond.length < 8) {
        newBlaOptionsSecond.push([
          `${textArea.value}`,
          Number(blaInput.selectedOptions[0].text),
        ]);
        console.log("hei");
      } else {
        if (newBlaOptionsThird.length <= 8) {
          newBlaOptionsThird.push([
            `${textArea.value}`,
            Number(blaInput.selectedOptions[0].text),
          ]);
        }
      }
    }
    let alleNewBlaOptions;
    function blaOptionsNew() {
      if (alleBlaOptions) {
      } else {
        alleBlaOptions = document.createElement("div");
        alleBlaOptions.classList.add("alleBlaOptions");
        blaContSecund.appendChild(alleBlaOptions);
        alleBlaOptionsSecond = document.createElement("div");
        alleBlaOptionsSecond.classList.add("alleBlaOptions");
        blaContSecund.appendChild(alleBlaOptionsSecond);
        alleBlaOptionsThird = document.createElement("div");
        alleBlaOptionsThird.classList.add("alleBlaOptions");
        blaContSecund.appendChild(alleBlaOptionsThird);
      }
      const addNewOptions = (arr, appendTo) => {
        if (arr.length <= 8) {
          appendTo.innerHTML = "";
          arr.forEach((value) => {
            const html = `
        <div class="newBlaOption">
            <h4 class="newBlaOptionText">
            ${value[0]}: ${value[1]}
            </h4>
        </div>
        `;
            appendTo.insertAdjacentHTML("beforeend", html);
          });
        }
      };
      addNewOptions(originalBlaOptions, alleBlaOptions);
      addNewOptions(newBlaOptionsSecond, alleBlaOptionsSecond);
      addNewOptions(newBlaOptionsThird, alleBlaOptionsThird);

      let alleNewBlaOptions = document.querySelectorAll(".newBlaOption");
      alleNewBlaOptions.forEach((value) => {
        value.addEventListener("click", () => {
          // remove "active" class for all .newBlaOption elements
          alleNewBlaOptions.forEach((option) => {
            option.classList.remove("active");
          });
          // toggle "active" class for the blaOption the user clicked;
          value.classList.toggle("active");
          // The value of the blaOptions that the user clicked
          clickedBlaValue = Number(value.innerText.split(" ").pop());
          desiredBAL = clickedBlaValue;
          calcBAL();
          if (clickedBlaValue == clickedBlaValue) {
          } else {
            value.classList.remove("active");
          }
        });
      });
    }
    blaOptionsNew();

    submitButton.addEventListener("click", () => {
      if (textArea.value == "") {
      } else {
        if (newBlaOptionsThird.length < 8) {
          pushNewOptionToArray();
          blaOptionsNew();
        }
      }
      textArea.value = "";
    });
  }
}

let dlAndVol;
let bodyWeight;
let timeDrinking = 0;
let bodyMass;
let desiredBAL;
function calcBAL() {
  dlAndVol = (bodyWeight * bodyMass * desiredBAL + 0.15 * timeDrinking) / 0.8;
  console.log(dlAndVol);
}

// Up and Down Button
let upButton = document.querySelector(".upButton");
let downButton = document.querySelector(".downButton");
// dropdown menuUp
let dropdownMenuUp = document.querySelector(".select-menuUp");
let optionsMenuUp = document.querySelectorAll(".optionUp");
// dropdown menuUp
let dropdownMenuDown = document.querySelector(".select-menuDown");
let optionsMenuDown = document.querySelector("optionDown");

let allOptionsUp = document.querySelector(".optionsUp");

function upAndDownButtons() {
  if (
    buttonMan.classList.contains("active") ||
    buttonWoman.classList.contains("active")
  ) {
    dropdownMenuDown.style.display = "block";
  } else {
    dropdownMenuDown.style.display = "none";
  }
}
upAndDownButtons();

// scroll weighet div in to view;
downButton.addEventListener("click", () => {
  setWeighet();
  if (window.scrollY <= 0) {
    newOptionOnDownClick(1);
    window.scroll({
      top: 1200,
      left: 0,
      behavior: "smooth",
    });
  } else if (window.scrollY <= 1200) {
    stopDrinking();
    newOptionOnDownClick(2);
    window.scroll({
      top: 1900,
      left: 0,
      behavior: "smooth",
    });
  } else if (window.scrollY <= 1900) {
    newOptionOnDownClick(3);
    wishedBla();
    window.scroll({
      top: 2900,
      left: 0,
      behavior: "smooth",
    });

    if (listOfDrinks) {
      if (listOfDrinks.innerHTML == "") {
        hei(false);
      } else {
        hei(true);
      }
    } else {
      hei(false);
    }
  } else if (downButton.classList.contains("active") == false) {
    if (window.scrollY <= 2900) {
      displayResult();
      newOptionOnDownClick(4);
      window.scroll({
        top: 3850,
        left: 0,
        behavior: "smooth",
      });
    }
  }
});

upButton.addEventListener("click", () => {
  if (window.scrollY <= 0) {
  } else if (window.scrollY <= 1200) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  } else if (window.scrollY <= 1900) {
    window.scroll({
      top: 1200,
      left: 0,
      behavior: "smooth",
    });
  } else if (window.scrollY <= 2900) {
    if (downButton.classList.contains("active") == true) {
      hei(true);
    }
    window.scroll({
      top: 1900,
      left: 0,
      behavior: "smooth",
    });
  } else if (window.scrollY <= 3850) {
    window.scroll({
      top: 2900,
      left: 0,
      behavior: "smooth",
    });
  }
});

let optionsManORWoman;
let optionsDrinksUp;
let optionWeightUp;
let optionTimeUp;
let optionDrinksUp;
let getElementsByClassName;
function newOptionOnDownClick(number) {
  if (number == 1) {
    if (optionsManORWoman) {
      // If optionsManORWoman is createt dont runn code.
    } else {
      optionsManORWoman = document.createElement("li");
      optionsManORWoman.classList.add("optionUp");
      optionsManORWoman.setAttribute("id", "optionsManORWomanClick");
      allOptionsUp.appendChild(optionsManORWoman);
      let optionsManORWomanText = document.createElement("span");
      optionsManORWomanText.innerText = "Velg Kjønn";
      optionsManORWomanText.classList.add("optionUp-text");
      optionsManORWoman.appendChild(optionsManORWomanText);
      allOptionsUp.style.marginTop = "765px";
    }
  } else if (number == 2) {
    if (optionWeightUp) {
      // If optionWeightUp is createt dont runn code.
    } else {
      optionWeightUp = document.createElement("li");
      optionWeightUp.classList.add("optionUp");
      optionWeightUp.setAttribute("id", "optionWeightUpClick");
      allOptionsUp.appendChild(optionWeightUp);
      let optionWeightUpText = document.createElement("span");
      optionWeightUpText.innerText = "Din Vekt";
      optionWeightUpText.classList.add("optionUp-text");
      optionWeightUp.appendChild(optionWeightUpText);
      allOptionsUp.style.marginTop = "710px";
    }
  } else if (number == 3) {
    if (optionTimeUp) {
      // If optionTimeUp is createt dont runn code.
    } else {
      optionTimeUp = document.createElement("li");
      optionTimeUp.classList.add("optionUp");
      optionTimeUp.setAttribute("id", "optionTimeClick");
      allOptionsUp.appendChild(optionTimeUp);
      let optionTimeUpText = document.createElement("span");
      optionTimeUpText.innerText = "Tid";
      optionTimeUpText.classList.add("optionUp-text");
      optionTimeUp.appendChild(optionTimeUpText);
      allOptionsUp.style.marginTop = "655px";
    }
  } else if (number == 4) {
    if (optionDrinksUp) {
      // If optionDrinksUp is createt dont runn code.
    } else {
      optionDrinksUp = document.createElement("li");
      optionDrinksUp.classList.add("optionUp");
      optionDrinksUp.setAttribute("id", "optionDrinksUpClick");
      allOptionsUp.appendChild(optionDrinksUp);
      let optionDrinksUpText = document.createElement("span");
      optionDrinksUpText.innerText = "Drinker";
      optionDrinksUpText.classList.add("optionUp-text");
      optionDrinksUp.appendChild(optionDrinksUpText);
      allOptionsUp.style.marginTop = "600px";
    }
  }
  getElementsByClassName = Array.from(
    document.getElementsByClassName("optionUp")
  );
}

// UpButtonMenu
dropdownMenuUp.addEventListener("mouseenter", () => {
  dropdownMenuUp.classList.toggle("active");
  for (let i = 0; i < getElementsByClassName.length; i++) {
    getElementsByClassName[i].addEventListener("click", (event) => {
      dropDownMenuUpClicked(event);
      if (downButton.classList.contains("active") == true) {
        hei(true);
      }
      dropdownMenuUp.classList.remove("active");
    });
  }
});
function dropDownMenuUpClicked(event) {
  if (event.target.id === "optionsManORWomanClick") {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  } else if (event.target.id === "optionWeightUpClick") {
    window.scroll({
      top: 1200,
      left: 0,
      behavior: "smooth",
    });
  } else if (event.target.id === "optionTimeClick") {
    window.scroll({
      top: 1900,
      left: 0,
      behavior: "smooth",
    });
  } else if (event.target.id === "optionDrinksUpClick") {
    window.scroll({
      top: 2900,
      left: 0,
      behavior: "smooth",
    });
  }
}

dropdownMenuUp.addEventListener("mouseleave", () => {
  dropdownMenuUp.classList.remove("active");
});

function hei(trueOrFalse) {
  if (trueOrFalse == false) {
    downButton.classList.toggle("active");
  } else if (trueOrFalse == true) {
    downButton.classList.remove("active");
  }
}
hei(true);

let numbers = [1, 3, 4, 6, 8, 90, 4];

let sum;

for (let [i, num] of numbers.entries()) {
  console.log(i);
}
