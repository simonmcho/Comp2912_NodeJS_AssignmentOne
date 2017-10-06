const pizzaConfig = require('./config.json');

class Pizza {//class Pizza to show pizza options
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
                this.originalCost = "Free";
            } else if ("thinCrust" === `${crust}`){
                this.thinCrust     = `${crust}`;
                this.thinCrustCost = "Free";
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
    }
}


class PizzaOrder{
    
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



exports.PizzaOrder = PizzaOrder;
exports.Pizza = Pizza;