<template>
    <div :style="{position:'relative',left:display_position_x +'%' ,top:display_position_y+'%' ,transition: 'top 0.3s ease , left 0.3s ease'}" class="flex justify-center items-center">  
        <v-card  color="green" height="80%" width="80%">
                <v-card :style="{border: '3px solid white', borderRadius: '8px',background: 'rgb(0, 0, 255)' }" class="text-center rounded-0">
                    <a>{{game_result}}</a>
                </v-card>
                    <v-card :style="{width:100 +'%',  transition: 'width 0.5s ease', height:'10px', border:'1px solid white'}" color="black">
                    <v-card :style="{width:life.en +'%',  transition: 'width 0.5s ease', height:'10px' }" color="red"></v-card><!--敵のライフゲージ---->
                    </v-card>
                    <v-card :style="{border: '3px solid white', borderRadius: '8px' ,background: 'rgb(0, 0, 255)'}" width="150px">
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
                                <v-card :style="{width:specialAtkGauge +'%',maxWidth: '100%',  transition: 'width 0.5s ease', height:'10px'}" color="red">
                                </v-card><!--ひっさつゲージ-->
                            </v-card>
                                <v-card :style="{border: '3px solid white', borderRadius: '8px' ,background: 'rgb(0, 0, 255)'}" class="text-center">
                                    <p>{{SkillName}}</p>
                                </v-card>
                        </div>
                            <v-card :style="{ border: '3px solid black', borderRadius: '8px',}" color="white" class="item mt-16"><!--敵の手札-->
                                <v-img :src="enemyHandIcon" cover/>
                            </v-card>
                        <v-cal :style="{position:'relative'}" >
                            <div :style="{top:en_dmg_result_position+'%' ,position: 'absolute',zIndex:'1000',fontSize: en_dm_size+'px', transition: 'top 0.3s ease',display: 'flex', 
                                            justifyContent: 'center', alignItems: 'center', width: '100%'}" >
                                <p class="text-color">{{en_dmgResult}}</p>
                            </div> 
                            <v-card :style="{ border: '3px solid black', borderRadius: '8px',}" color="white" class="item">
                                    <v-img :src="enemyIcon" cover/><!--敵のアイコン-->
                            </v-card>
                            <v-card :style="{border: '3px solid white', borderRadius: '8px',background: 'rgb(0, 0, 255)'}" width="100%" height="30" class="text-center">
                                <p>{{enemyname}}</p>     
                            </v-card>
                        </v-cal>
                    </div>
                        <div class="flex justify-around mt-4" height="200">
                            <v-cal :style="{position:'relative'}" >
                                <div :style="{top:my_dmg_result_position+'%' ,position:'absolute',zIndex:'10000',fontSize: my_dm_size +'px',transition: 'top 0.3s ease',
                                                display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}" >
                                    <p class="text-color"> {{my_dmgResult}}</p>
                                </div> 
                                <v-card :style="{ border: '3px solid black', borderRadius: '8px',}" color="white" class="item mt-16">
                                    <v-img :src="myIcon" cover/><!--自分のアイコン-->
                                </v-card>
                                <v-card :style="{border: '3px solid white', borderRadius: '8px',background: 'rgb(0, 0, 255)'}" width="100%" height="30" class="text-center">
                                    <p>{{textInput}}</p>     
                                </v-card>
                            </v-cal>
                            <v-card :style="{ border: '3px solid black', borderRadius: '8px',}" color="white" class="item">
                                <v-img :src="myHandIcon" cover/><!--自分の手札-->
                            </v-card>
                            <div class="item"></div><!--位置調整用-->
                        </div>
                            <div class="action_switch">
                                <v-row  justify="center" class="switch block mt-8"  width="15px" >
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
                            </div>
                            <div >
                                <v-card :style="{width:100 +'%',  transition: 'width 0.5s ease', height:'10px', border:'1px solid white'}" color="black">
                                    <v-card :style="{width:life.my +'%',  transition: 'width 0.5s ease', height:'10px' }" color="red"></v-card><!--自分ののライフゲージ---->
                                </v-card>
                                <v-card :style="{border: '3px solid white', borderRadius: '8px',background: 'rgb(0, 0, 255)'}" height="80">
                                    <a>{{log}}</a>
                                </v-card> 
                            </div> 
        </v-card>
</div>
  
</template>

