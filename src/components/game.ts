export function gamelogic(mySend: number, enemySend: number): string {
    if (mySend == enemySend) {
        return "あいこ";
    } else if 
       ((mySend-enemySend+3)%3 == 2){
        return "かち";
    } else{
        return "まけ"
    }
}