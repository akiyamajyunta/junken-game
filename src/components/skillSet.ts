import { ref } from 'vue';
import {
    isBetween,
} from  './calculation';

export const SkillName = ref<string>("")

export function ultimateSkillname(a: number, b: number){
    if(a == 0){
        if (isBetween(b, 0, 28)){
            return "No Limit"
        }else if(isBetween(b, 29, 59)){
            return "大凶斬り"
        }else if(isBetween(b, 60,99)){
            return "超集中 氷の呼吸"
        }else if(isBetween(b, 100, 100)){
            return "超武神破斬"
        }}
    else if(a == 1){
        if (isBetween(b, 0, 28)){
            return "No Limit"
        }else if(isBetween(b, 29, 59)){
            return "鉄塊"
        }else if(isBetween(b, 60, 99)){
            return "消力"
        }else if(isBetween(b, 100, 100)){
            return "凶戦士の甲冑"
        }}}