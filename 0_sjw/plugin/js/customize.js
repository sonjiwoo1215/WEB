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

        // *adaptiveHeight
        adaptiveHeight:true, //? 적응형높이 높이값이 적응한다 지금은 이미지 사이즈가 다 같아서 차이가 안일어남
        adaptiveHeightSpeed:300, //? default:500
        
        video:true, //? default는 false video 활성화
        easing:'ease-in-out', //? default는 null
        responsive:true, //? default:true slider자체의 반응형을 끄냐 키냐인데 거의 건드릴 일이 없음
        captions:true, //? default:false img's에 title attr을 부여

        // *pager-indicator
        // hover는 모바일로 넘어가면 자동으로 터치로 바뀜 js click은 click임 원래 클릭이 터치를 대응할 수 없음
        // 터치스와이프 쓰려면 '제이쿼리모바일'을 봐야함 제이쿼리에서 드래그 어쩌고해도 모바일로 넘어가면 터치스와이프 안됨
        pager:true, //? default:true pager 켜기/끄기
        pagerType:'full',
        // pagerShortSeparator:'.',
        // pagerSelector:'.newPager'
        pagerCustom:'.customPager', //? default:none

        // * controler
        controls: true, //?default:true control button 켜기 끄기
        nextSelector:'.btn_next', //? 공간 생성 및 class 부여하면 뼈대
        prevSelector:'.btn_prev',
        // 공간을 잡아놓고 a를 공급받는것 이렇게 공급받으면 css를 자유자제로 넣을 수 있음
        nextText:'다음',
        prevText:'이전',

        // *auto
        auto:true, //? default:false slider자동전환 켜기
        autoControls:true, //?default:false 시각장애인 배려
        autoControlsCombine:true, //? default:false play/pause 
    });
});