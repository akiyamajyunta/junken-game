import { ref } from 'vue';
export function isBetween(value:number,min:number,max:number){
                return  value >= min && value <= max;
}//A以上B以下

export  function addLimit(value:number,add:number,limit:number){
            if(limit-value >= add){
                    return add
            }else if(value<limit){
                return limit-value
            }else{
                return 0
    };
}
export function  changeSkill(abilityValue:number,abilityValueSub:number,gauge:number){
    if(abilityValue == abilityValueSub||abilityValueSub == 3){
        return gauge
    }else{
        return 0
    }
}
export function rand(maxDmg:number, minDmg:number) {
    return Math.trunc(Math.random() * (maxDmg - minDmg) + minDmg);//数の乱数
}

export function phaseJudgement(phasesub:number,hopePhase:number){
        if(phasesub <=hopePhase){
            return true
        }else{
            return false
        }
}











