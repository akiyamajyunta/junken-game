import { stasusBar } from "./type";

    
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
            this.atk = 150
            this.paSklAtk = 1 
            this.sklAtk   = 1.5
            this.def = 100
            this.paSklDef = 1
            this.sklDef = 0.8
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
                    this.maxHp = 5000
                    this.hp = 5000
                    this.atk = 150
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

export const getMyStatus = new MyStatus();
export const getEnStatus =  new EnStatus();


