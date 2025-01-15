//@@@@@@@@@@@@@様々な思考@@@@@@@@@@@
import { isSatisfiesExpression } from 'typescript';
import { ref,  } from 'vue';
import {rand,} from  './calculation';

const make_hands = ref<number>(0)

   export class CompetitionLogic{
      BattleMindset :number
      win :number
      Lose:number
      Dorown :number

   constructor(){
      this.BattleMindset =0
      this.win = 0
      this. Lose = 0
      this.Dorown = 0
   }
   win_make(hands:number){
      if (hands == 0){
      make_hands.value = 2
         return  make_hands.value
   }else{
      make_hands.value = hands-1
            return  make_hands.value
         }
   }//勝つ手を選ぶ  //0 gu 1. tyoki 2 paaaa

   lose_make(hands:number){
      if (hands == 2){
      make_hands.value = 0
         return  make_hands.value
   }else{
      make_hands.value = hands +1
            return  make_hands.value
         }
   }//まける手を選ぶ

   draw_make(hands:number){
      make_hands.value = hands
      return  make_hands.value 
   }//必ずあいこになる

   rand_make(){
      make_hands.value  = Math.floor(Math.random() * 3);//ランダムに手札を選ぶ  //enemySend
      return  make_hands.value
   }
   }


const logic_collect = new CompetitionLogic()

//最頻値を返す
   export function mostRecentSend(obj:{[key: number]: number},phase:number,hopePhase:number,count_switch:string){
   const values_obj =  Array.from(Object.values(obj))//オブジェクトからvalueを取得
   let values_obj_second: number[] = []

   if(count_switch == "ON"){
      if(phase<hopePhase){
               for (let i = 0; i < phase+1; i++) {
                  values_obj_second.push(values_obj[i]); 
      }
      }else{ 
         for (let i = ((phase+1)-hopePhase); i <= phase+1; i++) {
                  values_obj_second.push(values_obj[i]); 
}
}
}else if (count_switch == "OFF"){//直近XXターン以内ではなく全てのターンの値
      for (let i = 0; i < phase; i++) {
         values_obj_second.push(values_obj[i]); 
   }}

   const RECENT_MOVES_COUNT_0 = values_obj_second.filter(item => item === 0 ).length
   const RECENT_MOVES_COUNT_1 = values_obj_second.filter(item => item === 1 ).length
   const RECENT_MOVES_COUNT_2 = values_obj_second.filter(item => item === 2 ).length

   const  myobject2 : { [key: number]: number } = { 0:  RECENT_MOVES_COUNT_0, 1: RECENT_MOVES_COUNT_1, 2:RECENT_MOVES_COUNT_2 };

   const sortedEntries3 = Object.entries(myobject2 ).sort((a, b) => b[1] - a[1])

    return logic_collect.win_make(Number(sortedEntries3[0][0]))

}

export function Win_or_lose_conversion(win_or_lose_results:String){
      if(win_or_lose_results == "かち"){
            return 0
      }else if(win_or_lose_results == "まけ"){
            return 1
      }else if(win_or_lose_results == "あいこ"){
            return 2

      }
}

//win_or_lose_results:String

export function Win_or_lose_record(obj:{[key: number]: number},phase:number,hope:number){
   const Win_or_lose_Record_obj =  Array.from(Object.values(obj))
   let Win_or_lose_Record_continuous = 100
    for (let i = phase-hope; i < phase; i++) {
        
        if(((Win_or_lose_Record_obj[i])-(Win_or_lose_Record_obj[phase])) === 0){
         Win_or_lose_Record_continuous +=  0
      
        }else{
         Win_or_lose_Record_continuous +=  1
        }
    }
      if(Win_or_lose_Record_continuous === 100){
            return Win_or_lose_Record_obj[phase]//勝ち負けの連続判断//win or  lose or drown 1=まけ　2 = あいこ
      }else{
         
   }}//結果が連続したときの判断


//RECENT_MOVES_MY_COUNT

