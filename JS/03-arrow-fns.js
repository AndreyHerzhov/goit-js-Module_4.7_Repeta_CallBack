/*
 * Стрелочные функции
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 * - Неявный возврат объекта
 */

// const add = function (a, b, c) {
//     console.log(arguments)
//     console.log(a,b,c); 
//     return a + b + c;
// }

// const addArrow = (...args) =>  {
//     console.log(args)
    // console.log(a,b,c); 
    // return a + b + c;
// }

// const addArrow = (a,b,c) =>  a + b + c;
   

// console.log(add(1,2,3))
// console.log(addArrow(3,4,5))


// const fnA = function() {
//     return {
//         a: 5,
//     };
// };

// console.log(fnA())

// const arrowFna = () => ({arrowA: 5,});

// console.log(arrowFna())


// const filter = function (array, test) {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }

//     return filteredArray;
// };

// 1. надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условию то функция вернет true
// 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

// const callback1 =  value =>  value >= 3;
 

// const r1 = filter([1, 2, 3, 4, 5], value =>  value >= 3);
     
// console.log(r1);

// const callback2 =  value => value <= 4;

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity >= 120;
// };

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);


/*
 *        ЗАМЫКАНИЕ
 */

const makeShef = function (name) {
    const makeDish = function (dish) {
    console.log(`${name} готовит ${dish}`);
    }
    return makeDish;
}

const poly = makeShef('Poly')
poly('Chay')
poly('Omlet')
poly('Voda')