<script setup lang="ts">
import { ref, } from 'vue';
import { useRoute } from 'vue-router';
import{
   Win_or_lose_conversion,
   mostRecentSend,
   CompetitionLogic,
   junken_type_god_logic,
  
} from './logic';
import{
    gamelogic,

} from './game';
import {
    enemyImages,
    hands,
    me,
    action,
   } from './img';

import {
    rand,
    calculatemyDamage,
    lifegageCalculate,
    addLimit,
    changeSkill,
    phaseJudgement,
} from  './calculation';

import {
    ultimateSkillname,
} from './skillSet';
import {
    sendEnemyname,
    MyStatus,
    EnStatus,
    totallingResults,
} from  './sentence';

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

const my_dmgResult = ref<number>(0)
const en_dmgResult = ref<number>(0)

const enemyname =  sendEnemyname(enemyId);

const specialAtkGauge = ref<number>(0);//自分のひっさつゲージ

const life =ref<{
    en: number,
    my: number,
}>({en:100,my:100})//ゲージ

const game_result = ref<string>("最初はグー");

const results = ref<{
win:number,
lose:number,
drown:number,
phase:number,
}>({win:0,lose:0,drown:0,phase:0})

const RECENT_MOVES_MY_COUNT:{[key:number]:number} ={}//今までの自分の手すべてを記録
const RECENT_MOVES_EN_COUNT:{[key:number]:number} ={}//今までの敵の手すべてを記録
const Win_or_lose_COUNT:{[key:number]:number} ={}//今までの勝敗を記録
const phase_COUNT:{[key:number]:number} ={}//今までのフェイズを記録

const log = ref<string>()

const  getResults = new  totallingResults()

const getCompetitionLogic = new CompetitionLogic()


function logReset(){
    log.value = ""
}

//自分のステータス
const getStatus = new MyStatus();
//敵のステータス
const  getEnstasus = new  EnStatus()
//console.log("敵の攻撃力"+getEnstasus.atk)

const makeSelection = ref<number>()
const makeSelectionRand = ref<number>()
const reason = ref<string>("true")//正気の有無


function send(s:number) {
  makeSelection.value = s
  makeSelectionRand.value =rand(0,3);
  phase_COUNT[results.value.phase] = results.value.phase
}

function my(){
    if(reason.value === "true" ){
        mySend.value =  Number(makeSelection.value);
        myHandIcon.value = hands[Number(makeSelection.value)];
      
    }else if (reason.value === "false"){
        mySend.value =  Number(makeSelectionRand.value);
        myHandIcon.value = hands[Number(makeSelectionRand.value)];
    }
        getStatus.stasusAtkChange(250+rand(-50,50))
}

function inu() {
      enemySend.value = getCompetitionLogic.rand_make()
      getEnstasus.statusAtkDefCahnge(250+rand(-50,50),100)////

}//犬の思考パターンとステータス

function zunda(){
    if ((results.value.phase) < 5){
        enemySend.value  = getCompetitionLogic.rand_make()//思考
    }else{
        enemySend.value = Number(mostRecentSend(RECENT_MOVES_MY_COUNT,results.value.phase,5,"ON"))
    }
        getEnstasus.statusAtkDefCahnge(250+rand(-50,50),100)////
}//ずんだやんの思考パターンとステータス


function ganji(){
    if ((results.value.phase) < 20){
        enemySend.value  = getCompetitionLogic.draw_make(mySend.value)//思考
    }else{
        enemySend.value = Number(mostRecentSend(RECENT_MOVES_MY_COUNT,results.value.phase,5,"ON"))
    }
        getEnstasus.statusAtkDefCahnge(250+rand(-50,50),100)////
}//ガンジーの思考パターンとステータス
function god(){
        enemySend.value =Number(junken_type_god_logic(RECENT_MOVES_MY_COUNT,RECENT_MOVES_EN_COUNT, 
                                                    Win_or_lose_COUNT,
                                                    results.value.phase,4))
        getEnstasus.statusAtkDefCahnge(250+rand(-50,50),100)
}//神の思考パターンとステータス

function enemyStatusHpSend(s:number){
    if(s == 0){
        getEnstasus.statusHpCahnge(5000,5000)//犬のHPは1000
    }else if(s == 1){
        getEnstasus.statusHpCahnge(1000,1000)
    }else if(s == 2) {
        getEnstasus.statusHpCahnge(1000,1000)
    }else if (s == 3){
        getEnstasus.statusHpCahnge(1000,1000)
    } 
}

