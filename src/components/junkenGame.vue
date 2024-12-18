<template>
    <v-card :style="{border: '3px solid white', borderRadius: '8px',background: 'rgb(0, 0, 255)' }" class="text-center rounded-0">
        <a>{{ result }}</a>
    </v-card>
    <v-card color="green" height="100%">
        <v-card :style="{width:100 +'%',  transition: 'width 0.5s ease', height:'10px', border:'1px solid white'}" color="black">
        <v-card :style="{width:life.en +'%',  transition: 'width 0.5s ease', height:'10px' }" color="red"></v-card><!--敵のライフゲージ---->
        </v-card>
        <v-card :style="{ border: '3px solid white', borderRadius: '8px' ,background: 'rgb(0, 0, 255)'}" width="150px">
            <div :style="{background: 'rgb(0, 0, 255)' }" class="bg-neutral-800 w-32">
                <p>{{"勝利数:"+ results.win }}</p>            
                <p>{{ "負数:" + results.lose }}</p>
                <p>{{ "引き分け数:" + results.drown }}</p>
                <p>{{ "ターン数:" + results.phase }}</p>
            </div>
        </v-card>
        <div class="flex justify-around" height="200">
            <div class="item">
                <v-card :style="{ border: '3px solid black', borderRadius: '8px',}" color="white" class="item mt-16">
                    <v-img :src="actionIcon" cover/><!--攻撃or防御-->
                </v-card>
                <v-card :style="{width:100 +'%',  transition: 'width 0.5s ease', height:'10px', border:'1px solid white'}" color="black">
                    <v-card :style="{width:specialAtk +'%',   maxWidth: '100%',  transition: 'width 0.5s ease', height:'10px'}" color="red">
                    </v-card><!--ひっさつゲージ-->
                </v-card>
                    <v-card :style="{border: '3px solid white', borderRadius: '8px' ,background: 'rgb(0, 0, 255)'}" class="text-center">
                        <p>{{SkillName}}</p>
                    </v-card>
            </div>
                <v-card :style="{ border: '3px solid black', borderRadius: '8px',}" color="white" class="item mt-16"><!--敵の手札-->
                    <v-img :src="enemyHandIcon" cover/>
                </v-card>
            <v-cal>
                <v-card :style="{ border: '3px solid black', borderRadius: '8px',}" color="white" class="item">
                    <v-img :src="enemyIcon" cover/><!--敵のアイコン-->
                </v-card>
                <v-card :style="{border: '3px solid white', borderRadius: '8px',background: 'rgb(0, 0, 255)'}" width="100%" height="30" class="text-center">
                    <p>{{enemyname}}</p>     
                </v-card>
            </v-cal>
        </div>
            <div class="flex justify-around mt-4" height="200">
                <v-cal>
                    <v-card :style="{ border: '3px solid black', borderRadius: '8px',}" color="white" class="item mt-16">
                            <v-img :src="myIcon" cover/>
                    </v-card>
                    <v-card :style="{border: '3px solid white', borderRadius: '8px',background: 'rgb(0, 0, 255)'}" width="100%" height="30" class="text-center">
                        <p>{{textInput}}</p>     
                    </v-card>
                </v-cal>
                <v-card :style="{ border: '3px solid black', borderRadius: '8px',}" color="white" class="item">
                    <v-img :src="myHandIcon" cover/><!--自分の手札-->
                </v-card>
                <div class="item"></div>
            </div>
            <v-row  justify="center" class="switch mt-8">
                <v-btn color="primary" @click="ability(0)">ATK </v-btn>
                <v-btn color="primary" @click="ability(1)">DEF</v-btn>
            </v-row>
            <v-cal>
                <v-row
                    justify="center"
                    class="switch mt-8"
                    @click="game"
                >
                    <v-btn color="primary" @click="send(0)">グー </v-btn>
                    <v-btn color="primary" @click="send(1)">チョキ</v-btn>
                    <v-btn color="primary" @click="send(2)">パー</v-btn>
                </v-row>
                <v-row justify="center" class="switch mt-8" width="100">
                    <v-btn color="primary" @click="Overdrive()">Skill</v-btn>
                </v-row>
            </v-cal>
            <v-card :style="{width:100 +'%',  transition: 'width 0.5s ease', height:'10px', border:'1px solid white'}" color="black">
                <v-card :style="{width:life.my +'%',  transition: 'width 0.5s ease', height:'10px' }" color="red"></v-card><!--自分ののライフゲージ---->
            </v-card>
            <v-card :style="{border: '3px solid white', borderRadius: '8px',background: 'rgb(0, 0, 255)'}" height="80">
                <a>{{log.Actor + log.mydm + log.endm + log.event}}</a>
            </v-card>
    </v-card>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { useRoute } from 'vue-router';
