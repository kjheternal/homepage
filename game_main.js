/*
    -> 문59 (rpgV0.10.0)

    업데이트

    - dw() 이름을 tv() 로 변경

    - textarea 를 두개 추가

    - 플레이어 정보 출력 ( ex. [엠피스(70/100)](exp: 100/300) 을 새 textarea (id - screenPlayerInfo) 로 분리

*/

var t, t2, t3; // 스크린
var str = "";	// 상단에 들어갈 텍스트
var str2 = "";	// 중앙에 들어갈 텍스트
var str3 = "";	// 하단에 들어갈 텍스트

var loop = true;

window.onload = function() {

    t = document.getElementById("rpg_screen"); // textarea 불러옴
    t2 = document.getElementById("rpg_screen_bottom"); // textarea 불러옴 (하단)
    t3 = document.getElementById("rpg_screen_playerinfo"); // textarea 불러옴 (플레이어 정보)

    displayGameInfo(); // 정보 표시

    // 전투 무한 루프
    while (loop) {
        loop = startBattle();
    }

}

// 생성자 함수
var orc = new Monster("오크", 200, 5);
var elf = new Character("엘프", 100, 15);

/*
    // 오크 17마리 생성
    var orc = new Array(); // 비어있는 배열

    for (var i=0; i<17; i=i+1) {
        var randomHP = Math.floor(Math.random()*100) + 1;
        var randomAttack = Math.floor(Math.random()*10) + 1;

        // orc[i] = new Monster("오크", randomHP, randomAttack);
        orc.push(new Monster("오크", randomHP, randomAttack)); // 순서대로 하나하나 채움

        orc[i].info();
    }
*/

// 정보 표시 함수
function displayGameInfo() {

    // 메인칸에 표시
    tv("전투 시작");
    br();

    // 플레이어 정보칸에 표시
    tv3("정보");
    orc.info();
    elf.info();
}

var turn = 0; // 턴 표시 변수

// 전투 함수
function startBattle() {
    var orcAttack = getRandomAttackValue(orc.attack);
    var elfAttack = getRandomAttackValue(elf.attack);

    turn = turn + 1;

    tv("[" + turn + " 턴 시작]");
    br(); br();

    tv("🏹 플레이어 데미지: " + elfAttack);
    br();

    tv("🪓 몬스터 데미지: " + orcAttack);
    br(); br();

    elf.hp = elf.hp - orcAttack;

    tv(orc.name + " 가 " + elf.name + " 에게 " + orcAttack + " 만큼 데미지를 입혔습니다.");

    hr();

    orc.hp = orc.hp - elfAttack;

    tv(elf.name + " 가 " + orc.name + " 에게 " + elfAttack + " 만큼 데미지를 입혔습니다.");

    // 플레이어 정보칸
    tv3(turn + " 턴 종료 -> 결과");
    orc.info();
    elf.info();

    // 전투 결과
    if ( orc.hp <= 0 ) {

        if ( elf.exp < elf.expNeed ) {
            elf.exp = elf.exp + 100;

            tv3( orc.name + " 을(를) 잡고 100 경험치를 얻었습니다.");
        } else {
            tv("경험치 초과! (레벨업) 구현 TODO");

            br();
        }

        elf.gold = elf.gold + rand(10, 100); // 처치 성공 시 10 ~ 100 골드를 랜덤으로 받음

        tv3( orc.name + " 을(를) 잡고 " + elf.gold + " 골드를 얻었습니다.");

        tv3("[ 최종 결과 ]");

        elf.info();

        tv3("💰 보유 골드: "+ elf.gold);

        return false; // false를 반환해서 무한 루프 종료
    } else if ( elf.hp <= 0 ) {
        tv3( "플레이어가 사망했습니다.");

        elf.info();

        tv3("💰 보유 골드: "+ elf.gold);

        return false; // false를 반환해서 무한 루프 종료
    } else {
        return true; // 아무것도 해당 안될시 true를 반환해서 무한 루프 계속
    }
}

/* 
    


*/