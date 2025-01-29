import { brain } from './charaSelection';
import { enSelection } from '../vue/gameMaineLosic';
import { myAttackUpdate,enAttackUpdate} from './status';
import { gameLogicLog} from './gameBasicsLogic'
import { mySelection } from '../vue/gameMaineLosic';
import {recentMovesMyCount,recentMovesEnCount}  from './record'
import { gameFinishJudge } from '../vue/gameFinish/gameFinish';

// import { skill } from '../vue/nameLog/name';
// import { lowLogs } from '../vue/underLog/log';

export function pon(enemyId:number){
    enAttackUpdate()
    myAttackUpdate()
    recentMovesMyCount.push(mySelection.value)
    recentMovesEnCount.push(enSelection.value)
    brain(enemyId)//敵の思考呼び出し
    gameLogicLog(mySelection.value, enSelection.value, enemyId)//勝ち、負けの結果、回数、の記録,ダメージの計算等
    gameFinishJudge() 
   // skill.change()//スキルの名前が変わる}
}


