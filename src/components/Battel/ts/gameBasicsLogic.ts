import {resultsHistry,winOrLoseCount}  from './record'
import { sendEnemyname } from './name';
import { enDmgMoving, myDmgMoving ,displayPositionMove} from './move';
import { ref } from 'vue';
import { gage } from './record';
import { log } from './log';
import { addLimit } from './calculation';
import { myAttack,enAttack ,} from './dmgCalculation';
import { getMyStatus, getEnStatus } from './stasus';
export const mySelection = ref<number>(0)

export const abilitySelection = ref<number>(0)
export const abilitySelectionSub = ref<number>(3)



export function gamelogic(mySend: number, enemySend: number): string {
    if (mySend == enemySend) {
        return "あいこ"
    } else if 
       ((mySend - enemySend + 3) % 3 == 2){
        return "勝ち"
    } else{
        return "負け"
    }
}


export function gameLogicLog(mySend: number, enemySend: number,enemyId:number){
    const ponLog =  gamelogic(mySend,enemySend)
    switch(ponLog){
        case "あいこ":
            winOrLoseCount.push(2)
            resultsHistry.value.draw  ++
            log.value = "あいうちー"
            break
        case  "負け":
            getMyStatus.hpReduce(enAttack.value)
            gage.value.myLfe = getMyStatus.hp
            displayPositionMove()
            myDmgMoving()
            winOrLoseCount.push(1)
            resultsHistry.value.lose ++
            gage.value.ability += addLimit(gage.value.ability,30,100)//スキル貯め
            log.value = sendEnemyname(enemyId)+"の攻撃"+"あなたに"+enAttack.value+"のダメージ"
            break
        case "勝ち":
            getEnStatus.hpReduce(myAttack.value)
            gage.value.enLife = getEnStatus.hp
            enDmgMoving()
            winOrLoseCount.push(0)
            resultsHistry.value.win ++ 
            log.value = sendEnemyname(enemyId)+"に"+myAttack.value+"のダメージを与えた"
            break
    }            
}

