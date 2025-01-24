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
export const me = [me_];
export const actionIcon = [ken,tate]


import { photo } from "@/components/Battel/ts/type"
import { ref }      from 'vue';

export const enemyImagesTest = ref<photo>({phot:[inu, zunda, gandhi, god],key:0});

export const handsTest =ref<photo>({ phot :[gu, choki, pa],key:0} );

export const actionsTest =ref<photo>({ phot :[ken,tate],key:0} );