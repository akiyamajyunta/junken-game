
import { mydmgDisplay,endmgDisplay } from '../vue/gameMaineConstant';
import { ref } from "vue"
import { MoveDmg, Position2D } from "../ts/type"




export const MovingDmg = ref<MoveDmg>({topPosition: 0, fontSize: 0})
export const displayPosition = ref<Position2D>({x: 0, y:0 });

export function DmgMovingSend(pon:number){

    if(pon ==1){

    }else if(pon == 2){
    
    }
}
//1勝ち2負け


export function DmgMoving (pon:number){     
    if(pon ==1){
        mydmgDisplay.value = false
        endmgDisplay.value = true
    }else if(pon == 2){
        mydmgDisplay.value = true
        endmgDisplay.value = false
    }else{
        mydmgDisplay.value = false
        endmgDisplay.value = false
    }
    setTimeout(function() {
        MovingDmg.value.fontSize = 30  
        MovingDmg.value.topPosition= -25;
    }, 30);
    setTimeout(function() {
        MovingDmg.value.fontSize = 0; 
        MovingDmg.value.topPosition= 15;
    }, 1000);
}



export function displayPositionMove(){
    let x = 0
    let y = -2
    for (let i = 0; i < 6; i++){
        setTimeout(
            function(){
                displayPosition.value.x = x
                displayPosition.value.y = y
                y = y*-1
                x = x*-1
            },
            50 * i
        );
    }
    setTimeout(
        function(){
            displayPosition.value.x = 0
            displayPosition.value.y = 0
        },
        310
    )
}



