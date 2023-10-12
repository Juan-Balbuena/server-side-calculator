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
    let numberOne = Number(req.body.numberOne);
    let numberTwo = Number(req.body.numberTwo);

    if (req.body.math == '+'){
        result = numberOne + numberTwo;
    } else if (req.body.math == '-'){
        result = numberOne - numberTwo;
    } else if (req.body.math == '*'){
        result = numberOne * numberTwo;
    } else if (req.body.math == '/'){
        result = numberOne / numberTwo;
    }

let newCalculation = {
    numberOne: numberOne,
    math: req.body.math,
    numberTwo: numberTwo,
    result: result,
};
completedCalculation.push(newCalculation);
res.sendStatus(201);    
});

module.exports = router;