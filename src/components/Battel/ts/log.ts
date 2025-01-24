import { ref } from "vue";
import { sendEnemyname } from "./name";
import enemyIcon from "../vue/Icon/enemyIcon.vue";
import { battelReslut } from "./pon";
import { getEnStatus,getMyStatus } from "./stasus";
import { battelColor } from "./move";
//battelFontColor()

export const log = ref<string>("")


export function changeTakeStand(abilitySelection: number){
    if(abilitySelection === 0 ){
        return "武器を構えた。攻撃力アップ"     
    }else{
        return "身を構えた。防御力アップ"
    }
}


export function gameOver(myLife:number,enLife:number,log:string,enName:string){
    if(myLife <= 0){
            return "やぶれた...."
    }else if(enLife <= 0){
            return enName+"をたおした"
    }else{
        return log
    }
}

export function gamefinishe(myLife:number,enLife:number,log:string){
    if(myLife <= 0){
        return "YOU LOSE"
}else if(enLife <= 0){
        return "YOU WIN"
}else{
    return log
}
}

