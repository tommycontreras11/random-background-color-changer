const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

let bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
const btn = document.querySelector("#btn");

btn.onclick = changeBackgroundColor;

function getRandomIndex() {
    return Math.floor(Math.random() * darkColorsArr.length);
}

function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex()];

    bgHexCodeSpanElement.innerText = color;
    document.body.style.backgroundColor = color;
}
