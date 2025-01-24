import { getMyStatus,getEnStatus } from "./stasus";
import { ref } from "vue";
//攻撃、ダメージ関連
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
}//現在のHPより被ダメージが大きい場合、現在分のHPを与える。現在のHP,被ダメージ7
    export const myAttack = ref<number>(calculatemyDamage(getMyStatus.atk,getMyStatus.paSklAtk,getMyStatus.sklAtk,getEnStatus.def,getEnStatus.paSklDef,getEnStatus.sklDef))
    export const enAttack = ref<number>(calculatemyDamage(getEnStatus.atk,getEnStatus.paSklAtk,getEnStatus.sklAtk,getMyStatus.def,getMyStatus.paSklDef,getMyStatus.sklDef))

    export function myAttackUpdate(){
        myAttack.value = calculatemyDamage(getMyStatus.atk,getMyStatus.paSklAtk,getMyStatus.sklAtk,getEnStatus.def,getEnStatus.paSklDef,getEnStatus.sklDef)
    }
    export function enAttackUpdate(){
        enAttack.value = calculatemyDamage(getEnStatus.atk,getEnStatus.paSklAtk,getEnStatus.sklAtk,getMyStatus.def,getMyStatus.paSklDef,getMyStatus.sklDef)
    }





