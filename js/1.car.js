// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
// и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

let auto = {
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
console.log(auto.showTime(parseInt(prompt("Your distance:", ""))));

