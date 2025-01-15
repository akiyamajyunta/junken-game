
import { ref } from 'vue';



//攻撃、ダメージ関連
export function rand(maxDmg:number, minDmg:number) {
    return Math.trunc(Math.random() * (maxDmg - minDmg) + minDmg);//数の乱数
}
  
export function calculatemyDamage(atk:number,atPakskl:number,atkskl:number,def:number,dePaskl:number,defskl:number){
      if((atk*atPakskl*atkskl)>(def*dePaskl*defskl)){
          return (atk*atPakskl*atkskl)-(def*dePaskl*defskl)
      }
      else{
          return 0
      }
}//ダメージ計算。攻撃力-防御力が与えれるダメージ。防御力が上回るのなら0を返す。

export function lifegageCalculate(life:number,lifeDmg:number){
    if(life>0){
      if(life>(lifeDmg)){
          return lifeDmg
      }else{
          return (life)
      }
    }else{
        return 0
    }      
}//現在のHPより被ダメージが大きい場合、現在分のHPを与える。現在のHP,被ダメージ

export function isBetween(value:number,min:number,max:number){
                     return  value >= min && value <= max;
}//A以上B以下

const addSkillPoint = ref<number>(0);
export  function addLimit(value:number,add:number,limit:number){
            if(limit-value >= add){
                addSkillPoint.value = add
                    return addSkillPoint.value
            }else if(value<limit){
                addSkillPoint.value = limit-value
                return addSkillPoint.value
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

export function phaseJudgement(phase:number,hopePhase:number){
        if(phase <=hopePhase){
            return true
        }else{
            return false
        }
}
