// 움직이는건 다 position(부드럽게 움직이려면)
// 제이쿼리는 리액트랑 뷰와 달리 서버랑 값을 주고받을 방법이 없음 그래서 에이적스가 도와줌 뒤쪽 연결은 리액트가 최고 ui관련해서는 제이쿼리가 커스터마이징하기 좋음
$(document).ready(function(){
    // *case.1 xAxis원움직이기
    $("#btnMoveCircle").click(moveCircle);

    // *case.2 x/yAxis 원움직이기
    $("#btnDetailMove").click(detailMoveCircle);

    // *case.3 방향키조작
    keyControl();
    
});
function moveCircle(){
    // ? 선언
    var $circle=$(".circleWrap .circle");
    var xpos=window.prompt("0부터 380이하의 숫자만 입력하시오"); //*prompt로 숫자입력되면 string

    // ? 처리
    xpos=parseInt(xpos);
    // 움직이거나 움직이지않거나 이 두 상황밖에 없으니 if하나 else하나면 가능
    if(xpos>=0 && xpos <=380){
        $circle.css("left",xpos);
        //? 출력
    }
    else{
        alert("잘못된 수치입니다.");
    }
}
function detailMoveCircle(){
    // ?선언
    var $circle=$(".circleDetail");
    // 인풋의 값을 가져오는 제이쿼리방법 val() 셀렉트일때는 옵션에 val을 넣어야함 
    // val()안에 뭐 넣으면 앞에있는대상의 value를 갈아치워라 지금 적용대상의 value를 바꿔라 없으면 그냥 가져와라
    var xpos=$("#xpos").val();
    var ypos=$("#ypos").val();

    // todo 처리
    xpos=parseInt(xpos);
    ypos=parseInt(ypos);

    // todo 출력
    // (xpos>=0 && ypos>=0 && xpos<=380 && ypos<=380)
    if((xpos>=0 && xpos <=380)&&(ypos>=0 && ypos <=380)){
        $circle.css({
            "left":xpos,
            "top":ypos
        });
    }
    else{
        alert("잘못된 수치입니다. 0 ~ 380이내로 입력하시오.")
    }
}
function KeyControl(){
    var $circle=$(".circleKey");
    //  한번 누를때마다 이동할 수 있는 거리 선언
    var range=50;
    var currentXpos=0;
    var currentYpos=0;
    // 이런경우는 익명함수가 편함 키보드 키를 눌렀다는 상황이 너무 많고 그럼 어떤 키를 눌렀는지 감지할 수 있어야함 그거 처리를 하는게 기명함수를 쓰면 너무 복잡함
    // 이벤트의 약자 e 키다운함수가 눌린 키를 e매개변수로 꽂아줌 키보드는 usb가 꽂아져있고 거길 통해 전기가 통하고 있음 키보드 배열 모양대로 구리가 깔려있음 고르게 1이라는 전류가 통하는 그 상태가 false상태
    // 키를 누르면 false가 true로 바뀌어야함 키가 눌리면 전기가 흐르다가 막히고 다른 곳(눌린곳)으로 흐름(전류상승) 바뀐 전기신호를 컴퓨터가 알아듣게 컴파일 해줌
    // 근데 우리가 못알아들어서 e.keyCode 씀
    $(document).keydown(function(e){
        console.log("입력한 keyCode : "+ typeof(e.keyCode) + e.keyCode);
        // 가시영역이 플러스 좌측상단
        // *w:87(ypos-위), d:68(xpos+오), s:83(ypos+), a:65(xpos-)
        switch(e.keyCode){
            case 87:
                currentYpos-=range;
                break;
            case 68:
                currentXpos+=range;
                break;
            case 83:
                currentYpos+=range;
                break;
            case 65:
                currentXpos-=range;
                break;
        }
        // if(currentXpos<=0 || currentXpos+50 >=380){
        //     $circle.css("left",0);
        // }
        // else{
        //     $circle.css("left",currentXpos);
        // }
        // if(currentYpos<=0 || currentYpos+50 >=380){
        //     $circle.css("top",0);
        // }
        // else{
        //     $circle.css("top",currentYpos);
        // }
        if(currentXpos<0){
            currentXpos=0;
        }
        if(currentXpos>380){
            currentXpos=380;
        }
        if(currentYpos<0){
            currentYpos=0;
        }
        if(currentYpos>380){
            currentYpos=380;
        }
        $circle.css("left",currentXpos);
        $circle.css("top",currentYpos);
    });
}