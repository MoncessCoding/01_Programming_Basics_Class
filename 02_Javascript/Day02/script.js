//? For loop
//index      0   1   2   3   4    5
var myArr = [23, 45, 62, 66, 88, 99,231, 445, 612, 666, 888, 999,7623, 4125, 61231232, 63243264, 8468, 699, 323, 1145, 23462, 6556, 12388, 1312399];

// console.log(myArr[3])
// console.log(myArr.length)


// for (var i = 0; i < myArr.length; i++){
//     console.log(myArr[i])
// }

//         012345678910 
var str = "Hello World" 
//Output dlroW olleH

var reversedStr = '';

console.log(str.length)  //11  - 1 = 10

for (var i = str.length-1; i >= 0; i-- ){
    reversedStr += str[i]             //  reversedStr = reversedStr + i
}

console.log(reversedStr)


//? While Loop
//             0   1 
var myArr02 = [23, 45, 62, 66, 88, 99,231, 445, 612, 666, 888, 999,7623, 4125, 61231232, 63243264, 8468, 699, 323, 1145, 23462, 6556, 12388, 1312399];

b = 0;

while(b < myArr02.length){
    console.log(myArr02[b])
    b++
}


//? break statement

var myArr3 = [1, 2, 3, 4, 5, 6]



for (var i = 0; i < myArr3.length; i++){

    if(myArr3[i] == 4){
        // console.log(myArr3[i])
        break
    }

    console.log(myArr3[i])
}


//? Continue statement

function multiplyUnlessNextIsDivisibleBy2 (arr){

    for (var i = 0; i < arr.length; i++){

        if(arr[i] % 2 == 0 || arr[i] == undefined){
            continue
        } else {
            arr[i] = arr[i] * arr[i]
        }

    }


}

var myArr4 = [1, 2, 3, 4, 5, 6]
console.log(myArr4)

multiplyUnlessNextIsDivisibleBy2(myArr4)

console.log("After function")
console.log(myArr4)


