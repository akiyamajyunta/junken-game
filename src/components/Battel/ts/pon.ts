import { brain } from './charaSelection';
import { gameLogicLog } from './gameBasicsLogic'
import { mySelection, enSelection, myStatus,openLimitSkilltarch} from '../vue/gameMaineLosic';
import { recentMovesMyCount,recentMovesEnCount }  from './record'
import { gameFinishJudge } from './gameFinish'
import { getSkillId, getBuff,skillOnetherEfeect } from './skill';
import { underLogs } from '../vue/gameMaineLosic';
import { myLogicCollect } from '../vue/gameMaineLosic';

export function pon(enemyId:number){
    OpenLimitSkilltarch()
    myStatus.value.step()
    recentMovesMyCount.push(mySelection.value)
    recentMovesEnCount.push(enSelection.value)
    brain(enemyId)//敵の思考呼び出し
    gameLogicLog(myLogicCollect.SendHands(mySelection.value),enSelection.value, enemyId)//勝ち、負けの結果、回数、の記録,ダメージの計算等
    gameFinishJudge()
}

export function useSkill() {
    if( getSkillId() !== 0){
    underLogs.usingSkill()
    myStatus.value.setBuff(getSkillId());
    myStatus.value.buff = getBuff(getSkillId());
    skillOnetherEfeect(getSkillId());
    myStatus.value.usingabillityPointReset();

    gameFinishJudge();
    OpenLimitSkilltarch()
}}


export function OpenLimitSkilltarch(){
    if(myStatus.value.buff.limit > 0){
        openLimitSkilltarch.value = true
    }else if(myStatus.value.buff.limit == 0){
        openLimitSkilltarch.value = false
    }
}//期限付きスキルの表示するかしないか
