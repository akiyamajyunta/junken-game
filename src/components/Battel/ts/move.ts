import { MoveDmg } from '../ts/type';
import { ref } from 'vue';
import { myAttack,enAttack,lifegageCalculate } from './dmgCalculation';
import { getMyStatus,getEnStatus } from './stasus';
import { gage } from './record';



export const enMoving = ref<MoveDmg>({topPosition: 0, fontSize: 0, dmgResult: myAttack.value })
export const myMoving = ref<MoveDmg>({topPosition: 0, fontSize: 0, dmgResult: enAttack.value })
export const displayPositionX = ref<number>(0)
export const displayPositionY = ref<number>(0)
export const battelColor = ref<string>("while")
const colorPad = ["Red"," orange", "yellow", "green", "blue","indigo", "purple","black","while"]//9個（８）
const loopNumber = ref<number>(0)

export function enDmgMoving (){
    enMoving.value.dmgResult =  myAttack.value  
    gage.value.enLife  -= (lifegageCalculate(gage.value.enLife,myAttack.value))                                               
    enMoving.value.topPosition = -15
    enMoving.value.fontSize = 100
    setTimeout(function() {
        enMoving .value.fontSize = 0 //後で変える      
        enMoving .value.topPosition= 15;
}, 1000);
}

export  function  myDmgMoving(){
        myMoving.value.dmgResult = enAttack.value
        gage.value.myLfe -= (lifegageCalculate(gage.value.myLfe,enAttack.value))
        myMoving.value.topPosition  = 10
        myMoving.value.fontSize = 100
        setTimeout(function() {
            myMoving.value.topPosition  = 40;    
            myMoving.value.fontSize = 0     
    }, 1000);
    }
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
                    battelColor.value = colorPad[loopNumber.value] 
                    console.log(loopNumber.value )
                },3000)}
    }else{}
    }