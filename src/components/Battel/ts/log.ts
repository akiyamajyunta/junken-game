import { myStatus,enStatus } from "../vue/gameMaineConstant"
export const VictoryOrDefeat = ["あいこ","かち","まけ"]
export const enemyName = ["犬", "ずんだやん", "高貴な僧侶", "神"]


export class upperLog  {
    news:string
    constructor(){
        this.news = "最初はグー"
    }
    pons(result:number){
        this.news = VictoryOrDefeat[result]
    }
    gameFinish(){
        if(myStatus.value.hp <= 0){
            this.news = "YOU LOSE"
        }else if(enStatus.value.hp <= 0){
            this.news = "YOU WIN"
        }else{
            this.news = this.news
        }
    }
}
    
export class underLog {
    news:string;
    enemyId: number;

    constructor(enemyId:number){
        this.enemyId = enemyId
        this.news = enemyName[enemyId] + "が現れた"
    }
    pons(result:number){
        if(result === 0){
            this.news = "あいうちー"
        }else if(result === 1){
            this.news =  enemyName[this.enemyId]+"に"+myStatus.value.viewTakeDmg()+"のダメージを与えた"
        }else if (result === 2){
            this.news =  enemyName[this.enemyId]+"の攻撃"+"あなたに"+ enStatus.value.viewTakeDmg()+"のダメージ"
        }}
    usingSkill(){
        this.news = "スキルを使用した"
    }
    gameFinish(){
        if(myStatus.value.hp <= 0){
            this.news= "やぶれた...."
        }else if(enStatus.value.hp <= 0){
            this.news =enemyName[this.enemyId]+"をたおした"
        }else{
            this.news =  this.news
        }}
    takeStand(){
        if(myStatus.value.stance === 0){
            this.news = "武器を構えた。攻撃力アップ"
        }else if(myStatus.value.stance  === 1){
            this.news = "身を構えた。防御力アップ"
        }
    }
}
