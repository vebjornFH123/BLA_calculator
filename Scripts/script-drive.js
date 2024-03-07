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
    headerDrive.innerText = "Når kan jeg kjøre?";
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
  console.log(window.scrollY);
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

let timeStop;

function stopDrinking() {
  // The time you stopt drinking;
  if (timeStop) {
    // if the timeStop container is created do not run code.
  } else {
    timeStop = document.createElement("div");
    timeStop.classList.add("timeStop");
    document.body.appendChild(timeStop);
    let headerTime = document.createElement("h4");
    headerTime.innerText = "Når sluttet du å drikke";
    headerTime.classList.add("headerTime");
    timeStop.appendChild(headerTime);
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
    let glass = document.createElement("img");
    glass.src = "../Images/glass.svg";
    glass.classList.add("glass");
    timeStop.appendChild(glass);
    let times = document.createElement("select");
    times.classList.add("times");
    timeStop.appendChild(times);
    let timesHeader = document.createElement("h6");
    timesHeader.innerText = "Tid";
    timesHeader.classList.add("timesHeader");
    timeStop.appendChild(timesHeader);
    let dato = document.createElement("select");
    dato.classList.add("dato");
    timeStop.appendChild(dato);
    let datoHeader = document.createElement("h6");
    datoHeader.innerText = "Dato";
    datoHeader.classList.add("datoHeader");
    timeStop.appendChild(datoHeader);

    questionMarkTime.addEventListener("click", () => {
      dropdownTime.classList.toggle("active");
      triangleTime.classList.toggle("active");
    });

    close.addEventListener("click", () => {
      dropdownTime.classList.remove("active");
      triangleTime.classList.remove("active");
    });

    // Adding options;
    const optionsTid = [
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

    optionsTid.forEach((e, key) => {
      times[key] = new Option(e, times.options.length);
    });

    let today = new Date();
    let day = today.getDate();
    let hours = Math.ceil(today.getHours());

    console.log(day);
    console.log(hours);

    const optionsDato = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ];

    optionsDato.forEach((e, key) => {
      dato[key] = new Option(e, dato.options.length + 1);
    });

    times.value = hours;
    dato.value = day;

    function calcTime() {
      if (day == dato.value) {
        let hoursAfterStartingSameDay =
          hours > times.value ? hours - times.value : times.value - hours;
        hoursAfterStarting = hoursAfterStartingSameDay;
        console.log(hoursAfterStarting);
      } else {
        let hoursAfterStartingDifferentDay = 24 - times.value + hours;
        hoursAfterStarting = hoursAfterStartingDifferentDay;
        console.log(hoursAfterStarting);
      }
      calcBAL();
    }

    calcTime();

    times.onchange = calcTime;

    newOptionOnDownClick(2);
  }
}

