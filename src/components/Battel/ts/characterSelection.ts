import { mostRecentSend,randMake, junkenTypeGodLogic} from "./logic";
import { mySelection,enSelection,resultsHistory, enStatus } from "../vue/gameMaineConstant";


export function brain(enemyId:number){
    if (enemyId == 0){
        inu()}
    else if (enemyId == 1){
        zunda()} 
    else if ( enemyId == 2){
        monk()}
    else if ( enemyId== 3){
        god()
    }
}//キャラ選択時における思考の呼び出し。

export function enemyStatusHpSend(enemyId:number){
    if(enemyId == 0){
        enStatus.value.dog()
    }else if(enemyId == 1){
        enStatus.value.zunda()
    }else if(enemyId == 2) {
        enStatus.value.monk()
    }else if (enemyId == 3){
        enStatus.value.god
    } 
}

function inu() {
        enSelection.value = randMake()
}

function zunda(){
    if ((resultsHistory.value.phase) < 5){
        enSelection.value = randMake()
    }else{
        enSelection.value = mostRecentSend()
    }
}//ずんだやんの思考パターンとステータス


function monk(){
    if ((resultsHistory.value.phase) < 10){
        enSelection.value  = mySelection.value//思考
    }else{
        enSelection.value = randMake()
    }
}//僧侶の思考パターンとステータス

function god(){
    if ((resultsHistory.value.phase) < 5){
        enSelection.value = randMake()
    }else{
        enSelection.value = junkenTypeGodLogic()
    }
   
}//神の思考パターンとステータス