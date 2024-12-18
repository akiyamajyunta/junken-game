import { ref } from 'vue';
import {
    isBetween,
} from  './damage';

export const SkillName = ref<string>("")

export function ultimateSkillname(a:number,b:number){
    if(a == 0){
        if(isBetween(b, 29, 60)){
            return "1の型"
        }else if(isBetween(b, 61, 89)){
            return "2の型"
        }else if(isBetween(b, 90, 99)){
            return "3の型"
        }}
    else if(a == 1){
        if(isBetween(b, 29, 60)){
            return "4の型"
        }else if(isBetween(b, 61, 89)){
            return "5の型"
        }else if(isBetween(b, 90, 99)){
            return "6の型"
        }}}



 


//武器の番号,整数n,最小値n,最大値n
//if(武器の番号＝１)｛
//  if
// 
// 
// ｝

