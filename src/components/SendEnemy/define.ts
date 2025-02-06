import { ref } from 'vue';


export const noHoverColor = "black";
export const HoverColor = "yellow";

export const color = ref<{
    dog: string;
    zunda: string;
    monk: string;
    god: string;
}>({
    dog: noHoverColor,
    zunda: noHoverColor,
    monk: noHoverColor,
    god: noHoverColor
})
