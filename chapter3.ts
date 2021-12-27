//ООП ПРОГРАМИРОВАНИЕ С КЛАССАМИ И ИНТЕРФЕЙСАМИ

//3.1

//ООП - стиль програмирования когда программа фокусируется на обработке объектов а не на действиях((функцях)) между ними.

//Програмирование через интерфейсы - ето спсоб обусловить классы конкретными API

//Принцып наследования в ООП говорит что классы могут расширять другие классы 
//Для этог используется ключевое слово extnds

class Person3 {
    name = '';
    city = '';
    age = 31;
    sayHallo = () => 'HI im' + this.name;
};

class Emploee extends Person3 {
    departament = '';
};
//Emploee наслеюует от Person3

const emp = new Emploee();

console.log(emp.departament);

//3.2

//PRIVATE, PUBLIC, PROTECTED МОДИФИКИТОРЫ ДОСТУПА////////////////////////////////////////////////////

//TS включает ключевые слова ля управления доступом к членам класса(полям и метолам)

//PUBLIC - модификатор члена по умолчанию. Член класса доступен как из нутри класса так и из внешеих сценариев

//PROTECTED - к членас с етим свойством можно обращатся толко из самого класа либо из наследников этого класса
//хоть свойство доступно с наследников класс, экземпляр к нему доступа не имеет

//PRIVATE - только из методов класса

//так реализуется еще один принцып ООП - ИНКАПСУЛЯЦИЯ
//в JS эти ключевые слова не попадут. Это просто помощь при разработке

//более сжатая версия обявления класса
//конструктор автоматом создает поля с теми же именами и тех же типов
class Burger {
    constructor(
            public breadType: string,
            public meatType: string,
            protected ketchup: boolean,
            private secretComponentAmount: number, 
    ){};

    setSecretComponentAmount(amount: number) {
        //secretComponentAmount доступна толко тут
        this.secretComponentAmount = amount;
    };
};

const burger = new Burger('Black', 'Pork', true, 30);

console.log(burger);//secretComponentAmount ketchup не доступны

//3.3

//STATIC & SINGLETON PATTERN

//В ES6 было введено модификатор свойства STATIC
//Это означает общще доступное свойство в классе для всех экземпляров

class Ganster {
    static bullets = 20;

    shoot (){
        Ganster.bullets--;

        console.log('Shoot!!! Bullets amount is ' + Ganster.bullets);
    };
};

const g1 = new Ganster();
const g2 = new Ganster();

g1.shoot();
g1.shoot();

g2.shoot();
g2.shoot();
g2.shoot();
g2.shoot();
//у всех ганстеров общее количество пуль благодаря static
//bullets не доступно через this потому что не является свойством объекта
//и не двсьупно подклассам. Для них будет создано свое свойство

//SINGLETON PATTERN

//Представим что у нас есть данные к которым обращаются из разных сценариев
//Это очень важные данные в которых мы храним состояние программы
//Важно чтобы такой объект был один единственный на всю программу

//Задача сделать такой клас который может зделать лиш один екхемплар объекта

class AppState {
    //наш общий стейт
    counter = 0;

    //свойство хранит ссылку на одиночный экземпляр
    private static instanceRef: AppState;

    //приватный конструктор для отключения работы new
    //теперь оператор не может обратится к constructor
    private constructor (public inc = () => {AppState.instanceRef.counter++}){};

    //свойство класса которое единожды создает экземпляр а после возвращает ссылки для него во внешний код
    static getInstance (): AppState{
        if (AppState.instanceRef === undefined){
            //единственный путь создания экземпляра
            AppState.instanceRef = new AppState();
        }

        return AppState.instanceRef;
    };
};

const a1 = AppState.getInstance();
const a2 = AppState.getInstance();

a1.inc();
a1.inc();

a2.inc();

console.log(a1.counter);//3

//3.4

//SUPER И МЕТОД SUPER()

//Метод super нужен чтобы конролировать конструкторы суперклассов и и х подклассов
//Если конструктор суперксласса нуждается в аргументах то в 
//консрукторе подкласса нужно вызвать super и передать туда нужные аргументы
//super визовит конструктор суперкласса и закинет туда переданные ему аргументы
class Car {
    constructor (
        public engine: string,
        public diesel: boolean,

        private readonly company: string,
    ){}

    //если нам нужны методы с одним и тем же названием в классе и подкласе это можно
    getCompany(){
        return this.company;
    }
};

class Truk extends Car {
    constructor(
        engine: string,
        diesel: boolean,
        company: string,

        public IsTrailer: boolean,
    ){
        super(engine, diesel, company);
    }

    //чтобы вызвать метод суперкласса в наследнике к нему можго обратится
    //через super
    //с его помощью мы используем базовый функционал плюс добавили свой
    getCompany(){
        const company = super.getCompany();

        console.log(this.sendRequest(company));

        return '';
    }

    private sendRequest(comp: string): string {
        return `Sended request to ${comp}`;
    }
};

const truck1 = new Truk('V8', true, 'Volvo', true);

console.log(truck1);

console.log(truck1.getCompany());