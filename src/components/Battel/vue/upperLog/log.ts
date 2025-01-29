
import { myStatus,enStatus } from "../gameMaineLosic"
export const VictoryOrDefeat = ["あいこ","かち","まけ"]



class a {
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
    reset(){
         this.news = "最初はグー"
    }
    }

export const upperLogs  = new a()