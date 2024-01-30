var count=0;
var $score=null;
var $circle=null; 
var playState=true;
var $btnStart=null; //? 게임시작 버튼
var $panel=null; //? frame 
var timerID=0; //?

$(document).ready(function(){
    init();
    initEvent();
});
function init(){
    $score=$("#score");
    $circle=$("#circle");
    $btnStart=$("#btn_start");
    $panel=$(".panel");
}
function initEvent(){
    $btnStart.click(gameStart);
    $circle.click(scoreCount);
}
// ? 게임시작 함수
// setinterval 정해진 시간동안 반복
function gameStart(){
    playState=true;
    if(playState==true){
        // 게임시작과 동시에 카운트가 들어가니까 종료함수도 동시에 실행
        gameEnd();
        timerID=setInterval(moveCircle,500);
    }
}
// ! random method: 매개변수가 없다 ()안에 뭘 넣을 수 없다 리턴은 이 함수가 실행된 위치로 값을 반환해준다 0과 1사이니까 0,1은 제외
// ! 랜덤함수 뒤에 곱해지는 숫자가 limit가 되는것 우리는 지금 그 숫자에 frame값 넣으면 됨 floor ceil / px에 소수점은 원래 안됨
// ? 원 움직이는 함수
function moveCircle(){
    $circle.css({
        left: Math.floor(Math.random()*($panel.width()-$circle.width())),
        top:Math.floor(Math.random()*($panel.height()-$circle.height()))
    })
}
// ? 점수집계함수
function scoreCount(){

}
// ? 게임종료 함수
// 이미 실행되서 움직이고 있는 함수는 중간에 가져올 수가 없음 그래서 셋인터벌을 변수에 담고 그 변수를 매개변수에 담아 끌어오기
function gameEnd(){
    // setInterval취소
    clearInterval(timerID);
}
