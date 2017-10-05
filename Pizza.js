const pizzaConfig = require('./config.json');

class Pizza{
    
    constructor(size, crust, toppings){
        this.size = size;

        if(size === "personal"){
            this.sizeCost = parseFloat(pizzaConfig.pizzaSizeCost.personal);
        } else if (size === "small"){
            this.sizeCost = parseFloat(pizzaConfig.pizzaSizeCost.small);
        } else if (size === "medium"){
            this.sizeCost = parseFloat(pizzaConfig.pizzaSizeCost.medium);
        } else if (size === "large"){
            this.sizeCost = parseFloat(pizzaConfig.pizzaSizeCost.large);
        } else {
            this.sizeCost = "$0.00";
        }

        this.crust = crust;

        if(crust === "Original" || crust === "thin") {
            this.crustCost = 0;
        }else if(crust === "multigrain") {
            this.crustCost = parseFloat(pizzaConfig.pizzaCrustCost.multigrain);
        } else if(crust === "multigrainThin"){
            this.crustCost = parseFloat(pizzaConfig.pizzaCrustCost.multigrainThinCrust);
        }

        this.toppings = toppings;







        this.totalCost = this.sizeCost + this.crustCost;
    }
}

class PizzaSize {
    constructor(){
        this.personal = pizzaConfig.pizzaSize.personal;
        this.small    = pizzaConfig.pizzaSize.small;
        this.medium   = pizzaConfig.pizzaSize.medium;
        this.large    = pizzaConfig.pizzaSize.large;

        this.personalCost = pizzaConfig.pizzaSizeCost.personal;
        this.smallCost    = pizzaConfig.pizzaSizeCost.small;
        this.mediumCost   = pizzaConfig.pizzaSizeCost.medium;
        this.largeCost    = pizzaConfig.pizzaSizeCost.large;

        this.crustOriginal            = pizzaConfig.pizzaCrust.original;
        this.crustThin                = pizzaConfig.pizzaCrust.thinCrust;
        this.crustMultigrain          = pizzaConfig.pizzaCrust.multigrain;
        this.crustMultigrainThinCrust = pizzaConfig.pizzaCrust.multigrainThinCrust;

        this.crustOriginalCost       = pizzaConfig.pizzaCrustCost.original;
        this.crustThinCost           = pizzaConfig.pizzaCrustCost.thinCrust;
        this.crustMultigrainCost     = pizzaConfig.pizzaCrustCost.multigrain;
        this.crustMultigrainThinCost = pizzaConfig.pizzaCrustCost.multigrainThinCrust;
   
        this.toppingsAnchovies     = pizzaConfig.toppings.anchovies;
        this.toppingsBacon         = pizzaConfig.toppings.bacon;
        this.toppingsBananaPeppers = pizzaConfig.toppings.bananaPeppers;
        this.toppingsCheese        = pizzaConfig.toppings.cheese;
        this.toppingsChicken       = pizzaConfig.toppings.chicken;
        this.toppingsCorn          = pizzaConfig.toppings.corn;
        this.toppingsHam           = pizzaConfig.toppings.ham;
        this.toppingsPepperoni     = pizzaConfig.toppings.pepperoni;
        this.toppingsPineapple     = pizzaConfig.toppings.pineapple;
        this.toppingsOlives        = pizzaConfig.toppings.olives;

        this.toppingsCostBasics  = pizzaConfig.toppingsCost.basics;
        this.toppingsCostMeat    = pizzaConfig.toppingsCost.meat;
        this.toppingsCostVeggies = pizzaConfig.toppingsCost.veggies;
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