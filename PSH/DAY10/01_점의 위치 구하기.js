function solution(dot) {
    var answer = 0;
    let x = dot[0];
    let y = dot[1];
    
    switch(true){
        case x > 0 && y > 0 :
            return 1;
        case x < 0 && y > 0 :
            return 2;
        case x < 0 && y < 0 :
            return 3;
        case x > 0 && y < 0 :
            return 4;
    }
    return answer;
}

// 테스트 1 〉	통과 (0.04ms, 33.4MB)
// 테스트 2 〉	통과 (0.03ms, 33.6MB)
// 테스트 3 〉	통과 (0.05ms, 33.6MB)
// 테스트 4 〉	통과 (0.04ms, 33.5MB)
// 테스트 5 〉	통과 (0.03ms, 33.5MB)
// 테스트 6 〉	통과 (0.06ms, 33.5MB)
// 테스트 7 〉	통과 (0.07ms, 33.4MB)
// 테스트 8 〉	통과 (0.06ms, 33.5MB)
// 테스트 9 〉	통과 (0.03ms, 33.5MB)
// 테스트 10 〉	통과 (0.03ms, 33.5MB)
// 테스트 11 〉	통과 (0.03ms, 33.5MB)
// 테스트 12 〉	통과 (0.03ms, 33.5MB)
// 테스트 13 〉	통과 (0.06ms, 33.5MB)
// 테스트 14 〉	통과 (0.04ms, 33.3MB)
// 테스트 15 〉	통과 (0.05ms, 33.4MB)
// 테스트 16 〉	통과 (0.03ms, 33.5MB)