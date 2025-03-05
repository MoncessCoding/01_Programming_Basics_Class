//                 3
var myArr = [1,2,5,6,7,8]

// console.log(myArr)

// myArr.push(9)
// console.log(myArr)

// myArr[3] = 12;

// console.log(myArr)


// myArr.pop()
// console.log(myArr)

// console.log(myArr[4])


var myArr01 = [1,2,5,6,7,8]

// var myArr01Copy = myArr01

// console.log(myArr01Copy)

//! Spread operator
var myArr02Copy = [... myArr01]
console.log(myArr02Copy)

//                  0       1       2           3        4
var nameArray = ['Alice', 'Bob', 'Charlie', 'Davina', 'Erek'];

// console.log(nameArray[4])

console.log(nameArray.length) // 4   5

// console.log(nameArray[nameArray.length - 1]);

//! Array Methods
//? concat joins two or more arrays together
var newArr = myArr01.concat(nameArray)
// console.log(newArr)

//? removes item from the start of array and returns
newArr.shift()
// console.log(newArr)

//! slice() 

//                         inclusive, exclusive
var newArr01 = nameArray.slice(0, 3)
// console.log(newArr01)

//! splice()
var arrSplice = [1, 5, 3, 4, 2, 1, 6, 8, 10, 12, 15]

var x = arrSplice.splice(2, 6)
console.log(x)


var sampleArray = [-2, 0, 2, 3, 5, 7, 8, 9, 13, 14] 

// for (var i = 0; i < sampleArray.length; i++) {
//     if (sampleArray[i] % 2 == 0) { 
//         sampleArray[i] = sampleArray[i] - 1;
//     }
// }

for (var i = 0; i < sampleArray.length; i++) {
    sampleArray[i] = sampleArray[i] * 2;
}
console.log(sampleArray)


for (var i = 0; i < sampleArray.length;) {

    sampleArray[i] = sampleArray[i] * 2;
    i++; 
}

console.log(sampleArray)


