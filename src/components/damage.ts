//攻撃、ダメージ関連
export function rand(maxDmg:number, minDmg:number) {
    return Math.random() * (maxDmg - minDmg) + minDmg;//数の乱数
  }
  
export function calculatemyDamage(atk:number,atPakskl:number,atkskl:number,def:number,dePaskl:number,defskl:number){
      if((atk*atPakskl*atkskl)>(def*dePaskl*defskl)){
          return (atk*atPakskl*atkskl)-(def*dePaskl*defskl)
      }
      else{
          return 0
      }
  }//ダメージ計算。攻撃力-防御力が与えれるダメージ。防御力が上回るのなら0を返す。
  
export function lifegageCalculate(life:number,lifeDmg:number){
      if(life>(lifeDmg/20)){
          return lifeDmg/20
      }else{
          return (life)
      }
      
  }
export function isBetween(value:number,min:number,max:number){
                     return  value >= min && value <= max;
   }//A以上B以下
