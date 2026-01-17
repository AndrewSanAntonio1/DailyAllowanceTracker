let allowance;
let foodExpense;
let transfortationExp;
let totalExp;
let balance;

document.getElementById("calculate").onclick = function() {
    allowance = Number(document.getElementById("allowance").value); 
    foodExpense = Number(document.getElementById("foodExpense").value);
    transfortationExp = Number(document.getElementById("transfortationExp").value);

    totalExp = foodExpense + transfortationExp;
    balance = allowance - totalExp;
    
    document.getElementById("pre1").textContent = `Total expense: ${totalExp}`;
    document.getElementById("pre2").textContent = `Remaining allowance: ${balance}`;
}
