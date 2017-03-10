'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
 return arr.reduce(function (acc, val){
   return acc + val;
 }, base)
  },

  someObjsContainProp: (arr, prop) => {
    return arr.some(function (e){
      return e.hasOwnProperty(prop);
    });
  },

  convertNameArrayToObject: (arr) => {
    return arr.map(function (e){
      let newObj = {};
      newObj.first = e[0];
      newObj.last = e[1];
      return newObj;
    });
  },

  objContainsProp: (arr, prop) => {
    return arr.every(function(e){
      return e.hasOwnProperty(prop);
    })
  },

  stringMatch: (arr, str) => {
    return arr.filter(function (e){
      return e.includes(str);
    });
}
}
