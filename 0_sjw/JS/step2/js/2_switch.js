
/*
?switch
switch는 조건식의 결과가 case에 걸리는 경우, 비교할때 사용한다.
( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/
function swithGrammar(){
    var input = Number(prompt('숫자를 입력하라','숫자'));
    // if문과 다르게 sitch는 ()안에 결론을 내면 안됨 예를들어 수를 2로 나눈것이 0일때...이런거말고 2로나눈나머지를 ()안에 넣고 스위치 안에 case에 0인지 1인지 적기
    // 스위치는 if와 다르게 안에 case를 계속 찾아내려감 그럼 속도가 느려짐 그래서 break를 각 case마다 넣어줘야함 이게 단점 
    switch(input%2){
        case 0:
            alert("짝수입니다.");
            break;
        case 1:
            alert("홀수입니다.");
            break;
        default:
            alert("숫자가 아닙니다.")
            break;
    }
}
//* case.2 Lotto과제를 switch로
function lotto(){
    var numbValue = window.prompt("입력하실번호는?");
    switch(numbValue){
        // prompt로 입력받은거니까 "로 문자열 처리 해줘야함
        case "1":
            alert("1등 10억!");
            break;
        case "2":
            alert("2등 5천만원!");
            break;     
        case "3":
           alert("3등 300만원!");
           break; 
        default:
            alert("낙첨되었습니다.");
            break;   
    }
}