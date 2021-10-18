function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  //   let n = Math.floor(s.length / 2);
  //   for (let i = 0; i < s; i++) {
  //     if (s[i] !== s[n - i - 1]) answer = "NO";
  //   }

  if (s.split("").reverse().join("") !== s) answer = "NO";
  return answer;
}

let str = "gooG";
console.log(solution(str));
