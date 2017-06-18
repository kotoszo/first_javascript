var num_a = '', num_b = '', operator = '', result_list = [], statistic = 0, counter = 0, color = '';

function main(what, to_do=false) {
    atm = document.getElementById('result').innerHTML;
    if (to_do == false) {
        numbers(what);
    } else {
        decider(what);
    }
    process = num_a + operator + num_b;
    display(process);
}

function numbers(what) {
    if (operator == '') {
        num_a = num_a + String(what);
    } else {
        num_b = num_b + String(what);
    }
}

function decider(what) {
    if (operator == '') {
        if ((operator == '++' || operator == '--')) {
            console.log(operator);
            finito();
        } else {
            operator = what;
        }
    } else {
        finito();
        operator = what;
    }
}

function finito() {
    num_a = Number(num_a), num_b = Number(num_b);
    statistic = document.getElementById(operator).innerHTML;
    console.log(operator, num_a, result);
    if (operator == '+') {
        result = num_a + num_b;
    } else if (operator == '-') {
        result = num_a - num_b;
    } else if (operator == '*') {
        result = num_a * num_b;
    } else if (operator == '/') {
        result = num_a / num_b;
    } else if (operator == '%') {
        result = num_a % num_b;
    }
    document.getElementById(operator).innerHTML = Number(statistic) + 1 
    num_a = result, num_b = '', operator = '';
    history(result);
    display(result);
}

function floatie() {
    if (operator == '') {
        num_a = num_a + '.';
    } else {
        num_b = num_b + '.';
    }
    process = num_a + operator + num_b;
    display(process);
}

function reset() {
    num_a = '', num_b = '', result = '', operator = '';
    display(result);
}

function display(what) {
    document.getElementById('result').innerHTML = what;
}

function history(result) {
    result_list.push(result+'<br>');
    document.getElementById('so_far').innerHTML = result_list;
}

function magic() {
    counter = counter + 1;
    if (counter % 2) {
        color = '#02f71a';
    } else {
        color = '#f40202';
    }
    document.getElementById('pointless').style.backgroundColor = color;
}
