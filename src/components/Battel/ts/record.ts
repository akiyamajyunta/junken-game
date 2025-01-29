import { ref } from 'vue';
import { ResultsHistory, statusBar  }from  './type';
import { myStatus, enStatus } from './status';


export const resultsHistory = ref<ResultsHistory>({
    win: 0, lose: 0, draw: 0, phase:0,
})

export const gage = ref<statusBar>({
    myLfe: myStatus.getNormedHp(), enLife: enStatus.getNormedHp() , ability:  myStatus.abilityPoint 
})

export  function gageUpdate(){
    gage.value.myLfe = myStatus.getNormedHp()
    gage.value.enLife = enStatus.getNormedHp()
    gage.value.ability = myStatus.abilityPoint 
}

export const recentMovesMyCount:number[] = [] //今までの自分の手すべてを記録
export const recentMovesEnCount:number[]=[]//今までの敵の手すべてを記録
export const winOrLoseCount:number[] =[]//今までの勝敗を記録


export function totalRecord(number:number){
    winOrLoseCount.push(number)
}
//win 0 lose : 1 drown : 2 

