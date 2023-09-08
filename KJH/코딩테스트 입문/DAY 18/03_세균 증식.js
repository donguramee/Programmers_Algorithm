// DAY 18
// 세균 증식

// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.



function solution(n, t) {
    let answer = n;
    
    for(let i =1; i<= t; i++){
        answer = answer * 2
    }
    
    return answer;
}

/*
테스트 1 〉	통과 (0.05ms, 33.4MB)
테스트 2 〉	통과 (0.03ms, 33.4MB)
테스트 3 〉	통과 (0.03ms, 33.5MB)
테스트 4 〉	통과 (0.04ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.5MB)
테스트 6 〉	통과 (0.04ms, 33.5MB)
테스트 7 〉	통과 (0.04ms, 33.5MB)
테스트 8 〉	통과 (0.06ms, 33.4MB)
*/