function getRandomHexColor() {
  const randomNumber = Math.floor(Math.random() * 16777216);
  const hexColor = "#" + randomNumber.toString(16).padStart(6, "0");
  return hexColor;
}

const btn = document.getElementById("btn");
const colorName = document.querySelector(".color");
btn.addEventListener("click", function () {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorName.style.color = randomColor;
  colorName.innerText = randomColor;
  console.log(getRandomHexColor());
  console.log(getRandomHexColor());
});

console.log(getRandomHexColor());
