import { brain } from './charaSelection';
import { enSelection } from './charaSelection';
import { myAttackUpdate,enAttackUpdate} from './status';
import { mySelection ,gameLogicLog} from './gameBasicsLogic'
import {recentMovesMyCount,recentMovesEnCount}  from './record'
import { gameFinishJudge } from '../vue/gameFinish/gameFinish';
import {  gageUpdate } from './record';
import { skill } from '../vue/nameLog/name';
import { lowLogs } from '../vue/underLog/log';

export function  pon(enemyId:number){
    enAttackUpdate()
    myAttackUpdate()
    recentMovesMyCount.push(mySelection.value)
    recentMovesEnCount.push(enSelection.value)
    brain(enemyId)//敵の思考呼び出し
    gameLogicLog(mySelection.value,enSelection.value,enemyId)//勝ち、負けの結果、回数、の記録,ダメージの計算等
    gageUpdate()
    gameFinishJudge() 
    skill.change()//スキルの名前が変わる}
}