let drinks;
let beerSeltzerDiv;
let vinChampagneDiv;
let WineAndLiquorDiv;
let liquorDiv;
function yourDrinks(e) {
  if (drinks) {
    // If drinks is createt dont runn code.
  } else {
    drinks = document.createElement("div");
    drinks.classList.add("drinks");
    document.body.appendChild(drinks);
    let drinksHaedr = document.createElement("h4");
    drinksHaedr.innerText = "Hva har du drukket";
    drinksHaedr.classList.add("drinksHader");
    drinks.appendChild(drinksHaedr);
    let questionMarkDrinks = document.createElement("div");
    questionMarkDrinks.classList.add("questionMarkDrinks");
    questionMarkDrinks.innerText = "?";
    drinksHaedr.appendChild(questionMarkDrinks);

    let dropdownDrinks = document.createElement("div");
    dropdownDrinks.classList.add("dropdownDrinks");
    drinksHaedr.appendChild(dropdownDrinks);
    let dropdownText = document.createElement("div");
    dropdownText.classList.add("dropdownText");
    dropdownText.innerText =
      "Fyll inn så nøyaktig som mulig hvor mye alkohol du drakk i det aktuelle tidsrommet. Vol. % står oppgitt på flasken/boksen. Trykk på ønsket drikke for og legge til!!";
    dropdownDrinks.appendChild(dropdownText);
    let close = document.createElement("div");
    close.classList.add("close");
    dropdownDrinks.appendChild(close);
    let triangleDrinks = document.createElement("div");
    triangleDrinks.classList.add("triangleDrinks");
    drinksHaedr.appendChild(triangleDrinks);

    beerSeltzerDiv = document.createElement("div");
    beerSeltzerDiv.classList.add("beerSeltzerDiv");
    drinks.appendChild(beerSeltzerDiv);
    let beerSeltzerPng = document.createElement("img");
    beerSeltzerPng.src = "../Images/beer:seltzer.svg";
    beerSeltzerPng.classList.add("beerSeltzerPng");
    beerSeltzerDiv.appendChild(beerSeltzerPng);
    let beerSeltzerText = document.createElement("h5");
    beerSeltzerText.innerText = "Øl/Cider";
    beerSeltzerText.classList.add("drinkText");
    beerSeltzerDiv.appendChild(beerSeltzerText);
    vinChampagneDiv = document.createElement("div");
    vinChampagneDiv.classList.add("vinChampagneDiv");
    drinks.appendChild(vinChampagneDiv);
    let vinChampagnePng = document.createElement("img");
    vinChampagnePng.src = "../Images/vinChampagne.png";
    vinChampagnePng.classList.add("vinChampagnePng");
    vinChampagneDiv.appendChild(vinChampagnePng);
    let vinChampagneText = document.createElement("h5");
    vinChampagneText.innerText = "Vin/Champagne";
    vinChampagneText.classList.add("drinkText");
    vinChampagneDiv.appendChild(vinChampagneText);
    WineAndLiquorDiv = document.createElement("div");
    WineAndLiquorDiv.classList.add("vinChampagneDiv");
    drinks.appendChild(WineAndLiquorDiv);
    let WineAndLiquorPng = document.createElement("img");
    WineAndLiquorPng.src = "../Images/WineBottle.png";
    WineAndLiquorPng.classList.add("WineAndLiquorPng");
    WineAndLiquorDiv.appendChild(WineAndLiquorPng);
    let WineAndLiquorText = document.createElement("h5");
    WineAndLiquorText.innerText = "Sterkvin/Likør";
    WineAndLiquorText.classList.add("drinkText");
    WineAndLiquorDiv.appendChild(WineAndLiquorText);
    liquorDiv = document.createElement("div");
    liquorDiv.classList.add("liquorDiv");
    drinks.appendChild(liquorDiv);
    let liquorPng = document.createElement("img");
    liquorPng.src = "../Images/liquor.png";
    liquorPng.classList.add("liquorPng");
    liquorDiv.appendChild(liquorPng);
    let liquorText = document.createElement("h5");
    liquorText.innerText = "Sprit/Brennevin";
    liquorText.classList.add("drinkText");
    liquorDiv.appendChild(liquorText);

    questionMarkDrinks.addEventListener("click", () => {
      dropdownDrinks.classList.toggle("active");
      triangleDrinks.classList.toggle("active");
    });

    close.addEventListener("click", () => {
      dropdownDrinks.classList.remove("active");
      triangleDrinks.classList.remove("active");
    });
    beerSeltzerPng.addEventListener("mousedown", drinkSelected);

    vinChampagnePng.addEventListener("mousedown", drinkSelected);

    WineAndLiquorPng.addEventListener("mousedown", drinkSelected);

    liquorPng.addEventListener("mousedown", drinkSelected);
  }
}

let maineDivForAllDrinks;
let drinkMain;
let drinkMainOnNewDrink;
let listOfDrinks;
let containerForAlleHeaders;
let selectCounter = 0;

