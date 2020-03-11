const map = (arr, func) => {
  const result = [];
  //loop through array
  for(let i = 0; i < arr.length; i++){
    //apply the function to each item in array
    result[i] = func(arr[i]);
  }
  //return modified array
  return result;
};

const add5 = val => val + 5;

module.exports = {
  map,
  add5
};
