module.exports = function toReadable(n) {
    if (n < 0)
      return false;
	 single_digit = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	 double_digit = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
	 below_hundred = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
	if (n === 0) return 'zero'
	function translate(n) {
		word = ""
		if (n < 10) {
			word = single_digit[n] + ' '
		}
		else if (n < 20) {
			word = double_digit[n - 10] + ' '
		}
		else if (n < 100) {
			rem = translate(n % 10)
			word = below_hundred[(n - n % 10) / 10 - 2] + ' ' + rem
		}
		else if (n < 1000) {
			word = single_digit[Math.trunc(n / 100)] + ' hundred ' + translate(n % 100)
		}
		else if (n < 1000000) {
			word = translate(parseInt(n / 1000)).trim() + ' Thousand ' + translate(n % 1000)
		}
		else if (n < 1000000000) {
			word = translate(parseInt(n / 1000000)).trim() + ' Million ' + translate(n % 1000000)
		}
		else {
			word = translate(parseInt(n / 1000000000)).trim() + ' Billion ' + translate(n % 1000000000)
		}
		return word
	}
	 result = translate(n) 
	return result.trim()+'.'
}