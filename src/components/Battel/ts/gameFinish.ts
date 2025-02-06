import { ref } from "vue";
import {
    myStatus,
    enStatus,
    underLogs, 
    upperLogs,
} from "../vue/gameMaineConstant";

export const revengeOrEnd = ref<boolean>(false);
export const gameOverSurface = ref<boolean>(false)
export const dieOrKill = ref<string>("empty")

export function revengeGameSet(){
    window.location.reload();
}//再起動


export function gameFinishJudge(){
    if(myStatus.value.hp <= 0 || enStatus.value.hp <= 0 ){
    upperLogs.gameFinish()
    underLogs.gameFinish()
    gameOverSurface .value = true
    if(myStatus.value.hp <=0){
        dieOrKill.value = "You Die"
    }else if (enStatus.value.hp <=0){
        dieOrKill.value = "good"
    }else{

    }
}}