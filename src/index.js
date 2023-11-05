module.exports = function toReadable(number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 0) throw new Error('Negative numbers are not supported.');

    if (number === 0) return 'zero';

    if (number < 10) return ones[number];
    if (number < 20) return teens[number - 10];

    const numString = number.toString();
    const hundredsDigit = parseInt(numString[0]);
    const tensDigit = parseInt(numString[1]);
    const onesDigit = parseInt(numString[2]);

    let result = '';

    if (hundredsDigit !== 0) {
         result += ones[hundredsDigit] + ' hundred';
      if (tensDigit > 0 || onesDigit > 0) {
        result += ' ';
      }
    }

    if (tensDigit >= 2 && tensDigit <= 9 ) {
      result += tens[tensDigit];
      if (onesDigit > 0) {
        result += ' ' + ones[onesDigit];
      }
    } else if (tensDigit === 1) {
      result += teens[onesDigit];
    } else if (onesDigit > 0) {
      result += ones[onesDigit];
    }

    return result;
};