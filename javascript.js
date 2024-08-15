function calculateLoan() {
    const loanAmountValue = parseFloat(document.getElementById("loan-amount").value);
    const interestRateValue = parseFloat(document.getElementById("interest-rate").value);
    const monthsToPayValue = parseInt(document.getElementById("months-to-pay").value, 10);

    if (isNaN(loanAmountValue) || isNaN(interestRateValue) || isNaN(monthsToPayValue) || monthsToPayValue <= 0) {
        document.getElementById("payment").innerHTML = 'Invalid input';
        return;
    }

    const monthlyInterestRate = interestRateValue / 100 / 12;

    const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, monthsToPayValue);
    const denominator = Math.pow(1 + monthlyInterestRate, monthsToPayValue) - 1;
    const monthlyPayment = (loanAmountValue * numerator / denominator).toFixed(2);

    document.getElementById("payment").innerHTML = `Monthly Payment: $${monthlyPayment}`;
}
