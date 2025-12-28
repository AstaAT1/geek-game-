class Character {
    constructor(name, hp, attack) {
        this.name = name
        this.hp = hp
        this.attack = attack
        this.alive = true
    }
    takeDamage(damage) {
        this.hp = this.hp - damage
        if (this.hp <= 0) {
            this.hp = 0
            this.alive = false
            console.log(this.name + " is dead")
        } else {
            console.log(this.name + " lose " + damage + " hp (remaining " + this.hp + ")")
        }
    }


}

class Hero extends Character {
    constructor(name, hp, attack, stance) {
        super(name, hp, attack)
        this.stance = "normal"
    }
    changeStance(newStance) {

        if (["attack", "defense", "normal"].includes(newStance)) {
            this.stance = newStance
            console.log(this.name + " change stance to " + this.stance)
        } 
        else if(this.changeStance == "defense"){
            this.hp = Math.round(this.hp * 2.5)
        }else {
            console.log("Invalid stance: " + newStance)
        }
    }
    attack(target) {
        let damage = this.attack

        if (this.stance == "attack") {
            damage = Math.round(this.attack * 1.4)
            this.hp = Math.round(this.hp * 0.75)
            console.log(this.name + " uses ATTACK stance: hp reduced to " + this.hp)
        } else if (this.stance == "defense") {
            damage = Math.round(this.attack * 0.5)
        } else {
            damage = this.attack
        }
        console.log(this.name + " attack " + target.name + " for " + damage + " damage")
        target.takeDamage(damage)
    }
}
class Warrior extends Hero {
    constructor(name, hp, attack, situation, rage) {
        super(name, hp, attack, situation)
        this.rage = 0
    }
    rage2() {
        this.rage = this.rage + 1
        console.log(this.name + " gains 1 rage (now " + this.rage + ")")
    }
    attack(target){
         this.rage2()

    let damage = this.attack

    if (this.rage >= 4) {
      damage = Math.round(damage * 1.25)
      console.log(this.name + " has full rage!!! , and a 25% bonus attack  ")
      this.rage = 0
    }

    if (this.stance === "attack") {
      damage = Math.round(damage * 1.4)
      this.hp = Math.round(this.hp * 0.75)
      console.log(this.name + " uses ATTACK stance: reduced to " + this.hp)
    //   uses ATTACK stance: reduced health by 0.75%
    } else if (this.stance === "defense") {
      damage = Math.round(damage * 0.5)
    }

    console.log(this.name + " hits " + target.name + " for " + damage + " damage.")
    target.takeDamage(damage)
  
    }
}
class Mage extends Hero {
    constructor(name, hp, attack, situation, mana) {
        super(name, hp, attack, situation)
        this.mana = [7, 9, 11][Math.floor(Math.random() * 3)]
    }
    mana2(target) {
        if (this.mana < 2) {
            this.mana = this.mana + 7
            console.log(this.name + " doesn't have enough mana , Skips turn and recovers 7 mana (now " + this.mana + ")")
            return
        }
        this.mana = this.mana - 2

        let damage = this.attack

        if (this.stance == "attack") {
            damage = Math.round(damage * 1.4)
            this.hp = Math.round(this.hp * 0.75)
            console.log(this.name + " uses ATTACK stance: hp reduced to " + this.hp)
        } else if (this.stance == "defense") {
            damage = Math.round(damage * 0.5)
        }

        console.log(this.name + " casts a spell " + damage + " to " + target.name + " (mana left: " + this.mana + ")")
        target.takeDamage(damage)

    }
}
class Archer extends Hero {
    constructor(name, hp, attack, situation, arrows) {
        super(name, hp, attack, situation)
        this.arrows = [7, 8, 9, 10, 11][Math.floor(Math.random() * 5)]
    }
    arrow2(target) {

        if (this.arrows < 2) {
            this.arrows = this.arrows + 6
            console.log(this.name + " doesn't have enough arrows. Skips turn and recovers 6 arrows (now " + this.arrows + ")")
            return
        }
        this.arrows = this.arrows - 2

        let damage = this.attack
        if (this.stance === "attack") {
            damage = Math.round(damage * 1.4)
            this.hp = Math.round(this.hp * 0.75)
            console.log(this.name + " uses ATTACK stance: hp reduced to " + this.hp)
        } else if (this.stance === "defense") {
            damage = Math.round(damage * 0.5)
        }

        this.arrows = this.arrows + 1

        console.log(this.name + " fired an arrow " + damage + " to " + target.name + " (arrows left: " + this.arrows + ")")
        target.takeDamage(damage)
    }
}
class Boss extends Character {
    constructor(name, hp, attack, health) {
        super(name, hp, attack)
        this.health = health
    this.asktree = []       
    this.ask = false
  }

  
  
chooseTarget(players) {
  let pool = []

  for (let i = 0; i < players.length; i++) {
    let p = players[i]

    if (!p.alive) {
        continue
    }

    let weight
    if (p.stance == "defense") {
      weight = 2
    } else {
      weight = 1
    }

    for (let x = 0; x < weight; x++) {
      pool.push(p)
    }
  }

  if (pool.length == 0) {
    return null
  }

  return pool[Math.floor(Math.random() * pool.length)]
}
 attackTarget(players) {
    let target = this.chooseTarget(players)
    
    let damage = this.attack
    
    if (target.stance == "defense") {damage = Math.round(damage * 0.5)
    console.log(this.name + " attacks " + target.name + " for " + damage + " damage.")
    target.takeDamage(damage)
  }}

  askRiddle() {
    if (this.ask) return false
    if (this.hp <= this.health * 0.2) {
      this.ask = true
      console.log(this.name + " would ask a riddle now ")
      return true
    }
    return false 
}
}

// let Sauron 
// let Chronos
// // let Lilith
// let b = [7, 8, 9, 10, 11][Math.floor(Math.random() * 5)]
// console.log(b)
