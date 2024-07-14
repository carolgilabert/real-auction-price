const prices = document.querySelectorAll(".NumberPart");
for (const price of prices) {
  price.style.color = "rebeccapurple";

  const originalValue = parseFloat(price.innerHTML);
  const newValue = originalValue * 1.25 * 1.2;

  price.innerHTML = newValue.toFixed(2);
}
