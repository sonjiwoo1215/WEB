$(document).ready(function(){
    gallery(".1way");
    // todo case.1 매개변수 이용 - 클릭이 일어날 때 해당 열, 너비, 높이를 함수에 전달
    // todo case.2 매개변수를 사용하지 않고 한번에 해결하는 방법 (replace(); 함수 찾아적용)
});
function gallery(but){
    var $col=null; //열 
    var wid=0;//너비
    var hei=0; //높이
    $(but).click(function(){
        var imgLength=img.length;
        var imgHeight=img.height();

// ? 클릭한 버튼이 1열인지 2열인지 어떻게 알게하지..?
        for(var i=0; i<imgLength; i++){ //이미지 0~19 반복
            var image=img.eq(i); // i번째 이미지
            wid=1000/(i+1);
            hei=1000/(i+1);
            image.css({
                "width":wid,
                "height":hei
            });
        }
    });
    $col=$(this);
}
// 0~19 반복
// 1열 너비1000 높이1000 1개 / 1000/1 / 0번째이미지 1000
// 2열 너비500 높이500 2개 / 1000/2 / 01번째 이미지 500
// 3열 너비333 높이333 3개 / 1000/3 / 012번째 이미지 333
// 4열 너비250 높이250 4개 / 1000/4 / 0123번째 이미지 250