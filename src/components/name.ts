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


//import { ref } from 'vue';

//const name = ref<string>("")

let name =""

export function myNameInput(a:string, b:number){
    if (b == 0){
        name = a
    } else {
        return name
    };
};


export class SherdData {
    myName: string;

    constructor(){
        this.myName = "";
    };
    
    setMyName(Name: string) {
        this.myName = Name
    };

}
export const sherdData = new SherdData()
//myname.setMyName("aaa")
console.log(sherdData.myName)




export class Aoki{
    data: string;

    constructor() {
        this.data = "aoki";
        this.data = "akiyama";
    }

    set(value: string) {
        this.data = value;
    }
}


export const aoki = new Aoki();


class Car{
    fuel: number;

    constructor() {
        this.fuel = 10
    };

    run(z:number) {
        this.fuel -= z;
    }
}

const car = new Car();
car.run(1);
car.run(3);
console.log(car.fuel);


const car1 = new Car();
car1.run(2);
console.log(car1.fuel);


export class CharacterStatus {
    atk: number 
    paSklAtk: number
    sklAtk: number
    def: number
    paSklDef: number
    sklDef: number
    
    constructor() {
        this.atk = 1
        this.paSklAtk = 1
        this.sklAtk   = 1
        this.def = 1
        this.paSklDef = 1
        this.sklDef = 1
    } 
    set(add: number, minus: number){
        const  change = add - minus;
        this.atk += change
        this.paSklAtk += change
        this.sklAtk += change
        this.def += change
        this.paSklDef += change
        this.sklDef += change
    }


}