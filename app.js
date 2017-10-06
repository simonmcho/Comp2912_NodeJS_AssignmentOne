//node modules
const express = require('express'),
      bodyParser = require('body-parser'),
      expressSession = require("express-session"),
      expressValidator = require('express-validator'),
      validator = require('validator');

//local modules
 const errorMessage = require('./errorMessages.json');
       Pizza = require('./Pizza.js'),
       PriceCalculator = require('./PriceCalculator.js');

const app = express();

//Register body parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(expressValidator());
app.set('view engine', 'ejs'); //setting configuration parameters, here setting it as ejs
app.use(expressSession( { secret: 'max', saveUninitialized: false, resave: false} ));

//for css
app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {

    const pizza = new Pizza.Pizza();

    res.render('index', {
        title: "Pizza Page",
        size: {
            personal: pizza.personal,
            small: pizza.small,
            medium: pizza.medium,
            large: pizza.large
        },
        sizeCost: {
            personal: pizza.personalCost,
            small: pizza.smallCost,
            medium: pizza.mediumCost,
            large: pizza.largeCost
        },
        crust : {
            original: pizza.original,
            thin: pizza.thinCrust,
            multigrain: pizza.multigrain,
            multigrainThin: pizza.multigrainThinCrust
        },
        crustCost: {
            original: pizza.originalCost,
            thin: pizza.thinCrustCost,
            multigrain: pizza.multigrainCost,
            multigrainThin: pizza.multigrainThinCrustCost
        },
        toppings: {
            anchovies: pizza.toppingsAnchovies,
            bacon: pizza.toppingsBacon,
            bananaPeppers: pizza.toppingsBananaPeppers,
            cheese: pizza.toppingsCheese,
            chicken: pizza.toppingsChicken,
            corn: pizza.toppingsCorn,
            ham: pizza.toppingsHam,
            pepperoni: pizza.toppingsPepperoni,
            pineapple: pizza.toppingsPineapple,
            olives: pizza.toppingsOlives
        },
        toppingsCost: {
            anchovies: pizza.toppingsAnchoviesCost,
            bacon: pizza.toppingsBaconCost,
            bananaPeppers: pizza.toppingsBananaPeppersCost,
            cheese: pizza.toppingsCheeseCost,
            chicken: pizza.toppingsChickenCost,
            corn: pizza.toppingsCornCost,
            ham: pizza.toppingsHamCost,
            pepperoni: pizza.toppingsPepperoniCost,
            pineapple: pizza.toppingsPineappleCost,
            olives: pizza.toppingsOlivesCost
        }
    });
});

app.post('/views/orderConfirm.ejs', (req, res) => {
    const reqBody = req.body;
    const pizzaSize = reqBody.pizzaSize;
    const pizzaCrust = reqBody.pizzaCrust;
    const pizzaToppings = reqBody.pizzaToppings;
    const pizzaQuantity = reqBody.pizzaQuantity;

    const pizzaOrder = new Pizza.PizzaOrder(pizzaSize, pizzaCrust, pizzaToppings);
    const calculator = new PriceCalculator.PriceCalculator(pizzaQuantity, pizzaSize, pizzaCrust, pizzaToppings);

   
    req.checkBody('name', "placeholder").isEmpty();
    req.checkBody('phoneNumber', "placeholder").isNumeric();
    req.checkBody('streetAddress', "placeholder").isAlphanumeric();
    req.checkBody('city', "placeholder").isAlphanumeric();
   // req.checkBody('postalCode', errorMessage.postalCodeError).isPostalCode();

    const errors = req.validationErrors();

    if(errors){
        const pizza = new Pizza.Pizza();

        res.render('index', {
            title: "Pizza Page with errors",
            nameError: errorMessage.nameError,
            phoneError: errorMessage.phoneError,
            addressError: errorMessage.addressError,
            cityError: errorMessage.cityError,
            postalCodeError: errorMessage.postalCodeError,
            size: {
                personal: pizza.personal,
                small: pizza.small,
                medium: pizza.medium,
                large: pizza.large
            },
            sizeCost: {
                personal: pizza.personalCost,
                small: pizza.smallCost,
                medium: pizza.mediumCost,
                large: pizza.largeCost
            },
            crust : {
                original: pizza.original,
                thin: pizza.thinCrust,
                multigrain: pizza.multigrain,
                multigrainThin: pizza.multigrainThinCrust
            },
            crustCost: {
                original: pizza.originalCost,
                thin: pizza.thinCrustCost,
                multigrain: pizza.multigrainCost,
                multigrainThin: pizza.multigrainThinCrustCost
            },
            toppings: {
                anchovies: pizza.toppingsAnchovies,
                bacon: pizza.toppingsBacon,
                bananaPeppers: pizza.toppingsBananaPeppers,
                cheese: pizza.toppingsCheese,
                chicken: pizza.toppingsChicken,
                corn: pizza.toppingsCorn,
                ham: pizza.toppingsHam,
                pepperoni: pizza.toppingsPepperoni,
                pineapple: pizza.toppingsPineapple,
                olives: pizza.toppingsOlives
            },
            toppingsCost: {
                anchovies: pizza.toppingsAnchoviesCost,
                bacon: pizza.toppingsBaconCost,
                bananaPeppers: pizza.toppingsBananaPeppersCost,
                cheese: pizza.toppingsCheeseCost,
                chicken: pizza.toppingsChickenCost,
                corn: pizza.toppingsCornCost,
                ham: pizza.toppingsHamCost,
                pepperoni: pizza.toppingsPepperoniCost,
                pineapple: pizza.toppingsPineappleCost,
                olives: pizza.toppingsOlivesCost
            }
        });
    } else {
        res.render('orderConfirm',{
            name: reqBody.name,
            phoneNumber: reqBody.phoneNumber,
            streetAddress: reqBody.streetAddress,
            unitNumber: reqBody.unitNumber,
            city: reqBody.city,
            postalCode: reqBody.postalCode,
            title: "Pizza Page after post",
            quantity: pizzaQuantity,
            size: pizzaOrder.pizzaSize,
            sizeCost: calculator.showPizzaSizeCost(),
            crust: pizzaOrder.pizzaCrust,
            crustCost: calculator.showPizzaCrustCost(),
            toppings: pizzaOrder.pizzaToppings,
            toppingsCost: calculator.calculateToppingsCost(),
            totalCost: calculator.calculateTotalCost()
        });
    }

    // console.log(validator.isEmpty((reqBody.name)));

   
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});


