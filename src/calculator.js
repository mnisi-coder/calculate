class Calculator{
    add(numbers){

        if(numbers === '')
        {
            return 0;
        }else{

            // numbers = '1,2,2,5,25';
            let arr = numbers.split(',');
            
            let sum = 0;
            for (let i = 0; i < parseInt(arr.length); i++) {
            sum += parseInt(arr[i]);
            }
            return sum ;
        }
    }
}

module.exports = Calculator