import inu from "@/imgs/inu.png"
import zunda from "@/imgs/zunda_mochi.png"
import gandhi from "@/imgs/gandhi.png"
import god from "@/imgs/character_cthulhu_azathoth.png"
import me_ from "@/imgs/kaisya_desk3_man.png" 
import gu from "@/imgs/janken_gu.png";
import choki from "@/imgs/janken_choki.png";
import pa from "@/imgs/janken_pa.png";
import ken from "@/imgs/game_ken.png"
import tate from "@/imgs/game_tate.png"



export const enemyImages = [inu, zunda, gandhi, god];
export const hands = [gu, choki, pa];
export const me = me_;
export const action = [ken,tate]



export function gamelogic(mySend: number, enemySend: number): string {
    if (mySend == enemySend) {
        return "あいこ";
    } else if 
       ((mySend-enemySend+3)%3 == 2){
        return "かち";
    } else{
        return "まけ"
    }
}

//0,1,2,
//4,3,4


//2,0,1