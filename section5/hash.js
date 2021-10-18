function solution(s) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  let candidates = new Map();
  for (let x of s) {
    if (candidates.has(x)) candidates.set(x, candidates.get(x) + 1);
    else candidates.set(x, 1);
  }
  for (let [key, value] of candidates) {
    if (value > max) {
      max = value;
      answer = key;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
