module.exports = function toReadable(num) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (num < 0) throw new Error('Negative numbers are not supported.');

  if (num === 0) return 'zero';

  if (num < 10) return ones[num];
  if (num < 20) return teens[num - 10];

  const numString = num.toString();
  const hundredsDigit = parseInt(numString[0]);
  const tensDigit = parseInt(numString[1]);
  const onesDigit = parseInt(numString[2]);

  let result = '';

  if (hundredsDigit > 0) {
      result += ones[hundredsDigit] + ' hundred';
      if (tensDigit > 0 || onesDigit > 0) {
          result += ' ';
      }
  }

  if (tensDigit > 0) {
      if (tensDigit === 1) {
          result += teens[onesDigit];
      } else {
          result += tens[tensDigit];
          if (onesDigit > 0) {
              result += ' ';
          }
      }
  }

  if (onesDigit > 0 && tensDigit !== 1) {
      result += ones[onesDigit];
  }

  return result;
};
