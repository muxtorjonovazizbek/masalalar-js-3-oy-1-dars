// 53. Berilgan foydalanuvchilar massividan yoshiga ko'ra foydalanuvchilarni filtrlash.

// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 17 },
//     { name: 'Charlie', age: 20 },
//     { name: 'David', age: 15 }
// ];

// function filterAdultUsers(users) {
//     let adults = []
//     users.forEach(element => {
//         if (element.age > 18) {
//             adults.push(element)
//         }
//     });
//     return adults
// }

// // Test case
// console.log(filterAdultUsers(users)); // [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 20 }]



// ↑ 2-usuli

// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 17 },
//     { name: 'Charlie', age: 20 },
//     { name: 'David', age: 15 }
// ];

// function filterAdultUsers(users) {
//     return users.filter(val => val.age > 18 )
    
// }

// // Test case
// console.log(filterAdultUsers(users)); // [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 20 }]



// 54. Berilgan ikki o'lchovli massiv (matritsa) ichidagi nol elementlarning indekslarini toping.

// function findZeroIndices(matrix) {
//     let newArr = []
//     matrix.forEach((val, ind) => {
//         val.forEach((item, index) => {
//             if (item == 0) {
//                 newArr.push([ind,index])
                
//             }
//         })
//     });
//     return newArr
// }
 
//  // Test case
//  console.log(findZeroIndices([
//      [1, 0, 3],
//      [4, 5, 0],
//      [7, 0, 9]
//  ])); 
//  // Output: [[0, 1], [1, 2], [2, 1]]



// 55. Berilgan sonli massivdagi eng ko'p takrorlangan elementni toping. 
// Agar bir nechta element teng takrorlangan bo'lsa, ulardan birini qaytaring.

// function mostFrequentElement(arr) {
//     const countMap = {};
//     let maxCount = 0;
//     let mostFrequent = null;

//     arr.forEach((element) => {
//         countMap[element] = (countMap[element] || 0) + 1;

//         if (countMap[element] > maxCount) {
//             maxCount = countMap[element];
//             mostFrequent = element;
//         }
//     });

//     return mostFrequent;
// }

// // Test case
// console.log(mostFrequentElement([1, 3, 3, 2, 1, 1, 4, 4, 4, 4, 5, 6, 6])); // 4


 
// 56. Berilgan ikki o'lchovli massivni (matritsa) 90 daraja o'ngga burang.

// function rotateMatrix(matrix) {
//     console.log(matrix[0]);
//     return matrix[0].map((val, ind) => matrix.map(item => item[ind]).reverse())
// }

// // Test case
// console.log(rotateMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ])); 
// // Output: [
// //   [7, 4, 1],
// //   [8, 5, 2],
// //   [9, 6, 3]
// // ]



// 57. Berilgan massivdagi faqat bir marta uchraydigan elementlarni qaytaring.

// function filterUniqueElements(arr) {
//     return arr.filter(val => arr.indexOf(val) == arr.lastIndexOf(val))
//  }
 
//  // Test case
//  console.log(filterUniqueElements([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 3, 5]


//  58. Berilgan sonlar qatorini k qadamga o'ngga rotatsiya qiling.

// function rotateArray(nums, k) {
//     for (let i = 0; i < k; i++) {
//         nums.unshift(nums.pop())
//     }
//     console.log(nums);
// }

// // Test case
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); 
// // Output: [5, 6, 7, 1, 2, 3, 4]