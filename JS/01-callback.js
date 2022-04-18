/*
 * -Функция обратного вызова callback
 * -Функция может принимать другие функции как параметры
 * -Функция которая передаеться другой функции как аргумент называеться  
 * функцией обратного ("отложеного") вызова (callback-функция)
 * -Функция которая принимает другую функцию как параметр
 * или возвращает функцию как результат своей работы называется 
 * "функцией высшего порядка"
 * 
*/ 

// const fnA = function (message, callback) {
//     console.log(message);

//     console.log(fnB)
//     callback(100)
// }


// const fnB = function (number) {
//     console.log(`Это лог при вызове fnB`, number)
// }

// fnA('qweqwe', fnB)

/*
 * функция doMath(a, b, callback)
*/

// const doMath = function (a, b, callback) {
//     const result = callback(a,b);

//     console.log(result)
// }

// const add = function (x, y) {
//     return x + y;
// }

// const sub = function (x, y) {
//     return x - y;
// }

// doMath(3, 3, add)
// doMath(10, 3, sub)

/*
 * Литерал фцнуции (анонимная встроенная ф-ция)
*/ 

// doMath(3, 3,function (x, y) {
//     return x + y;
// });

// doMath(10, 3, function (x, y) {
//     return x - y;
// })


/*
 * Отложеный вызов : регистрация событий
*/ 

// const buttorRef = document.querySelector('.js-button');

// console.dir(buttorRef);


// const handleBtnClick = function() {
//     console.log(`This is a click`);
// }; 

// buttorRef.addEventListener('click', handleBtnClick);


/*
 * Отложеный вызов : геолокация 
*/ 

// const onGetPositionSuccess = function (position) {
//     console.log(position)
// };

// const onGetPositionError = function (error) {
//     console.log(error)
// }

// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess);


/*
 * Отложеный вызов : интервалы 
*/ 

// console.log(`В коде перед тайм-аутом`)

// setTimeout(function(){
//     console.log("Через 3 секунды после коллбека")
// },3000)

// console.log(`В коде после тайм-аута`)

/*
 * Фильтры
*/ 


const filter = function (array, test) {
    const filteredArray = [];

    for (const el of array) {
        //    console.log(el)
           const passed = test(el);

           if (passed){
               filteredArray.push(el)
           }
        
    }
    return filteredArray;
}

// const callback = function (value) {
//     return value >= 3;
// }

// console.log(filter([1,2,3,4,5,6,7,8], callback))

// console.log(filter([1,2,3,4,5,6,7,8], function (value) {
//     return value <= 3;
// }))



const fruits = [
    { name: 'apples', quantity: 200, isFresh: true },
    { name: 'grapes', quantity: 150, isFresh: false },
    { name: 'bananas', quantity: 100, isFresh: true },
];


const getFruitWithQuantity = function (fruit){
    return fruit.quantity >=120;
}


/*
 * qwe
*/ 
console.log(filter(fruits,function (qwe){ // qwe это локальная перемення 
    return qwe.quantity >=120;
})) 
    //{name: 'apples', quantity: 200, isFresh: true}
    //{name: 'grapes', quantity: 150, isFresh: false}

/*
 * fruit работтает и то и это
*/ 
console.log(filter(fruits,function (fruit){ // qwe это локальная перемення 
    return fruit.quantity >=120;
}))
    //{name: 'apples', quantity: 200, isFresh: true}
    //{name: 'grapes', quantity: 150, isFresh: false}


    