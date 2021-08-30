//ninja class
class Ninja{
    constructor(name, health){
        //add an attribute: name
        this.name = name;
        //add an attribute: health
        this.health = health;
        //add a attribute: speed - give a default value of 3
        this.speed = 3;
        //add a attribute: strength - give a default value of 3
        this.strength = 3;
    }
    //add a method: sayName() - This should log that Ninja's name to the console
    sayName() {
        console.log(this.name);
    }
    //add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
    showStats(){
        console.log("Name:", this.name, "\nStrength:", this.strength, "\nSpeed:", this.speed, "\nHealth:", this.health);
    }
    //add a method: drinkSake() - This should add +10 Health to the Ninja
    drinkSake(){
        this.health += 10;
    }
}
//NINJA TEST
const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

//create a class Sensei 
class Sensei extends Ninja {
    constructor(name, health){
        //that inherits from the Ninja class
        super(name, health);
        //add an attribute: wisdom - default to 10
        this.wisdom = 10;
    }
    //create a method: speakWisdom()
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
    //create a method: drinkSake()
    drinkSake(){
        console.log("Sensei sake");
        super.drinkSake();
    }
}

// example output
const superSensei = new Sensei("Master Splinter", 150);
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
superSensei.drinkSake();
superSensei.showStats();


