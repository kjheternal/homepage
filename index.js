/*
    -> 문제 86 ~ 90

    // 86-87번
    1.4단 화면 그리기 상단,좌,우,하
    2.div  absolute 로 가운데에 팝업 영역 만들기
    3. 2번에 닫기 버튼을 놓고 버튼이 눌리면 팝업 창이 닫히게
    닫기 버튼을 누르면 팝업 폭과 높이 색상이 천천히 바뀌게

    // 88-89번

    깃 소스 확인 88 참고

    오늘 날짜와 현재 시간을 다음 형식으로 출력하기
    ㅇㅇㅇㅇ년 ㅇㅇ월 ㅇㅇ일 ㅇㅇ시 ㅇㅇ분 ㅇㅇ초 ㅇㅇㅇ 밀리초
    참고

    밀리초: 1/1000 초

    // 90번

    문89 에서 추가한 시간 출력 기능을 내 홈피 첫화면 (로그인 화면) 에 나오게 하기

*/

var divTag; // Div 값 변수

var popupWindowTag; // 팝업 창 변수
var btnTag; // 버튼 값 변수

var popupTextTag; // 팝업 텍스트 변수
var timeTextTag; // 시간 표시 텍스트 변수

var login_ID;
var login_PW;

window.onload = function() {

    divTag = document.getElementById("login");

    login_ID = document.getElementById("login_id");
    login_PW = document.getElementById("login_pw");

    popupWindowTag = document.getElementById("popupWindow");
    btnTag = document.getElementById("popup_CloseButton");

    popupTextTag = document.getElementById("popupText");

    btnTag.addEventListener("click",popup);

    // 초기 시간 설정
    updateTime();
  
    // 1밀리초마다 updateTime() 함수 호출하여 시간 업데이트
    // setInterval( 일정 시간 간격마다 실행될 함수, 함수를 호출하는 간격(밀리초 단위), [arg1, arg2, ...] );
    setInterval(updateTime, 1);

}

function loginConfirm() {

    var ID = login_ID.value;
    var PW = login_PW.value;
    
    if ( ID == "고양이" && PW == "1234" ) {
        alert("로그인 성공!");

        divTag.innerHTML = ID + " 회원님 반갑습니다!";
    } else {
        alert("로그인 실패...");
    }

}

function popup() {
    popupTextTag.style.display = "none";
    btnTag.style.display = "none";

    // var width = popupWindowTag.offsetWidth;
    var height = popupWindowTag.offsetHeight;

    var intervalId = setInterval(function() {
    if (height > 0) {
        // width -= 10;
        height -= 50; // 서서히 줄일 값
        // popupWindowTag.style.width = width + "px";
        popupWindowTag.style.height = height + "px";
    } else {
        clearInterval(intervalId); // 완전히 닫혔을 때 중지
        popupWindowTag.style.display = "none"; // 완전히 닫혔을 때 요소 숨김
    }
    }, 50); // 50ms 마다 실행되도록 설정
}

function updateTime() {
    // 날짜 클래스 변수
    var currentTime = new Date();

    // 날짜 변수
    var year = currentTime.getFullYear();
    var month = currentTime.getMonth() + 1;
    var date = currentTime.getDate();

    var dayStr = "";
    var day = currentTime.getDay();

    if ( day == 0 ) {
        dayStr = "일요일";
    } else if ( day == 1 ) {
        dayStr = "월요일";
    } else if ( day == 2 ) {
        dayStr = "화요일";
    } else if ( day == 3 ) {
        dayStr = "수요일";
    } else if ( day == 4 ) {
        dayStr = "목요일";
    } else if ( day == 5 ) {
        dayStr = "금요일";
    } else if ( day == 6 ) {
        dayStr = "토요일";
    }

    var dateText = document.getElementById("currentDate");
    // 시, 분, 초 변수
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var milSeconds = currentTime.getMilliseconds();

    var timeText = document.getElementById("currentTime");

    // 0을 채워 넣어 한 자리 숫자를 두 자리로 변환
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // 0을 채워 넣어 1,2자리 숫자를 3자리로 변환
    milSeconds = (milSeconds < 100 ? "0" : "") + milSeconds;

    dateText.textContent = year + "년 " + month + "월 " + date + "일 " + dayStr;

    var formattedTime = hours + ":" + minutes + ":" + seconds + "." + milSeconds;
    timeText.textContent = formattedTime;
}

/* 
    
*/