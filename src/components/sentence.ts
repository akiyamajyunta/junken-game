
export function sendEnemyname(z:number){
if(z == 0){
    return "犬"
}else if(z == 1){
    return "ずんだやん"
}else if(z == 2){
    return "ガンジー"
}else if(z == 3){
    return "神"
   }
}

export class MyStatus {
    maxHp:number
    hp:number
    atk: number 
    paSklAtk: number
    sklAtk: number
    def: number
    paSklDef: number
    sklDef: number
    
    constructor(){
        this.maxHp = 5000
        this.hp = 5000
        this.atk = 1
        this.paSklAtk = 1 
        this.sklAtk   = 1
        this.def = 100
        this.paSklDef = 1
        this.sklDef = 1
    }

    hpReduce(hp:number){
        this.hp -= hp
    }

    statusCahnge(atk:number,paSklAtk: number,sklAtk:number,def:number,paSklDef:number,sklDef:number) {
        this.atk = atk
        this.paSklAtk = paSklAtk
        this.sklAtk   = sklAtk
        this.def = def
        this.paSklDef  = paSklDef
        this.sklDef  = sklDef
    }
    stasusAtkChange(atk:number){
            this.atk = atk
    }

    statusSklDefChange(){
        this.sklAtk = 0.8
        this.sklDef = 2
    }
    statusSklAtkChange(){
        this.sklAtk = 1.5
        this.sklDef = 0.8
    }



    stasuspaAtkChange(paSklAtk: number){
        this.paSklAtk = paSklAtk
    }
    stasuspadefChange(paSklDef:number){
        this.paSklDef  = paSklDef
    }
    statusPaAtkDefCahnge(paSklAtk:number,paSklDef:number) {
        this.paSklAtk = paSklAtk
        this.paSklDef = paSklDef
    }
    statusPaAtkDefDebuff(paSklAtk:number,paSklDef:number) {
        this.paSklAtk = this.paSklAtk*paSklAtk
        this.paSklDef = this.paSklDef*paSklDef
    }
    


}

export class EnStatus {
    maxHp:number 
    hp:number
    atk: number 
    paSklAtk: number
    sklAtk: number
    def: number
    paSklDef: number
    sklDef: number
    
    constructor(){
        this.maxHp = 1
        this.hp = 1
        this.atk = 1
        this.paSklAtk = 1
        this.sklAtk   = 1
        this.def = 1
        this.paSklDef = 1
        this.sklDef = 1
    }
    hpReduce(hp:number){
        this.hp -= hp
    }

    statusAtkDefCahnge(atk:number,def:number) {
        this.atk = atk
        this.def = def

    }
    statusHpCahnge(hp:number,maxHp:number){
        this.hp = hp
        this.maxHp= maxHp
    }
    stasuspaAtkChange(paSklAtk: number){
        this.paSklAtk = paSklAtk
    }
    stasuspadefChange(paSklDef:number){
        this.paSklDef  = paSklDef
    }
}

export class totallingResults{
    win: number
    lose: number
    drown: number
    probability:number
    phase:number
    phaseSub:number
 constructor(){
    this.win = 0
    this.lose = 0
    this.drown = 0
    this.probability =0
    this.phase = 0
    this.phaseSub = 100
    }
winAdd(){
    this.win += 1
}
loseAdd(){
    this.lose += 1
}
drownAdd(){
    this.drown += 1
}
probabilityAdd(){
    this.probability  +=30
}
probabilityReset(){
this.probability = 0
}
phaseAdd(){
    this.phase += 1
    this.phaseSub +=1 
}
phaseSubReset(){
    this.phaseSub = 0
} 
}













