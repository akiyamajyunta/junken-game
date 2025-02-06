import { ref } from 'vue';
import { myStatus,recordLast } from '../vue/gameMaineConstant';
import { recentMovesEnCount,recentMovesMyCount } from './record';
import { gameLogic } from './gameBasicsLogic';



export function winMake(hands:number):number{
      if (hands == 0){
            return  2
      }else{
            return  hands - 1
      }
}//勝つ手を選ぶ  //0 gu 1. tyoki 2 paaaa

export function loseMake(hands:number):number{
      if (hands == 2){
            return  0
      }else{
            return  hands + 1
      }
}//まける手を選ぶ

export function randMake():number {
      return  Math.floor(Math.random() * 3);//ランダムに手札を選ぶ  //enemySend
}

export  function SendHands(hands:number):number{
      if(myStatus.value.buff.berserk == false){
            return hands
   }else(myStatus.value.buff.berserk == true)
            return Math.floor(Math.random() * 3);
}


   

function randNumber(maxDmg:number, minDmg:number):number {
   return Math.trunc(Math.random() * (maxDmg - minDmg) + minDmg);//数の乱数
}




export function mostRecentSend():number{
   const LimitObj = []
         if(recordLast.value <= 5){
                  for (let i = 0; i <= recordLast.value; i++){
                           LimitObj.push(recentMovesMyCount[i]); 
         }
         }else{ 
                  for (let i = recordLast.value - 2; i <= recordLast.value; i++){
                           LimitObj.push(recentMovesMyCount[i]);
         }
         }
         const LimitObjWant0 =  LimitObj.filter(item => item === 0).length
         const LimitObjWant1 =  LimitObj.filter(item => item === 1 ).length
         const LimitObjWant2 =  LimitObj.filter(item => item === 2 ).length

         const myCountDictionary: { [key: number]: number } = { 0:  LimitObjWant0 , 1: LimitObjWant1, 2: LimitObjWant2 };
         const sortMyCountDictionary  = Object.entries(myCountDictionary).sort((a, b) => b[1] - a[1])
         return winMake(Number(sortMyCountDictionary[0][0]))
}





export function junkenTypeGodLogic():number {
         if(patternGuess() > 2){
               return (recentMovesMyCount[recordLast.value])
         }else if(patternGuess() < -2){
               return loseMake(recentMovesMyCount[recordLast.value])
         }else{  
            if(patternOder() > 1){
               return winMake(winMake(recentMovesEnCount[recordLast.value]))
            }else if(patternOder() < -1){
               return  winMake(loseMake(recentMovesEnCount[recordLast.value]))
            }else{
                  if((recentMovesMyCount[recordLast.value-1]) + (recentMovesMyCount[recordLast.value]) == 0){
                     const rand_point = ref<number>(randNumber(0,1000))
                     if(rand_point.value <= 228){
                        return  winMake(Number(recentMovesMyCount[recordLast.value]))
                     }else if(22.9 < Number(rand_point.value) && Number(rand_point.value) < 771){
                        return  loseMake(Number(recentMovesMyCount[recordLast.value]))
                     }else{
                           return randMake()
                     } 
                  }else{
                     return mostRecentSend()
                  }
            }
         }
}




function patternGuess():number{
         const checkPoint= ref<number>(0)
   for (let i =  recordLast.value - 3 ; i <= recordLast.value - 1  ;i++){
      if(gameLogic(recentMovesMyCount[i],recentMovesMyCount[i+1]) == 1){
                  checkPoint.value +=1
         }else if(gameLogic(recentMovesMyCount[i],recentMovesMyCount[i+1]) == 2){
                  checkPoint.value -=1
         }else{
                  checkPoint.value = 0
         }
   }     return   checkPoint.value 
}

   //drown 0 win : 1 lose : 2 

   function  patternOder():number{
         const checkPoints = ref<number>(0)
   for (let i =  recordLast.value - 3 ; i <= recordLast.value - 1  ;i++){
      if(gameLogic(recentMovesMyCount[i+1],recentMovesEnCount[i]) == 1){
               checkPoints.value += 1
      }else if(gameLogic(recentMovesMyCount[i+1],recentMovesEnCount[i]) == 2){
               checkPoints.value -=1
      }else{
               checkPoints.value = 0
      }
   }  return   checkPoints.value 
}


