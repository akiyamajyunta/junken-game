import { isBetween } from "../../ts/calculation"
import { myStatus } from "../../ts/status"
import { abilitySelection } from "../../ts/gameBasicsLogic"
import { gage } from "../../ts/record"


export const  enemyName = ["犬","ずんだやん","ガンジー","神"]



class skills{
a :number;
name : string;
constructor(){
    this.a = 0;
    this.name = "No limit"
}
change(){
    if(abilitySelection.value == 0){
        if (isBetween(gage.value.ability, 0, 28)){
            this.name =  "No limit"
        }else if(isBetween(gage.value.ability, 29, 59)){
            this.name =  "大凶斬り"
        }else if(isBetween(gage.value.ability, 60,99)){
            this.name =  "集中氷の呼吸"
        }else if(isBetween(gage.value.ability, 100, 100)){
            this.name =  "超武神破斬"
        }
    }else if(abilitySelection.value == 1){
        if (isBetween(gage.value.ability, 0, 28)){
            this.name = "No Limit"
        }else if(isBetween(gage.value.ability, 29, 59)){
            this.name = "鉄塊"
        }else if(isBetween(gage.value.ability, 60, 99)){
            this.name = "消力"
        }else if(isBetween(gage.value.ability, 100, 100)){
            this.name = "凶戦士の甲冑"
    }}}

}

export const skill = new skills()


