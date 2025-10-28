let balSpan = document.querySelector('#balSpan');
let input = document.querySelector('input');
let balance = 1000;

let table = document.querySelector('table tbody');
let statement = [

];
let showStatement = () => {
    table.innerHTML = '';
    statement.forEach((le, index) => {
        let row = `
<tr>
<td>${index + 1}</td>
<td>${le.beforeBalance}</td>
<td>${le.amount}</td>
<td>${le.type}</td>
<td>${le.afterBalance}</td>
</tr>
`;
        table.innerHTML += row;
    });
};

let showBalance = () => {
    balSpan.innerText = balance + ' ' + 'EGP';
};
let deposit = () => {
    let amount = +input.value;
    let newStatement = {
        beforeBalance: balance,
        amount: amount,
        type: 'deposit',
        afterBalance: balance + amount
    };
    statement.push(newStatement);
    balance = balance + amount;
    showBalance();
    input.value = '';
};
let withdraw = () => {
    let amount = +input.value;
    let newStatement = {
        beforeBalance: balance,
        amount: amount,
        type: 'withdraw',
        afterBalance: balance - amount
    };
    statement.push(newStatement);
    if (amount <= balance) {
        balance = balance - amount;
        showBalance();
    } else {
        alert('The Operation Is Not Acceptable');
    }
    input.value = '';
};

