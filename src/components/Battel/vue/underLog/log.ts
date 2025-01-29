import { enemyName } from "../nameLog/name";
import {
    abilitySelection,
    myAttack,
    enAttack,
    myStatus,
    enStatus
} from "../gameMaineLosic";


export function getResultLog(result: number, enemyName: string): string {
    if(result === 0){
        return "あいうちー"
    }else if(result === 1){
        return enemyName +"に"+myAttack.value+"のダメージを与えた"
    }else if (result === 2){
        return enemyName + "の攻撃"+"あなたに" + enAttack.value + "のダメージ"
    } else {
        return `result: ${result}`
    }
}

export class s {
    news:string;
    enemyId: number;

    constructor(enemyId:number){
        this.enemyId = enemyId
        this.news = enemyName[enemyId] + "が現れた"
    }
    pons(result:number ){
        if(result === 0){
            this.news = "あいうちー"
        }else if(result === 1){
            this.news =  enemyName[this.enemyId]+"に"+myAttack.value+"のダメージを与えた"
        }else if (result === 2){
            this.news =  enemyName[this.enemyId]+"の攻撃"+"あなたに"+enAttack.value+"のダメージ"
        }}
    gameFinish(){
        if(myStatus.value.hp <= 0){
            this.news= "やぶれた...."
        }else if(enStatus.value.hp <= 0){
            this.news =enemyName[this.enemyId]+"をたおした"
        }else{
            this.news =  this.news
        }}
    takeStand(){
        if(abilitySelection.value === 0){
            this.news = "武器を構えた。攻撃力アップ"
        }else if(abilitySelection.value === 1){
            this.news = "身を構えた。防御力アップ"
        }
    }
    reset(){
        this.news = enemyName[0] + "が現れた"
    }
    }