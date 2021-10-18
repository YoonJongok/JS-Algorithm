function solution(s) {
  let answer = "";
  let count = 1;
  s = s + " ";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) count++;
    else {
      //When s[i] and s[i+1] are different element, add the s[i] to the answer
      answer += s[i];
      //However, Add the String(count), if the count is more than 1
      if (count > 1) answer += String(count);
      count = 1;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
