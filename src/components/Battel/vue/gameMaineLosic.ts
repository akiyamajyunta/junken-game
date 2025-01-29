import { ref } from "vue"
import { ResultsHistory } from '../ts/type';
import { Status } from "../ts/status";


export const enSelection = ref<number>(0)//今はグーが出てます
export const mySelection = ref<number>(0)
export const abilitySelection = ref<number>(0)
export const abilitySelectionSub = ref<number>(3)
export const battleColor = ref<string>("while")
export const myAttack = ref<number>(0);
export const enAttack = ref<number>(0);

export const resultsHistory = ref<ResultsHistory>({
    win: 0, lose: 0, draw: 0, phase:0,
})

export const myStatus = ref<Status>(new Status());
export const enStatus =  ref<Status>(new Status());

export const underLog = ref<string>("aaaaaaaaaaaaaaaa");