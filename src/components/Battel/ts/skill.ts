
import { isBetween } from "./calculation"
import { abilitySelection, myStatus, enStatus} from "../vue/gameMaineLosic";


export function getSkillName(): string {
    let name = "";
    if(abilitySelection.value == 0){
        if (isBetween(myStatus.value.abilityPoint, 0, 28)){
            name =  "No limit"
        }else if(isBetween(myStatus.value.abilityPoint, 29, 59)){
            name =  "大凶斬り"
        }else if(isBetween(myStatus.value.abilityPoint, 60,99)){
            name =  "集中氷の呼吸"
        }else if(isBetween(myStatus.value.abilityPoint, 100, 100)){
            name =  "超武神破斬"
        }
    } else if (abilitySelection.value == 1){
        if (isBetween(myStatus.value.abilityPoint, 0, 28)){
            name = "No Limit"
        }else if(isBetween(myStatus.value.abilityPoint, 29, 59)){
            name = "鉄塊"
        }else if(isBetween(myStatus.value.abilityPoint, 60, 99)){
            name = "消力"
        }else if(isBetween(myStatus.value.abilityPoint, 100, 100)){
            name = "凶戦士の甲冑"
        }
    }
    return name;
}


class Skill {
    name: string
    buffRest: number

    constructor(name: string, buffRest: number) {
        this.name = name
        this.buffRest = buffRest
    }
}

const skills = [
    new Skill("大凶斬り", 5),
    new Skill("集中氷の呼吸", 5),
    new Skill("超武神破斬", 5)
]


//  skill.name(abilitySelection: number, gageValue: number)

export function limitSkill(){
    const skillName = getSkillName();

    let skill = skills[0];
    for (let _skill of skills) {
        if (_skill.name = skillName) {
            skill = _skill
        };
    };

    myStatus.value.buffRest = skill.buffRest;
    
    // const skill = skills.filter(skill => skill.name == skillName);
    

    // alert(skillName)
    if(skillName === "大凶斬り"){
        enStatus.value.hpReduce(1000)
    }else if(skillName === "集中氷の呼吸"){
        enStatus.value.buffDefRate = 0.01
    }else if(skillName === "超武神破斬"){

    }else if(skillName === "鉄塊"){

    }else if(skillName === "消力"){
        
    }else if(skillName === "凶戦士の甲冑"){
    }
    myStatus.value.abilityPoint = 0;
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
