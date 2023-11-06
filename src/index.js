module.exports = function toReadable(number) {

    console.log("number:", number);

    if (number === 0) {
        console.log("Returning 'zero'");
        return 'zero';
    }

    let stringNumber = String(number);
    let lengthValue = stringNumber.length;
    let result;

    const simple = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ];
    const unique = [
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];
    const dozens = [
        'ten',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ];
    const hundreds = [
        'one hundred',
        'two hundred',
        'three hundred',
        'four hundred',
        'five hundred',
        'six hundred',
        'seven hundred',
        'eight hundred',
        'nine hundred',
    ];

    console.log("lengthValue:", lengthValue);

    if (lengthValue === 1) {
        result = simple[number - 1];
        console.log("Returning result:", result);
    }

    if (lengthValue === 2) {

        if (number >= 11 && number <= 19) {
            result = unique[number - 11];
            console.log("Returning result:", result);
        } else if (number % 10 === 0) {
            result = dozens[stringNumber[0] - 1];
            console.log("Returning result:", result);
        } else {
            result = `${dozens[stringNumber[0] - 1]} ${simple[stringNumber[1] - 1]}`;
            console.log("Returning result:", result);
        }
    }

    if (lengthValue === 3) {

        if (number % 100 === 0) {
            result = hundreds[stringNumber[0] - 1];
            console.log("Returning result:", result);
        } else if (stringNumber[1] == 0) {
            result = `${hundreds[stringNumber[0] - 1]} ${simple[stringNumber[2] - 1]}`;
            console.log("Returning result:", result);
        } else {

            let twoDigitNumberStr = `${stringNumber[1]}${stringNumber[2]}`;

            let twoDigitNumber = Number(twoDigitNumberStr);

            if (twoDigitNumber % 10 == 0) {
                result = `${hundreds[stringNumber[0] - 1]} ${dozens[twoDigitNumberStr[0] - 1]}`;
                console.log("Returning result:", result);
            } else if (twoDigitNumber >= 11 && twoDigitNumber <= 19) {
                result = `${hundreds[stringNumber[0] - 1]} ${unique[twoDigitNumber - 11]}`;
                console.log("Returning result:", result);
            } else {
                result = `${hundreds[stringNumber[0] - 1]} ${dozens[twoDigitNumberStr[0] - 1]} ${simple[twoDigitNumberStr[1] - 1]}`;
                console.log("Returning result:", result);
            }
        }
    }

    return result;
}
let number = 29; 
console.log(number);