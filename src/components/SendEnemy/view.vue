<template>
    <div class="setPosition">
        <div class="main">
            <v-container>
                <div class="text-zone mx-auto">
                        <a class="flex justify-center">{{ comment }}</a>
                        <a class="flex justify-center">{{name}}</a>
                </div>
                <div class="setIconFlex mx-auto">
                    <div class="setIconGrid mx-auto">
                        <div class="flex justify-center w-100">
                            <v-card :style="{'background-color':color.dog , 'border': '3px solid rgb(255, 255, 255)'}"
                                class="enemy"
                                @mouseover="dogHover"
                                @mouseleave="dogleave"
                                :href="buildUrl(0, textInput)"
                                image="@/imgs/inu.png"></v-card>
                            <v-card :style="{'background-color': color.zunda, 'border': '3px solid rgb(255, 255, 255)'}"
                                class="enemy"
                                @mouseover="zundaHover"
                                @mouseleave="zundaleave"
                                :href="buildUrl(1, textInput)"
                                image="@/imgs/zunda_mochi.png"></v-card >
                        </div>
                        <div class="flex justify-center  w-100">
                            <v-card :style="{'background-color': color.monk, 'border': '3px solid rgb(255, 255, 255)'}"
                                class="enemy"
                                @mouseover="monkHover"
                                @mouseleave="monkleave"
                                :href="buildUrl(2, textInput)"
                                image="@/imgs/gandhi.png"></v-card
                            >
                            <v-card :style="{'background-color':  color.god, 'border': '3px solid rgb(255, 255, 255)'}"
                                class="enemy"
                                @mouseover="godHover"
                                @mouseleave="godleave"
                                :href="buildUrl(3, textInput)"
                                image="@/imgs/character_cthulhu_azathoth.png"></v-card>
                        </div>
                    </div>
                </div>
        </v-container>
        </div>
    </div> 

           
</template>

<script setup lang="ts">
    import { ref} from 'vue';
    import { useRoute } from 'vue-router';
    import { color, noHoverColor, HoverColor } from './define';
   

    const route = useRoute();
    const textInput = route.query.name as string;
    
    let comment= ref<string>("たたかいたい相手をえらんでください");
    let name = ref<string>("");
  

    function buildUrl(enemyId: number, name: string) {
        return `http://localhost:3000/battel?enemyId=${enemyId}&name=${name}`;
    }

    function dogHover(){
        comment.value = "ワン！ワン！...グググ..うううう...バゥ";
        name.value ="-犬-" 
        color.value.dog = HoverColor
    }
        
    function zundaHover(){
        comment.value = "僕と一緒にあそぶのだ";
        name.value ="-ずんだやん-" 
        color.value.zunda = HoverColor
    }
    
    function monkHover(){
        comment.value = "暴力野郎は私の世界最強格闘技[ヨガ]で殲滅だ！" 
        name.value ="-高貴なる僧侶-" 
        color.value.monk = HoverColor
    }
    
    function godHover(){
        comment.value = "தீர்ப்பு நேரத்தில் உனக்கு மரணம்"
        name.value ="-神-" 
        color.value.god = HoverColor
    }
    function dogleave(){
        color.value.dog = noHoverColor
    }

    function zundaleave(){
        color.value.zunda = noHoverColor
    }

    function monkleave(){
        color.value.monk = noHoverColor
    }

    function godleave(){
        color.value.god = noHoverColor
    }


</script>
    
<style>
.setPosition{
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgb(255, 255, 255);
    justify-content: center;
    }
.main{ 
    height:90%; 
    aspect-ratio: 3/ 2;
    margin-top:3%;
    display: flex;
    justify-content: center;
    background-color: rgb(0, 0, 0);
}
.text-zone{
    margin-top: 3%;
    height: 10%;
    display: grid;
    width: 80%;
    background-color: rgb(0, 0, 0);
    border: 3px solid white;
}
.setIconGrid{
    margin-top: 0%;
    width:  80%;
    height: 80%;
    display: grid;
}
.setIconFlex{
    width: 80%;
    height: 80%;
    display: flex;
}
.enemy {
    height: 80%;
    display: flex;
    aspect-ratio:1;
    margin: 30px;
}

</style>