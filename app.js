const express = require('express');
const bodyParser = require('body-parser');
const Pizza = require('./Pizza.js');
const PriceCalculator = require('./PriceCalculator.js');

const app = express();

//Register body parser
app.use(bodyParser.urlencoded({ extended: false}));
app.set('view engine', 'ejs'); //setting configuration parameters, here setting it as ejs

//for css
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {

    const pizzaSize = new Pizza.PizzaSize();

    res.render('index', {
        title: "Pizza Page",
        size: {
            personal: pizzaSize.personal,
            small: pizzaSize.small,
            medium: pizzaSize.medium,
            large: pizzaSize.large
        },
        sizeCost: {
            personal: pizzaSize.personalCost,
            small: pizzaSize.smallCost,
            medium: pizzaSize.mediumCost,
            large: pizzaSize.largeCost
        },
        crust : {
            original: pizzaSize.original,
            thin: pizzaSize.thinCrust,
            multigrain: pizzaSize.multigrain,
            multigrainThin: pizzaSize.multigrainThinCrust
        },
        crustCost: {
            original: pizzaSize.originalCost,
            thin: pizzaSize.thinCrustCost,
            multigrain: pizzaSize.multigrainCost,
            multigrainThin: pizzaSize.multigrainThinCrustCost
        },
        toppings: {
            anchovies: pizzaSize.toppingsAnchovies,
            bacon: pizzaSize.toppingsBacon,
            bananaPeppers: pizzaSize.toppingsBananaPeppers,
            cheese: pizzaSize.toppingsCheese,
            chicken: pizzaSize.toppingsChicken,
            corn: pizzaSize.toppingsCorn,
            ham: pizzaSize.toppingsHam,
            pepperoni: pizzaSize.toppingsPepperoni,
            pineapple: pizzaSize.toppingsPineapple,
            olives: pizzaSize.toppingsOlives
        },
        toppingsCost: {
            anchovies: pizzaSize.toppingsAnchoviesCost,
            bacon: pizzaSize.toppingsBaconCost,
            bananaPeppers: pizzaSize.toppingsBananaPeppersCost,
            cheese: pizzaSize.toppingsCheeseCost,
            chicken: pizzaSize.toppingsChickenCost,
            corn: pizzaSize.toppingsCornCost,
            ham: pizzaSize.toppingsHamCost,
            pepperoni: pizzaSize.toppingsPepperoniCost,
            pineapple: pizzaSize.toppingsPineappleCost,
            olives: pizzaSize.toppingsOlivesCost
        }
    });
});

app.post('/views/orderConfirm.ejs', (req, res) => {
    const reqBody = req.body;
    const pizzaSize = req.body.pizzaSize;
    const pizzaCrust = req.body.pizzaCrust;
    const pizzaToppings = req.body.pizzaToppings;

    const pizzaOrder = new Pizza.Pizza(pizzaSize, pizzaCrust, pizzaToppings);
    const calculator = new PriceCalculator.PriceCalculator(pizzaSize, pizzaCrust, pizzaToppings);
    console.log(typeof pizzaToppings);
    res.render('orderConfirm',{
        name: reqBody.name,
        phoneNumber: reqBody.phoneNmber,
        streetAddress: reqBody.streetAddress,
        unitNumber: reqBody.unitNumber,
        city: reqBody.city,
        postalCode: reqBody.postalCode,
        title: "Pizza Page after post",
        size: pizzaOrder.pizzaSize,
        sizeCost: calculator.showPizzaSizeCost(),
        crust: pizzaOrder.pizzaCrust,
        crustCost: calculator.showPizzaCrustCost(),
        toppings: pizzaOrder.pizzaToppings,
        toppingsCost: calculator.calculateToppingsCost(),
        totalCost: calculator.calculateTotalCost()
    });
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});


