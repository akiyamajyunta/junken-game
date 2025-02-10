import { brain } from './characterSelection';
import { gameLogicLog } from './gameBasicsLogic'
import { recentMovesMyCount,recentMovesEnCount }  from './record'
import { gameFinishJudge } from './gameFinish'
import { getSkillId, getBuff,skillOnetherEfeect } from './skill';
import { underLogs,btnText,mySelection, enSelection, myStatus } from '../vue/gameMaineConstant';
import { SendHands } from './logic';
import { recordLast } from '../vue/gameMaineConstant';




export function pon(enemyId:number){
    myStatus.value.step()//buffのtrueandfalse
    brain(enemyId)//敵の思考呼び出し
    recentMovesMyCount.push(mySelection.value)
    recentMovesEnCount.push(enSelection.value)
    recordLast.value = recentMovesMyCount.length-1
    gameLogicLog(SendHands(mySelection.value),enSelection.value)//勝ち、負けの結果、回数、の記録,ダメージの計算等
    gameFinishJudge()
}

export function useSkill() {
    if(getSkillId() !== 0){
        underLogs.usingSkill()
        myStatus.value.setBuff(getSkillId());
        myStatus.value.buff = getBuff(getSkillId());
        skillOnetherEfeect(getSkillId());
        myStatus.value.usingabillityPointReset();
        btnText.value = "Gage Stop"
        myStatus.value.abilityPointStop = false
        gameFinishJudge();
    }
}

