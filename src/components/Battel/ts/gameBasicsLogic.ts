import {displayPositionMove, DmgMoving} from './move';
import { ref } from 'vue';
import { upperLogs,underLogs } from '../vue/gameMaineLosic';

import {
    resultsHistory,
    myStatus,
    enStatus,
    mySelectionPhotoId
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
            resultsHistory.value.draw++
            break
        case 1:
            resultsHistory.value.win++ 
            enStatus.value.takeDmg(myStatus.value.atk())
            break
        case  2:
            resultsHistory.value.lose++
            myStatus.value.takeDmg(enStatus.value.atk())
            myStatus.value.abilityPointAdd(30)
            displayPositionMove()
           
            break}
    DmgMoving(ponLog.value)
    upperLogs.pons(ponLog.value)
    underLogs.pons(ponLog.value)
    mySelectionPhotoId.value = mySend
    myStatus.value.takepoison()

    //totalRecord(ponLog.value)   
    resultsHistory.value.phase++
 
}
//this.buff.atkRate
// myStatus.value.takeDmg(enStatus.value.atk())
// DmgMoving(2)