/*
    조건문
    
    실무사용의 예
    1. 로그인 시 아이디와 패스워드가 서버에 저장된 정보와 같은지 비교 후 같다면 승인, 아니라면 오류메세지를 띄운다.
    2. 게임같은 경우 자신이 공격을 했을 때 상대방을 타격 했는지 여부를 판별 할 수 있다.
    3. 경품추첨시 유저가 뽑은 번호에 따라 경품 당첨 여부를 따질 수 있다.
    4. 삭제작업 수행시 사용자가 yes를 눌렀을 때와 no 를 눌렀을 때 수행할지 말지를 결정 할 수있다.
    5. slide 같은 ui component 의 좌, 우 방향으로 최대치로 이동 하였는지 판별 할 수있다.
	if(273 < 100){
		//표현식 "273 < 100" 이 참일때 실행 = 거짓이기때문에 당연히 실행안함.
		 alert('273<100=>true');
	}
	alert('종료');
    
*/

// *case.1 현재 시각이 오후인가 오전인가
function amORpm(){
    // object 객체 이만한걸 가져다 놓고 찾아서 씀 밑에 date 연월일시분초 다 땡겨움 / new 생성하다
    // 한번에 여러개를 동시에 실행할 수 없다 생성과 호출을 따로해야함
    var date = new Date();
    var hour = date.getHours();
    // 0 자정 12 정오 (24시간제) 비교하는 대상이 하나면 상황도 하나여야 함(if두개로 쪼개지말고 else쓰거나 else if (hour >= 12))
    if (hour < 12){
        alert('오전입니다.');
    }
    else{
        alert('오후입니다.');
    }
}
// *case.2 말일인가 아닌가
// 일자는 date 월화수목금토일은 day
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    if(day<30){
        alert('아직 말일이 아닙니다.');
    }
    else{
        alert('말일입니다.');
    }
}
function lastDayEx(){
    const rootDiv = document.getElementById("root");

    const getLastDayFromMonth = (month = 1) =>{
        return new Date(2024,month,0).getDate();
    }
    for(let i = 1; i <= 12; i++){
        const p = document.createElement("p");
        const lastDay = getLastDayFromMonth(i);
        p.innerText = `2024년 ${i}월 ${lastDay}일 마지막 날은 ${lastDay}.`;
        rootDiv.appendChild(p);
    }
}
// todo 현재 시각이 본인에게 아침 / 점심 / 저녁 먹을 시간? 알려주는 조건문 짜기
function mealTime(){
    //?선언부 - 시간정보가져와서 시간추출하기
    var date = new Date();
    var time = date.getHours();
    //? 세끼 시간을 if문 짜기 / alert(xx먹을시간);
    if(time<12){
        alert('아침 먹을시간');
    }
    else if(time<18){
        alert('점심 먹을시간');
    }
    else{
        alert('저녁 먹을시간');
    }
}
// *case.3 양,음수 판별해보기
// string일때 연산은 안되는데 비교는 됨
function numbJudgement(){
    var numb = prompt('숫자를 입력하세요','양,음수 상관없음');
    console.log(typeof(numb)+ ' = ' + numb);
    if(numb > 0){
        alert('양수입니다');
    }
    else if(numb<0){
        alert('음수입니다');
    }
    else{
        alert('입력된 데이터가 0이거나 올바르지 않습니다');
    }
}
// todo 홀수 짝수 판별

function oddOrEven(){
    var numb = Number(prompt('숫자를 입력하세요','홀,짝수 상관없음')%2);
    console.log(typeof(numb)+ ' = ' + numb);
    if(numb == 0){
        alert('짝수');
    }
    else if(numb  == 1){
        alert('홀수');
    }
    else{
        alert('입력된 데이터가 0이거나 올바르지 않습니다');
    }

}
// *case.4 다음 세 과목의 점수를 입력받고 평균을 구한 후 수,우,미,양,가를 출력하라
function avgScore(){

    var KoreanScore = prompt('국어점수를 입력하시오');
    var englishScore = prompt('영어점수를 입력하시오');
    var mathScore = prompt('수학점수를 입력하시오');
    var avg = (Number(KoreanScore)+Number(englishScore)+Number(mathScore)) / 3;
    if(avg > 100 || avg < 0){
        alert('점수 똑바로 입력하라');
    }
    else if(avg >= 90){
        alert('평균'+ avg + '점 \n' + '수 입니다. 훌륭한데?');
    }
    else if(avg >= 80){
        alert('평균'+ avg + '점 \n' + '우 입니다. 우수한데?');
    }
    else if(avg >= 70){
        alert('평균'+ avg + '점 \n' + '우 입니다. 괜찮은데?');
    }
    else if(avg >= 60){
        alert('평균'+ avg + '점 \n' + '우 입니다. 잘못됐는데?');
    }
    else{
        alert('평균'+ avg + '점 \n' + '우 입니다. 맞겠는데?');
    }

}