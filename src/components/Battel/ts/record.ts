import { ref } from 'vue';
import { ResultsHistry,stasusBar }from  './type';
import { getMyStatus,getEnStatus } from './stasus';

export const resultsHistry = ref<ResultsHistry>({
    win: 0, lose: 0, draw: 0, phase:0, phaseSub : 0
})

export const gage = ref<stasusBar>({
    myLfe: getMyStatus.hp, enLife: getEnStatus.hp , ability: 0,
})


export const recentMovesMyCount:number[] = [] //今までの自分の手すべてを記録
export const recentMovesEnCount:number[]=[]//今までの敵の手すべてを記録
export const winOrLoseCount:number[] =[]//今までの勝敗を記録
