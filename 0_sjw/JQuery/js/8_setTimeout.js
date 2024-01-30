var count=0; //?점수 
var $score=null; //?점수를 출력할 공간
var $circle=null; //? click대상 (원)
var playState=true; //? 게임이 실행될 수 있는 조건
var $resetBtn=null; //?game reset할 button

$(document).ready(function(){
    init(); //? 선언함수 
    // 이 안에 매개변수는 위 선언한 이름과 같아야함 밑에 스코어카운드에 매개변수는 a,b,c,d로 지어도 됨
    scoreCount(count,$score,$circle,playState);
    $resetBtn.click(restart);
});
function init(){
    $score=$("#score");
    $circle=$("#circle");
    $resetBtn=$(".resetBtn");
}
function scoreCount(count,$score,$circle,playState){
    //? 1.click -> 점수를 출력
    $circle.click(function(){
    //? 2.게임가능상태 판별
    if(playState==true){
        count++;
        //? 3.점수를 올려주는 기능
        // text() 글자추출 ()안에 뭐쓰면 글자를 바꿔치는
        $score.text(count+"점");
    }
    });
    //? 4.5초시간 경과시 게임불가상태 변환 -> 종료
    // setTimeout(finction,timer) 시간이 경과되면 자기가 매개변수로 데리고 있는 함수를 한번만 실행해줌
    // 클릭밖에 쓰기
    setTimeout(function(){
        alert("게임종료");
        playState=false;
    },5000)
}
// todo 재시작 기능
function restart(){
    playState=true;
    count=0;
    $score.text(count+"점");
    scoreCount(count,$score,$circle,playState);
}