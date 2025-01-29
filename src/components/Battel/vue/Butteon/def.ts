import { ref } from "vue";

export const noPushColor = "black";
export const PushColor = "green";

export const color = ref<{
    Atk: string;
    Def: string;
}>({
    Atk: noPushColor,
    Def: noPushColor,
 })
