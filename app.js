//node modules
const express          = require('express'),
      bodyParser       = require('body-parser'),
      expressSession   = require("express-session"),
      expressValidator = require('express-validator'),
      check            = require('express-validator/check');

//local modules
const  Pizza = require('./Pizza.js'),
       PriceCalculator = require('./PriceCalculator.js');

const app = express();

//Register body-parser, expressValidator, view engine
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.set('view engine', 'ejs'); //setting configuration parameters, here setting it as ejs

//for css
app.use(express.static(__dirname + '/public'));

//Render initial page
app.get('/', (req, res) => {

    const pizza = new Pizza.Pizza();
  If i'm reading this correctly:  you're creating a 'Pizza' instance to generate
  an object of options to populate the Pizza selection menu?  this is a good
  example to brainstorm design patterns.

    Some topics:
      how would you add or remove options?
      selecting default options?
      does it make sense to get these options from the 'config.json' file?

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

//post request using express-validator for validation
app.post('/order', [
     //use express validator check to validate user entry
     check.body('name', "Please enter your name.")
     .exists().not().isEmpty()
     .withMessage("A name is required."),

     check.body('phoneNumber', "Please enter only digits.")
     .exists().not().isEmpty()
     .withMessage("A phone number is required. Please use only digits.")
     .isMobilePhone('any'),

     check.body('streetAddress', "Please use alphanumeric characters.")
     .exists().not().isEmpty()
     .withMessage("A street address is required.")
     .isAlphanumeric(),

     check.body('city', "Please use alphanumeric characters.")
     .exists().not().isEmpty()
     .withMessage("A city name is required.")
     .isAlphanumeric(),

     check.body('postalCode', "A valid postal code is required")
     .exists().not().isEmpty()
     .withMessage("A valid postal code is required.")
     .isPostalCode('CA')

], (req, res) => {
    //const variables for commonly used objects
    const reqBody = req.body;
    const pizzaSize = reqBody.pizzaSize;
    const pizzaCrust = reqBody.pizzaCrust;
    const pizzaToppings = reqBody.pizzaToppings;
    const pizzaQuantity = reqBody.pizzaQuantity;

    const pizzaOrder = new Pizza.PizzaOrder(pizzaSize, pizzaCrust, pizzaToppings);
    const calculator = new PriceCalculator.PriceCalculator(pizzaQuantity, pizzaSize, pizzaCrust, pizzaToppings);

    //assign errors variable with the results of check validation
    const errors = check.validationResult(req);

    console.log(errors.isEmpty());
    if(!errors.isEmpty()){
        const pizza = new Pizza.Pizza();
        const errorMessages = errors.mapped();//returns an object with key value pairs for errors

      was this meant to be removed later?
        // console.log(errorMessages);
        
        what were you trying to see with this log?  if there was a server error - how would this message help you debug the issue?
        console.log(reqBody.pizzaCrust);
        res.render('index', {
            title: "Pizza Page with Errors",
            //Resets original values so user can see what they previously entered
            //format is >>> html element value: name of HTML element returned by request body
            name: reqBody.name,
            phoneNumber: reqBody.phoneNumber,
            streetAddress: reqBody.streetAddress,
            city: reqBody.city,
            postalCode: reqBody.postalCode,
            //Conditionally set error messages
            nameError: errorMessages.hasOwnProperty('name') ? errorMessages.name.msg : null,
            phoneError: errorMessages.hasOwnProperty('phoneNumber') ? errorMessages.phoneNumber.msg : null,
            addressError: errorMessages.hasOwnProperty('streetAddress') ? errorMessages.streetAddress.msg : null,
            cityError: errorMessages.hasOwnProperty('city') ? errorMessages.city.msg : null,
            postalCodeError: errorMessages.hasOwnProperty('postalCode') ? errorMessages.postalCode.msg : null,
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
            sizeChosen: reqBody.pizzaSize,
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
            crustChosen: reqBody.pizzaCrust,
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
        return res.render('orderConfirm',{
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
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});


