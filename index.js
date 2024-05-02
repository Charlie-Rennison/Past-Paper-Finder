let year = "";
let month = "";
let paper = "";
let type = "QP";
let level = "F";
let link = "";
let subject = "B";
let title = "Combined Science";
let code = "";
let examboard = "AQA";

let PaperSpan = document.querySelector(".JS-PaperSpan3");
PaperSpan.classList.add("JS-inactive");

{
  /* <i
  class="fa fa-caret-down"
  style="display: flex; align-items: center; margin-right: 4px"
  aria-hidden="true"
></i>; */
}

function DefaultTitleValues() {
  let titleInputsubject = document.querySelector(".input-0");
  titleInputsubject.value = "Combined Science";
  let titleInputexamboard = document.querySelector(".input-1");
  titleInputexamboard.value = "AQA";
}
DefaultTitleValues();

function HandleResizeCall() {
  var input = document.querySelector(".input-0");
  input.addEventListener("input", resizeInput);
  resizeInput.call(input);

  var input2 = document.querySelector(".input-1");
  input2.addEventListener("input", resizeInput);
  resizeInput.call(input2);
}
HandleResizeCall();
function resizeInput() {
  this.style.width = this.value.length + 3 + "ch";
}
///

function toggleDropdown(inputNumber) {
  let input = document.querySelector(`.dropdown-content-${inputNumber}`);
  let previousinput = document.querySelector(".active");
  if (previousinput) previousinput.classList.remove("active");
  if (!input.classList.contains("active")) input.classList.add("active");
  let error = document.querySelector(".error"); // maths genie error

  if (error.innerHTML.length > 1) {
    error.innerHTML = "";
  }
}

window.onclick = function (event) {
  let previousinput = document.querySelector(".active");
  if (!event.target.matches("input,span")) {
    previousinput.classList.remove("active");
  }
};

function checkFields() {
  if (title === "Maths") {
    buttons = document.querySelector(".button-wrapper-1");
    buttons.classList.remove("active-button-wrapper");
    PaperSpan = document.querySelector(".JS-PaperSpan3");
    PaperSpan.classList.remove("JS-inactive");
    if (examboard === "Edexcel") {
      powered = document.querySelector(".poweredmaths");
      powered.classList.remove("poweredmaths-inactive");
    } else {
      powered = document.querySelector(".poweredmaths");
      powered.classList.add("poweredmaths-inactive");
    }
  } else {
    let slider = document.querySelector(".button-wrapper-1");
    slider.classList.add("active-button-wrapper");
    let powered = document.querySelector(".poweredmaths");
    powered.classList.add("poweredmaths-inactive");
    let PaperSpan = document.querySelector(".JS-PaperSpan3");
    PaperSpan.classList.add("JS-inactive");
  }
  console.log(title);
  console.log(examboard);
  if (!(title === "Maths") && examboard === "Edexcel") {
    console.log("true");
    document.querySelector(".input-1").value = "AQA";
    examboard = "AQA";
    HandleResizeCall();
    error = "Error: Edexcel Doesn't have sciences.";
    document.querySelector(".error").innerHTML = error;
  }
}

function handleSpanClick(spanValue, spanType) {
  if (spanType == "titlesubject") {
    title = spanValue;
    document.querySelector(".input-0").value = spanValue;
    HandleResizeCall();
  }
  if (spanType == "titleexamboard") {
    examboard = spanValue;
    document.querySelector(".input-1").value = spanValue;
    HandleResizeCall();
  }
  if (spanType == "year") {
    year = spanValue;
    document.querySelector(".input-2").value = spanValue;
  } else if (spanType == "month") {
    month = spanValue;
    document.querySelector(".input-3").value = spanValue;
  } else if (spanType == "paper") {
    paper = spanValue;
    document.querySelector(".input-4").value = spanValue;
  }
  document.querySelector(".active").classList.remove("active");
  checkFields();
}

function toggleSlider() {
  if (!document.querySelector(".switch-paper").checked) {
    document.querySelector(".span-qp").classList.remove("span-inactive");
    document.querySelector(".span-ms").classList.add("span-inactive");
    type = "QP";
  } else {
    document.querySelector(".span-qp").classList.add("span-inactive");
    document.querySelector(".span-ms").classList.remove("span-inactive");
    type = "MS";
  }

  if (!document.querySelector(".switch-level").checked) {
    document
      .querySelector(".span-foundation")
      .classList.remove("span-inactive");
    document.querySelector(".span-higher").classList.add("span-inactive");
    level = "F";
  } else {
    document.querySelector(".span-foundation").classList.add("span-inactive");
    document.querySelector(".span-higher").classList.remove("span-inactive");
    level = "H";
  }
}

