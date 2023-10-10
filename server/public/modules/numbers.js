const express = require('express');
const router = express.Router();

let completedCalculation = [
    {
        numberOne: 2,
        math: '+',
        numberTwo: 3,
        result: 5,
    }
];

router.get('/', (req, res) => {
    console.log('GET Request');
    res.send(completedCalculation);
});

router.post('/', (req, res) => {
    console.log('POST Request made');
    let result = 0;
    if (req.body.math == '+'){
        result = req.body.numberOne + req.body.numberTwo;
    } else if (req.body.math == '-'){
        result = req.body.numberOne - req.body.numberTwo;
    } else if (req.body.math == '*'){
        result = req.body.numberOne * req.body.numberTwo;
    } else if (req.body.math == '/'){
        result = req.body.numberOne / req.body.numberTwo;
    }

let newCalculation = {
    numberOne: req.body.numberOne,
    math: req.body.math,
    numberTwo: req.body.numberTwo,
    result: result,
};
completedCalculation.push(newCalculation);
res.sendStatus(201);    
});

module.exports = router;