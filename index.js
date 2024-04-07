let year = "";
let month = "";
let paper = "";
let type = "QP";
let level = "F";
let link = "";
let subject = "B";

function toggleDropdown(inputNumber) {
  let input = document.querySelector(`.dropdown-content-${inputNumber}`);
  let previousinput = document.querySelector(".active");
  if (previousinput) previousinput.classList.remove("active");
  if (!input.classList.contains("active")) input.classList.add("active");
}

window.onclick = function (event) {
  let previousinput = document.querySelector(".active");
  if (!event.target.matches("input,span")) {
    previousinput.classList.remove("active");
  }
};

function handleSpanClick(spanValue, spanType) {
  if (spanType == "year") {
    year = spanValue;
    document.querySelector(".input-1").value = spanValue;
  } else if (spanType == "month") {
    month = spanValue;
    document.querySelector(".input-2").value = spanValue;
  } else if (spanType == "paper") {
    paper = spanValue;
    document.querySelector(".input-3").value = spanValue;
  }
  document.querySelector(".active").classList.remove("active");
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
    console.log(short_year);
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
  link = `https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/${year}/${month}/AQA-8464${subject}${paper}${level}-${type}-${month
    .substring(0, 3)
    .toUpperCase()}${short_year}.PDF`;
  console.log(link);
  window.open(link);
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
