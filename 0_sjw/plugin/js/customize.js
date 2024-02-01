$(document).ready(function(){
    $(".slider").bxSlider({
        mode:'horizontal', //? horizontal(수평방향저장), vertical(수직방향저장), fade(사라지고나서)
        speed: 500, //? 한 장이 전환될 때 걸리는 시간
        // 플렉스와 같은 문제 옵션이 많은데 a를 키려면 b를 꺼야하는.. 안끄고 다 키면 에러남
        // 티커를 켜버리니까 스피드가 4장이 지나갈때 0.5초로 변환이 됨
        ticker: false, //? ui명칭 증권가에서 증식표시하는 흘러가는 ui를 ticker라고 함 컨트롤러와 상관없이 슬라이더 흘라가게 함(불리언형태 t or f)
        tickerHover:false, //?마우스 올리면 중지

        // *startSlide와 randomStart는 충돌
        startSlide:0,  //? 두번째 이미지를 무조건 처음으로 활성화시켜줌 랜덤쓸때는 디폴트인 0으로 두거나 아예 안쓰기
        randomStart:false, //? 노출순서 랜덤

        // *infiniteLoop, hideControlOnEnd 충돌
        infiniteLoop:true, //? 버튼은 보이지만 처음에 이전을 누르거나 마지막에 다음을 누를때 안움직임 디폴트는 트루
        hideControlOnEnd:false, //? 첫장일땐 이전없고 막장일땐 다음이 없음 디폴트는 펄스
    });
});