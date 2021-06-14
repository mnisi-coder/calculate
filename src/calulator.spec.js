let Calculator = require ("./calculator");

//Example test
describe("string calculator", function () {
    it("should return 0 if string is empty", function () {
        let calculator = new Calculator();
        let calculatorResult = calculator.add('');
        expect(calculatorResult).toBe(0);
    });;

    it("should return sum of an unknown numbers", function () {
        let calculator = new Calculator();


        let size = Math.floor(Math.random() * 11);
    
        let numberString= '';

        for (let index = 0; index < parseInt(size); index++) {

            let eletment = Math.floor(Math.random() * 11);
            if(index === 0)
            {
                numberString += ''+eletment+'';
            }else{
                numberString += '\n'+eletment+'';
            }
            

        }

        let arr = numberString.split('\n');


    
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
        }

        let totalSum = arraySum;

        let calculatorResult = calculator.add(numberString);
        expect(calculatorResult).toBe(sum);
    });
});


function array()
{
    let size = Math.floor(Math.random() * 11);
    
    let numberString= '';

    for (let index = 0; index < size; index++) {

        let eletment = Math.floor(Math.random() * 11);
        if(index === 0)
        {
            numberString += ''+eletment+'';
        }else{
            numberString += ','+eletment+'';
        }
        

    }

    

    return numberString;
    
}



function arraySum()
{
    let arr = array.split(',');


    
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
    }

    return sum;
}