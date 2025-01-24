import { ref } from 'vue';
import { limitSkillSub} from './skill';
import { brain } from './charaStususSelection';
import { enSelection } from './charaStususSelection';
import { myAttackUpdate,enAttackUpdate } from './dmgCalculation';
import { mySelection, gamelogic, gameLogicLog} from './gameBasicsLogic'
import {resultsHistry,recentMovesMyCount,recentMovesEnCount}  from './record'
import { gameOver } from './log';
import { log } from './log';
import { getMyStatus,getEnStatus, MyStatus } from './stasus';
import { sendEnemyname } from './name';
import { gamefinishe } from './log';
import { battelFontColor } from './move';
export const battelReslut = ref<string>("最初はグー")


// battelFontColor



export function  pon(enemyId:number){
    if (battelReslut.value === "YOU WIN"){
    }else{
    resultsHistry.value.phase ++
    resultsHistry.value.phaseSub ++
    limitSkillSub()
    enAttackUpdate()
    myAttackUpdate()
    recentMovesMyCount.push(mySelection.value)
    brain(enemyId)//敵の呼び出し
    recentMovesEnCount.push(enSelection.value)
    battelReslut.value = gamelogic(mySelection.value,enSelection.value)//勝ち、負けの判定
    gameLogicLog(mySelection.value,enSelection.value,enemyId)//勝ち、負けの結果、回数、の記録,ダメージの計算等
    battelReslut.value = gamefinishe(getMyStatus.hp,getEnStatus.hp,battelReslut.value)//0になったらゲームオーバーその判断
    log.value = gameOver(getMyStatus.hp,getEnStatus.hp,log.value, sendEnemyname(enemyId))
    //battelFontColor(battelReslut.value)//勝ち(YOU WIN)なら点滅する 
}}


