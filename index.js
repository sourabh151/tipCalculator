var amountEl = document.querySelector(".amount");
var headEl = document.querySelector(".heads");
var customTipEl = document.querySelector(".tip-custom");
var output1 = document.querySelector("#output-label-1");
var output2 = document.querySelector("#output-label-2");
var reset = document.querySelector(".reset");
var inputEl = document.querySelector("#heads-input");



var amount = 0,
  head = 0,
  tipPercent = 0,
  tipAmount = 0,
  total = 0;
amountEl.addEventListener("input", getValues);
headEl.addEventListener("input", getValues);




function getValues() {
  amount = amountEl.value;
  head = headEl.value;
  /*if (amount === null) { amount = 0; }
  if (head === null) { head = 0; }*/
  if (headEl.value == 0) {
    document.querySelector("#is-zero").style.display = "block";
    inputEl.style.border = "1px solid red";

  }
  else {
    document.querySelector("#is-zero").style.display = "none";
    inputEl.style.border = "none"

  }
  calculateTip();
}

function calculateTip() {
  if (amount > 0 && head > 0) {
    tipAmount = (amount / head * tipPercent / 100);
    tipAmount = tipAmount.toFixed(2);
    total = (amount / head * tipPercent / 100) + (amount / head);
    total = total.toFixed(2);
  }
  output1.textContent = "$" + tipAmount;
  output2.textContent = "$" + total;

}

document.querySelector('.tip-5').addEventListener("click", () => {
  tipPercent = 5;
  calculateTip();
});
document.querySelector('.tip-10').addEventListener("click", () => {
  tipPercent = 10;
  calculateTip();
});
document.querySelector('.tip-15').addEventListener("click", () => {
  tipPercent = 15;
  calculateTip();
});
document.querySelector('.tip-25').addEventListener("click", () => {
  tipPercent = 25;
  calculateTip();
});
document.querySelector('.tip-50').addEventListener("click", () => {
  tipPercent = 50;
  calculateTip();
});
document.querySelector('.tip-custom').addEventListener("input", () => {
  tipPercent = customTipEl.value;
  calculateTip();
});



reset.addEventListener("click", () => {
  amount = head = tipPercent = tipAmount = total = 0;
  amountEl.value = "";
  headEl.value = "";
  output1.textContent = "$0.00";
  output2.textContent = "$0.00";
  customTipEl.value = "";

});