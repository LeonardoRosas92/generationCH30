const numbers = [1,2,3,4];
const getValues = (arr) => {
    const sum = arr.reduce((a, b) => a + b, 0)
    const prod = arr.reduce((a, b) => a * b, 1)
    return [sum,prod];
};

console.log(getValues(numbers))