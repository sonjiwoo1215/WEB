/*
    ?for
    *특정구문을 정해진 횟수 만큼 반복해야 할 경우 사용하는 반복문.
    실무사용의 예
    1. 게시판의 게시글 목록 불러올 때
    2. 구글 맵, 네이버 맵 등의 정보를 출력 할 때
    3. 메뉴의 항목(관리자제어가능한) 출력 할 때
    4. 갤러리의 이미지 목록을 출력 할 때
    5. os 등의 파일 탐색기의 파일 목록 출력 할 때...

    *루프
    1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    3. 참일경우 이하 구문 실행 > 4. 증감부 실행 > 5. 2단계

for (var index = 0; index < 10; index++) {
    console.log(index);
    
}
*/
// ! 단일 for문
// *case.1 이름을 10번 출력해보자.
// 1.초기화 2.판별식(실행해도되냐안되냐를 판단) 3.판별식이 참이면 안에 있는 애(document)를 실행시킴 4.++ 증감부 / 조건식에 어긋나면 즉각 break
function namePrint10(){
    var userName = "jiwoo";
    for (var i=1; i<=10; i++){
        document.write(i+'.'+userName+'<br>');
    }
}
// todo 이름을 1000번 출력해보자
function namePrint1000(){
    var userName="jiwoo";
    for (var i=1; i<=1000; i++){
        document.write(i+'.'+userName+'<br>');
    }
}
// *case.2 1000번 출력될 이름에서 홀수 번째만 출력하기
function namePrint500(){
    var userName="jiwoo";
    for (var i=1; i<=1000; i+=2){
        document.write(i+'.'+userName+'<br>');
    }
}
// todo. 1-10까지 출력되는 반복문을 여러가지로 직접 짜보기
function answer1(){
    for (var i=1; i<=10; i+=2){ //? 10보다 작거나 같을 때 (1~10)만 반복수행, 루프가 끝난 후 i에 2를 더함
        document.write(i+"<br>"); //? 1,3,5,7,9
        document.write((i+1)+"<br>"); //? 2,4,6,8,10
    }
}
function answer2(){
    for (var i=1; i<=10; i+=1){
        document.write(i+"<br>");
    }
}
function answer3(){
    for (var i=1; i<=10; i+=3){
        document.write(i+"<br>");
        document.write((i+1)+"<br>");
        document.write((i+2)+"<br>");
    }
}
function answer4(){
    for (var i=1; i<11; i+=1){
        document.write(i+"<br>");
    }
}
function answer5(){
    for (var i=10; i>=1; i--){
        document.write((11-i)+"<br>");
    }
}
// *case.3 자신이 좋아하는 과일 4개를 배열로 배치하고, alert으로 출력하기
function favorFruit(){
    var array = ["귤","사과","딸기","블루베리"]; //? array(배열)-> data들이 저장되는 공간
    //*["귤"] -> data[0] -> array[0]
    // index는 []안에 숫자의 명칭 let과 const는 var=변수임 암묵적인 룰 var은 상수변수 못건드림  
    // 진짜 중요 length 원래 길이를 의미하지만 우리한테는 개수
    for(var i=0; i<array.length; i++){
        alert(array[i]);
    }
}
// todo 지금까지 배웠던 js단원명을 배열을 통해 출력해보자
function arrayFor(){
    var data = ["변수","연산자","형변환","조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    for(var i=0; i<data.length; i++){
        document.write(i+". "+data[i]+"<br>");
    }
}

