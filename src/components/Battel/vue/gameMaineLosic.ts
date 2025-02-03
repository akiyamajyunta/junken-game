import { ref } from "vue"
import { ResultsHistory, Status } from '../ts/type';
import { tSDeclareFunction } from "@babel/types";
import { upperLog ,underLog} from "../ts/log";
import { CompetitionLogic } from "../ts/logic";


export const enSelection = ref<number>(0)//今はグーが出てます
export const mySelection = ref<number>(0)
export const mySelectionPhotoId = ref<number>(0)

export const battleColor = ref<string>("while")

export const mydmgDisplay = ref<boolean>(true)
export const endmgDisplay = ref<boolean>(true)

export const resultsHistory = ref<ResultsHistory>({
    win: 0, lose: 0, draw: 0, phase:0,
})

export const myStatus = ref<Status>(new Status());
export const enStatus =  ref<Status>(new Status());
export const vewUseDmg = ref<number>(0)

export const recordSkillId = ref<number>(0)
export const openLimitSkilltarch =ref<boolean>(false)

export const upperLogs   = new upperLog()
export const underLogs = new underLog (0)

export const myLogicCollect = new CompetitionLogic()
export const enLogicCollect = new CompetitionLogic()

export const btnText = ref<string>("Stop");

//export const underLog = ref<string>("");
