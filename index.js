// let lists = document.querySelector(".list");
// let description = document.getElementById("description");
// let amount = document.getElementById("amount");
// let submit = document.getElementsByClassName("add");
// let ExpenseArray = [];

// // Add function
// function Add() {
//     if (description.value !== "" || amount.value !== "") {
//         AddExpense(description.value, amount.value);
//         description.value = "";
//         amount.value = "";
//     }
//     console.log("hello")
// };

// function AddExpense(ExpenseDescription, ExpenseAmount) {
//     const ExpenseData = {
//         id:Date.now(),
//         description: ExpenseDescription,
//         amount: ExpenseAmount
//     };
//     ExpenseArray.push(ExpenseData);
//     console.log(ExpenseArray);
// };



// const listitem = text => {
//     let newExpense = document.createElement("li");
//     newExpense.textContent = text;
//     lists.appendChild(newExpense);
//     let btn = document.createElement("button");
//     btn.innerHTML = "Deleate";
//     newExpense.appendChild(btn);
//     btn.setAttribute("onclick", "remove()")
// }

// function add(event) {
//     const des = document.getElementById('expenseInput').value;
//     const am = parseFloat(document.getElementById('amountInput').value);
//     event.preventDefault();
//     listitem(des.am);
//     document.getElementById("description").value = "";
//     document.getElementById("amount").value = "";

//     }

//     function remove(event) {
//         let deleateExpense = this.event.currentTarget.parentNode;
//         lists.removeChild(deleateExpense);
//         }