const drinkSelected = function (e) {
  let typeSelect;
  let volSelect;
  let quantitySelect;
  let numberSelect;
  let deleteX;

  if (maineDivForAllDrinks) {
  } else {
    containerForAlleHeaders = document.createElement("div");
    containerForAlleHeaders.classList.add("containerForAlleHeaders");
    document.body.appendChild(containerForAlleHeaders);
    maineDivForAllDrinks = document.createElement("div");
    maineDivForAllDrinks.classList.add("maineDivForAllDrinks");
    document.body.appendChild(maineDivForAllDrinks);
    let typeHeader = document.createElement("h4");
    typeHeader.innerText = "Type";
    typeHeader.classList.add("typeHeaders");
    containerForAlleHeaders.appendChild(typeHeader);
    let volHeader = document.createElement("h4");
    volHeader.innerText = "Vol.%";
    volHeader.classList.add("volHeaders");
    containerForAlleHeaders.appendChild(volHeader);
    let quantityHeader = document.createElement("h4");
    quantityHeader.innerText = "Mengde (dl)";
    quantityHeader.classList.add("quantityHeaders");
    containerForAlleHeaders.appendChild(quantityHeader);
    let typeNumber = document.createElement("h4");
    typeNumber.innerText = "Antall";
    typeNumber.classList.add("numberHeaders");
    containerForAlleHeaders.appendChild(typeNumber);
    listOfDrinks = document.createElement("ul");
    listOfDrinks.classList.add("listOfDrinks");
    maineDivForAllDrinks.appendChild(listOfDrinks);
  }
  drinkMainOnNewDrink = document.createElement("li");
  drinkMainOnNewDrink.classList.add("drinkMainOnNewDrink");
  listOfDrinks.appendChild(drinkMainOnNewDrink);
  let containerForAlleOpinions = document.createElement("div");
  containerForAlleOpinions.classList.add("containerForAlleOpinions");
  drinkMainOnNewDrink.appendChild(containerForAlleOpinions);
  // Div for type of drink;
  let typeDiv = document.createElement("div");
  typeDiv.classList.add("typeDiv");
  containerForAlleOpinions.appendChild(typeDiv);
  typeSelect = document.createElement("select");
  typeSelect.classList.add("typeSelect");
  typeSelect.id = `typeSelectTestID`;
  typeDiv.appendChild(typeSelect);

  // Div for Vol%;
  let volDiv = document.createElement("div");
  volDiv.classList.add("volDiv");
  containerForAlleOpinions.appendChild(volDiv);
  volSelect = document.createElement("select");
  volSelect.classList.add("volSelect");
  volDiv.appendChild(volSelect);

  // Div for quantity;
  let quantityDiv = document.createElement("div");
  quantityDiv.classList.add("quantityDiv");
  containerForAlleOpinions.appendChild(quantityDiv);
  quantitySelect = document.createElement("select");
  quantitySelect.classList.add("quantitySelect");
  quantityDiv.appendChild(quantitySelect);

  // Div for number of drinks;
  let numberDiv = document.createElement("div");
  numberDiv.classList.add("numberDiv");
  containerForAlleOpinions.appendChild(numberDiv);
  numberSelect = document.createElement("select");
  numberSelect.innerText = "1";
  numberSelect.classList.add("numberSelect");
  numberDiv.appendChild(numberSelect);
  // Div for delete div X;
  deleteX = document.createElement("img");
  deleteX.src = "../Images/DeleteX.svg";
  deleteX.classList.add("deleteX");
  containerForAlleOpinions.appendChild(deleteX);
  // Div for divider the different drinks
  let divider = document.createElement("div");
  divider.classList.add("divider");
  drinkMainOnNewDrink.appendChild(divider);

  selectCounter++;
  // function for chaining between options and deleting the old.
  const newOptions = function (oArray, select) {
    //clearing the select element
    while (select.options.length > 0) {
      select.remove(0);
    }
    let options = [...oArray];
    // input value for text options
    if (quantitySelect === select || typeSelect === select) {
      for (const [allOptions, value] of options) {
        let newOptions = new Option(allOptions, value);
        select.add(newOptions);
      }
    } else {
      // adding new options
      for (const allOptions of options) {
        let newOptions = new Option(allOptions, allOptions, 3);
        select.add(newOptions);
      }
    }
  };

  // default options for drinks;
  newOptions(
    [
      ["ØL/Cider", 0],
      ["Vin/Champagne", 1],
      ["Sterkvin/Likør", 2],
      ["Sprit/Brennevin", 3],
    ],
    typeSelect
  );

  // default options for vol%
  newOptions(["2.5", "4", "4.7", "5.5", "6.6", "8"], volSelect);
  // default options for quantity
  newOptions(
    [
      ["Snitt (2.5dl)", 2.5],
      ["Liten flaske/boks (3.3dl)", 3.3],
      ["Halvliter (5dl)", 5],
      ["Stor flaske (7.5dl)", 6],
    ],
    quantitySelect
  );
  // Adding options for number of drinks;
  newOptions(
    [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
    ],
    numberSelect
  );

  // Setting the typeSelect value, to get the right select drinks when clicking on the png images
  switch (e.target.classList.value) {
    case "beerSeltzerPng":
      typeSelect.value = 0;
      changDrinkOptions();
      volSelect.value = "4.7";
      quantitySelect.value = 5;
      break;
    case "vinChampagnePng":
      typeSelect.value = 1;
      changDrinkOptions();
      volSelect.value = "18";
      quantitySelect.value = 1.75;
      break;
    case "WineAndLiquorPng":
      typeSelect.value = 2;
      changDrinkOptions();
      volSelect.value = "18";
      quantitySelect.value = 0.75;
      break;
    case "liquorPng":
      typeSelect.value = 3;
      changDrinkOptions();
      volSelect.value = "40";
  }

  function changDrinkOptions() {
    if (typeSelect.value == 0) {
      newOptions(["2.5", "4", "4.7", "5.5", "6.6", "8"], volSelect);
      newOptions(
        [
          ["Snitt (2.5dl)", 2.5],
          ["Liten flaske/boks (3.3dl)", 3.3],
          ["Halvliter (5dl)", 5],
          ["Stor flaske (7.5dl)", 7.5],
        ],
        quantitySelect
      );
    } else if (typeSelect.value == 1) {
      newOptions(["10", "18", "20"], volSelect);
      newOptions(
        [
          ["Lite glass (1.25dl)", 1.25],
          ["Medium glass (1.5dl)", 1.5],
          ["Stort glass (1.75)", 1.75],
          ["Halvflaske (3.75dl)", 3.75],
          ["Stor flaske (7.5dl)", 7.5],
        ],
        quantitySelect
      );
    } else if (typeSelect.value == 2) {
      newOptions(["16", "18", "20"], volSelect);
      newOptions(
        [
          ["Lite glass (0.4dl)", 0.4],
          ["Miniflaske (0.5dl)", 0.5],
          ["Stort glass (0.75dl)", 0.75],
          ["Halvflaske (3.75dl)", 3.75],
          ["Stor flaske (7.5dl)", 7.5],
        ],
        quantitySelect
      );
    } else if (typeSelect.value == 3) {
      newOptions(["22", "30", "40", "50", "60"], volSelect);
      newOptions(
        [
          ["Shot (0.4dl)", 0.4],
          ["Miniflaske (0.5dl)", 0.5],
          ["Halvflaske (3.5dl)", 3.5],
          ["Halvliterflaske (5dl)", 5],
          ["Halvflaske (7.5dl)", 7.5],
          ["Literflaske (1liter)", 10],
        ],
        quantitySelect
      );
    }
  }

  const getValue = function () {
    const volSelectElements = document.querySelectorAll(".volSelect");
    const quantitySelectElements = document.querySelectorAll(".quantitySelect");
    const numberSelectElements = document.querySelectorAll(".numberSelect");

    const dlValues = [];
    const volValue = [];

    for (let i = 0; i < volSelectElements.length; i++) {
      const volSelectAll = volSelectElements[i];
      const quantitySelectAll = quantitySelectElements[i];
      const numberSelectAll = numberSelectElements[i];

      const volSelectValue = Number(volSelectAll.value);
      const quantitySelectValue = quantitySelectAll.value;
      const numberSelectValue = numberSelectAll.value;
      const dlF = quantitySelectValue * numberSelectValue;
      dlValues.push(dlF);
      volValue.push(volSelectValue);
    }

    let dlTimesVol = [];
    for (let i = 0; i < dlValues.length; i++) {
      dlTimesVol.push(dlValues[i] * volValue[i]);
    }
    let totalDlAndVol = 0;
    for (let i in dlTimesVol) {
      totalDlAndVol += dlTimesVol[i];
    }

    dlAndVol = totalDlAndVol;

    calcBAL();
  };

  // Changing vol% and quantity on the different drinks
  typeSelect.onchange = function () {
    changDrinkOptions();
    getValue();
  };

  volSelect.onchange = getValue;

  quantitySelect.onchange = getValue;

  numberSelect.onchange = getValue;

  //remove drink DeleteX
  deleteX.addEventListener(
    "mousedown",
    function (e) {
      deleteDrink(e);
      getValue();
    },
    false
  );

  getValue();

  containerForAlleHeaders.style.visibility = "visible";

  function deleteDrink(e) {
    let el = e.target.parentNode; // This will the target button in this case the deleteX2 and then move back to parent containerForAlleOpinions.
    let elListItem = el.parentNode; // This will movie it back to parent of containerForAlleOpinions, in the case drinkMainOnNewDrink
    let removeDrinkFromList = elListItem.parentNode; // This will movie it back to parent of drinkMainOnNewDrink, in the case listOfDrinks
    removeDrinkFromList.removeChild(elListItem); // This will removeChild from listOfDrinks, whits is the drinkMainOnNewDrink;
    if (listOfDrinks.innerHTML == "") {
      containerForAlleHeaders.style.visibility = "hidden";
      hei(false);
    }
  }

  hei(true);
};

