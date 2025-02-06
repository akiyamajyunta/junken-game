import { myStatus ,enStatus} from "../vue/gameMaineConstant";
import { DmgMoving } from "./move";

export type Stance = {
    name: string,
    explanation: string,
    atkRate: number,
    defRate:number, 
}

export type Buff = {
    name: string,
    limit: number,
    explanation: string,
    atkRate: number,
    defRate: number,
    poison :boolean,
    poisonDmg :number,
    berserk:boolean,
    curse:boolean,
}


type Skill = {
    name: string,
    explanation:String,
    buff: Buff
}

export const stance :Stance[] =[
    {name:"攻めの姿勢",explanation:"攻撃力1.5倍、防御力0.8倍",atkRate:1.5, defRate:0.8},
    {name:"守りの姿勢",explanation:"攻撃力0.8倍、防御力1.5倍",atkRate:0.8, defRate:1.5},
    {name:"何もしない姿勢",explanation:"",atkRate:1, defRate:1}
]

export function getBuff(id: number): Buff {
    const buffs: Buff[] = [
        {name: "", limit: 0, explanation: "", atkRate: 1.0, defRate: 1.0, poison :false, poisonDmg:0,berserk:false,curse:false},
        {name: "大凶斬り",  limit:0,explanation: "", atkRate: 1.0, defRate: 1.0, poison :false,poisonDmg:0,berserk:false,curse:false},
        {name: "集中氷の呼吸", limit:3, explanation: "攻撃力1.5倍", atkRate: 1.5, defRate: 1, poison :false,poisonDmg:0,berserk:false,curse:false},
        {name: "超武神破斬", limit:5, explanation: "攻撃力2倍,防御力低下", atkRate: 2, defRate: 0.05, poison :false,poisonDmg:0,berserk:false,curse:false},
        {name: "鉄塊", limit:1,explanation: "ダメージ無効",  atkRate: 1, defRate: 10000, poison :false,poisonDmg:0,berserk:false,curse:false},
        {name: "消力", limit:3,explanation: "防御力、攻撃力上昇",  atkRate: 2, defRate: 5, poison :false,poisonDmg:0,berserk:false,curse:false},
        {name: "凶戦士の甲冑", limit:999,explanation: "防御力、攻撃力上昇。バーサク，毒、ノロイ",  atkRate: 10, defRate: 10, poison :true,poisonDmg:1000,berserk:true,curse:true},
    ];
    return buffs[id];
} 


export function getSkill(id:number): Skill{
    const skills: Skill[] = [
        {name: "No limit", explanation: "スキルが溜まってません", buff: getBuff(id)},
        {name: "大凶斬り", explanation: "単体に大ダメージ", buff: getBuff(id)},
        {name: "集中氷の呼吸", explanation: "鬼退治用専用格闘技。攻撃が上がり、敵の防御力が下がります", buff:  getBuff(id)},
        {name: "超武神破斬", explanation: "単体に特大ダメージ、攻撃力が上がります。", buff: getBuff(id)},
        {name: "鉄塊", explanation: "諜報機関御用達。ダメージを無効化します。", buff: getBuff(id)},
        {name: "消力", explanation: "中国4000年の奥義。攻撃と防御力が上がります。", buff:  getBuff(id)},
        {name: "凶戦士の甲冑", explanation: "撃たれた 鳥のような 優雅さで 雨に耐え", buff:  getBuff(id)},
    ];
    return skills[id]
};
export function skillOnetherEfeect(skillId:number){
    if(skillId==1){
        enStatus.value.takeDmg(1000)
        DmgMoving(1)
    }else if(skillId==1){
        enStatus.value.takeDmg(3000)
        DmgMoving(1)
    }
}





function isBetween(value:number, min:number, max:number) {
    return value >= min && value <= max;
}

export function getSkillId(): number {
    let nameId = 0;
    if(myStatus.value.stance == 0){
        if (isBetween(myStatus.value.abilityPoint, 0, 28)){
            nameId = 0
        }else if(isBetween(myStatus.value.abilityPoint, 29, 59)){
            nameId = 1
        }else if(isBetween(myStatus.value.abilityPoint, 60,99)){
            nameId = 2
        }else if(isBetween(myStatus.value.abilityPoint, 100, 100)){
            nameId = 3
        }
    } else if (myStatus.value.stance == 1){
        if (isBetween(myStatus.value.abilityPoint, 0, 28)){
            nameId = 0
        }else if(isBetween(myStatus.value.abilityPoint, 29, 59)){
            nameId = 4
        }else if(isBetween(myStatus.value.abilityPoint, 60, 99)){
            nameId = 5
        }else if(isBetween(myStatus.value.abilityPoint, 100, 100)){
            nameId = 6
        }
    }
                return nameId
}

