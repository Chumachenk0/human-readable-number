module.exports = function toReadable(number) {
    const ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    if (number === 0) {
        return "zero";
    }

    if (number < 0 || number > 999) {
        return "Please enter a number between 0 and 999.";
    }

    let str = "";

    if (Math.floor(number / 100) > 0) {
        str = ones[Math.floor(number / 100)] + " hundred";
        number %= 100;
        if (number > 0) {
            str += " ";
        }
    }

    if (number >= 10 && number < 20) {
        str += teens[number - 10];
        return str;
    }

    if (Math.floor(number / 10) > 0) {
        str += tens[Math.floor(number / 10)];
        number %= 10;
        if (number > 0) {
            str += " ";
        }
    }

    if (number > 0) {
        str += ones[number];
    }

    return str;
};
