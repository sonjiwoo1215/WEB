var $ex2=null;
// 전역변수가 편하다고 죄다 쓰면 안됨 지역변수와 전역변수를 잘 이해하고 상황에 맞게 쓰기
// 10까지 수행했으면 여기에 10이 저장되어서 pre하게되면 9,8,7..이런식으로 됨
var count=0;

$(document).ready(function(){
    $ex2=$("#ex2");
    $ex2.html("<p>"+count+"-th. paragraph </P>");
    $("#ex2prepend").click(prependCount);
    $("#ex2append").click(appendCount);
});
function prependCount(){
    count--;
    // ex2=대상에다가 prepend를 하겠다
    $ex2.prepend("<p>"+count+"-th. paragraph </P>");
}
function appendCount(){
    count++;
    $ex2.append("<p>"+count+"-th. paragraph </P>");
}