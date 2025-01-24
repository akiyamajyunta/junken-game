import { abilitySelection,abilitySelectionSub } from "./gameBasicsLogic";
import { changeSkill } from "./calculation";
import { gage } from "./record";
import { stand ,limitSkill} from "./skill";
import { log } from "./log";
import { gameOver } from "./log";
import { getMyStatus,getEnStatus } from "./stasus";
import { changeTakeStand } from "./log";
import { sendEnemyname } from "./name";
import { battelReslut } from "./pon";
import { gamefinishe } from "./log";


export function abillity(){
    if(battelReslut.value ==="YOU WIN"){

    }else{
    gage.value.ability= changeSkill(abilitySelection.value,abilitySelectionSub.value,gage.value.ability)
    abilitySelectionSub.value = abilitySelection.value
    stand()//武器の持ち換えで変化
    log.value = changeTakeStand(abilitySelection.value)
}//武器の切り替え
}

export function usingSkill(enemyId:number){
    if(battelReslut.value ==="YOU WIN"){

    }else{
limitSkill()
log.value = gameOver(getMyStatus.hp,getEnStatus.hp,log.value, sendEnemyname(enemyId))
battelReslut.value = gamefinishe(getMyStatus.hp,getEnStatus.hp,battelReslut.value)//0になったらゲームオーバーその判断
}}//スキル発動




