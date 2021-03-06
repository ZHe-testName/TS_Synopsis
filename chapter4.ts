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

//4.2

//СТРОКОВЫЕ ПЕРЕЧИСЛЕНИЯ////////////////////////////////////////////////////

//Для некоторых случаев нам могут понадобиться строчные перечисления
//Предположим мы пишем игру где можно перемещаться
enum GoTo {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
};

//Зачем же тогда нужны строковые перечисления ведь они
//обязывают нас обявлять всех членов перечисления

//Причина в том что а некоторых случаях нужно присвоить информативные значения
//до пустим для отлаки мы бы увыдили 0 а так лефт "Left"

//Мы также можем обявить пользоватеьский тип
type GoToType = 'Up' | 'Down' | 'Left' | 'Right';

function move(dir: GoToType){};

// move('North') не скомпилируется

//Теперь придставим что у нас есть приложениа с товарами и мы бы хотели
//отслежаваить состояни при действиях пользователя
//можно обявить enum такого плана
enum ProductActionTypes {
    Load = 'Products load all',
    Search = 'Products search',
    LoadFaailre = 'Products load all with failre',
    LoadSuccess = 'Products load all with succes',
};

//мы можем выводить сообщения при изменениии состояния приложения
//задав строчное перечисление

console.log(() => ProductActionTypes.Load);

//допустим при загрузке произошла ошибка...
console.log(() => ProductActionTypes.LoadFaailre);

//так мы получаем простой механизм при помощи enums

//В отличие от численых строковые не допускают обратного обращения
//мы не можем найти имя по значению

//4.3

//СТРОКОВЫЕ ПЕРЕЧИСЛЕНИЯ ЧЕРЕЗ CONST////////////////////////////////////////////////////

//Мы можем обявлять enums через const
const enum Eyes {
    left = 'Left eye',
    right = 'Right eye',
};

//такое перечисление не отобразится в JS коде в отличие от использования без const
//с этим связаны некоторые ограничения
//допустим при численном enum мы не сможем обратится к имени по значению
//так как оно не обявлено в исходном коде

//4.4

//ИСПОЛЬЗОВАНИЕ ОБОБЩЕНИЙ////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

//Известно что в TS исть встроеные и пользховатильские типы
//Но это еще не все.
//Типы могут быть параматрезированы
//То есть в качестве параметра можно передать тип а а не значение

//В TS можно писать обобщеные функции классы и интерфейсы

//ОБОБЩЕНИЕ - это часть кода способная обрабатывать значения нескольких типов
//которые указываются при использовании этого кода
//(в процессе вызова функции или инстанциирования)

//например массивы с конкретным типом можно создавать двумя способами
const a: string[] = ['Joe', 'Mary'];
const b: Array<string> = ['Joe', 'Mary']; 

//в данном случае если еллементы ожидаются одинаковае
//то разницы ни какой

//но если ожидается несколько типов элементов
//то хорошо использовать обобщения

const c: Array<string | boolean> = ['Joe', false];
// const d: Array<string | boolean> = ['Joe', false, 8]; не скомпилится

//4.5

//СОЗДАНИЕ ПОЛЬЗОВАТЕЛЬСКИХ ОБОБЩЕНИЙ////////////////////////////////////////////////////

//дЛЯ ЧЕГО ОНИ НУЖНЫ

//Допустим у нас должен быть класс Rectangle
//и у него должен быть метод для сравнения с другим ректанглом
//<0 - переданое значение меньше
//>0 - переданое значение больше
//===0 - переданое значение равно

//так как в будущем нам может понадобится сделать другие классы фигур хорошу писать через интерфейсы
//интерфейс можно было бы реализовать так
// interface Comporator {
//     compareTo(value: any): boolean;
// };

//но тода мы сможем сравнить квадрат скажем с кругом
//и компилятор не выдаст ошибку

//используя обобщенный тип мы можем заставить присваивать определенный тип
//при обявлении
//где Т это будет нужный тип
interface Comporator<T> {
    compareTo(value: T): number;
};



class Rectangle implements Comporator<Rectangle> {
    constructor(
        private width: number,
        private height: number,
    ){}

    compareTo(value: Rectangle): number {
        return this.height * this.width - value.height * value.width;
    }
};

class Programmer implements Comporator<Programmer> {
    constructor(
        public name: string,
        private salary: number,
    ){}

    compareTo(value: Programmer): number {
        return this.salary - value.salary;
    }
};

const r1: Rectangle = new Rectangle(3, 5);
const r2: Rectangle = new Rectangle(10, 6);

const p1: Programmer = new Programmer('J', 2000);

