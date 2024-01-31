// todo 1. 필요한 전역변수 선언
var $circle=null; 
var $panel=null;
var $btnStart=null;
var $btnStop=null;
var timerID=0;

$(document).ready(function(){
    // todo 2. 변수선언 함수 실행
    init();
    // todo 3. 이벤트 함수 실행
    initEvent();
});

// todo 2. 변수선언 함수 생성
function init(){
    $circle=$("#circle");
    $btnStart=$("#btn_start");
    $btnStop=$("#btn_stop");
    $panel=$(".panel");
}

// todo 3. 이벤트 함수 생성
function initEvent(){
    // todo 3-1. #btn_start를 click 하였을 때 움직임 시작 함수 실행
    $btnStart.click(moveStart);
    // todo 3-2. #btn_stop을 click 하였을 때 멈추는 함수 실행
    $btnStop.click(moveStop);
}

// todo 3-1 움직임 시작 함수 생성
function moveStart(){
    // todo 3-1-1 일정 시간마다 움직임 함수 실행
    timerID=setInterval(moveCircle,5);
}

 // todo 3-1-1 움직임 함수 생성   
function moveCircle(){
// left값을 증가시켰다가 감소시켰다가..
    $circle.css({
        left: Math.random()*($panel.width()-$circle.width())
    })
}

// todo 3-2 멈추는 함수 생성
function moveStop(){
    clearInterval(timerID);
}
