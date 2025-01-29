import { logicCollect,mostRecentSend,junkenTypeGodLogic} from "./logic";
import { ref } from "vue";
import { resultsHistory ,recentMovesEnCount,recentMovesMyCount} from "./record";
import { mySelection } from "./gameBasicsLogic";
//import { rand } from "./calculation";
import { enStatus } from "./status";
//import { enAttackUpdate } from "./dmgCalculation";


export const enSelection = ref<number>(0)//今はグーが出てます

export function brain(enemyId:number){
    if (enemyId == 0){
        inu()}
    else if (enemyId == 1){
        zunda()} 
    else if ( enemyId == 2){
        ganji()}
    else if ( enemyId== 3){
        god()
    }
}//キャラ選択時における思考の呼び出し。

export function enemyStatusHpSend(enemyId:number){
    if(enemyId == 0){
        enStatus.dog()
    }else if(enemyId == 1){
        enStatus.zunda()
    }else if(enemyId == 2) {
        enStatus.ganji()
    }else if (enemyId == 3){
        enStatus.god
    } 
}

function inu() {
        enSelection.value = logicCollect.randMake()
}

function zunda(){
    if ((resultsHistory.value.phase) < 5){
        enSelection.value = logicCollect.randMake()
    }else{
        enSelection.value = (mostRecentSend(recentMovesMyCount,resultsHistory.value.phase,5,"ON"))
    }
}//ずんだやんの思考パターンとステータス


function ganji(){
    if ((resultsHistory.value.phase) < 20){
        enSelection.value   = logicCollect.drawMake(mySelection.value)//思考
    }else{
        enSelection.value  = Number(mostRecentSend(recentMovesMyCount,resultsHistory.value.phase,5,"ON"))
    }
}//ガンジーの思考パターンとステータス

function god(){
    enSelection.value = logicCollect.randMake()
    enSelection.value =Number(junkenTypeGodLogic(recentMovesMyCount,recentMovesEnCount, 
                                                    resultsHistory.value.phase,4))
}//神の思考パターンとステータス