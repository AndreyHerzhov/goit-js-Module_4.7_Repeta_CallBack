/*
 * -   Функция результатом своей работы может возвращать другую функцию.
 *
 * -   Возвращаемая функция во время вызова будет иметь доступ
 *   ко всем локальным переменным (области видимости)
 *   родительской функции (той из которой её вернули),
 *   это называется «замыкание».
 */

// const fnA = function (parameter) {
//     const innerVariable = 'значение внутренней переменной функции fnA';

//     const innerFunction = function ()  {
//         console.log(parameter)
//         console.log(innerVariable)
//         console.log('Это вызов innerFunction');
//     }

//     return innerFunction;
// }

 
// const fnB = fnA(123);
// fnB()
// console.log(fnB)



/*
 * Поварёнок
 */

// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовит ${dish}`);
// };

// console.log(makeDish(`Andrii`, `Borsch`))
// makeDish(`Andrii`, `Tee`)
// makeDish(`Andrii`, `Omlet`)

const makeShef = function (name) {
    const innerVar = 123;
    console.log(innerVar)
    const makeDish = function (dish) {
    console.log(`${name} готовит ${dish}`);
    }
    return makeDish;
}

// const mango = makeShef('Mango');
// console.log(mango)
// console.dir(mango)

const poly = makeShef('Poly')
poly('Chay')
poly('Omlet')
poly('Voda')



/*
 * Округлятор 🤷‍♂️
 */

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint)
// const withDecimals = Number(floatingPoint.toFixed(4))

// console.log(withDecimals)

// const rounder = function (number, places){
//     return Number(number.toFixed(places))
// }

// const rounder = function (places){
//     return function (number){
//       return  Number(number.toFixed(places))
//     }
// }

// const rounder2 = rounder(2)
// const rounder3 = rounder(3)
// const rounder4 = rounder(4)


// console.log(rounder3(23.21313))
// console.log(rounder4(23.21313))
 

/*
 * Приватные данные и функции - скрытие реализации, интерфейс
 */


// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//   let salary = baseSalary;

//   return {
//       raise(amount) {
//           if (amount > 1000) {
//               return 'Ты офигел?';
//           }
//           salary += amount;
//       },
//       lower(amount) {
//           salary -= amount;
//       },
//       current() {
//           return `Текущая зарпалата ${employeeName} - ${salary}`;
//       },
//   };
// };

// const salaryManager = salaryManagerFactory('Teylor', 5000)

// console.dir(salaryManager.raise)
// console.log(salaryManager.current())


// const myLibFactory = function () {
//   let value = 0;

//   const add = function (num) {
//     value += num;
//   }

//     return {
//     add,  
//     getValue (){
//       return value;
//     },
//   };
// };

// const myLib = myLibFactory();

// console.log(myLib)
// console.log(myLib.getValue())
// myLib.add(10)
// console.log(myLib.getValue())


// const myLib = {
//   value: 0,
//   add(num){
//     this.value += num;
//   }
// };


// myLib.add(5)
// console.log(myLib.value)