// todo 과제
function arrayHW1(){
    var data = ["변수","연산자","형변환","조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    var cou = ["첫번째 ","두번째 ","세번째 ","네번째 ","다섯번째 ","여섯번째 ","일곱번째 "];
    for(var i=0; i<data.length; i++){
        document.write(cou[i]+data[i]+"<br>");
    }
}
function arrayHW2(){
    var data = ["변수","연산자","형변환","조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    for(var i=0; i<data.length; i++){
        switch(i){
            case 0:
                document.write("첫번째 "+data[i]+"<br>");
            break;
            case 1:
                document.write("두번째 "+data[i]+"<br>");
            break;
            case 2:
                document.write("세번째 "+data[i]+"<br>");
            break;
            case 3:
                document.write("네번째 "+data[i]+"<br>");
            break;
            case 4:
                document.write("다섯번째 "+data[i]+"<br>");
            break;
            case 5:
                document.write("여섯번째 "+data[i]+"<br>");
            break;
            case 6:
                document.write("일곱번째 "+data[i]+"<br>");
            break;
    
        }
    }  
}
function arrayHW3(){
    var data = ["변수","연산자","형변환","조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    var cou = ["첫번째 ","두번째 ","세번째 ","네번째 ","다섯번째 ","여섯번째 ","일곱번째 "];
    for(var i=0; i<data.length; i++){
        switch(i){
            case 0:
                document.write(cou[i]+data[i]+"<br>");
            break;
            case 1:
                document.write(cou[i]+data[i]+"<br>");
            break;
            case 2:
                document.write(cou[i]+data[i]+"<br>");
            break;
            case 3:
                document.write(cou[i]+data[i]+"<br>");
            break;
            case 4:
                document.write(cou[i]+data[i]+"<br>");
            break;
            case 5:
                document.write(cou[i]+data[i]+"<br>");
            break;
            case 6:
                document.write(cou[i]+data[i]+"<br>");
            break;
    
        }
    }
}
// ! 
function arrayHW4(){
    var data = ["변수","연산자","형변환","조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    var cou = ["첫번째 ","두번째 ","세번째 ","네번째 ","다섯번째 ","여섯번째 ","일곱번째 "];
    for(var i=0; i<data.length; i++){
        switch(i){
            case i:
                document.write(cou[i]+data[i]+"<br>");
            break;
        }
    }
}
function arrayHW5(){
    var data = ["변수","연산자","형변환","조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    var swapNumb = '';
    for(var i=0; i<data.length; i++){
        swapNumb = i;
        switch(i){
            case 0:
                swapNumb = '첫';
            break;
            case 1:
                swapNumb = '두';
            break;
            case 2:
                swapNumb = '세';
            break;
            case 3:
                swapNumb = '네';
            break;
            case 4:
                swapNumb = '다섯';
            break;
            case 5:
                swapNumb = '여섯';
            break;
            case 6:
                swapNumb = '일곱';
            break;
        }
        document.write(swapNumb + "번째 내용 = "+data[i]+'<br>');
    }
}
function arrayHW6(){
    var data = ["변수","연산자","형변환","조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    var swapNumb = ["첫","두","세","네","다섯","여섯","일곱"];
    for(var i=0; i<data.length; i++){
        document.write(swapNumb[i] + "번째 내용 = "+data[i]+'<br>');
    }
}
// *case.4 continue
// break처럼 중단은 아님 받아쳐냄 docu보다 continue가 먼저 실행될테니 밑으로 못내려가게 위로쳐냄(필터역할 판매순 인기순..)
// continue가 돌다가 조건에서 벗어나면 빠져나가서 for밖에 있는 docum가 실행됨 동기방식이기때문에 for가 멈추지 않으면 밖에 docu는 실행되지 않음
function forContinue(){
    for(var i=0; i<=10; i++){
        continue;
        document.write(i+"<br>");
    }
    document.write("최종 i = "+i+"<br>");
}
// *case. 5-1 continue문제
// 필터의 의미가 강함 내가 제외시키고 싶은 대상이 있다면 거기에 컨티뉴
function continueEx(){
    let text = '';
    for(let i=0; i<10; i++){
        if(i==3){
            continue;
        }
        text=text+i;
    }
    console.log(text); //? 012456789
}
// *case. 5-2 continue문제
// if가 false가 되면 continue는 실행되지 않고 output+=i로 넘어감 출력되고 다시 반복 
function runContinue(){
    var output=0;
    for(var i=1; i<=10; i++){
        if(i%2 == 1){
            continue;
        }
        output = output + i; //? 2 4 6 8 10 
        console.log(output); //? 2 6 12 20 30
    }
}
// *case.5 break
function forBreak(){
    for(var i=1; i<=10; i++){
        break;
        document.write(i+"<br>");
    }
    document.write("최종 i = "+i+"<br>");
}
// *case.5-1 break문제
// 콘솔이 반복문 밖에 있으니 출력은 한번밖에 안됨
function breakEx(){
    var i=0; //? 0에서 1로 바뀜

    while(i<6){
        if(i == 3){
            break;
        }
        i=i+1;
    }
    console.log(i); //? i가 3이 되는 순간 while문이 죽고 얘가 실행됨
}
// *case.5-2 break 문제
function runBreak(){
    for(var i=0; true; i++){ //? true쓰면 for문 무한반복 가능 근데 무한반복은 while을 쓰는게 편함
        alert(i+'번째 반복문');
        if(!confirm('계속할래?')){
            break;
        }
    }
}
// ! 다중 for
// *case.1 반절 피라미드
function halfPyramid(){
    var star = ''
    for (var i=0; i<=10; i++){
        for(var j=0; j<i; j++){ //? jfor죽으면 다시 ifor실행되서 내려오고 jfor가 다시 실행이 됐을때 얘는 j는 0부터 다시 시작
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}
// 초기화 조건 실행 증감
// todo. 역반절피라미드
function reverseHalfPyramid(){
    var star = '';
    for (var i = 10; i >= 1; i--) {//? 1. ifor = 10~1 까지 수행
        for (var j = 0; j < i; j++) { //? jfor = j가 i보다 작을때 까지 반복 수행 10,9,8,7,6....
            star += '*';//? 변수 star에 반복생성된 만큼 *을 넣음.
        }
        star += '<br>';//? ifor 만큼 <br>을 변수 star에 넣음.
    }
    document.write(star);
}
// todo pyramid 만들기-과제
function pyramid(){
    var star='';
    // *반복시켜야되는 대상 수 - &nbsp;, *, <br> / 만큼의 for문을 작성 (for문의 개수 3)
    // ! 각 루프가 할당해야하는 대상을 정확히 지정하기 (i loop s lop e loop 이름 짓기 for루프를 어디안에다 어떻게 쓰느냐)
    // *한번 반복이 완성할 때 형태가 star변수에 어떻게 담기는지 예측하면서 작성
}