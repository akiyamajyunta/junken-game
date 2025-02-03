<template>
    <v-card color="green" height="100%">
        <v-card :style="{background: 'rgb(0, 0, 255)', border: '3px solid white', borderRadius: '8px'}" height="50px">
            <v-card-flat :style="{background: 'rgba(0, 255, 255,0)'}" class="text-center">
                <a class="flex justify-center">{{ comment }}</a>
            </v-card-flat>   
            <v-card :style="{background: 'rgba(0, 0, 255,0)'}" class="text-center">
              <a>{{name}}</a>
            </v-card>
        </v-card>
            <div class="flex justify-center">
                <v-card :style="{'background-color':color.dog}"
                    class="enemy"
                    @mouseover="dogHover"
                    @mouseleave="dogleave"
                    :href="buildUrl(0, textInput)"
                    image="@/imgs/inu.png"></v-card>
                <v-card :style="{'background-color': color.zunda}"
                    class="enemy"
                    @mouseover="zundaHover"
                    @mouseleave="zundaleave"
                    :href="buildUrl(1, textInput)"
                    image="@/imgs/zunda_mochi.png"></v-card >
            </div>
            <div class="flex justify-center">
                <v-card :style="{'background-color': color.ganji}"
                    class="enemy"
                    @mouseover="ganjiHover"
                    @mouseleave="ganjileave"
                    :href="buildUrl(2, textInput)"
                    image="@/imgs/gandhi.png"></v-card
                >
                <v-card :style="{'background-color':  color.god}"
                    class="enemy"
                    @mouseover="godHover"
                    @mouseleave="godleave"
                    :href="buildUrl(3, textInput)"
                    image="@/imgs/character_cthulhu_azathoth.png"></v-card>
            </div>
            <div   class="enemy"><a>div要素</a></div>
            <v-card class="enemy border border-white "><a>カード要素</a></v-card>
    </v-card>           
</template>

<script setup lang="ts">
    import { ref} from 'vue';
    import { useRoute } from 'vue-router';
    import { color, noHoverColor, HoverColor } from './define';
   

    const route = useRoute();
    const textInput = route.query.name as string;
    
    let comment= ref<string>("");
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
    
    function ganjiHover(){
        comment.value = "暴力野郎は私の世界最強格闘技[ヨガ]で殲滅だ！" 
        name.value ="-ガンジー-" 
        color.value.ganji = HoverColor
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

    function ganjileave(){
        color.value.ganji = noHoverColor
    }

    function godleave(){
        color.value.god = noHoverColor
    }


</script>
    
<style>
    .enemy {
        width: 400px;
        height: 400px;
        margin: 30px;
        background-color: aqua;
        border-radius: 20px;
        border: 5px solid white;
    }

</style>