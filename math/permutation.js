const array = [1, 2, 3];
const result = [];
const print = function (array) {
  result.push([...array]);
}

const getPermutation = function (n, r, depth) {
  if (r === depth) {
    print(array);
    return
  }

  for (let i = depth; i < n; i++) {
    [array[i], array[depth]] = [array[depth], array[i]];
    getPermutation(n, r, depth + 1);
    [array[i], array[depth]] = [array[depth], array[i]];
  }
  return;
}

const main = function () {
  getPermutation(3, 3, 0);
}
main()
console.log(result);


// const getCombinations = function (arr, selectNumber) {
//     const results = [];
//     if (selectNumber === 1) return arr.map((el) => [el]); 

//     arr.forEach((fixed, index, origin) => {
//         const rest = origin.slice(index + 1); 
//         const combinations = getCombinations(rest, selectNumber - 1); 

//         const attached = combinations.map((el) => [fixed, ...el]); 
//         results.push(...attached); 
//     });

//     return results; // 결과 담긴 results return
// }


// console.log(getCombinations([1, 2, 3, 4], 3));


//  const getPermutations = function (arr, selectNumber) {
//     const results = [];
//     if (selectNumber === 1) return arr.map((el) => [el]); 

//      arr.forEach((fixed, index, origin) => {
        
//       const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
      
//       const permutations = getPermutations(rest, selectNumber - 1); 
      
//       const attached = permutations.map((el) => [fixed, ...el]); 
      
//       results.push(...attached); 
      
//     });

//     return results; // 결과 담긴 results return
// }

// console.log(getPermutations([1, 2, 3, 4], 3));