enemyStatusHpSend(enemyId)

function brain(nou:number){
    if (nou == 0){
        inu()}
    else if (nou == 1){
        zunda()} 
    else if (nou == 2){
        ganji()}
    else if (nou == 3){
        god()
    }
}//キャラ選択時における思考の呼び出し。

const abilityValue = ref<number>();
const abilityValueSub = ref<number>();

function ability(z:number){
    abilityValue.value = z;
    actionIcon.value = action[Number(abilityValue.value)]
    specialAtkGauge.value = changeSkill(Number(abilityValue.value),Number(abilityValueSub.value),specialAtkGauge.value)
    abilityValueSub.value = Number(abilityValue.value)
    SkillName.value =  String(ultimateSkillname(Number(abilityValue.value), specialAtkGauge.value))
    logReset()
    if(abilityValue.value == 0){
        log.value = "貴方は剣を構えた"
        getStatus.statusSklAtkChange()
    } else {
        log.value = "貴方は盾を構えた"
        getStatus.statusSklDefChange()
    } }
// }//アビリティの選択

const SkillName = ref<string>("")

const JudgementSwitch = ref<string>()

actionIcon.value = action[0]



function Overdrive() {
    
    getResults.phaseSubReset()
    if(SkillName.value == "大凶斬り"){
        getEnstasus.hpReduce(lifegageCalculate((getEnstasus.hp),Number(300)))
        life.value.en = (getEnstasus.hp/getEnstasus.maxHp)*100
    }else if(SkillName.value == "超集中 氷の呼吸"){
        getResults.phaseSubReset
        JudgementSwitch.value = SkillName.value
    }else if(SkillName.value == "超武神破斬"){
        JudgementSwitch.value = SkillName.value
    }else if(SkillName.value == "鉄塊"){
        getStatus.statusPaAtkDefCahnge(1.5,1)
    }else if(SkillName.value == "消力"){
        JudgementSwitch.value = SkillName.value
    }else if(SkillName.value == "凶戦士の甲冑"){
        reason.value = "false"
        JudgementSwitch.value = SkillName.value
    }
        specialAtkGauge.value = 0;
        SkillName.value = String(ultimateSkillname(Number(abilityValue.value), specialAtkGauge.value))
    }
function turnlimitSkill(){  
    if(JudgementSwitch.value == "超集中 氷の呼吸"){//攻撃力1.5倍、防御２倍が5ターン
        if(phaseJudgement(getResults.phaseSub,5) == true){
            getStatus.statusPaAtkDefCahnge(1.5,2)
        }else{
            getStatus.statusPaAtkDefCahnge(1,1)}
        }else if(JudgementSwitch.value ==  "超武神破斬"){
        if(phaseJudgement(getResults.phaseSub,5) == true){
            getStatus.statusPaAtkDefDebuff(1.3,1.3)
        }else{
            getStatus.statusPaAtkDefCahnge(1,1)}
    }else if(JudgementSwitch.value ==  "消力"){
        if(phaseJudgement(getResults.phaseSub,3) == true){
            getStatus.statusPaAtkDefCahnge(2,100)
        }else{
            getStatus.statusPaAtkDefCahnge(1,1)
        }
    }else if(JudgementSwitch.value ==  "凶戦士の甲冑"){
            getStatus.statusPaAtkDefDebuff(1.5,1.1)
            getStatus.hpReduce(lifegageCalculate((getStatus.hp),Number(300))) 
            life.value.my = (getStatus.hp/getStatus.maxHp)*100
   
    }
}

function winlog(){
    logReset()
    en_dmgResult.value =  lifegageCalculate(getEnstasus.hp,Number(Math.trunc(calculatemyDamage(
        getStatus.atk,
        getStatus.paSklAtk,
        getStatus.sklAtk,
        getEnstasus.def,
        getEnstasus.paSklDef,
        getEnstasus.sklDef
    ))))//攻撃力,攻撃スキル,防御力,防御スキル
        log.value = enemyname + "に" + String(en_dmgResult.value) + "のダメージ"
        en_dmg_moveing()
}//勝った時のログ

