const exchangeRate = 3.14140;
const dollarInput = document.getElementById('dollarInput');
const resultDiv = document.getElementById('resultDiv');

function updateResult() {
  const dollarValue = parseFloat(dollarInput.value);
  if (!isNaN(dollarValue)) {
    const egyptianPoundValue = (dollarValue * exchangeRate).toFixed(2);
    resultDiv.innerHTML = `${dollarValue} USD Dollar = ${egyptianPoundValue} tn Pound`;
  } else {
    resultDiv.innerHTML = '0 USD Dollar = 0 tn Pound';
  }
}

dollarInput.addEventListener('input', updateResult);
dollarInput.addEventListener('paste', function(event) {
  setTimeout(updateResult, 0);
});