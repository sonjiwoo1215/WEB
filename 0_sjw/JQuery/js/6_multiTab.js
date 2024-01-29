// ! 값을 넣어서 어떻게 해결했는지의 흐름을 보면 오늘 과제랑 비슷함
$(document).ready(function(){
    // 실행식만 써주면 하나의 함수로 댑스메뉴에 계속 적용가능
    tabMenu("#tabMenuDepth0 li");
    tabMenu("#tabMenuDepth1 li");
    tabMenu("#tabMenuDepth2 li");
});
function tabMenu(tabNumb){
    var $selectMenu=null; //? null-element(우리 기준에선 tag들)를 넣을 예정
    $(tabNumb).click(function(){
        // ? closureEffect(function)-클로저함수 = 함수가 실행된 이후 내부값을 외부로 보내 사라지지 않게함
        if($selectMenu != null){ //? = 대상이 담긴 상태(#tabMenuDepth0 li중 하나)
            $selectMenu.removeClass("activated");
        }
        // 이벤트가 일어난 당사자를 집는건 this
        $selectMenu=$(this);
        // 전 코드랑 비교하기/  전처럼 다 지우는게 아니라 클릭이 일어난 대상을 기억하게 하는것 댑스를 파고들땐 이렇게 해야함 if안에 담는게 아니라 밖에 selectMenu를 넣고 클릭이 일어나더라도 이전 상태를 보존할 수 있음 
        $selectMenu.addClass("activated");
    });
}