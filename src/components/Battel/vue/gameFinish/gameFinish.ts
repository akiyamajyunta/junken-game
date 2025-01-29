import { ref } from "vue";
export const  gameoverSurface = ref<boolean>(false)
export const dieOrkill = ref<string>("empty")
import { lowlogs
import { upperLogs } from "../upperLog/log";
import { myStatus,enStatus } from "../../ts/status";
import { mySelection,abilitySelection } from "../../ts/gameBasicsLogic";
import { enSelection ,brain ,enemyStatusHpSend} from "../../ts/charaSelection";
import { gageUpdate, resultsHistory } from "../../ts/record";
import { skill } from "../nameLog/name";

export function gameFinishJudge(){
    if(myStatus.hp  <= 0|| enStatus.hp <= 0 ){
    lowLogs.gameFinish()
    upperLogs.gameFinish()
    gameoverSurface .value = true
    jug()
}}


function jug(){
if(myStatus.hp <=0){
    dieOrkill.value = "You Die"
}else if (enStatus.hp <=0){
     dieOrkill.value = "good"
}else{}
}

export function revengeGameSet(){
    myStatus.statusReset()
    enStatus.statusReset()
    brain(0)//enemyIdのexportが解らないので犬を呼び出す
    enemyStatusHpSend(0)
    mySelection.value = 0
    enSelection.value = 0
    abilitySelection.value = 0
    lowLogs.reset()
    upperLogs.reset()
    gameoverSurface.value = false
    resultsHistory.value.win = 0
    resultsHistory.value.lose = 0
    resultsHistory.value.draw = 0
    resultsHistory.value.phase = 0
    gageUpdate()    
    skill.change()
}