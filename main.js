// reflect numbers in the screen

let num1 = '';
let num2 = '';
let operator = '';


let all_nums = document .getElementsByClassName('num');

for (i = 0; i < all_nums.length; i++) {
    all_nums[i].addEventListener('click', num_click);
}

function num_click(e) 
{
    let value = e.target.innerText;
    
    if (operator)
    {
        if (!(num2.indexOf('.')>0 && value=='.'))
        num2=num2+value;
    }
    else
    {
        if (!(num1.indexOf('.')>0 && value=='.'))
        num1=num1+value;
    }
    display();
}

function del_click(){
    num1 = '';
    num2 = '';
    operator = '';
    display();
}

function eq_click(){
    if (operator=='+')
        num1 = +num1 + +num2;
    else if (operator=='-')
        num1 = num1-num2;
    else if (operator=='x')
        num1 = num1*num2;    
    else if (operator=='/')
        num1 = num1/num2; 
    num2 = '';
    operator = '';
    display();
}


function display(){
    if (operator){
        document.getElementById('screen').innerText = num2;
    }
    else
    {
        document.getElementById('screen').innerText = num1;
    }

}



// reflect operators in the screen
let all_operators = document .getElementsByClassName('operator');

for (i = 0; i < all_operators.length; i++) {
    all_operators[i].addEventListener('click', op_click);
}


function op_click(e) 
{
    let value = e.target.innerText;
    operator=value;
}

