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
     * arguments 변수가 아니라 객체(object)형태 / 모든 함수 안에서 사용하는 지역변수(함수안에 있는 변수)
     * arguments를 이용해서 함수 내 인수들을 참조할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다(괄호안에 넘1,2 안써도 안에 실행식을 가동시킬수 있다)
     * 단 arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다
     * 배열이 필요하다면 변환하여 사용할 수는 있다
*/
function sumAll(){
    console.log(typeof(arguments) + ':' + arguments.length);
    var willReturn =0;
    for(var i=0; i<arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(willReturn);
}
// 위 함수 실무형태로 바꾸면?
function sumAllEX(){
    var willReturn = 0;
    for(var i in arguments){ //? for in loop는 ie9이하 작업 불가
         willReturn += arguments[i];
    }
    return willReturn;
}
// *case.4 "자신의 이름"의 나이는 "자신의 나이"세 입니다. 를 arguments를 이용해 만들어보기
function showInfo(){
    console.log("0번방 = "+arguments[0]);
    console.log("1번방 = "+arguments[1]);
    alert(arguments[0]+"의 나이는 "+arguments[1]+"세 입니다.");
} 

/*
    ?return (리턴)
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 부라면, 리턴값은 함수 내부에서 처리한 결과를 함수 외부로 전달하기 위해 사용하는 출력 부.


    !ex.1 함수f(x)안에 넣는 값이 매개변수, 결과로 나오는 x*x 가 리턴값.
    // alert 에서 실행되면 alert으로 반환 실행한곳에서 반환 아예 A,B함수가 있는데 A함수에서 매개변수 받고 실행하고 리턴넣음 B에서 부르면 B함수로 바로 꽂아버림 연결시킴 (함수지향적<-> 객체지향적) 
        * function f(x) { return x * x; }
        * alert(f(3));

    !ex.2 alert에서 매개변수를 두개를 선언하면 추가된 매개변수를 무시한다.
    //*(매개변수가 초과 됐을 시) 또한 원래 함수의 매개변수보다 적게 입력하면 undefined를 출력한다.
        alert('기존매개변수', '추가매개변수');
        prompt('기존매개변수');
*/
// 이 함수를 실행하는 위치가 콘솔 콘솔로 바로 값을 던짐 콘솔에서 매개변수 넣으면 실시간으로 대응됨 alert에서 함수를 실행하면 콘솔창이 아니라 alert으로 날라가서 반환값 보여줌 alert(30);이나 마찬가지 ㅇㅇ 이 함수를 호출한 부분으로 return
function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result;
}
// break가 while안에 있기 때문에 while문만을 중단시킬 수 있음 return은 호출한 곳으로 값을 반환한다
// infiniteSum 함수 자체를 종료하고 싶을때 아무것도 담지 않은 return을 사용 / 리턴 뒤에 값이 있으면 함수도 종료고 값도 가져가라
function infiniteSum(){
    var sum = 0; //? sum변수에 0 선언 및 초기화
    var count = 1; //? count변수에 1 선언 및 초기화
    while(true){ //? 무한반복
        var value = parseInt(window.prompt("숫자만 입력해라.")); //? prompt로 입력받은 문자를 정수형변환 -> value변수에 담아라
        if(value ==0){ //? 입력받은 수가 0이면
            document.write("종료."); //? body에 종료메시지 출력
            return; //? 함수 즉시 종료 ( 반환할 값이 없는데 나감 가지고 나갈 애가 없으니까 함수 종료하고 나감 )
        }
        sum += value; //? if조건에 해당하지 않는다면 현재 sum변수에 입력된 value를 더해서 입력하라
        document.write(count + ". " + sum + "<br>"); //? body에 1. xx(sum) <br> 를 출력해라
        count++; //? 현재 count 변수를 증가시켜라
    }
    document.write("총 " + count + "번 실행함."); //? 함수 즉시 종료됨으로 인하여 실행 안됨
}
// todo.1 구구단 출력을 함수로 만들기
function printGugudan(numb){
    for (var i=2; i<=numb; i++){
        document.write(i+"단 출력","<br>");
        for(var m=1; m<=numb; m++){
            document.write(i+'x'+m+'='+(i*m),"<br>");
        }
        document.write("<br>");
    }
}
// todo.2 다음 실행구문으로 전달받은 매개변수로 계산하여 결과를 출력하는 함수 만들기
function calculator(op,numb1,numb2){
    var result='';
    switch(op){
        case "+":
            result=numb1+numb2;
            break;
        case "-":
            result=numb1-numb2;
            break;
        case "*":
            result=numb1*numb2;
            break;
        case "/":
            result=numb1/numb2;
            break;       
        default:
            result = "잘못된 값입니다";
            break;    
    }
    return result;
}
// add함수에서 계산 실행하고 리턴넣음 case+에서 add함수를 부르면 add에서 쓰인 리턴은 add가 실행된 위치(case+)로 값을 반환
// todo.3 위의 예제에 추가로 사칙연산 부분을 함수로 변환해서 보다 편하게 사용할 수 있게 만들기
function calculator2(op,numb1,numb2){
    var result='';
    switch(op){
        case "+":
            result=add(numb1,numb2);
            break;
        case "-":
            result=sub(numb1,numb2);
            break;
        case "*":
            result=mul(numb1,numb2);
            break;
        case "/":
            result=div(numb1,numb2);
            break;       
        default:
            result = "잘못된 값입니다";
            break;    
    }
    return result;
}
// 매개변수 바깥쪽()에 적은거랑 안에 실행식에 사용된 매개변수는 이름이 같아야함 하지만 (,)안에 매개변수는 자리일 뿐이니 이름을 a,b로 바꿔도 numb1,2는 각각 자리에 맞게 들어감
function add(a,b){
    addResult=a+b;
    return addResult;
    // return numb1+numb2;
}
function sub(numb1,numb2){
    addResult=numb1-numb2;
    return addResult;
}
function mul(numb1,numb2){
    addResult=numb1*numb2;
    return addResult;
}
function div(numb1,numb2){
    addResult=numb1/numb2;
    return addResult;
}
// *case.5 함수를 변수에 담기
function hello(name){
    console.log(name+"환영합니다.");
}
// 변수는 함수가 되었다 함수를();없이 그냥 쓰면 함수가 열림 그게 그냥 담긴 것 함수도 매개변수에 넣을 수 있음
// 변수가 중요 운반할 수 있는 좋은 수단임 배열안에는 함수가 못들어가지만 함수를 변수안에 넣고 변수를 배열에 넣는건 가능함
var func = hello;

