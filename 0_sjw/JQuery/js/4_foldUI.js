$(document).ready(function(){
    // *case.1
    imgAlignHori();
    imgAlignMix();
});
function imgAlignHori(){
    var img=$(".imgContainer img");
    var xpos=0;
    // ? 선언
    $(".alignHori").click(function(){
        // 이미지 개수 불러와라
        var imgLength=img.length;
        // 제이쿼리에서 너비를 구해오는 함수 width()
        var imgWidth=img.width();
        // 너비와 길이를 통해 각 이미지가 얼마만큼 움직여야하는지
        for (var i=0; i<imgLength; i++){
            // eq는 n번째를 의미함 nth랑 같은 역할 .eq앞에 대상에 뭘 쓰는지에 따라 다름
            var image=img.eq(i);
            // imgWidth 라고 따로 선언해서 해야함 150이라고 그대로 적지말기
            xpos= imgWidth * i;
            // console.log(xpos);
            image.css("left",xpos);
        }
    });
    $(".reset").click(function(){
        // 여기는 image가 아님 그건 위 함수 안에서 쓰는 변수
        img.css("left",0);
        });
}
// 012일때는 x만 바뀜 x축에서 012가 곱해져야함 x축은 012만 나와야함 어떻게 반복문안에서 012만 나오게 할까 찾고
// y는 012에서는 000 345에서는 111 678에서는 222 y에서 구해야할거는 000 111 222 찍히고 그 다음에 333 444 찍히는 규칙
// 줄이 바뀌는 규칙과 이미지 개수의 상관관계 
// function imgAlignMix(){
//     var img=$(".imgContainerMix img");
//     var xpos=0;
//     var ypos=0;
//     $(".alignMix").click(function(){
//         var imgLength=img.length/3;
//         var imgWidth=img.width();
//         var imgHeight=img.height();

//         for(var i=0; i<imgLength; i++){
//             var image=img.eq(i);
//             xpos=imgWidth*i;
//             ypos=;

//             image.css("left",xpos);
//             image.css("top",ypos);

//         }

//     });
//     $(".resetMix").click(function(){
//         img.css("left",0);
//         img.css("top",0);
//         })
// }

function imgAlignMix(){
    // !체계적으로 단계를 나눠서 적어서 생각하기
    var img=$(".imgContainerMix img");
    var xpos=0;
    var ypos=0;
    // ?선언
    $(".alignMix").click(function(){
        var imgLength=img.length;
        // 너비와 높이가 다르면 각각 해야하지만 같기 때문에 하나만 해도 됨
        var imgHeight=img.height();
        // ?2차선언

        for(var i=0; i<imgLength; i++){
            var image=img.eq(i);
            xpos=(i%3)*imgHeight; //?0,1,2,0,1,2 = 3을 기준으로 -> 0~8 3으로 나눈 나머지(0%3=0, 1%3=1, 2%3=2, 3%3=0)
            ypos=parseInt(i/3)*imgHeight; //? 0,0,0,1,1,1,2,2,2 =3을 기준으로 -> 0~8 나누기 몫 (0/3=0, 1/3=0, 2/3=0, 3/3=1, 4/3=1, 5/3=1, 6/3=2)
            image.css({
                "left":xpos,
                "top":ypos
            });
        }
    });
    $(".resetMix").click(function(){
        img.css({
            "left":0,
            "top":0
        });
    });
}
