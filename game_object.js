// 몬스터 클래스
function Monster(name, hp, attack) {
    // 속성 or Property (프로퍼티)
    this.name = name;    // 이름
    this.hp = hp;      // 현재 체력
    this.maxHP = hp;   // 최대 체력
    this.attack = attack;   // 공격력

    this.info = function() {

        // 체력이 음수값일때 0으로 표기
        if ( this.hp < 0 ) {
            this.hp = 0;
        }

        tv3("["+this.name+" (💖 "+this.hp+"/"+this.maxHP+")]");
        br();
    }
}

// 캐릭터 클래스
function Character(name, hp, attack) {
    // 속성 or Property (프로퍼티)
    this.name = name;    // 이름
    this.hp = hp;      // 현재 체력
    this.maxHP = hp;   // 최대 체력
    this.attack = attack;   // 공격력

    this.exp = 0; // 현재 경험치
    this.expNeed = 300; // 다음 경험치

    this.gold = 0; // 골드

    this.info = function() {
        
        // 체력이 음수값일때 0으로 표기
        if ( this.hp < 0 ) {
            this.hp = 0;
        }

        tv3("["+this.name+" (💖 "+this.hp+"/"+this.maxHP+")] ( EXP : " + this.exp + " / " + this.expNeed + " )");
        br();
    }
}