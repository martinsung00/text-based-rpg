//Creating a universal code for Actors
//Attack formula = new health = old health - opponent attack

class Actor {
  constructor(name, hp, attack, defense, evasion) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.evasion = evasion;
  }
  setHealth(newHealth) {
    this.hp = newHealth;
  }
  getDefense() {
    return this.defense;
  }
  getHealth() {
    return this.hp;
  }
  getAttack() {
    return this.attack;
  }
  getEvasion() {
    return this.evasion;
  }
}

const bob = new Actor("Bob", 100, 10, 30, 20);
const thug = new Actor("Thug", 100, 20, 30, 20);

//Simulate attack
//Bob goes first
let damageTakenThisTurn;
let evasionRoll = Math.random() * 100;

// Critical attack mechanics.
/* 
Critical attack formula:
Crit => if crit then final dmg = base dmg*(base dmg*(crit multiplier/100)); if no crit then final dmg = base dmg
*/
// Actor base stats:
temporaryActorStats = {
  atk = 10,
  critMultiplier = 2,
  critChance = 10,
  eva = 5
};

// Function for crit attack in code.
function rollForCrit(actorStats){
// If the crit chance lands i.e 10 < 12, then we use the crit attack formula stated above.  
  if (actorStats.critChance < Math.random()*100){
      critDmg = actorStats.atk*(actorStats.atk*(actorStats.critMultiplier/100));
      return critDmg;
// If the crit chance does not land, do regular damage.
  } else {
      critDmg = actorStats.atk;
      return critDmg;
  }
};

function rollForEvas(actorStats, actorTwoStats){
  if (actorStats.eva < Math.random()*100){
      dmgTaken = 0;
      return dmgTaken;
  } else {
      dmgTaken = actorTwoStats.atk;
      return dmgTaken;
  }
};