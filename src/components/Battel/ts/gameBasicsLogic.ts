import {totalRecord}  from './record'
import {displayPositionMove} from './move';
import { DmgMoving } from '../vue/movingDmg/movingDmg';
import { ref } from 'vue';
import { upperLogs } from '../vue/upperLog/log';
import { getResultLog } from '../vue/underLog/log';

const enemyName = ["犬", "ずんだやん", "ガンジー", "神"];

import {
    myAttack,
    enAttack,
    resultsHistory,
    myStatus,
    enStatus,
    underLog
} from '../vue/gameMaineLosic';


export function gameLogic(mySend: number, enemySend: number): number {
    if (mySend == enemySend) {
        return  0              
    } else if 
       ((mySend - enemySend + 3) % 3 == 2){
        return  1                   
    } else{
        return  2                       
    }}
    
//win 0 lose : 1 drown : 2 

export function gameLogicLog(
    mySend: number,
    enemySend: number,
    enemyId: number
) {
    const ponLog = ref<number>(gameLogic(mySend, enemySend))
    switch(ponLog.value){//あいこ
        case 0:
            resultsHistory.value.draw  ++
            break
        case 1:
            resultsHistory.value.win ++ 
            enStatus.value.hpReduce(myAttack.value)//勝ち
            DmgMoving()
            break
        case  2:
            resultsHistory.value.lose ++
            myStatus.value.hpReduce(enAttack.value)//まけ
            myStatus.value.abilityPointAdd(30)
            displayPositionMove()
            DmgMoving()
            break
    }
    //lowLogs.pons(ponLog.value)
    underLog.value = getResultLog(ponLog.value, enemyName[enemyId])
    console.log(underLog.value);
    upperLogs.pons(ponLog.value)
    totalRecord(ponLog.value)   
    resultsHistory.value.phase ++
    myStatus.value.buffRest --
}


