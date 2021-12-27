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

//STATIC & SINGLETON PATTERN////////////////////////////////////////////////////

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

//SUPER И МЕТОД SUPER()////////////////////////////////////////////////////

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

//3.5

//АБСТРАКТНЫЕ КЛАССЫ////////////////////////////////////////////////////

//Если добавить ключевое слово abstract в обявление класса
//то мы создадим такой класс котрый не может быт проинстанциирован

//Ето можно исполтзоать чтобы делигировать реализацию методов подклассам
//но убедится что они будут иметь одинаковые сигнатуры
abstract class Guy {
    constructor (
        public name: string,
    ){}

    changeAddress (newAddr: string){
        console.log('Seted new adres' + newAddr);
    }

    private giveDayOff (){
        console.log('Give dayoof 4 this guy ' + this.name);
    }

    promoute (percent: number){
        this.giveDayOff();

        this.incracePay(percent);
    }

    //абстрактный метод который гарантирует сигнатуру метода
    abstract incracePay (percent: number): void
};

//это обязывает использовать метод согласно сигнатуре в потомках
//иначе не проезойдет компиляции
class EmploeeGuy extends Guy {
    //так как в потомках мы не вызываем конструкторы то они наследуют констуктор от
    //супер класса
    //если бил бы нужен конструктор то пришлось бы воспользоватся методом super
    incracePay(percent: number): void {
        console.log('Increased EMOLOEE pay to the ' + this.name + ' for ' + percent + '%');
    }
};

class ContractorGuy extends Guy {
    incracePay(percent: number): void {
        console.log('Increased CONTRACTOR pay to the ' + this.name + ' for ' + percent + '%');
    }
};

const worckers: Guy[] = [];

//Более конкретный тип может быть присвоен более обобщенному
//по этому можно писать так
worckers[0] = new EmploeeGuy('Garry');
worckers[1] = new ContractorGuy('Tsigan');

worckers.forEach(w => {
    w.promoute(20);
});

//все это пример полиморфизма - столба  ООП
//Факический тип объекта выявляется непостедствено во время исполнения
//по этому мы вызыаем правильные методы на кождом объекте

//3.6

//ПЕРГРУЗКА МЕТОДА////////////////////////////////////////////////////

//Строготипизированые языки по умолчанию поддерживают ПЕРЕГРУЗКУ МЕТОДОВ
//это означает что в классе может быть дваи болше метода с одинаковым названием
//и разными аргументами или их количеством

//JS не подерживает такого
//но благодаря TS мыимеем такую возможность

//В классе мы должны реализовать все сигнатуры методов без реализации
//одну общюю релизацию
interface Prod {
    id: number,
    descr: string,
};

class ProductService {
    getProducts (): void
    getProducts (id: number): Prod
    getProducts (descr: string): Prod[]
    getProducts (prod?: string | number): Prod | Prod[] | void{
        if (typeof prod === 'number'){
            console.log('Called with id ' + prod);

            return;
        };

        if (typeof prod === 'string'){
            console.log('Called ARRAy of products with same descr ' + prod);
            
            return;
        };

        console.log('Called all products');
    }
};

const productS = new ProductService();

productS.getProducts();
productS.getProducts(6);
productS.getProducts('bread');
//все это нужно для того чтобы компилятор мог верно определить перегружамый метод
//но это го кажется мало чтобы так заморачиватся и проще обявить два разных метода

//да ... всегда кроме когда нужна перегузка конструктора

//мы мжем обьявить один класс с разными сигнатурами конструктора
class Pilot {
    constructor ()
    constructor (name: string)
    constructor (name: string, motoHours: number)

    constructor (name?: string, motoHours?: number){}
};

//но опять же это не единственный способ прегрузить конструктор или метод
//можно создать интерфейс с возможными типами
//и передать как тип аргумента

interface RersonProps {
    name?: string,
    salary?: number, 
};

class Slave {
    name = 'John';
    salary = 4;

    constructor (properties: RersonProps){
        //реализация возможных сценариев
    };
};

//3.7

//РАБОТА С ИНТЕРФЕЙСАМИ////////////////////////////////////////////////////

//Тут о том как реализовать реализация классом конкретного API

//Интерфейс может содержат не только поля но и сигнатуры методов(но не их реализации)
//потом используя слово inplements после обявления класса мы можем указать интерфейс который он должен выполнить
interface MotorVehicle {
    startEngine(): boolean;
    stopEngine(): boolean;
    brake(): boolean;
    accelerate(howTo: number): void;
    honk(howLong: number): void;
};

//тут мы говорим что клас Vehicle имплементирует интерфкйс MotorVehicle
//что буквально значит мы обязываем класс реализовать данный интерфейс
//иначе код не скомпилится
class Vehecle implements MotorVehicle {
    startEngine(): boolean {
        return true;
    }

