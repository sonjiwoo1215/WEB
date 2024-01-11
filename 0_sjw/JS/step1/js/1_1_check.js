// runalert있는 기명함수 안에 alert이라는 라이브러리 함수를 넣음
function runAlert(){
    alert("hello?");
}
// write도 라이브러리 함수 alert랑 사용하는 방식이 각각 다름 대상이 필요 .은 '~에' 라는 뜻
function runWrite(){
    document.write('hi'+'<br>'+'js...!');
}
// 디버깅 3가지 방법(alert write log) 중 가장 많이 사용
function runLog(){
    console.log('hi? js!');
}