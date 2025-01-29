// 攻撃計算方法　素の攻撃力　*　武器の攻撃力　*　期限スキルによるバフ 
export class Status {
    maxHp:number
    hp:number
    basicAtk: number
    basicDef: number
    itemAtk: number
    itemDef: number


    equipItem: string
    equipItemSub :string
    abilityPoint : number
    buffRest: number
    buffAtkRate: number
    buffDefRate: number

    
    constructor(){
        this.maxHp = 5000
        this.hp = 5000
        
        this.basicAtk = 350*0+1
        this.basicDef = 100
        this.itemAtk   = 1.5
        this.itemDef = 0.8

        this.equipItem = 'sard'
        this.equipItemSub = 'sard'
        this.abilityPoint = 0
        this.buffRest = 0 //残りバフターン数
        this.buffAtkRate = 0
        this.buffDefRate = 1
      
    }

    hpReduce(hp:number){
        this.hp -= hp
    }

    statusCahnge(
        maxHp: number,
        basicAtk: number,
        basicDef: number,
        itemAtk: number,
        itemDef: number,
        buffRest: number,
        buffAtkRate: number,
        buffDefRate : number,
    ) {
        this.maxHp = maxHp;
        this.hp = maxHp;
        this.basicAtk = basicAtk
        this.basicDef = basicDef;
        this.itemAtk = itemAtk;
        this.itemDef = itemDef;
        this.buffRest = buffRest;
        this.buffAtkRate = buffAtkRate;
        this.buffDefRate = buffDefRate;
    }
    statusReset(){
        this.maxHp = 5000
        this.hp = 5000
        
        this.basicAtk = 35000
        this.basicDef = 100
        this.itemAtk   = 1.5
        this.itemDef = 0.8

        this.equipItem = 'sard'
        this.equipItemSub = 'sard'
        this.abilityPoint = 0
        this.buffRest = 0 //残りバフターン数
        this.buffAtkRate = 1
        this.buffDefRate = 1
      }
   rand(minRate:number, maxRate:number) {
        return (Math.random() * (minRate - maxRate) + maxRate);//数の乱数
    }

    atk(): number {
        return this.basicAtk * this.itemAtk * Math.max(1, this.isBuffing() * this.buffAtkRate )* (this.rand(0, 0.2)+0.9)
    }
    def():number {
        return this.basicDef * this.itemDef * Math.max(1, this.isBuffing() * this.buffDefRate )* (this.rand(0, 0.2)+0.9)
    }

    isBuffing(): number {
        if (this.buffRest > 0){
            return 1;
        } else {
            return 0;
        }
    }

    equipSword(){
        this.equipItem = 'sard'
    }
    
    equipShield() {
        this.equipItem = 'shield'
    }

    stanceAtk(){
        if(this.equipItem = 'sard') {
            this.itemAtk  = 2
            this.itemDef = 0.5
        }
    }
    stanceDef(){
        if(this.equipItem = 'shield') {
            this.itemAtk  = 0.8
            this.itemDef = 2
        }
    }
    abilityPointAdd(add:number){
            if( 100- this.abilityPoint >=add){
                this.abilityPoint += add
            }else if( this.abilityPoint-add < 100){
                this.abilityPoint += 100 - this.abilityPoint  
            }else{
                this.abilityPoint += 0
    };
    }
    abilityPointReset(){
        if(this.equipItem !== this.equipItemSub){
            this.abilityPoint  = 0; 
        }
            this.equipItem = this.equipItemSub}//こいつ悪い？
    usingabillityPointReset(){
        this.abilityPoint  = 0; 
    }
    dmg(dmg: number) {
        if(this.hp > 0){
            if(this.hp > dmg){
                this.hp = this.hp - dmg;
            }else{
                this.hp = 0;
            }
        }else{
            return 0
        }
    }

    getNormedHp(): number {
        if(this.hp >0 ){
            return  Math.trunc((this.hp / this.maxHp) * 100);
        }else{
            return 0 
        }
    }

    dog(){
        this.statusCahnge(5000,500,100,1,1,1,1,1)
    }
    zunda(){
        this.statusCahnge(6000,500,100,1,1,1,1,1)
    }
    ganji(){
        this.statusCahnge(6000,900,100,1,1,1,1,1)
    }
    god(){
        this.statusCahnge(9999,999,999,1.5,1,1,1,1)
    }
}
export function calculateMyDamage(atk:number, def:number){
    if(atk > def){
        return atk-def
    }else{
        return  1
    }
}

import { myAttack, enAttack, myStatus, enStatus } from '../vue/gameMaineLosic';

export function myAttackUpdate(){
    myAttack.value =  Math.trunc(calculateMyDamage(myStatus.value.atk(), enStatus.value.def()))
}

export function enAttackUpdate(){
    enAttack.value =  Math.trunc(calculateMyDamage(enStatus.value.atk(), myStatus.value.def()))
}



