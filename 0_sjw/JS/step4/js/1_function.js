/*
    ? function (함수)
    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.
*/
// *case.1 필요성
// // 1차 문제점 - 하나부터 열까지 손으로 쳐야함
// document.write("안녕, 방가와","<br>");
// document.write("안녕, 방가와","<br>");
// document.write("안녕, 방가와","<br>");

// // 2차 문제점 - 시작과 동시에 루프가 가동됨, 루프가 가동된 이후 횟수를 수정할 수 없다
// var comment = '안녕, 방가와';
// for(var i=0; i<3; i++){
//     document.write(comment,"<br>");
// }

function helloFunc(count){
    var comment = "안녕, 방가와";
    var count = prompt(count);
    for(var i=0; i<count; i++){    
        document.write(comment,"<br>");
    }
}
// *case.2 매개변수(parameter=인자)가 있는 함수 만들기
// ? 함수내 정해진 변수의 value(값)를 변경하여 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함
// 선언만 하고 초기화하지 않았을때 undefined상태
// num1,2는 고정인자 고정변수=갯수가 정해짐 2개 인자가 들어가 있으니 두 개를 넣어야함
function sumParam(num1,num2){
    var result = num1+num2;
    alert("두 수의 합은 = " + result);
}
// *case.3 arguments(가변-변할 수 있는 인자) - 매개변수의 자리가 없어도 있는 것처럼..개수가 고정이 아님
/*  
     ? arguments - 배열인듯 배열아닌 배열같은...
     * arguments 변수가 아니라 객체(object)형태 / 모든 함수 안에 사용하는 지역변수(함수안에 있는 변수)
     * arguments를 이용해서 함수 내 인수들을 참조할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다(괄호안에 넘1,2 안써도 안에 실행식을 가동시킬수 있다)
     * 단 arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다
     * 배열이 필요하다면 변환하여 사용할 수는 있다
*/
function sumAll(){

}