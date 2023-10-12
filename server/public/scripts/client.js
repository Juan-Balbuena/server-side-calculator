console.log( 'js' );
const equalButton = document.querySelector('#equalButton');
equalButton.addEventListener('click', doCalculation);


function getNumbers(){
    axios.get('/math').then((response) => {
        for (const calculation of response.data)
            console.log(calculation);
            let getCalculation = response.data;
            let contentDiv = document.querySelector('#answerHistory');
            contentDiv.innerHTML = '';
            let i = 0;
            for(let get of getCalculation){
                contentDiv.innerHTML += `
                <li>${get.numberOne}${get.math}${get.numberTwo} = ${get.result}</li>
            `;
            i += 1;
            }
          }).catch((error) => {
            console.log(error);
            alert('Something went wrong.');
          });
}

getNumbers();

function doCalculation(){
    const numberOne = document.querySelector('#numberOne').value
    const numberTwo = document.querySelector('#numberTwo').value
    const math = document.querySelector('#math').value
    const result = document.querySelector('#answerHistory').value

    const requestBody = {
        numberOne: numberOne,
        numberTwo: numberTwo,
        math: math,
        result: result,
    };

    axios.post('/math', requestBody).then((response) => {
        getNumbers();

    });
}