function generateURL() {
  month = month.toLowerCase();
  let error = "";
  if (year[2] === "1") {
    short_year = year.substring(2, 4);
  } else {
    short_year = year.charAt(0) + year.charAt(year.length - 1);
  }

  if (year == "") {
    error = "Error: Please make fill out the 'Year' selection.";
    document.querySelector(".error").innerHTML = error;
    return;
  }
  if (month == "") {
    error = "Error: Please make fill out the 'Month' selection.";
    document.querySelector(".error").innerHTML = error;
    return;
  }
  if (paper == "") {
    error = "Error: Please make fill out the 'Paper' selection.";
    document.querySelector(".error").innerHTML = error;
    return;
  }
  document.querySelector(".error").innerHTML = "";
  console.log(title);
  if (title === "Combined Science") combinedScience();
  else if (title === "Separate Science") seperateScience();
  else if (title === "Maths") maths();
}

// https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-8464B1H-QP-JUN18.PDF
// https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-8464B1H-QP-JUN18.PDF
// https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-8464B2H-QP-JUN28.PDF

button = document.querySelector(".button-1");
if (button.classList.contains("active-button")) {
  button.style.background = "rgb(31, 145, 55)";
  button.style.boxShadow = "0 0 10px #21914f";
}

function toggleButton(buttonNumber, buttonColor) {
  button = document.querySelector(`.button-${buttonNumber}`);
  previousButton = document.querySelector(`.active-button`);
  previousButton.classList.remove("active-button");
  button.classList.add("active-button");
  previousButton.style.background = "rgb(136, 135, 135)";
  previousButton.style.boxShadow = "none";
  button.style.background = buttonColor;
  button.style.boxShadow = `0 0 10px ${buttonColor}`;
  subject = button.innerText[0];
}

//Link generators

function maths() {
  if (examboard === "AQA") {
    code = "8300";
    if (Number(year) < 2020 && type === "MS") {
      link = `https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/${year}/${month}/AQA-${code}${paper}${level}-W-${type}-${month
        .substring(0, 3)
        .toUpperCase()}${short_year}.PDF`;
    } else {
      link = `https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/${year}/${month}/AQA-${code}${paper}${level}-${type}-${month
        .substring(0, 3)
        .toUpperCase()}${short_year}.PDF`;
    }
  } else if (examboard === "Edexcel") {
    if (year === "2020") {
      month = ""; //Handles contingency in 2020 papers
    }
    if (month === "november") {
      month = month.substring(0, 3);
    }
    link = `https://www.mathsgenie.co.uk/papers/${paper}${level.toLowerCase()}${month.toLowerCase()}${year}.pdf`;
  }

  window.open(link);
}

function seperateScience() {
  if (subject === "B") code = "8461";
  else if (subject === "C") code = "8462";
  else code = "8463";
  if (Number(year) < 2020 && type === "MS") {
    link = `https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/${year}/${month}/AQA-${code}${paper}${level}-W-${type}-${month
      .substring(0, 3)
      .toUpperCase()}${short_year}.PDF`;
  } else {
    link = `https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/${year}/${month}/AQA-${code}${paper}${level}-${type}-${month
      .substring(0, 3)
      .toUpperCase()}${short_year}.PDF`;
  }
  window.open(link);
}

function combinedScience() {
  code = "8464";
  if (Number(year) < 2020 && type === "MS") {
    link = `https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/${year}/${month}/AQA-${code}${subject}${paper}${level}-W-${type}-${month
      .substring(0, 3)
      .toUpperCase()}${short_year}.PDF`;
  } else {
    link = `https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/${year}/${month}/AQA-${code}${subject}${paper}${level}-${type}-${month
      .substring(0, 3)
      .toUpperCase()}${short_year}.PDF`;
  }
  window.open(link);
}

function Maths() {
  if (examboard === "AQA") {
    return;
  } else if (examboard === "Edexcel") {
    return;
  }
}
