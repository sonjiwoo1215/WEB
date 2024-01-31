// todo 1. 필요한 전역변수 선언
var $circle=null; //? 원 선언
var railWidth=0; //? 레일 선언
var runStep=10; //? 움직임 수치 선언 (한번 움직일 때 갈 수 있는 거리)
// var $panel=null;
// var $btnStart=null;
// var $btnStop=null;
var timerID=0; //? interval변수 선언

$(document).ready(function(){
    // todo 2. 변수선언 함수 실행
    init();
    // todo 3. 이벤트 함수 실행
    initEvent();
});

// todo 2. 변수선언 함수 생성
function init(){
    $circle=$("#circle"); //? 움직임 대상 원 초기화
    railWidth=$("#rail").width(); //? 레일 너비 구하기
    // $btnStart=$("#btn_start");
    // $btnStop=$("#btn_stop");
    // $panel=$(".panel");
}

// todo 3. 이벤트 함수 생성
function initEvent(){
    // todo 3-1. #btn_start를 click 하였을 때 움직임 시작 함수 실행
    $("#btn_start").click(moveStart);
    // todo 3-2. #btn_stop을 click 하였을 때 멈추는 함수 실행
    $("#btn_stop").click(moveStop);
}

// todo 3-1 움직임 시작 함수 생성
function moveStart(){
    // todo 3-1-1 일정 시간마다 움직임 함수 실행
    // timerID=setInterval(moveCircle,1);
    if(timerID==0){
        timerID=setInterval(moveCircle,1); // 움직임이 실행되지 않았을때 셋인터벌을 담아라
    }
}

 // todo 3-1-1 움직임 함수 생성   
function moveCircle(){
// left값을 증가시켰다가 감소시켰다가..경계에 닿았을땐 반대로 움직여야함 (10만큼 움직이다가 -10만큼 움직이고 또..)
    // js에서는 포지션함수중에 right bottom은 취급하지않음
    var xpos=$circle.position().left;
    xpos += runStep;
    $circle.css("left",xpos);
    if(xpos>railWidth || xpos<0){
        // ! 10 -> -10 -> 10 -> -10...
        runStep*=-1;
    }
}

// todo 3-2 멈추는 함수 생성
function moveStop(){
    clearInterval(timerID);
}
