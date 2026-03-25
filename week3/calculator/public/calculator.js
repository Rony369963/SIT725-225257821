document.getElementById('addBtn').addEventListener('click', function () {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultDiv = document.getElementById('result');

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = 'Please enter valid numbers.';
    return;
  }

  const sum = num1 + num2;
  resultDiv.textContent = 'Result: ' + sum;
});