import {
    gamelogic,
    enemyImages,
    hands,
    me,
    action,
} from './game';

import {
    rand,
    calculatemyDamage,
    lifegageCalculate,
    isBetween,
} from  './damage';

import {
    ultimateSkillname,
} from './skillSet';
import {
    sendEnemyname,
    myNameInput,
    sherdData,
} from  './name';



import { el } from 'vuetify/locale';
import { S } from 'node_modules/vite/dist/node/types.d-aGj9QkWt';


const route = useRoute();
const enemyId = Number(route.query.enemyId as string);
const textInput = route.query.name as string;

const enemyIcon = enemyImages[enemyId];
const myIcon = me;
const actionIcon = ref<string>("");

const mySend = ref<number>(0);
const myHandIcon = ref<string>("");
const enemyHandIcon =  ref<string>("");
const enemySend  = ref<number>(0);

//const name = ref<string>("aaa")//名前(仮)
const name = myNameInput(String(""),1)

console.log("sherdData: ", sherdData.myName)//おっかしいねェ

const enemyname =  sendEnemyname(enemyId);

const mydmg = ref<number>(100);
const enemydmg = ref<number>(10);
const specialAtk = ref<number>(0)//自分のひっさつゲージ

const mylife = ref<number>(mydmg.value);//自分のライフゲージ
const enlife = ref<number>(enemydmg.value);//敵のライフゲージ

const life =ref<{
    en: number,
    my: number,
}>({en:100,my:100})//ゲージ




const result = ref<string>("最初はグー");
const results = ref<{
    win: number,
    lose: number,
    drown: number,
    probability:number,
    phase:number,
}>({win: 0, lose: 0, drown: 0, probability:0, phase:0,});

const log = ref<{
    Actor :string,
    my: string,
    en: string,
    mydm: string,
    endm: string,
    event:string,
}>({Actor :"",my: "",en:"",mydm:"",endm:"",event:""});
//ログの表示、Actorは主語を示します。

function logReset(){
    log.value.event=""
    log.value.my = ""
    log.value.en = ""
    log.value.mydm = ""
    log.value.endm = ""

}
//"skill=一時的なスキル
//"paskill=永続的なスキル



//攻撃×攻撃パッシブ×攻撃スキル×防御×防御パッシブ×防御スキル
const mystatus = ref<{//自分のステータス
Atk: number,
PaSklAtk: number,
SklAtk: number,
Def: number,
PaSklDef:number,
SklDef:number,
}>({Atk:300,PaSklAtk:1,SklAtk:1,Def:100,PaSklDef:1,SklDef:1,});

const enstatus = ref<{//敵のステータス
Atk: number,
PaSklAtk: number,
SklAtk: number,
Def: number,
PaSklDef:number,
SklDef:number,
}>({Atk:1,PaSklAtk:1,SklAtk:1,Def:1,PaSklDef:1,SklDef:1,});

//攻撃力と防御のステータス。自身は攻撃力10,防御力10となっています。またスキル関係によるステータスの上昇は1。等倍となっております。

mystatus.value.Atk = rand(250,300)//自身の攻撃力は250-300の乱数を取る

function send(s: number) {
    mySend.value = s;
    myHandIcon.value = hands[s];
};//自分の手札の表示

//@@@@@@@@@@@@@様々な思考@@@@@@@@@@@
function randAtk(){
   enemySend.value = Math.floor(Math.random() * 3);//ランダムに手札を選ぶ
}

function pacifist(){
    enemySend.value = mySend.value
}//必ずあいこになる

function divineMove(){
    if (mySend.value == 0){
        enemySend.value = 2}
        else{
           enemySend.value=mySend.value-1
        }
}//必ず勝つ

function inu() {
    randAtk()
    enstatus.value.Atk = rand(250,320);//犬の攻撃力。250～320
    enstatus.value.Def = 5;//犬の防御
}//犬の思考パターンとステータス

function ganji(){
    pacifist()
}//ガンジーの思考パターンとステータス

function god(){
    divineMove()
}//神の思考パターンとステータス

const abilityValue = ref<number>();

function ability(z:number){
    specialAtk.value = 0//切り替え時にアビリティゲージが0に
    actionIcon.value = action[z];
    abilityValue.value = z;
    log.value.Actor = ""
    if(abilityValue.value == 0){
        logReset()
        log.value.event = "貴方は剣を構えた"
    } else {
        logReset()
        log.value.event = "貴方は盾を構えた"
    }
}//アビリティの選択


 //console.log("アビリティ"+ability)
