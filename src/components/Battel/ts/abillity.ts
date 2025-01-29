import { abilitySelection } from "./gameBasicsLogic";
import {s} from '../vue/underLog/log';
import { limitSkill } from "./skill";
import { myStatus } from "./status";
import { skill } from "../vue/nameLog/name";
import { gameFinishJudge } from "../vue/gameFinish/gameFinish";

import { gageUpdate } from "./record";

export function ability(){
    stand()//構えを変えてステータス変化
    myStatus.abilityPointReset()//異なる構で変えでアビリティ0に
    s.takeStand()
    console.log(lowLogs.news)
    gageUpdate()
}


export function usingSkill(enemyId:number){
console.log("はつどう")
limitSkill()
myStatus.usingabillityPointReset()
gageUpdate()
skill.change()//スキルの名前が変わる
gameFinishJudge()//ゲーム終了のジャッジメント
}//スキル発動


export function stand(){
if(abilitySelection.value === 0){
    myStatus.equipSword()
}else{
    myStatus.equipShield()
}}



