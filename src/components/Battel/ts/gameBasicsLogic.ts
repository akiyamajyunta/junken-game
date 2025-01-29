import {resultsHistory,totalRecord}  from './record'
import {displayPositionMove} from './move';
import { DmgMoving } from '../vue/movingDmg/movingDmg';
import { ref } from 'vue';
import { myStatus, enStatus } from './status';
import { myAttack,enAttack } from './status';
import { upperLogs } from '../vue/upperLog/log';
import { skill } from '../vue/nameLog/name';
import { lowLogs } from '../vue/underLog/log';

export const mySelection = ref<number>(0)
export const abilitySelection = ref<number>(0)
export const abilitySelectionSub = ref<number>(3)


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

export function gameLogicLog(mySend: number, enemySend: number,enemyId:number){
    const ponLog = ref<number>(gameLogic(mySend,enemySend))
    switch(ponLog.value){//あいこ
        case 0:
            resultsHistory.value.draw  ++
            break
        case 1:
            resultsHistory.value.win ++ 
            enStatus.hpReduce(myAttack.value)//勝ち
            DmgMoving()
            break
        case  2:
            resultsHistory.value.lose ++
            myStatus.hpReduce(enAttack.value)//まけ
            myStatus.abilityPointAdd(30)
            skill.change()
            displayPositionMove()
            DmgMoving()
            break
    }         
            lowLogs.pons(ponLog.value)
            upperLogs.pons(ponLog.value)
            totalRecord(ponLog.value)   
            resultsHistory.value.phase ++
            myStatus.buffRest --
}


