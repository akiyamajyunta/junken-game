import { ref } from "vue";
export const  gameoverSurface = ref<boolean>(false)
export const dieOrkill = ref<string>("empty")
//import { lowlogs
import { upperLogs } from "../upperLog/log";
import { mySelection,abilitySelection, myStatus, enStatus } from "../gameMaineLosic";
import { brain, enemyStatusHpSend} from "../../ts/charaSelection";

import { resultsHistory } from "../gameMaineLosic";
import { enSelection } from "../gameMaineLosic";
//import { skill } from "../nameLog/name";

export function gameFinishJudge(){
    if(myStatus.value.hp  <= 0|| enStatus.value.hp <= 0 ){
    //lowLogs.gameFinish()
    upperLogs.gameFinish()
    gameoverSurface .value = true
    jug()
}}


function jug(){
if(myStatus.value.hp <=0){
    dieOrkill.value = "You Die"
}else if (enStatus.value.hp <=0){
     dieOrkill.value = "good"
}else{}
}

export function revengeGameSet(){
    myStatus.value.statusReset()
    enStatus.value.statusReset()
    brain(0)//enemyIdのexportが解らないので犬を呼び出す
    enemyStatusHpSend(0)
    mySelection.value = 0
    enSelection.value = 0
    abilitySelection.value = 0
    //lowLogs.reset()
    upperLogs.reset()
    gameoverSurface.value = false
    resultsHistory.value.win = 0
    resultsHistory.value.lose = 0
    resultsHistory.value.draw = 0
    resultsHistory.value.phase = 0
    //skill.change()
}