// js문법
window.onload

// $ 제이쿼리의 seperator (제이쿼리문법을 알려주는 식별자) html문서자체를 document(브라우저)라 부름 제이쿼리문법을 쓰려면 이 안에 써야함
// 준비되었을때
$(document).ready(function(){
    // html에 모든 div들이 이 변수에 담김 제이쿼리는 css선택자랑 같은거 사용가능
    // !case.1
    var $divs = $("div");
    $divs.css("color","#f00");

    // js에서는 onclick 쓰거나 .on(click,function())
    // ? case.2
    $("#btnCheck").click(sayHello);

    // ?case.3
    $("#btnAddBorder").click(addBorder);

    // todo
    $("#btnTextChange").click(textChange);
});
// $(function(){

// });
// 함수밖에 만들고 저 안에 클릭되면 뜨게하는건 안에 쓰기 
// *case.2
function sayHello(){
    alert('hello');
}
// 스크립트로 넣는 css / 이렇게 직접 5px어쩌고 넣는것보다 css에서 클래스로 넣고 스크립트에서 클래스 갖고놀기
// *case.3
function addBorder(){
    // js는 document.body.getElement 어쩌고 해야함
    // 매개변수는 이름이랑 값 두개
    $("#panel").css("border","5px solid black");
}
// todo
function textChange(){
    // $("#panel2").css("font-size","50px");
    // $("#panel2").css("font-weight","900");
    // $("#panel2").css("color","yellow");
    
    // -가 안되는경우 cap방식으로 쓰기
    $("#panel2").css({
        "fontSize":"25px",
        "font-weight":"900",
        "color":"darkgreen"
    });
}