let dlAndVol;
let bodyWeight;
let hoursAfterStarting;
let bodyMass;

let bal;
function calcBAL() {
  bal = (dlAndVol * 0.8) / (bodyWeight * bodyMass) - 0.15 * hoursAfterStarting;
  let test = console.log(bal);
  console.log(bal);
  return test;
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
    yourDrinks();
    newOptionOnDownClick(3);
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
  console.log(getElementsByClassName);
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
let loadAnimation;
let loadingText;
let resultsBla;
function displayResult() {
  if (resultsBla) {
  } else {
    resultsBla = document.createElement("div");
    resultsBla.classList.add("resultsBla");
    document.body.appendChild(resultsBla);
    let loadAnimation = document.createElement("div");
    loadAnimation.classList.add("progress");
    resultsBla.appendChild(loadAnimation);
    let color = document.createElement("div");
    color.classList.add("color");
    loadAnimation.appendChild(color);
    let displayResult = document.createElement("div");
    displayResult.classList.add("displayResult");
    loadAnimation.appendChild(displayResult);
    loadingText = document.createElement("h1");
    loadingText.innerText = "";
    loadingText.classList.add("loadingTextResult");
    loadAnimation.appendChild(loadingText);
  }

  function loadingTextRandom() {
    let wordBank1 = [
      "Beregnes",
      "Utføres",
      "Kalkuleres",
      "Bestemmes",
      "Fastsettes",
    ];
    let wordBank2 = [
      "Vennligst vent",
      "Ha litt tålmodighet",
      "Avvent",
      "Hold ut",
      "Vent litt til",
    ];
    let randomNumber1 = Math.floor(Math.random() * 4);
    let randomNumber2 = Math.floor(Math.random() * 4);

    loadingText.innerText = `Din promille ${wordBank1[randomNumber1]} nå. ${wordBank2[randomNumber2]}......`;
  }
  loadingTextRandom();

  let intervalId = window.setInterval(() => {
    loadingTextRandom();
  }, 2000);

  // ends the loadingTextRandom every 2 sec.
  setTimeout(() => {
    clearInterval(intervalId);
  }, 8200); //Time before execution

  setTimeout(() => {
    theResult();
  }, 8200);
}

let alcoholLevels;
let displyBla;
function theResult() {
  if (alcoholLevels) {
  } else {
    alcoholLevels = document.createElement("div");
    alcoholLevels.classList.add("alcoholLevels");
    resultsBla.appendChild(alcoholLevels);
    let headerAlcoholLevel = document.createElement("h1");
    headerAlcoholLevel.classList.add("headerAlcoholLevel");
    headerAlcoholLevel.innerText = `Din nåværende promille`;
    alcoholLevels.appendChild(headerAlcoholLevel);
    displyBla = document.createElement("h1");
    displyBla.classList.add("displyBla");
    alcoholLevels.appendChild(displyBla);
    let warningDiv = document.createElement("div");
    warningDiv.classList.add("warningDiv");
    resultsBla.appendChild(warningDiv);
    let warningHeader = document.createElement("h1");
    warningHeader.innerText = "Viktig melding om promilleberegninger:";
    warningHeader.classList.add("warningHeader");
    warningDiv.appendChild(warningHeader);
    let warningContent = document.createElement("p");
    warningContent.innerText =
      "Vi ønsker å minne deg om at promillekalkulatoren gir en estimert promilleverdi basert på inntastede data. Det er viktig å forstå at alkoholmetabolism varierer fra person til person, og det er flere faktorer som kan påvirke hvordan kroppen din behandler alkohol. Individuelle forskjeller som vekt, kjønn, alder, metabolisme og helsetilstand kan påvirke hvordan alkohol påvirker deg. Den beregnede promilleverdien er kun en omtrentlig indikator og bør ikke betraktes som en nøyaktig måling av alkoholnivået i blodet ditt. \n\n For å være ansvarlig og trygg når du kjører eller utfører oppgaver som krever konsentrasjon, anbefaler vi at du ikke bare stoler på denne beregningen. Det beste valget du kan ta for din egen sikkerhet og andres er å avstå fra alkohol når du skal delta i aktiviteter som kan påvirkes av alkoholinntak. \n\n Husk alltid at din personlige helse og sikkerhet er det viktigste, og det er alltid lurt å unngå alkohol før kjøring eller andre situasjoner der alkoholens påvirkning kan ha konsekvenser. \n\n Etter inntak av alkohol bør du vente minst 12 timer før du setter deg bak rattet. Er du tidlig ute på veien etter gårsdagens eskapader, kan det fort straffe seg om du ikke er sikker på at du er helt edru. Har du en promille over 0,5 kan det bli opp til en og en halv brutto månedslønn i bot.31.";
    warningContent.classList.add("warningContent");
    warningDiv.appendChild(warningContent);
  }
  if (isNaN(bal)) {
    displyBla.innerText = `Noe gikk galt`;
  } else if (bal <= 0) {
    displyBla.innerText = "0";
  } else {
    let count = 0;
    setInterval(() => {
      if (count <= bal) {
        displyBla.innerText = (count += 0.01).toFixed(2).toString();
      } else {
      }
    }, 10);
  }
}
