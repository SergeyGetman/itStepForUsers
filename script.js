// //создать копию обьекта не меняя исходный обьект
// const obj = {
//     name: "Sergo",
//     age: 25
// }

// const copyObj = {}; // использовать for in

// // убрать дубли
// const arrayForSort = [1, 3, 4, 6, 0, 23, 0, 0, 0]

// // let newArr =[];
// // for (let i = 0; i<arrayForSort.length; i++){ // решить через цикл for;
// // if(arrayForSort[i])
// // }

// //через деструкторизацию вытащить все name -// решить через цикл for;
// //изменить в исходном обьекте все ключи sex на "no-name" - // решить через цикл for;
// //записать в переменную isFunc вызов второго алёрта // черз переменную

// const paramObject = [
//     { name: "Tort", sex: "male", func: () => { alert("alert_1") } },
//     { name: "Kort", sex: "wooman", func: () => { alert("alert_2") } },
//     { name: "Port", sex: "male", func: () => { alert("alert_3") } },
// ]

// // let arr = [1, 2, 3, 4, 5];
// // let newArr = [...arr];

// // let min = Math.min(...newArr);
// // let minInd = newArr.indexOf(min);

// // newArr.splice(minInd, 1);
// // console.log(newArr);

// // let sum = (a, b) => a + b;

// // (function (a, b) {
// //     return a + b;
// // });

// // let catyears = 15;
// // let dogYears = 15;

// // if (humanYears >= 2) {
// //     dogYears += 9
// //     catyears += 9
// // }
// // if (humanYears > 2) {
// //     let diff = humanYears - 2;
// //     catyears += diff * 4;
// //     dogYears += diff * 5;
// // }

// // Cat Years
// // 15 cat years for first year
// // +9 cat years for second year
// // +4 cat years for each year after that

// // Dog Years
// // 15 dog years for first year
// // +9 dog years for second year
// // +5 dog years for each year after that

// // 1 year human === 15 years cat and dog
// // 2 years human === 9 years cat && dog
// // 3 years human === cat 4 years, dog 5 years

// const humanYearsCatYearsDogYears = (humanYears) => {

//     let catyears = 1;
//     let dogYears = 1;

//     const currentYears = [humanYears];

//     for (let i = 1; i < currentYears.length; i++) {
//         if (humanYears >= 1 && humanYears <= 2) {
//             catyears += 15,
//                 dogYears += 15
//         }
//         if (humanYears >= 2 && humanYears < 3) {
//             catyears += 9,
//                 dogYears += 9
//         }
//         else {
//             catyears += 4,
//                 dogYears += 5
//         }
//     }

//     return [humanYears, catyears, dogYears]
// }

console.log("qwe222 2 2323 23 ");