// *case.6 매개변수 값으로 함수를 사용하기
function hi1(){
    console.log("Hello!");
}
function hi2(){
    console.log("안녕");
}
function execute(func){
    func();
}
// * case.7 button click시 매개변수 값으로 넘긴 함수 호출하기
function welcome(){
    alert("환영합니다. 반갑습니다.");
}
// click은 제이쿼리꺼
$(function(){
    $("#runEx7").click(welcome);
});
// *case.8 1초마다 매개변수 값으로 넘긴 익명함수 호출
// setInterval(실행될 함수,간격의 기준이 되는 시간) 정해진 시간만큼의 반복 1초는 1000 (m/s기준)
// 기명함수는 위 welcome같은거고 익명함수는 function(){}이렇게 생김 function이랑 ()사이에 띄어쓰기 없음
// 익명함수는 단발성임(한번쓰고 버림) 저장함수는 기명일 필요가 없음 함수지향적목적+보안문제 때문에 저장은 익명으로 하되 들어온 데이터를 꽂아주는 함수는 서버 내에 기명함수로 하자..
// 예를들어 스크롤위치 감지하는 함수를 만들었는데 이 역할이 여러페이지에 쓰인다면 기명함수 한번만 사용하고 버리면 익명함수 
function loopStart(){
    setInterval(function(){
        document.write("hi,hello?");
    },1000);
}
// *case.9 함수를 매개변수로 전달받아 반복호출하기
function callFunctionTenTimes(otherFunction){
    for(var i=0; i<10; i++){
        otherFunction();
    }
}
function hellojw(){
    document.write('hello jiwoo~~!!!!'+"<br>");
}
// *fin. returnValue로 함수를 사용하기
// 함수안에다 함수를 만들면 함수자체는 폐쇄적이라 갇혀있기 때문에 부를 수 있는 방법이 없어서 실행을 못함
// createHello를 실행하면 그 위치로 hello함수를 보냄 
// 리턴은 값이 뒤에 있으면 데리고 나가는거고 없으면 그냥 나가는것
function createHello(){
    function hello(user){
        document.write(user+' welcome! ');
    }
    return hello;
}
/* var result =  function hello(user){
    document.write(user+'welcome!');}
*/
// 리턴은 ch함수안에 있고 밑에서 ch함수실행식을 입력했음 리턴뒤에는 h함수 통째로가 붙어있음 그럼 ch함수가 실행된 곳으로 h함수를 보냄
var result = createHello();
