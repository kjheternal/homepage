/*
    br() 문제

    common.js 를 하나 더 추가하고 여기에 br()함수 추가
*/

function br(){
    // document.write("<br>");

    str = str + "\n";

	t.value = str;
}

function hr(){
    // document.write("<hr>");

    str = str + "\n==============================================\n";

	t.value = str;
}

function tv(s){    // var str; var str = "고양이";
    // document.write(str);

    str = str + s;
	
	t.value = str;
}

function tv3(s){    // var str; var str = "고양이";
    // document.write(str);

    str3 = str3 + s;
    str3 = str3 + "\n\n";
	
	t3.value = str3;
}

function rand(min, max){ // 랜덤 값 공통 함수
    return Math.floor(Math.random() * max) + min;
}

// 공격력을 랜덤으로 지정하는 함수
function getRandomAttackValue(attack){
    attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로
    var random = Math.floor(Math.random()*attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴
    return random;
}