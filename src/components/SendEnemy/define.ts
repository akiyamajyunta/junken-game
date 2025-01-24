import { ref } from 'vue';


export const noHoverColor = "black";
export const HoverColor = "red";

export const color = ref<{
    dog: string;
    zunda: string;
    ganji: string;
    god: string;
}>({
    dog: noHoverColor,
    zunda: noHoverColor,
    ganji: noHoverColor,
    god: noHoverColor
})
