function solution(arr1, arr2) {
  let answer = [];
  let e1 = (e2 = 0);
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (e1 < arr1.length && e2 < arr2.length) {
    if (arr1[e1] === arr2[e2]) {
      answer.push(arr1[e1++]);
      e2++;
    } else if (arr1[e1] < arr2[e2]) e1++;
    else e2++;
  }

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
