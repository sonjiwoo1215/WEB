var logos=["logo_0.jpg","logo_1.jpg","logo_2.jpg","logo_3.jpg","logo_4.jpg","logo_5.jpg","logo_6.jpg","logo_7.jpg","logo_8.jpg"];
var currentIndex1=0;
var currentIndex2=0;
// var speed=0;
var $banner1=null;
var $banner2=null;

$banner1(document).ready(function(){
    init();
    swap($banner1,1000,currentIndex1);    
    swap($banner2,3000,currentIndex2);    
});
function init(){
    $banner1=$("#banner1");
    $banner2=$("#banner2");
}
function swap(selector,speed,targetIndex){
    setInterval(function(){
        targetIndex=Math.floor(Math.random()*logos.length);
        // 위에서 랜덤으로 나온 배열 방 번호가 밑에 꽂힘
        var imgName="images/"+logos[targetIndex];
        selector.attr("src",imgName);
    },speed)
}