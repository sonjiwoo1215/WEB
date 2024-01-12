/*
    ? 형변환
    * JS - "10" + "10" = 1010 / 사람 - "10" + "10" = 20 - 이런 인식차를 해결하기위함.
    ! 암시적 형변환 - js Engine이 자동으로 변환.  /  명시적 형변환 - 개발자가 직접 지정 변환.

    1. 10 + "10" = 1010
    2. true + 1 = 2 
    3. false + "10" = 010
    ? 암시적 형변환 CASE
    * 1. 숫자 + 문자 = 문자.
    * 2. 불린 + 숫자 = 숫자.
    * 3. 불린 + 문자 = 문자.
    
    ? 명시적 형변환
    * method 나 lib Core func를 이용하여 강제로 숫자 -> 문자 로 변환.
*/
// *case.1 자신의 나이를 입력받고 20을 더한 값 출력
// 변수2개 사용 age += 20이런식으로 age하나로만 가면 즉각적으로 20을 더하라는 얘긴데 그럼 문제가 생김 좌측 age는 대입을 담당하는 애인데 거기다 parseInt할 수는 없으니.
// result변수 추가로 만들고 실행해도 parseInt형변환 안하면 문제생김
function agePlus(){
    var age = window.prompt('나이입력');  // ? 임시로 입력받는법 prompt함수는 문자열로
    var result = parseInt(age) + 20;
    console.log(result);
}
// ! case 2,3,4 중요
// *case.2 강제 숫자 -> 문자형 변환
function forcedString(){
    var a = '30';
    var result = 1 + a + 10;
    console.log(result);
}
// *case.3  강제 불린 -> 숫자형 변환
function forcedNumber(){
    var result = 2 + true;
    console.log(result);
} 
// *case.4 강제불린 -> 문자형 변환
function forcedString2(){
    var a = '2' + true;
    console.log(a);
}
// *case.5 test1에 들어있는 숫자를 문자로 명시적 형변환
    // ? String - 전역함수 > 옛날부터 있던 애들(앞자가 대문자)
    // *String(value); - 문자형으로 변환
    
    // ? .toString() - 꼬리함수 > 나중에 태어난 애들(cap방식의 문자표현)
    // * Number.toString(); - 문자형(진수)변환
    
    // ? .toFixed()
    // * Number.toFixed() - 실수문자형 변환 - 소수점자리 반올림

    // 옵션 선택이 없다 강제로 문자로만 변환만 가능
function stringNumb(){
    var test1 = 15;
    console.log('변환 전 : ' + typeof(test1) + ' = ' + test1);
    var result = String(test1);
    console.log('변환 후 : ' + typeof(result) + ' = ' + result);
}
    // toString(16) 16진수로 변환가능
function stringtoNumb(){
    var test1 = 15;
    var result = test1.toString();
    console.log(typeof(result) + ' = ' + result);
}
// *case.6 test에 들어있는 문자를 숫자로 형변환.
/*
    ? Number
    * Number(value); - 정수, 실수 구분없이 형변환.
    ? parse
    * 1. parseInt(value); - 정수형변환
    * 2. parseFloat(value); - 실수형변환 
*/
function numbString(){
    var test = '300.15625';
    console.log('변환 전 : ' + typeof(test) + ' = ' + test);
    var result = Number(test) + 10;
    console.log('변환 후 : ' + typeof(result) + ' = ' + result);
}
// todo. 1 변수 test에 들어있는 숫자 100을 문자형으로 변형. result로 출력.
// ! typeof 검수 필요. - console로 출력시

// todo. -1 암시적형변환 이용해보기
function todo1(){
    var test = 100;
    console.log('변환 전 : ' + typeof(test) + ' = ' + test);
    var result = test + '';
    console.log('변환 후 : ' + typeof(result) + ' = ' + result);
}
// todo. -2 String 이용해보기
function todo2(){
    var test = 100;
    console.log('변환 전 : ' + typeof(test) + ' = ' + test);
    var result = String(test);
    console.log('변환 후 : ' + typeof(result) + ' = ' + result);
}
// todo. -3 toString 이용해보기
function todo3(){
    var test = 100;
    console.log('변환 전 : ' + typeof(test) + ' = ' + test);
    var result = test.toString();
    console.log('변환 후 : ' + typeof(result) + ' = ' + result);
}

// todo.2 문자 형을 숫자 형으로 변환하여 연산이 가능하게 만들기.

// todo. -1 parse 이용해보기
function todo4(){
    var test = '100.51';
    console.log('변환 전 : ' + typeof(test) + ' = ' + test);
    var result = parseInt(test) + 150 + parseInt('20');
    console.log('변환 후 : ' + typeof(result) + ' = ' + result);
}
// todo. -2 Number 이용해보기
function todo5(){
    var test = '100.51';
    console.log('변환 전 : ' + typeof(test) + ' = ' + test);
    var result = Number(test) + 150 + Number('20');
    console.log('변환 후 : ' + typeof(result) + ' = ' + result);
}