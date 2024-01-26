// !아이콘스 심볼 cdn / 2에서 함수 쪼개는 부분 공부
$(document).ready(function(){
    // *case.1 checkBox 만들기
    toggleCheck();
    // todo passwordComponent
    toggleTodo();
    // *case.2 
    tabUI();
});
// true false 왔다갔다하는 행위를 toggle
function toggleCheck(){
    // cdn 방식
    var $checkTarget=$(".material-icons.checkIco");
    var $checkLabel=$(".label.checkLabel");
    // 어떤 상황일때는 빠지고 어떤 상황일때는 들어와라라는걸 저장하는 곳
    var checkStatus=false;
    $checkLabel.click(function(){
        // 느낌표 위치 != 같지 않다 변수앞에 ! 붙으면 반대 / 이건 js방식임 제이쿼리는 토글이란 함수가 있음
        checkStatus= !checkStatus;
        if(checkStatus==true){
            // 제이쿼리는 직관적 제이쿼리에서 글자를 바꾸는 함수는 text ()안에 아무것도 없으면 앞에 대상의 글자를 가져와라 글자를 넣으면 바꿔끼워라
            $checkTarget.text("check_box");
        }
        else{
            $checkTarget.text("check_box_outline_blank");
        }
        
    });
}

function toggleTodo(){
    // password -> text(input type) : $(대상).attr("속성명-type","속성값-password");
    var $toggleTarget=$(".material-icons.toggleVisible");
    var $toggleInput=$("#userPW");
    var toggleStatus=false;

    $toggleTarget.click(function(){
        toggleStatus= !toggleStatus;
        if(toggleStatus==true){
            $toggleTarget.text("visibility");
            $toggleInput.attr("type","text");
        }
        else{
            $toggleTarget.text("visibility_off");
            $toggleInput.attr("type","password");
        }
    });
}

// data- : 사용자임의속성
function tabUI(){
    $(".tabMenu li").click(function(){
        // attr도 값을 가져올 수 있는데 이름(type)정도는 적어줘야함
        // 1,2,3 중 뭐가 클릭됐는지 알 수 있게 이벤트가 일어난 당사자가 필요 = this
        var activeTab= $(this).attr("data-tabNumb");
        console.log(activeTab);
        // .tabMenu li안에 있는 class(activated)를 다 제거하라
        $(".tabMenu li").removeClass("activated");
        $(this).addClass("activated");
    });
}