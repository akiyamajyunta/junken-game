import { ref } from "vue"
import { MoveDmg } from "../../ts/type"
export const MovingDmg = ref<MoveDmg>({topPosition: 0, fontSize: 0})

export const displayPositionX = ref<number>(0)
export const displayPositionY = ref<number>(0)

export function DmgMoving (){                                            
    MovingDmg.value.topPosition = -15
    MovingDmg.value.fontSize = 100
    setTimeout(function() {
        MovingDmg .value.fontSize = 0  
        MovingDmg .value.topPosition= 15;
}, 1000);
}

export class xyz{
a:number;
b:number;


constructor() {
 this.a = 10;
 this.b = 10
}
dmgMoving(){
        MovingDmg.value.topPosition = -15
        MovingDmg.value.fontSize = 100
    setTimeout(function() {
        MovingDmg.value.fontSize = 0  
        MovingDmg.value.topPosition= 15;
}, 1000);


}

}