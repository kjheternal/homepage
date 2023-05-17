/*
    -> 문제 79 ~ 82

    // 이전 문제와 계속 이어감

    1.html 에서 이 입력 항목들은 글자수를 제한하여 입력하게 처리하기
    2.js 에서 입력 값들을 검사 처리

    입력한 값들을 팝업에 출력

    암호와 재확인 암호가 같은지도 체크 처리
    각 체크에 대해 성공 실패 여부를 로그 남기기

    // 안했음
    1.github에 런칭
    2.url 링크 걸기

    TODO: 전체적으로 리마인드하고 주석으로 어떻게 돌아가는지 파악하기
*/

// 회원가입 폼태그 불러오기
var reg_ID, reg_PW, reg_PWRE, reg_NAME, reg_EMAIL;

var reg_BirthY, reg_BirthM, reg_BirthD;

var TEL_1, TEL_2, TEL_3;

var Gender;

window.onload = function() {

    reg_ID = document.getElementById("reg_id");
    reg_PW = document.getElementById("reg_pw");
    reg_PWRE = document.getElementById("reg_pwre");
    reg_NAME = document.getElementById("reg_name");
    reg_EMAIL = document.getElementById("reg_email");

    reg_BirthY = document.getElementById("reg_birthyear");
    reg_BirthM = document.getElementById("reg_birthmonth");
    reg_BirthD = document.getElementById("reg_birthday");

    TEL_1 = document.getElementById("tel_1");
    TEL_2 = document.getElementById("tel_2");
    TEL_3 = document.getElementById("tel_3");

    Gender = document.getElementsByName("sex");  // 주의

}


// 회원가입 버튼을 눌렀을때 실행
function confirmRegister() {

    var ID = reg_ID.value;
    var PW = reg_PW.value;
    var PWRE = reg_PWRE.value;
    var NAME = reg_NAME.value;
    var EMAIL = reg_EMAIL.value;

    var RBY = reg_BirthY.value;
    var RBM = reg_BirthM.value;
    var RBD = reg_BirthD.value;

    var TELOne = TEL_1.value;
    var TELTwo = TEL_2.value;
    var TELThree = TEL_3.value;

    var SEX;

    var sexStr = "";

    // 이후 배열에서 반복을 써서 순회하면서 체크 여부를 확인하고 처리
    for(var i=0;i<Gender.length;i++){
        // Gender[i] 의 checked 멤버 변수에 해당 radio 가 체크된 상태면 true 가 리턴되므로 둘다 true 면 체크상태라는 뜻
        if(Gender[i].checked == true){
            SEX = Gender[i].value; // 해당 라디오 버튼의 값을 변수에 저장
        }
    }

    // 남성 여성 으로 표기되게 하기
    if ( SEX == "M" ) {
        sexStr = "남성";
    } else if ( SEX == "G" ) {
        sexStr = "여성";
    }

    var userInfo = 
        "아이디: "+ID+"\n"
        +"비밀번호: "+PW+"\n"
        +"비밀번호 재입력: "+PWRE+"\n"
        +"이름: "+NAME+"\n"
        +"이메일: "+EMAIL+"\n"
        +"생년월일: " + RBY + "년 " + RBM + "월 " + RBD + "일\n"
        +"전화번호: " + TELOne + " - " + TELTwo + " - " + TELThree + "\n"
        +"성별: " + sexStr ;

    // 회원가입 조건 체크 변수
    var register = false;

    var IDCheck = false;
    var PWCheck = false;
    var PWRECheck = false;
    var NAMECheck = false;
    var EMAILCheck = false;

    // 비밀번호 정규표현식 ( 최소 8자리에서 최대 16자리까지 숫자, 영문, 특수문자 각 1개 이상 포함 )
    var pwPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;
    var isValidPassword = pwPattern.test(PW);
    
    // 최소, 최대 길이 조건 체크
    if ( ID.length >= 4 && ID.length <= 12 ) {
        IDCheck = true;
    }

    if ( isValidPassword ) {
        // if ( PW.length >= 4 && PW.length <= 16 ) {
            PWCheck = true;
        // }
    } else {
        PWCheck = false;
    }

    if ( PWCheck && isValidPassword ) {

        // 비밀번호와 비밀번호 재입력값이 일치하지 않은 경우
        if ( PW != PWRE ) {
            alert("비밀번호 재입력을 똑바로 입력해주세요.");

            PWRECheck = false;

            return false;
        } else {
            PWRECheck = true;
        }

    } else {
        PWRECheck = false;
    }

    if ( NAME.length >= 4 && NAME.length <= 12 ) {
        NAMECheck = true;
    }

    if ( EMAIL.length >= 4 && EMAIL.length <= 12 ) {
        EMAILCheck = true;
    }

    // 모든 조건 검증
    if ( IDCheck && PWCheck && PWRECheck && NAMECheck && EMAILCheck ) {
        register = true;
    } else {
        register = false;
    }

    // 일치하지 않은 경우 오류 메시지 출력
    if ( !register ) {
        if ( !IDCheck ) {
            alert("아이디는 4글자이상 12자 이하로만 입력하세요");
        } else if ( !PWCheck ) {
            alert("비밀번호는 최소 8자리에서 최대 16자리까지 숫자, 영문, 특수문자 각 1개 이상 포함되게 입력해주세요.");
        } else if ( !NAMECheck ) {
            alert("이름은 4글자이상 12자 이하로만 입력하세요");
        } else if ( !EMAILCheck ) {
            alert("이메일은 4글자이상 12자 이하로만 입력하세요");
        }
    } else {
        alert(userInfo); // 회원가입창에 입력한 값을 표시
        alert("회원가입 성공!");
        location.href = "index.html"; // 회원가입 완료시 기존 로그인창으로 이동
    }

}