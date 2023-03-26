const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", (event) => {
  console.log(input.value);
  const inputNumber = Number(input.value);
  span.style.fontSize = `${inputNumber}px`;
});
