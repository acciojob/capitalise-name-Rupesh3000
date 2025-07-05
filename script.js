let input = document.getElementById("fname");

input.addEventListener("blur", function (event) {
  let lowwerValue = event.target.value;
  let upperValue = lowwerValue.toUpperCase();
  event.target.value = upperValue
});