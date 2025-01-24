import { ref } from "vue";
import { log } from "./log";
import { enDmgMoving} from "./move";
import { myAttack} from "./dmgCalculation";
import { ultimateSkillname  } from "./name";
import { gage,resultsHistry } from "./record";
import { phaseJudgement } from "./calculation";
import { getMyStatus,getEnStatus } from "./stasus";
import { abilitySelection} from "./gameBasicsLogic";

const transplantSkillName = ref<string>("")
const giveDmg = ref<number>(0)

export function stand(){
if(abilitySelection.value == 0){
    getMyStatus.statusSklAtkChange()
}else{
    getMyStatus.statusSklDefChange()
}}
//  ultimateSkillname(abilitySelection.value,gage.value.ability) (abilitySelection: number, gageValue: number)

export function limitSkill(){
    resultsHistry.value.phaseSub = 0
    if(ultimateSkillname(abilitySelection.value,gage.value.ability) === "大凶斬り"){
            giveDmg.value = 3000
            plasentDmg()
    }else if( ultimateSkillname(abilitySelection.value,gage.value.ability)   === "超集中 氷の呼吸"){

    }else if( ultimateSkillname(abilitySelection.value,gage.value.ability)   === "超武神破斬"){
            giveDmg.value = 5000
            plasentDmg()
    }else if(ultimateSkillname(abilitySelection.value,gage.value.ability)   === "鉄塊"){
            // giveDmg.value = -3000
            // recovery()
    }else if(ultimateSkillname(abilitySelection.value,gage.value.ability)   === "消力"){

    }else if(ultimateSkillname(abilitySelection.value,gage.value.ability)   === "凶戦士の甲冑"){

    }
            transplantSkillName.value = String(ultimateSkillname(abilitySelection.value,gage.value.ability))
            log.value = transplantSkillName.value
             gage.value.ability = 0;
        
    }

export function limitSkillSub(){  
    if( transplantSkillName.value === "超集中 氷の呼吸"){//攻撃力1.5倍、防御２倍が5ターン
        if(phaseJudgement( resultsHistry.value.phaseSub,5) == true){
            getMyStatus.statusPaAtkDefCahnge(1.5,2)
        }else{
            getMyStatus.statusPaAtkDefCahnge(1,1)
            }
        }else if(  transplantSkillName.value ===  "超武神破斬"){
        if(phaseJudgement( resultsHistry.value.phaseSub,5) == true){
            getMyStatus.statusPaAtkDefDebuff(1.3,1.3)
        }else{}
            getMyStatus.statusPaAtkDefCahnge(1,1)
    }else if(  transplantSkillName.value ===  "消力"){
        if(phaseJudgement( resultsHistry.value.phaseSub,3) == true){
           getMyStatus.statusPaAtkDefCahnge(2,100)
        }else{
            getMyStatus.statusPaAtkDefCahnge(1,1)
        }
    }else if( transplantSkillName.value ===  "凶戦士の甲冑"){
            getMyStatus.statusPaAtkDefDebuff(1.5,1.1)
            getMyStatus.hpReduce(500) 
            //life.value.my = (getMyStatus.hp/getMyStatus.maxHp)*100
   
    }}
   

    function plasentDmg(){
        getEnStatus.hpReduce(giveDmg.value)
        myAttack.value = giveDmg.value
        enDmgMoving()
    }//画面でのダメージ
