function solution(arr1, arr2) {
  let answer = [];
  let e1 = (e2 = 0);
  while (e1 < arr1.length && e2 < arr2.length) {
    if (arr1[e1] <= arr2[e2]) answer.push(arr1[e1++]);
    else answer.push(arr2[e2++]);
  }

  while (e1 < arr1.length) answer.push(arr1[e1++]);

  while (e2 < arr2.length) answer.push(arr2[e2++]);

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
