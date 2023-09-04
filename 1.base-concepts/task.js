'use strict';
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    return [x];
  } else {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [x1, x2];
  }
  return arr;
}

// function calculateTotalMortgage(percent, contribution, amount, countMonths) {}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (
    typeof percent !== 'number' ||
    typeof contribution !== 'number' ||
    typeof amount !== 'number' ||
    typeof countMonths !== 'number'
  ) {
    return 'Пожалуйста, введите числовые значения для всех аргументов';
  }

  if (percent <= 0 || contribution < 0 || amount <= 0 || countMonths <= 0) {
    return 'Все аргументы должны быть положительными числами';
  }

  const interestRate = percent / 100 / 12; // Процентная ставка в месяц
  const loanAmount = amount - contribution; // Тело кредита
  const monthlyPayment =
    loanAmount *
    (interestRate +
      interestRate / (Math.pow(1 + interestRate, countMonths) - 1)); // Ежемесячный платеж
  const totalPayment = Number((monthlyPayment * countMonths).toFixed(2)); // Общая сумма, которую придется заплатить

  return totalPayment;
}
