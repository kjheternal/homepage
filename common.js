/*
    br() 문제

    common.js 를 하나 더 추가하고 여기에 br()함수 추가
*/

function br(){
    document.write("<br>");
}

function dw(str){    // var str; var str = "고양이";
    document.write(str);
}

function rand(min, max){ // 랜덤 값 공통 함수
    return Math.floor(Math.random() * max) + min;
}