console.log(r1.compareTo(r2));
// console.log(r1.compareTo(p1));не скомпилится

//4.6

//ПРЕДУСТАНОВЛЕНЫЕ ЗНАЧЕНИЯ ОБОБЩЕНЫХ ТИПОВ////////////////////////////////////////////////////

//Для использования обобщеного типа нам нужно передать конкретный тип

// class A <T> {
//     value: T,
// };

//Этот код не скомпилится

// class B extends A {

// };

//Нужно обявить тип
// class B extends A<any>{

// };

//что бы не передавать тип в обобщеный тип
//его можно задать по умолчанию
// class A <T = any> {
//     value: T,
// };

//тогда если не передать то будет браться заданый тип


//4.7

//СОЗДАНИЕ ОБОБЩЕНЫХ ФУКЦИЙ////////////////////////////////////////////////////

//Мы знаем как писать функции которые принимают и возвращают заданые аргументы
//Расмотрим не удачное решение для функции которая должна регестрировать переданое значение

// function printMe (value: any): any {
//     console.log(value)
    
//     return value;;
// };

// const s = printMe('Hello');

// class Something {
//     constructor(public someone: string){}
// };

// const some = printMe(new Something('grrr'));
//в данной ситуации анализатор TS не помнит типы
//если мы хотим знать какие типы аргументов были переданы в функцию
//ее ножно переписать используя обобщенные типы
function printMe <T> (value: T): T {
    console.log(value)
    
    return value;;
};

let s = printMe('Hello');

class Something {
    constructor(public someone: string){}
};

const some = printMe(new Something('grrr'));
//теперь типы анализатору известны
//и если дальше сценарий будет обращатся к переменным то анализатор произведет проверку типов

//для юольшей наглядности напишем класс который может принимать несколько обобщенных параметров
//для представления пар ключ-значение

class Pair <K, V> {
    constructor(public key: K, public value: V){}
};

//теперь напишем обобщенную функцию которая сравеивает обобщенные пары
function compare <K, V>(pair1: Pair<K, V>, pair2: Pair<K, V>){
    return pair1.key === pair2.key &&
        pair1.value === pair2.value;
};

const pair1: Pair<string, number> = new Pair('Loe', 31);
const pair2 = new Pair('Loe', 31);//автоматом выводит тип

console.log(compare<string, number>(pair1, pair2));
//явно указав тип код блее нагляден
//и компилятор выдаст ошибку если указать типы не верно
//console.log(compare<string, string>(pair1, pair2));

const pair3 = new Pair('Apple', 'one');
const pair4 = new Pair('apple', 'two');

console.log(compare(pair3, pair4));

//еще один пример обобщенной функции
//напишем авторизацию в зависимости от полученых данных
//и будем скрывать или показывать панель
interface User {
    name: string,
    role: UserRoles,
};

//ограничим роли
enum UserRoles {
    admin = 'Administrator',
    manager = 'Manager',
};

//имитация загрузки с сервера
function loadUser <T>(): T{
    return JSON.parse('{"name": "Katya", "role": "Administrator"}');
};

const user = loadUser<User>();

switch (user.role){
    case UserRoles.admin:
        console.log('Show admin panel');
        
        break;

    case UserRoles.manager:
        console.log('Hide admin panel');

        break;

    default:
        console.log('Wrong args');
};

//4.8

//ОБОБЩЕНИЕ ВОЗВРАЩАЕМОГО ЗНАЧЕНИЯ ФУНКЦИИ ВЫСШЕГО ПОРЯДКА////////////////////////////////////////////////////

//фУНКЦИЯ ВЫСШЕГО ПОРДКА - это функция которая принимиает и/или возвращает еще одну функцию

//Допустим нужна ФВП возвращающая ф со следующей сигнатурой
// (c: number): number;

const outerFunc = (someValue: number) => (mulplaer: number) => someValue * mulplaer;

const innerFunc = outerFunc(10);//Замыкание someValue

console.log(innerFunc(6));

//допустим нам нужна такая же функция но принимающая разные аргументы
//но возвращающая функцию с той же сигнатурой

type numFunc<T> = (arg: T) => (mult: number) => number;
//теперь можно обявлять переменные типа numFunc
//и TS проверит чтбы переменные были функциями

const stringFunc: numFunc<string> = (someStr: string) => (rec: number) => someStr.length + rec;

const voidFunc: numFunc<void> = () => (rec: number) => 5 + rec;

const numberFunc: numFunc<number> = (someNum: number) => (rec: number) => someNum * rec;

// const strFunc: numFunc<string> = (someStr: string) => (rec: number) => someStr + rec;// не скомпилится