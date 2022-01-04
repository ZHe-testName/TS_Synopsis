//ПЕРЕЧИСЛЕНИЯ И ОБОБЩЕНЫЕ ТИПЫ

//4.1

//ИСПОЛЬЗОВАНИЕ ENUMS////////////////////////////////////////////////////

//Enums - позволяют создавать ограниченые наборы констант
//которые имеют чтото общее
//они могут состорять из чисел или строк

//Допуустим у нас дни недели представлены числами 1-7
//Но это не описательно и не ясно какой день недели первыйй
//плюс можно передать неправильное число

//в таком случае можно обявить перечисление с помощю enum

enum WeekDays {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursdaay = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7,
};

//Используя перечисления можно обращатся к дню через точечную нотацию
const dayOff = WeekDays.Saturday;

//Можно инициализировать перечисления с автоматическим увелечением значения
//по умолчанию первый ноль
enum WeekDaysAuto {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursdaay,
    Friday,
    Saturday,
    Sunday,
};

const newYear = WeekDaysAuto.Friday;
console.log(newYear);
//можно и обратно обратится ка имени свойства
//если известно значение его числа

console.log(WeekDaysAuto[4]);

//допустим есть функция конвертации фаренгейтов в цельсии и наоборот
//чтобы не допускать ошибок в направлени преобразования можно обявить enum

enum Direction {
    'FtoC',
    'CtoF',
};

const convertTemperature = (temp: number, fromTo: Direction): number => {
    return fromTo === Direction.FtoC
                ?
                (temp - 32) * 5.0 / 9.0
                :
                temp * 9.0 / 5.0 + 32;
};

console.log(convertTemperature(53, Direction.CtoF));