function loselog(){
    logReset()
    my_dmgResult.value = lifegageCalculate(getStatus.hp,Number(Math.trunc(calculatemyDamage(
    getEnstasus.atk,
    getEnstasus.paSklAtk,   
    getEnstasus.sklAtk,
    getStatus.def,
    getStatus.paSklDef,
    getStatus.sklDef,
    ))))//攻撃力,攻撃スキル,防御力,防御スキル
     log.value =String(my_dmgResult.value) + "のダメージ"
     my_dmg_moveing()
     display_position_move()
}//まけた時のログ

function drowlog(){
    logReset()
    log.value  = "相打ち"
}//あいこの時のログ





const  en_dmg_result_position  = ref<number>(15)
const  my_dmg_result_position  = ref<number>(40)
const  en_dm_size = ref<number>(0)
const  my_dm_size = ref<number>(0)


function en_dmg_moveing(){
    en_dmg_result_position.value = -15
    en_dm_size.value = 100
    setTimeout(function() {
    en_dm_size.value = 0 //後で変える      
    en_dmg_result_position.value = 15;
}, 1000);
}

function my_dmg_moveing(){
    my_dmg_result_position.value = 10
    my_dm_size.value = 100
    setTimeout(function() {
    my_dm_size.value = 0//後で変える      
    my_dmg_result_position.value = 40;
}, 1000);
}
const display_position_x = ref<number>(0) 
const display_position_y = ref<number>(0) 


function display_position_move(){
    
let x = 0
let y = -2
    for (let i = 0; i < 6; i++){
    setTimeout(function(){

    display_position_x.value = x
    display_position_y.value = y
    y = y*-1
    x = x*-1
    },50*i)
}  setTimeout(function(){
    display_position_x.value = 0
    display_position_y.value = 0},310)
}

//@@@@@@@@@@@@@@@@ここからはゲームの外側。出力部@@@@@@@@@@@@@@@@@@
function resetState(){
    getStatus.statusSklAtkChange()
    ability(0);
    log.value = ""
    specialAtkGauge.value = 0;
    myHandIcon.value = hands[0];
    enemyHandIcon.value = hands[0];
    actionIcon.value = action[0];
    SkillName.value =  String(ultimateSkillname(Number(abilityValue.value), specialAtkGauge.value))
    log.value = enemyname + "があらわれた"
}
resetState()



function game(){
    my()
    turnlimitSkill()
    SkillName.value =  String(ultimateSkillname(Number(abilityValue.value), specialAtkGauge.value))
    brain(enemyId)//キャラの呼び出し。今は0で犬が呼び出されてる。
    RECENT_MOVES_EN_COUNT[results.value.phase] =  enemySend.value//今まで敵が出した手の記録
    RECENT_MOVES_MY_COUNT[results.value.phase] = mySend.value//今まで自分が出した手の記録
    enemyHandIcon.value = hands[enemySend.value];
    game_result.value = gamelogic(mySend.value, enemySend.value)
    
    if (game_result.value == "かち"){
        winlog()
        getResults.winAdd()
        results.value.win = getResults.win
        getEnstasus.hpReduce(lifegageCalculate((getEnstasus.hp),Number(en_dmgResult.value)))
        life.value.en = (getEnstasus.hp/getEnstasus.maxHp)*100       
    } else if (game_result.value == "まけ") {
        loselog()
        getResults.loseAdd()
        results.value.lose = getResults.lose
        getStatus.hpReduce(lifegageCalculate((getStatus.hp),Number(my_dmgResult.value))) 
        life.value.my = (getStatus.hp/getStatus.maxHp)*100
        specialAtkGauge.value += addLimit(specialAtkGauge.value,30,100)//被ダメージ時に溜まる
    } else {//あいこのとき
        drowlog()
        getResults.drownAdd()
        results.value.drown = getResults.drown
   }//勝敗の記録
        getResults.phaseAdd()
        Win_or_lose_COUNT[results.value.phase] = Number(Win_or_lose_conversion(game_result.value))
        results.value.phase = getResults.phase//フェイズを記録
}

if( life.value.my == 10000){
    window.location.href="http://localhost:3000/Win?endingResult=You%20Win";
}
    else if( life.value.en == 10000){
        window.location.href="http://localhost:3000/Win?endingResult=You%die";
}else{
    
}


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
top :-50%;
width: 100%;
}
.text-color{
    font-family:  Century;
    color:rgb(255, 255, 255);
    -webkit-text-stroke: 3px black;
}
.display_button{
position: relative;
bottom:50px
}
.action_switch{
padding-bottom:30px ;
}
*{outline: solid 3px red;}
</style>