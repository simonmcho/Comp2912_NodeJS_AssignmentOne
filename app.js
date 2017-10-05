const express = require('express');
const bodyParser = require('body-parser');
const Pizza = require('./Pizza.js');

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
            original: pizzaSize.crustOriginal,
            thin: pizzaSize.crustThin,
            multigrain: pizzaSize.crustMultigrain,
            multigrainThin: pizzaSize.crustMultigrainThinCrust
        },
        crustCost: {
            original: pizzaSize.crustOriginalCost,
            thin: pizzaSize.crustThinCost,
            multigrain: pizzaSize.crustMultigrainCost,
            multigrainThin: pizzaSize.crustMultigrainThinCost
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
            basics: pizzaSize.toppingsCostBasics,
            meat: pizzaSize.toppingsCostMeat,
            veggies: pizzaSize.toppingsCostVeggies
        }
    });
});

app.post('/views/orderConfirm.ejs', (req, res) => {
    const reqBody = req.body;
    const pizzaSize = req.body.pizzaSize;
    const pizzaCrust = req.body.pizzaCrust;
    const pizzaToppings = req.body.pizzaToppings;

    const pizzaOrder = new Pizza.Pizza(pizzaSize, pizzaCrust, pizzaToppings);

    console.log(req.body);
    
    res.render('orderConfirm',{
        name: reqBody.name,
        phoneNumber: reqBody.phoneNmber,
        streetAddress: reqBody.streetAddress,
        unitNumber: reqBody.unitNumber,
        city: reqBody.city,
        postalCode: reqBody.postalCode,
        title: "Pizza Page after post",
        size: pizzaOrder.size,
        sizeCost: pizzaOrder.sizeCost,
        crust: pizzaOrder.crust,
        crustCost: pizzaOrder.crustCost,
        toppings: pizzaOrder.toppings,



        totalCost: pizzaOrder.totalCost
    });
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
