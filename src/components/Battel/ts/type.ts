export type ResultsHistory = {
    win: number, lose: number, draw: number, phase:number
};

export type MoveDmg = {
    topPosition: number, fontSize: number
}

export type Position2D = {
    x: number, y: number
}

// 攻撃計算方法　素の攻撃力　*　武器の攻撃力　*　期限スキルによるバフ 
import { Buff, getBuff } from './skill';
import { vewUseDmg } from '../vue/gameMaineConstant';


export class Status {
    maxHp:number
    hp:number
    basicAtk: number
    basicDef: number
    abilityPoint: number
    abilityPointStop: boolean
    limitSkillNameId: number
    buffsIdKeep: number
    buff: Buff
    stance: number;

    constructor(){
        this.maxHp = 5000
        this.hp = 5000
        this.basicAtk = 450
        this.basicDef = 200
        this.abilityPoint = 0
        this.abilityPointStop = false
        this.limitSkillNameId = 0
        this.buffsIdKeep = 0
        this.buff = getBuff(0);
        this.stance = 0
    }

    statusChange(
        maxHp: number,
        basicAtk: number,
        basicDef: number,
    ) {
        this.maxHp = maxHp;
        this.hp = maxHp;
        this.basicAtk = basicAtk;
        this.basicDef = basicDef;
    }

    statusReset(){
        this.maxHp = 5000
        this.hp = 5000    
        this.basicAtk = 350
        this.basicDef = 100
        this.abilityPoint = 0
        this.buff = getBuff(0);
        this.stance = 0
    }

    rand(minRate:number, maxRate:number) {
        return (Math.random() * (minRate - maxRate) + maxRate);//数の乱数
    }

    atk(): number {
        const rates = [1.5, 0.8, 1.0];
        return  Math.trunc(this.basicAtk * rates[this.stance] * this.buff.atkRate)* this.rand(0.9, 1.1)
    }

    def():number {
        const rates = [0.8, 1.5, 1.0];        
        return Math.trunc(this.basicDef * rates[this.stance] * this.buff.defRate) * this.rand(0.9, 1.1)
    }

    atkStance() {
        if (this.stance != 0) {
            this.stance = 0;
            this.abilityPoint = 0;
        };
    }

    defStance() {
        if(this.stance != 1){
            this.stance = 1;
            this.abilityPoint = 0;
        }
    }
    
    fleeStance(){
        if (this.stance != 2) {
            this.stance = 2;
            this.abilityPoint = 0;
        }
    }

    isBuffing(): boolean {
        if (this.buff.limit > 0) {
            return true;
        } else {
            this.limitSkillNameId = 0
            this.buff.poison = false
            this.buff.berserk = false
            return false;
        }
    }

    step() {
        this.buff.limit--;
        if (this.isBuffing() == false) {
            this.buff = getBuff(0);
            this.buffsIdKeep = 0;
        }
    }
    setBuff(buffId:number){
        this.buff = getBuff(buffId)
        this.buffsIdKeep = buffId
    }

    abilityPointAdd(add:number){
        if(this.abilityPointStop == false){
        this.abilityPoint = Math.min(100, add + this.abilityPoint);
    }
        this.takeCurse()
}
    
    usingabillityPointReset(){
        this.abilityPoint = 0; 
    }

    takeDmg(dmg: number): number {
        const totalDmg = Math.max(dmg - this.def(), 0);
        vewUseDmg.value =  totalDmg
        this.hp = Math.max(this.hp -  totalDmg, 0);
        return  totalDmg;
    }
    takePoison(){
        if(this.buff.poison == true){
            this.hp = Math.max(this.hp - this.buff.poisonDmg, 0);
        }else{
        }
    }
    takeCurse(){
        if(this.buff.curse == true){
            this.abilityPoint = 0
        }else{
    }}


    viewTakeDmg(): number {
        return  Math.trunc(vewUseDmg.value)
    }

    getNormedHp(): number {
        if(this.hp > 0 ){
            return  Math.trunc((this.hp / this.maxHp) * 100);
        }else{
            return 0 
        }
    }

    dog(){
        this.statusChange(5000,350,100)
    }
    zunda(){
        this.statusChange(6000,500,100)
    }
    monk(){
        this.statusChange(6000,900,100)
    }
    god(){
        this.statusChange(9999,999,999)
    }
}