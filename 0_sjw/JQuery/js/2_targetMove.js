// 움직이는건 다 position(부드럽게 움직이려면)
$(document).ready(function(){
    // #case.1 xAxis원움직이기
    $("#btnMoveCircle").click(moveCircle);
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