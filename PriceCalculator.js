const pizzaConfig = require('./config.json');

//class to perform all pizza calculations
class PriceCalculator {
    //constructor to calculate costs of size, crust, and toppings
    constructor(quantity, size, crust, toppings){
        this.numberOfPizzas = quantity;

        //assign the cost of pizza size using config.json
        if(size !== undefined){
            if(size === "personal"){
                this.sizeCost = parseFloat(pizzaConfig.pizzaSize.personal);
            } else if (size === "small"){
                this.sizeCost = parseFloat(pizzaConfig.pizzaSize.small);
            } else if (size === "medium"){
                this.sizeCost = parseFloat(pizzaConfig.pizzaSize.medium);
            } else if (size === "large"){
                this.sizeCost = parseFloat(pizzaConfig.pizzaSize.large);
            } else {
                this.sizeCost = "$0.00";
            }
        }

        //assign the cost of pizza crust using config.json
        if(crust !== undefined){
            if(crust === "Original" || crust === "thin") {
                this.crustCost = 0;
            } else if(crust === "multigrain") {
                this.crustCost = parseFloat(pizzaConfig.pizzaCrust.multigrain);
            } else if(crust === "multigrainThin"){
                this.crustCost = parseFloat(pizzaConfig.pizzaCrust.multigrainThinCrust);
            } else {
                this.crustCost = 0;
            }   
        }

        //assign the cost of pizza toppings using config.json
        if(typeof toppings === "object") {//if there is more than one topping
            this.toppingsCost =  
            
            toppings.reduce(function(toppingsTotalCost, toppingChosen){
                for(let toppingAvailable in pizzaConfig.toppings){
                    if(toppingChosen === `${toppingAvailable}`){
                        toppingsTotalCost += parseFloat(`${pizzaConfig.toppings[toppingAvailable]}`);
                    }
                }
                
                return toppingsTotalCost;
            }, 0.0); 
        } else if (typeof toppings === "string"){//if there is only one topping
            for(let toppingAvailable in pizzaConfig.toppings){
                if(toppings === `${toppingAvailable}`){
                    this.toppingsCost = parseFloat(`${pizzaConfig.toppings[toppingAvailable]}`);
                }
            }
        } else {//if no topping or error
            this.toppingsCost = 0.0;
        }     
    }//end of constructor

    showPizzaSizeCost() {//return cost of pizza size
        return this.sizeCost;
    }

    showPizzaCrustCost() {//return cost of pizza crust
        return this.crustCost;
    }

    calculateToppingsCost() {//return cost of pizza toppings
        return this.toppingsCost;
    }

    calculateTotalCost(){//return total cost
        return this.numberOfPizzas * (this.sizeCost + this.crustCost + this.toppingsCost);
     
    }
}

exports.PriceCalculator = PriceCalculator;