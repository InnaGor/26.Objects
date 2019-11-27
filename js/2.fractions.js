// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби.

let numerator1 = parseInt(prompt("Type numerator1", ""));
let denominator1 = parseInt(prompt("Type denominator1", ""));
let numerator2 = parseInt(prompt("Type numerator2", ""));
let denominator2 = parseInt(prompt("Type denominator2", ""));

let num1 = {
    numerator: numerator1,
    denominator: denominator1,

    toString: function () {
        return `${this.numerator}/${this.denominator}`
    }

};

let num2 = {
    numerator: numerator2,
    denominator: denominator2,

    toString: function () {
        return `${this.numerator}/${this.denominator}`
    }
};
console.log(num1.toString(numerator1, denominator1));
console.log(num2.toString(numerator2, denominator2));

// checking denominator shoud not = 0

if (denominator1 == 0 || denominator1 == 0) {
    alert("denominator shoud not = 0");
}

// find the greatest common divisor
let greatestCommonDivisor = (d1, d2) => {
    let dmax = Math.max(d1, d2);
    let dmin = Math.min(d1, d2);


    while (dmin) {
        let t = dmin;
        dmin = dmax % dmin;
        dmax = t;
    }
    return dmax;
}

console.log(greatestCommonDivisor(denominator1, denominator2));



// find the least Common Multiple (найменше спільне кратне)

let = leastCommonMultiple = (d1, d2) => {
    let dmax = greatestCommonDivisor(denominator1, denominator2);
    return (d1 * d2) / dmax;
}

console.log(leastCommonMultiple(denominator1, denominator2));

// Функция сложения 2-х объектов-дробей;

let sum = (n1, d1, n2, d2) => {
    let n, d;
    if (d1 !== d2) {
        n = n1 + n2;
        d = leastCommonMultiple(denominator1, denominator2);
    } else {
        n = n1 + n2;
        d = d1;
    }
    return `${n}/${d}`;
}

console.log(sum(numerator1, denominator1, numerator2, denominator2));

// Функция вычитания 2-х объектов-дробей;
let substraction = (n1, d1, n2, d2) => {
    let n, d;
    if (d1 !== d2) {
        n = n1 - n2;
        d = leastCommonMultiple(denominator1, denominator2);
    } else {
        n = n1 - n2;
        d = d1;
    }

    if (n < 0) {
        n = Math.abs(n);
        return `-(${n}/${d})`;
    } else {

        return `${n}/${d}`;
    }
}
console.log(substraction(numerator1, denominator1, numerator2, denominator2));

// Функция умножения 2-х объектов-дробей;

let multiplication = (n1, d1, n2, d2) => {
    let n = n1 * n2;
    let d = d1 * d2;
    return `${n}/${d}`;
}
console.log(multiplication(numerator1, denominator1, numerator2, denominator2));

// Функция деления 2-х объектов-дробей;

let division = (n1, d1, n2, d2) => {
    let n = n1 * d2;
    let d = n2 * d1;
    return `${n}/${d}`;

    // let fraction = {
    //     numerator: n,
    //     denominator: d,

    //     reduction: function () {
    //         let gcd = greatestCommonDivisor(this.n, this.d);
    //         this.n = this.n / gcd;
    //         this.d = this.d / gcd;
    //         return this.n, this.d;
    //     },

    //     toString: function () {
    //         return `${this.numerator}/${this.denominator}`
    //     },
    // }
    // fraction.reduction(n, d);
    // return fraction.toString(); //превратила результат в объект
}

console.log(division(numerator1, denominator1, numerator2, denominator2));


// Функция сокращения объекта-дроби.

let reduction = (n, d) => { // не знаю, как передать параметры в другие функции
    let gcd = greatestCommonDivisor(n, d);
    n = n / gcd;
    d = d / gcd;
    return n, d;
}

