import { ref } from "vue";
import { lowLog } from "../vue/underLog/log";
import { skill } from "../vue/nameLog/name";



import { gage,resultsHistory } from "./record";
import { phaseJudgement } from "./calculation";

import { myStatus,enStatus } from "./status";
import { abilitySelection} from "./gameBasicsLogic";

 const transplantSkillName = ref<string>("")
// const giveDmg = ref<number>(0)




//  skill.name(abilitySelection: number, gageValue: number)

export function limitSkill(){
    alert(skill.name)
    if(skill.name === "大凶斬り"){
        enStatus.hpReduce(1000)
        myStatus.buffRest = 5
    }else if(skill.name === "集中氷の呼吸"){
        enStatus.buffDefRate = 0.01
        myStatus.buffRest = 5
    }else if(skill.name === "超武神破斬"){
        myStatus.buffRest = 5
    }else if(skill.name === "鉄塊"){
        myStatus.buffRest = 5
    }else if(skill.name === "消力"){
        myStatus.buffRest = 5
    }else if(skill.name === "凶戦士の甲冑"){
        myStatus.buffRest = 5
    }
            transplantSkillName.value = skill.name
            myStatus.abilityPoint = 0
        
    }

// export function limitSkillSub(){  
//     if(transplantSkillName.value === "超集中 氷の呼吸"){//攻撃力1.5倍、防御２倍が5ターン
//         if(phaseJudgement(resultsHistry.value.phaseSub,5) == true){
//             //getMyStatus.statusPaAtkDefCahnge(1.5,2)
//         }else{
//             //getMyStatus.statusPaAtkDefCahnge(1,1)
//             }
//         }else if(transplantSkillName.value ===  "超武神破斬"){
//         if(phaseJudgement( resultsHistry.value.phaseSub,5) == true){
//             //getMyStatus.statusPaAtkDefDebuff(1.3,1.3)
//         }else{}
//             //getMyStatus.statusPaAtkDefCahnge(1,1)
//     }else if(  transplantSkillName.value ===  "消力"){
//         if(phaseJudgement( resultsHistry.value.phaseSub,3) == true){
//            //getMyStatus.statusPaAtkDefCahnge(2,100)
//         }else{
//             //getMyStatus.statusPaAtkDefCahnge(1,1)
//         }
//     }else if( transplantSkillName.value ===  "凶戦士の甲冑"){
//             //getMyStatus.statusPaAtkDefDebuff(1.5,1.1)
//             //getMyStatus.hpReduce(500)    
//     }}
   

    // function plasentDmg(){
    //     enStatus.hpReduce(giveDmg.value)
    //     myAttack.value = giveDmg.value
    //     enDmgMoving()
    // }//画面でのダメージ
