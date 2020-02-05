// TASK 0

// var map = function(fn,array){
//     var array2 = [];
//     for (var i = 0; i < array.length; i++) {
//         array2[i]= fn(array[i]);
        
//     }
//     return array2;
// }

// function minus(x) { return x - x; }
// console.log(map(minus, [1, 2, 3, 4])); 
// function plas(y) {return y+y;}
// console.log(map(plas, [1, 2, 3, 4, 5,6]));
// function multiply(z) {return z*10;}
// console.log(map(multiply, [10, 11, 0, 5]));

// *************************************************

// TASK1

// var sequence = function(start, step){
//     start -=step;
    
//     return function() {
//          return start += step;
//         }
// }

// var generator = sequence(1,5);
// console.log(generator());
// console.log(generator());
//  var generator01 = sequence(-1,-5);
//  console.log(generator01());
//  console.log(generator01());

//  *************************************************

//TASK2

// var take = function(gen, x){
//     var array = [];
//     for(var i = 0; i<x;i++){
//         array[i]=gen();
//     }
// return array;

// }
// var generator=sequence(0,2);
// console.log(take(generator, 10));

// *************************************************

//TASK3

// var characters = [
//     { "name": "barney", "age": 36 },
//     { "name": "fred", "age": 40 }
//    ];
//    var pluck = function(massObj, field  ){
//        var array=[];
//        for(var i = 0; i< massObj.length; i++){
//            array.push(massObj[i][field]);
//        }
//        return array;

//    }
// console.log(pluck(characters, "name"));
// console.log(pluck(characters, "age"));
