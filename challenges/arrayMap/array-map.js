const map = (arr, func) => {
    const result = []
    for(let i = 0; i < arr.length; i++){
        result[i] = func(arr[i])
    }
    return result;
};

const add5 = val => val + 5;

module.exports = {
    map,
    add5
}