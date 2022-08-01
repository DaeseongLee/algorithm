const n = 5;
const k = 3;
const input = [1, 2, 3, 4, 5];
const array = [];
const result = [];
const getCombination = function (start, array) {
    if (array.length === k) {
        result.push([...array])
        return;
    }

    for (let i = start; i < n; i++){
        array.push(input[i])
        getCombination(i + 1, array);
        array.pop();
    }
    return;
}

const main = function () {
    getCombination(0, array);
}
main()
console.log(result)