//const SkillName = ultimateSkillname(0)//スキル名の変更
const SkillName = ref<string>("")

SkillName.value =  String(ultimateSkillname(Number(abilityValue.value),specialAtk.value))

function Overdrive() {
    if(abilityValue.value == 0){
        if(isBetween(specialAtk.value, 29, 60)){
            specialAtk.value = 0;
        }else if(isBetween(specialAtk.value, 61, 89)){
            specialAtk.value = 0;
        }else if(isBetween(specialAtk.value, 90, 99)){
            specialAtk.value = 0;
        }}
    else if(actionIcon.value == "1"){
        if(isBetween(specialAtk.value, 29, 60)){
            specialAtk.value = 0;
        }else if(isBetween(specialAtk.value, 61, 89)){
            specialAtk.value = 0;
        }else if(isBetween(specialAtk.value, 90, 99)){
            specialAtk.value = 0;
        }}
    }   
//課題。ablittyで値がかえって来ず、スキルの選択が出来ない
//ACTOR

function winlog(){
    logReset()
    log.value.Actor = enemyname + "に"
    log.value.endm = String(Math.trunc(calculatemyDamage(
        mystatus.value.Atk,
        mystatus.value.PaSklAtk,
        mystatus.value.SklAtk,
        enstatus.value.Def,
        enstatus.value.PaSklDef,
        enstatus.value.SklDef
    )))//攻撃力,攻撃スキル,防御力,防御スキル
    log.value.event = "のダメージ"
}//勝った時のログ
//status
function loselog(){
    logReset()
    log.value.Actor  = enemyname + "の攻撃"
    log.value.mydm = String(Math.trunc(calculatemyDamage(
        enstatus.value.Atk,
        enstatus.value.PaSklAtk,
        enstatus.value.SklAtk,
        mystatus.value.Def,
        mystatus.value.PaSklDef,
        mystatus.value.SklDef,
    )))//攻撃力,攻撃スキル,防御力,防御スキル
    
    log.value.event = "のダメージ"
}//まけた時のログ

function drowlog(){
    logReset()
    log.value.Actor  = "相打ちだッツッ"
    log.value.event = ""
}//あいこ時のログ


function brain(nou:number){
    if (nou ==0){
        inu()}
    else if (nou == 1){
        ganji()}
    else if (nou == 2){
        god()
    }
}//キャラ選択時における思考の呼び出し。



//const brain = ref<number>(0);//キャラ選択(仮)


//@@@@@@@@@@@@@@@@ここからはゲームの外側。出力部@@@@@@@@@@@@@@@@@@
function resetState(){
    ability(0);
    log.value.event = ""
    specialAtk.value = 0;
    myHandIcon.value = hands[0];
    enemyHandIcon.value = hands[0];
    log.value.event = enemyname + "があらわれた"
}
resetState()//初期は剣を装備。



function game() {
    brain(enemyId)//キャラの呼び出し。今は0で犬が呼び出されてる。
    enemyHandIcon.value = hands[enemySend.value];
    result.value = gamelogic(mySend.value, enemySend.value)
    if (result.value == "かち") {
        winlog()
        results.value.win += 1
        life.value.en -= lifegageCalculate(life.value.en,Number((log.value.endm)))//勝てば敵のライフが減る
    } else if (result.value == "まけ") {
        loselog()
        results.value.lose += 1
        life.value.my -= lifegageCalculate(life.value.my,Number((log.value.mydm)))//負ければ自分のライフが減る
        specialAtk.value += 30
    } else {
        drowlog()
        results.value.drown += 1
   }
   results.value.probability = ((results.value.win+results.value.lose+ results.value.drown)/3)
   results.value.phase = (results.value.win + results.value.lose + results.value.drown)
}


 //勝敗のリザルト(どちらかが0),何故か動かない
if( life.value.my == 10000){
    window.location.href="http://localhost:3000/Win?endingResult=You%20Win";
}
    else if( life.value.en == 10000){
        window.location.href="http://localhost:3000/Win?endingResult=You%die";
}else{
    
}

type ninki = {
    name : string;
    buy: number;
};

const kudamono: ninki[] = [
  { name: "orange", buy: 25 },
  { name: "banana", buy: 20 },
  { name: "apple", buy: 28 }
];

kudamono.sort((a, b) => a.buy-b.buy);

//alert(kudamono);


// alert(keys[0])




</script>

<style>
.item {
    width: 100px;
    height: 150px;
}

.icon {
    background-color: red;
}

.switch{
position: relative;
top :-10%;

}

</style>