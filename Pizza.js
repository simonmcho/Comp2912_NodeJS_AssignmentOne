const pizzaConfig = require('./config.json');

class Pizza{
    
    constructor(size, crust, toppings){
        this.pizzaSize = size;
        
        for(let size in pizzaConfig.pizzaSize){
            if(this.pizzaSize === `${size}`){
                this.pizzaSizeCost = `${pizzaConfig.pizzaSize[size]}`;
            }
        }

        this.pizzaCrust = crust;

        for(let crust in pizzaConfig.pizzaCrust){
            if(this.pizzaCrust === `${crust}`){
                this.pizzaCrustCost = `${pizzaConfig.pizzaCrust[crust]}`;
            }
        }

        this.pizzaToppings = toppings;

        for(let topping in pizzaConfig.toppings){
            if(this.pizzaToppings === `${topping}`){
                this.pizzaToppingsCost = `${pizzaConfig.toppings[topping]}`;
            }
        }

        this.totalCost = this.sizeCost + this.crustCost;
    }
}

class PizzaSize {
    constructor(){

        for(let size in pizzaConfig.pizzaSize){
            if("personal" === `${size}`){
                this.personal =  `${size}`;
                this.personalCost = `${pizzaConfig.pizzaSize[size]}`;
            } else if ("small" === `${size}`){
                this.small = `${size}`;
                this.smallCost = `${pizzaConfig.pizzaSize[size]}`;
            } else if ("medium" === `${size}`){
                this.medium = `${size}`;
                this.mediumCost = `${pizzaConfig.pizzaSize[size]}`;
            } else {
                this.large = `${size}`;
                this.largeCost = `${pizzaConfig.pizzaSize[size]}`;
            } 
        }

        for(let crust in pizzaConfig.pizzaCrust){
            if("original" === `${crust}`){
                this.original     =  `${crust}`;
                this.originalCost = `${pizzaConfig.pizzaCrust[crust]}`;
            } else if ("thinCrust" === `${crust}`){
                this.thinCrust     = `${crust}`;
                this.thinCrustCost = `${pizzaConfig.pizzaCrust[crust]}`;
            } else if ("multigrain" === `${crust}`){
                this.multigrain     = `${crust}`;
                this.multigrainCost = `${pizzaConfig.pizzaCrust[crust]}`;
            } else {
                this.multigrainThinCrust    = `${crust}`;
                this.multigrainThinCrustCost = `${pizzaConfig.pizzaCrust[crust]}`;
            } 
        }

        for(let topping in pizzaConfig.toppings){
            if("anchovies" === `${topping}`){
                this.toppingsAnchovies     = `${topping}`;
                this.toppingsAnchoviesCost = `${pizzaConfig.toppings[topping]}`;
            } else if ("bacon" === `${topping}`){
                this.toppingsBacon     = `${topping}`;
                this.toppingsBaconCost = `${pizzaConfig.toppings[topping]}`;
            } else if("bananaPeppers" === `${topping}`){
                this.toppingsBananaPeppers     = `${topping}`;
                this.toppingsBananaPeppersCost = `${pizzaConfig.toppings[topping]}`;
            } else if("cheese" === `${topping}`){
                this.toppingsCheese     = `${topping}`;
                this.toppingsCheeseCost = `${pizzaConfig.toppings[topping]}`;
            } else if ("chicken" === `${topping}`){
                this.toppingsChicken     = `${topping}`;
                this.toppingsChickenCost = `${pizzaConfig.toppings[topping]}`;
            } else if ("corn" === `${topping}`){
                this.toppingsCorn     = `${topping}`;
                this.toppingsCornCost = `${pizzaConfig.toppings[topping]}`;
            } else if("ham" ===  `${topping}`){
                this.toppingsHam     = `${topping}`;
                this.toppingsHamCost = `${pizzaConfig.toppings[topping]}`;
            } else if("pepperoni" === `${topping}`){
                this.toppingsPepperoni     = `${topping}`;
                this.toppingsPepperoniCost = `${pizzaConfig.toppings[topping]}`;
            } else if("pineapple" === `${topping}`){
                this.toppingsPineapple     = `${topping}`;
                this.toppingsPineappleCost = `${pizzaConfig.toppings[topping]}`;
            } else {
                this.toppingsOlives     = `${topping}`;
                this.toppingsOlivesCost = `${pizzaConfig.toppings[topping]}`;
            }
        }

   
        // this.toppingsAnchovies     = pizzaConfig.toppings.anchovies;
        // this.toppingsBacon         = pizzaConfig.toppings.bacon;
        // this.toppingsBananaPeppers = pizzaConfig.toppings.bananaPeppers;
        // this.toppingsCheese        = pizzaConfig.toppings.cheese;
        // this.toppingsChicken       = pizzaConfig.toppings.chicken;
        // this.toppingsCorn          = pizzaConfig.toppings.corn;
        // this.toppingsHam           = pizzaConfig.toppings.ham;
        // this.toppingsPepperoni     = pizzaConfig.toppings.pepperoni;
        // this.toppingsPineapple     = pizzaConfig.toppings.pineapple;
        // this.toppingsOlives        = pizzaConfig.toppings.olives;

        // this.toppingsCostBasics  = pizzaConfig.toppingsCost.basics;
        // this.toppingsCostMeat    = pizzaConfig.toppingsCost.meat;
        // this.toppingsCostVeggies = pizzaConfig.toppingsCost.veggies;
    }
}



exports.Pizza = Pizza;
exports.PizzaSize = PizzaSize;

    // "toppingsCost": {
    //     "anchovies": "1.00",
    //     "bacon": "0.50",
    //     "bananaPeppers": "0.50",
    //     "cheese": "0.00",
    //     "chicken": "1.00",
    //     "corn": "0.10",
    //     "ham": "0.25",
    //     "pepperoni": "0.50",
    //     "pineapple": "0.25",
    //     "olives": "0.75"
    // }