    stopEngine(): boolean {
        return false;
    }

    brake(): boolean {
        return true;
    }

    accelerate(howTo: number): void {
        console.log('Accelerated for ' + howTo + 'm/h');
    }

    honk(howLong: number): void {
        console.log('Deep ' + howLong + 's honk!');
    }

    radioOn(): boolean {
        return true;
    }
};

//теперь мы даже можем сделать так
//ошибок не будет
//разница лиш в том что если у Vehicle будут еще свои методы то их нельзя будет реализовать

const f1: MotorVehicle = new Vehecle();

//radioOn тут в подсказках не будет
//f1.

//класс может реализовывать более одного интерфейса
interface Swimmable {
    dive(meters: number): void;
    land(): void;
};

interface Flyable {
    fly(): void;
};

//теперь можно расширить класс Vehicle оставив не тронутым его функционал
class SecretCar extends Vehecle implements Swimmable, Flyable {
    startEngine(): boolean {
        return true;
    }

    stopEngine(): boolean {
        return false;
    }

    brake(): boolean {
        return true;
    }

    accelerate(howTo: number): void {
        console.log('Accelerated for ' + howTo + 'm/h');
    }

    honk(howLong: number): void {
        console.log('Deep ' + howLong + 's honk!');
    }

    dive(meters: number): void {
        console.log('Bye, Im dive into ' + meters + 'm');
    }

    land(): void {
        console.log('Go to land');
    }

    fly(): void {
        console.log('Iaaaam flyyy!');
    }
};

const SC = new SecretCar();

//теперь можно делать супертачки и одновременно иметь возможность делать обычные
SC.accelerate(120);
SC.fly();

//3.8

//ОБЬЕДЕНЕНИЯ ИНТЕРФЕЙСОВ////////////////////////////////////////////////////
//Видно как гибко можно писять код на ООП с помощю этого всего

//но еще можно обединять интерфейсы
interface Turbo extends MotorVehicle{
    turbo(): void;
};

//теперь класс TurboCar должен реализовать все методы MotorVehicle и Turbo
//представляя новый вид бистрых тачек
//програмить через интерфейсы круто и очень читабельно
class TurboCar implements Turbo {
    startEngine(): boolean {
        return true;
    }

    stopEngine(): boolean {
        return false;
    }

    brake(): boolean {
        return true;
    }

    accelerate(howTo: number): void {
        console.log('Accelerated for ' + howTo + 'm/h');
    }

    honk(howLong: number): void {
        console.log('Deep ' + howLong + 's honk!');
    }

    turbo(): void {
        console.log('It so Fast acceleration!!!');
    }
};

const TC = new TurboCar();

TC.accelerate(100);
TC.turbo();

//3.9

//ПРОГРАМИРОВАНИЕ ЧЕРЕЗ ИНТЕРФЕЙСЫ////////////////////////////////////////////////////

//допустим нужно написать сервис для отбора продуктов с большой базы даных
class Good {
    constructor(id: number, description: string){}
};

class GoodsService {
    getMeProds(): Good[] {
        //реализация здесь
        return [];
    }

    getSingleProdToId(id: number): Good {
        return {id, description: 'Im not a real good from GoodService'};
    }
};

//для тестирования или для работы с жостко закодированими данними
//нужно создать мок объект чтобы не лезть в подленный но с точно такой реализацией

//можно сделать так...
//и наделать кучу ошибок
// class MockGoodsService {
//     getProducts(): Good[] {
//         //реализация здесь
//         return [];
//     }

//     getGoodForId(): Good {
//         //реализация здесь
//         return {id: -0, description: 'Its not a real product'};
//     };
// };

//но TS достаточно умный чтобы понять
//нижеидущие строчки
// class MockGoodsService implements GoodsService {};
//это застаавит реализовать интерфейс класса GoodsService

//однако наилутшей практикой будет писать сразу через интерфейсы
//не заботясь поеа од их реализации
interface IGoodsServak {
    getMeProds(): Good[];
    getSingleProdToId(id: number): Good;
};

//и имплементить классы через них
class MockGoodsServak implements IGoodsServak {
    getMeProds(): Good[] {
        return [];
    }

    getSingleProdToId(id: number): Good {
        return {id, description: 'Im not a real good from GoodServak'};
    }
};

//написать фабричную функцию можно исполбзуя интерейс в качестве значения ее возврата
function getProductService (isProduction: boolean): IGoodsServak{
    if (isProduction) return new GoodsService();
    
    return new MockGoodsServak();
};

//теперь  зависимости режима разрабоки или продакшен можно выбрать класс возвращаемого результата
const myProdService = getProductService(true);

const myDevService = getProductService(false);

console.log(myProdService.getSingleProdToId(12));
console.log(myDevService.getSingleProdToId(2));