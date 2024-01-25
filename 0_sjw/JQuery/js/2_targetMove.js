// 움직이는건 다 position(부드럽게 움직이려면)
// 제이쿼리는 리액트랑 뷰와 달리 서버랑 값을 주고받을 방법이 없음 그래서 에이적스가 도와줌 뒤쪽 연결은 리액트가 최고 ui관련해서는 제이쿼리가 커스터마이징하기 좋음
$(document).ready(function(){
    // *case.1 xAxis원움직이기
    $("#btnMoveCircle").click(moveCircle);

    // *case.2 x/yAxis 원움직이기
    $("#btnDetailMove").click(detailMoveCircle);
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