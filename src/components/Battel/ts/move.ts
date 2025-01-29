import { ref } from 'vue';
import { displayPositionX,displayPositionY } from '../vue/movingDmg/movingDmg';

export const battleColor = ref<string>("while")
const colorPad = ["Red"," orange", "yellow", "green", "blue","indigo", "purple","black","while"]//9個（８）
const loopNumber = ref<number>(0)

// export function enDmgMoving (){
//     enMoving.value.dmgResult =  myAttack.value                                              
//     enMoving.value.topPosition = -15
//     enMoving.value.fontSize = 100
//     setTimeout(function() {
//         enMoving .value.fontSize = 0  
//         enMoving .value.topPosition= 15;
// }, 1000);
// }

// export  function  myDmgMoving(){
//         myMoving.value.dmgResult = enAttack.value
//         myMoving.value.topPosition  = 10
//         myMoving.value.fontSize = 100
//         setTimeout(function() {
//             myMoving.value.topPosition  = 40;    
//             myMoving.value.fontSize = 0     
//     }, 1000);
//     }
// export function DmgMoving (){                                            
//     Moving.value.topPosition = -15
//     Moving.value.fontSize = 100
//     setTimeout(function() {
//         Moving.value.fontSize = 0  
//         Moving.value.topPosition= 15;
// }, 1000);
// }
export function displayPositionMove(){
            let x = 0
            let y = -2
                for (let i = 0; i < 6; i++){
                setTimeout(function(){
                displayPositionX.value = x
                displayPositionY.value = y
                y = y*-1
                x = x*-1
                },50*i)
            }  setTimeout(function(){
                displayPositionX.value = 0
                displayPositionY.value = 0},310)
            }
export function battelFontColor(result:string){
    if (result === "YOU WIN"){
                for (let i = 0; i < 600; i++){
                    setTimeout(function(){
                    loopNumber.value = (loopNumber.value + 1) % 9; 
                    battleColor .value = colorPad[loopNumber.value] 
                    console.log(loopNumber.value )
                },3000)}
    }else{}
    }//勝ったら{Win}を光らせたい