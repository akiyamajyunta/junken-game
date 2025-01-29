import { abilitySelection } from "../vue/gameMaineLosic";
import { limitSkill } from "./skill";
import { myStatus } from "../vue/gameMaineLosic";
//import { skill } from "../vue/nameLog/name";
import { gameFinishJudge } from "../vue/gameFinish/gameFinish";


export function ability(){
    stand()//構えを変えてステータス変化
    myStatus.value.abilityPointReset()//異なる構で変えでアビリティ0に
    //s.takeStand()
    //console.log(lowLogs.news)
}


export function usingSkill(enemyId:number){
console.log("はつどう")
limitSkill()
myStatus.value.usingabillityPointReset()

//skill.change()//スキルの名前が変わる
gameFinishJudge()//ゲーム終了のジャッジメント
}//スキル発動


export function stand(){
if(abilitySelection.value === 0){
    myStatus.value.equipSword()
}else{
    myStatus.value.equipShield()
}}



