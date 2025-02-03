import { ref } from "vue";
import { underLogs, upperLogs } from "../vue/gameMaineLosic";
import {
    myStatus,
    enStatus,
} from "../vue/gameMaineLosic";

export const revengeOrEnd = ref<boolean>(false);
export const gameoverSurface = ref<boolean>(false)
export const dieOrkill = ref<string>("empty")

export function revengeGameSet(){
    window.location.reload();
}


export function gameFinishJudge(){
    if(myStatus.value.hp <= 0 || enStatus.value.hp <= 0 ){
    //lowLogs.gameFinish()
    upperLogs.gameFinish()
    underLogs.gameFinish()
    gameoverSurface .value = true
    if(myStatus.value.hp <=0){
        dieOrkill.value = "You Die"
    }else if (enStatus.value.hp <=0){
        dieOrkill.value = "good"
    }else{}
}}