export function junken_type_god_logic(RECENT_MOVES_MY_COUNT:{[key: number]: number},RECENT_MOVES_EN_COUNT:{[key:number]:number},Win_or_lose_Record:{[key:number]:number},phase:number,hope:number){
   const RECENT_MOVES_MY_COUNT_Record_obj =  Array.from(Object.values(RECENT_MOVES_MY_COUNT))
   const  RECENT_MOVES_EN_COUNT_Record_obj =  Array.from(Object.values(RECENT_MOVES_EN_COUNT))
   const patten_type_order = ref<number>(0)
   const patten_type_guess = ref<number>(0) 
   const lose_jugement = ref<number>(Number(Win_or_lose_record(Win_or_lose_Record,phase,2)))

   if (lose_jugement.value = 1){

   for (let i = phase-hope; i < phase -1  ; i++){
               const a = ref<number>(i)
                  a.value = a.value+1
         if ((((RECENT_MOVES_MY_COUNT_Record_obj [i]) - (RECENT_MOVES_MY_COUNT_Record_obj [a.value])+3) %3) == 2){
                        patten_type_order.value +=1
         }else if(((( (RECENT_MOVES_MY_COUNT_Record_obj [i])+3) - (RECENT_MOVES_MY_COUNT_Record_obj [a.value])) %3) == 1){
                        patten_type_order.value -=1}
         else{
                        patten_type_order.value = 0
             }
         }
           if(patten_type_order.value > 2){
         // return   RECENT_MOVES_MY_COUNT_Record_obj [phase-1]
                     return  logic_collect.draw_make(Number(RECENT_MOVES_MY_COUNT_Record_obj [phase-1]))//return "順番"
           }else if( patten_type_order.value < -2){
                     return  logic_collect.lose_make(Number(RECENT_MOVES_MY_COUNT_Record_obj [phase-1]))//return "逆順"
           }else{  //"順番、逆順どちらでもないのなら勝ち読みor負けよみ"

            for(let r = phase-hope; r < phase-1 ;r++){
               const getCounterMove = ref<number>(r)
               getCounterMove.value = getCounterMove.value + 1
               if ((((RECENT_MOVES_MY_COUNT_Record_obj[getCounterMove.value])-(RECENT_MOVES_EN_COUNT_Record_obj[r])+3)%3) == 2){
                              patten_type_guess .value += 1
               }else if((((RECENT_MOVES_MY_COUNT_Record_obj[getCounterMove.value])-(RECENT_MOVES_EN_COUNT_Record_obj[r])+3)%3) == 1){
                              patten_type_guess.value -= 1 
               }else{       
                              patten_type_guess.value = 0
                   }
               }
               if(patten_type_guess.value > 2){
                           return logic_collect.win_make(logic_collect.win_make(Number(RECENT_MOVES_EN_COUNT_Record_obj[phase-1])))
               //return "勝ち読み"
               }else if(patten_type_guess.value < -2){
                           return  logic_collect.win_make(logic_collect.lose_make(Number(RECENT_MOVES_EN_COUNT_Record_obj[phase-1])))
                       // return "負け読み"
               }else{//"更にどちらでもないのならあいこが続く場合に計算"
                  const RECENT_MOVES_MY_COUNT_Record_obj =  Array.from(Object.values(Win_or_lose_Record))
                  if((RECENT_MOVES_MY_COUNT_Record_obj[phase-1]/2) + (RECENT_MOVES_MY_COUNT_Record_obj[phase-2]/2) == 2){
                        const rand_point = ref<number>(rand(0,1000))
                        if(rand_point.value <= 228){
                              return  logic_collect.win_make(Number(RECENT_MOVES_MY_COUNT_Record_obj [phase-1]))
               }else if(22.9 < Number(rand_point.value) && Number(rand_point.value) < 771){
                              return  logic_collect.lose_make(Number(RECENT_MOVES_MY_COUNT_Record_obj [phase-1]))//あいこに負ける手を
               }else{
                    return  logic_collect.rand_make()
               }
                           // 22.9 771
               } else{ //"あいこが続かない場合は最頻値を返す"
                           return mostRecentSend(RECENT_MOVES_MY_COUNT,phase,hope,"ON")} //return"どちらでもない"
               }
           }
         }
      else{
         return  logic_collect.rand_make()
      }}
