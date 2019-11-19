// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
// и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

/*let auto = {
    producer: "Volvo",
    model: "Volvo S40",
    year: 1995,
    averageSpeed: 40,
    showAutoInfo: function () {
        for (let key in this) {
            if (typeof this[key] == "function") {
                continue;
            }
            console.log(key, this[key]);
        }
    },

    showTime: function (distance) {
        let time = distance / this.averageSpeed;
        breakTime = Math.floor(time / 4);
        time += breakTime;
        return `Time of your trip - ${time} hours.`;
    }
}

auto.showAutoInfo();
console.log(auto.showTime(parseInt(prompt("Your distance:", ""))));*/

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

if (denominator1 == 0 || denominator1 == 0) {
    alert("denominator shoud not = 0");
}

function gcd_two_numbers(dmax, dmin) {

    while (dmin) {
        let t = dmin;
        dmin = dmax % dmin;
        dmax = t;
    }
    let gcd = dmax;
    return `gcd ${gcd}`;
}

let leastCommonMultiple = (d1, d2) => {

    return (d1 * d2) / gdc;
}
console.log(leastCommonMultiple(denominator1, denominator2));


// // let gcd;
// let lcm = (n1, n2) => {
//     //Find the gcd first 
// let gcd = gcd(n1, n2);
// console.log(gcd);


//     // //then calculate the lcm
//     // return (n1 * n2) / gcd;
// }

// console.log(lcm(15, 20));
// console.log(lcm(5, 7));







console.log(gcd_two_numbers(12, 30));
console.log(gcd_two_numbers(9, 3));















// let fraction = {
//     numerator: 1,
//     denominator: 3,
//     toStr: function () {
//         return `${this.numerator} / ${this.denominator}`;
//     },
//     val: function () {
//         return this.numerator / this.denominator;
//     },

//     show: function () {
//         for (let key in this) {
//             if (typeof this[key] == "function") {
//                 continue;
//             }
//             console.log(key, this[key]);
//         }
//     }
// }

// console.log(fraction);
// console.log(fraction.toStr());
// console.log(fraction.val());
// fraction.show();