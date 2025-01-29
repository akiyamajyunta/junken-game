// export  function gageUpdate(){
//     gage.value.myLfe = myStatus.getNormedHp()
//     gage.value.enLife = enStatus.getNormedHp()
//     gage.value.ability = myStatus.abilityPoint 
// }

export const recentMovesMyCount:number[] = [] //今までの自分の手すべてを記録
export const recentMovesEnCount:number[]=[]//今までの敵の手すべてを記録
export const winOrLoseCount:number[] =[]//今までの勝敗を記録


export function totalRecord(number:number){
    winOrLoseCount.push(number)
}
//win 0 lose : 1 drown : 2 

