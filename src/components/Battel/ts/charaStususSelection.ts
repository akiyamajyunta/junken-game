
import { logicCollect,mostRecentSend,junkenTypeGodLogic} from "./logic";
import { ref } from "vue";
import { getEnStatus} from "./stasus";
import { resultsHistry ,recentMovesEnCount,recentMovesMyCount} from "./record";
import { mySelection } from "./gameBasicsLogic";
import { rand } from "./calculation";
import { enAttackUpdate } from "./dmgCalculation";


export const enSelection = ref<number>(0)//今はグーが出てます

export function brain(enemyId:number){
    if (enemyId == 0){
        inu()}
    else if (enemyId == 1){
        zunda()} 
    else if ( enemyId == 2){
        ganji()
        enSelection.value = 1}
    else if ( enemyId== 3){
        god()
        //enSelection.value = 2
    }
}//キャラ選択時における思考の呼び出し。

export function enemyStatusHpSend(enemyId:number){
    if(enemyId == 0){
       getEnStatus.statusHpCahnge(5000,5000)//HP MaxHP
    }else if(enemyId == 1){
       getEnStatus.statusHpCahnge(9000,9000)
    }else if(enemyId == 2) {
       getEnStatus.statusHpCahnge(1000,1000)
    }else if (enemyId == 3){
       getEnStatus.statusHpCahnge(1000,1000)
    } 
}

function inu() {
        enSelection.value = logicCollect.randMake()
        getEnStatus.statusAtkDefCahnge(250+rand(-50,50),100)////
        //console.log("素の犬の攻撃"+getEnStatus.atk)
        enAttackUpdate()
        //console.log("加工直後の犬の攻撃"+enAttack.value)
}

function zunda(){
    if ((resultsHistry.value.phase) < 5){
        enSelection.value = logicCollect.randMake()
    }else{
        enSelection.value = (mostRecentSend(recentMovesMyCount,resultsHistry.value.phase,5,"ON"))
    }
        getEnStatus.statusAtkDefCahnge(250+rand(-50,50),100)////
}//ずんだやんの思考パターンとステータス


function ganji(){
    if ((resultsHistry.value.phase) < 20){
        enSelection.value   = logicCollect.drawMake(mySelection.value)//思考
    }else{
        enSelection.value  = Number(mostRecentSend(recentMovesMyCount,resultsHistry.value.phase,5,"ON"))
    }
        //getEnstasus.statusAtkDefCahnge(250+rand(-50,50),100)////
}//ガンジーの思考パターンとステータス

function god(){
    enSelection.value = logicCollect.randMake()
    enSelection.value =Number(junkenTypeGodLogic(recentMovesMyCount,recentMovesEnCount, 
                                                    resultsHistry.value.phase,4))
}//神の思考パターンとステータス