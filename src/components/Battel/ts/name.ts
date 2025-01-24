import { isBetween } from "./calculation"

export function sendEnemyname(enmmyId:number){
    if(enmmyId == 0){
        return "犬"
    }else if(enmmyId == 1){
        return "ずんだやん"
    }else if(enmmyId == 2){
        return "ガンジー"
    }else if(enmmyId == 3){
        return "神"
       }else{
        return ""
       }
    }

    export function ultimateSkillname(abilitySelection: number, gageValue: number){
if(abilitySelection == 0){
    if (isBetween( gageValue, 0, 28)){
        return "No Limit"
    }else if(isBetween( gageValue, 29, 59)){
        return "大凶斬り"
    }else if(isBetween( gageValue, 60,99)){
        return "超集中 氷の呼吸"
    }else if(isBetween( gageValue, 100, 100)){
        return "超武神破斬"
    }}
else if(abilitySelection == 1){
    if (isBetween(gageValue, 0, 28)){
        return "No Limit"
    }else if(isBetween(gageValue, 29, 59)){
        return "鉄塊"
    }else if(isBetween(gageValue, 60, 99)){
        return "消力"
    }else if(isBetween(gageValue, 100, 100)){
        return "凶戦士の甲冑"
    }}

}



