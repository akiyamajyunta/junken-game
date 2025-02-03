// //@@@@@@@@@@@@@様々な思考@@@@@@@@@@@
 import { ref } from 'vue';
 import { gameLogic } from './gameBasicsLogic';
 import { enLogicCollect } from '../vue/gameMaineLosic';
 import { myStatus } from '../vue/gameMaineLosic';

const makeHands = ref<number>(0)


export class CompetitionLogic{
      win :number
      Lose:number
      Dorown :number
   constructor(){
      this.win = 0
      this.Lose = 0
      this.Dorown = 0
   }
   winMake(hands:number){
      if (hands == 0){
            return  2
   }else{
            return  hands-1
         }
   }//勝つ手を選ぶ  //0 gu 1. tyoki 2 paaaa

   loseMake(hands:number){
      if (hands == 2){
            return  0
   }else{
            return  hands + 1
         }
   }//まける手を選ぶ

   drawMake(hands:number){
            return  hands 
   }//必ずあいこになる
   randMake(){
            return  Math.floor(Math.random() * 3);//ランダムに手札を選ぶ  //enemySend
   }
   SendHands(hands:number){
      if(myStatus.value.buff.berserk == false){
            return hands
   }else(myStatus.value.buff.berserk == true)
            return Math.floor(Math.random() * 3);
   }
}

   

function rand(maxDmg:number, minDmg:number) {
   return Math.trunc(Math.random() * (maxDmg - minDmg) + minDmg);//数の乱数
}


export function mostRecentSend(recentMovesMyCount:number[],phase:number,hopePhase:number,count_switch:string){
   const LimitObj = []
      if(count_switch == "ON"){
         if(phase<hopePhase){
                  for (let i = 0; i < phase; i++){
                           LimitObj.push(recentMovesMyCount[i]); 
         }}else{ 
                  for (let i = ((phase+1)-hopePhase-1); i < phase; i++){
                           LimitObj.push(recentMovesMyCount[i]);}
      }}else if (count_switch == "OFF"){//直近XXターン以内ではなく全てのターンの値
                  for (let i = 0; i < phase; i++) {
                           LimitObj.push(recentMovesMyCount[i]); 
         }
      }
   const LimitObjWant0 =  LimitObj.filter(item => item === 0).length
   const LimitObjWant1 =  LimitObj.filter(item => item === 1 ).length
   const LimitObjWant2 =  LimitObj.filter(item => item === 2 ).length

   const myCountdDctionary : { [key: number]: number } = { 0:  LimitObjWant0 , 1: LimitObjWant1, 2: LimitObjWant2 };
   const sortmyCountdDctionary  = Object.entries(myCountdDctionary).sort((a, b) => b[1] - a[1])

         return enLogicCollect .winMake(Number(sortmyCountdDctionary[0][0]))
 }

 export function winOrLoseRecord(winRecordObj:number[],phase:number){
   let WinOrLoseRecordContinuous = 100
      for (let i = phase-2; i <= phase-1; i++){
         if(((winRecordObj[i])-(winRecordObj[i+1])) === 0){
               WinOrLoseRecordContinuous += 0
         }else{
               WinOrLoseRecordContinuous += 1
         }  
      }
         if(WinOrLoseRecordContinuous === 100){
               return true //winRecordObj[phase-3] 勝ち負けの連続判断//win or  lose or drown 1=まけ　2 = あいこ
         }else{
               return false
      }}//結果が連続したときの判断



export function junkenTypeGodLogic(recentMovesMyCount:number[],recentMovesEnCount:number[],phase:number,hope:number){
         const pattenTypeOrder = ref<number>(0)
         const pattenTypeGuess = ref<number>(0) 

   pattenTypeOrder.value = patternChacker(phase,hope,recentMovesMyCount,recentMovesMyCount)
           if(pattenTypeOrder.value > 2){
                     return  enLogicCollect .winMake(Number(recentMovesMyCount[phase-1]))// "順番"
           }else if(pattenTypeOrder.value < -2){
                     return  enLogicCollect .winMake(Number(recentMovesMyCount[phase-1]))//  "逆順"

           }else{  //"順番、逆順どちらでもないのなら勝ち読みor負けよみ"
                  pattenTypeGuess.value = patternChacker(phase+1,hope,recentMovesEnCount,recentMovesMyCount)
                        if(pattenTypeGuess.value > 2){
                                    return enLogicCollect .winMake(enLogicCollect .loseMake(recentMovesEnCount[phase-2]))//負けよみ
                        }else if(pattenTypeGuess.value< -2){
                                    return  enLogicCollect .winMake(enLogicCollect .winMake(recentMovesEnCount[phase-2]))//勝ち読み

                        }else{//console.log("どちらでもない")//あいこが続くのなら
                              if((recentMovesMyCount[phase-1]/2) + (recentMovesMyCount[phase-2]/2) == 2){
                                    const rand_point = ref<number>(rand(0,1000))
                                    if(rand_point.value <= 228){
                                                return  enLogicCollect .winMake(Number(recentMovesMyCount [phase-1]))
                                                }else if(22.9 < Number(rand_point.value) && Number(rand_point.value) < 771){
                                                         return  enLogicCollect .loseMake(Number(recentMovesMyCount [phase-1]))//あいこに負ける手を

                                                }else{
                                                         return enLogicCollect .randMake()
                                                      } 
                                                               }else{

                                                               return mostRecentSend(recentMovesMyCount,phase,hope,"ON")
                                                               }}}
                                                            }

function patternChacker(phase:number,hope:number,beforList:number[],afterList:number[]){
                        const checkPoint= ref<number>(0)
   for (let i = (phase-1)-hope; i < phase -2  ; i++){
      if(gameLogic(beforList [i],afterList[i+1])== 2){
                              checkPoint.value +=1
   }else if(gameLogic(beforList [i],afterList[i+1]) == 1){
                              checkPoint.value -=1}
      else{
                              checkPoint.value = 0
         }
}
                     return   checkPoint.value 
}

//1 かち　２　負け
