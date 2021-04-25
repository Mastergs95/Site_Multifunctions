//To do App
function addItem () {
  const item = document.getElementById('toAdd').value
  var li = document.createElement('li')
  li.innerHTML = item
  li.setAttribute('onClick', 'remove(this)')
  document.getElementById('list').appendChild(li)

  if (item % 2 == 1) {
    li.setAttribute('style', 'color:red;')
  }
  else if (item % 2 == 0) {
    li.setAttribute('style','color:blue;')
  }
  else {
    li.setAttribute('style' , 'color:black;')

  }

  if (item % 2 == 0) {
    var numero = 0
    var list = document.getElementById('list')
    list.childNodes.forEach(i => {
      if (i.innerHTML % 2 == 0){
        numero += parseInt(i.innerHTML)
      }
     
    })
    alert("Total entre Nº Pares: " + numero);
  }
}

function clearItem () {
  var list = document.getElementById('list')
  localStorage.setItem('list', '')
  list.textContent = ''
}

function save () {
  var list = document.getElementById('list')
  localStorage.setItem('list', list.innerHTML)
}

function load () {
  var list = document.getElementById('list')
  list.innerHTML = localStorage.getItem('list')
}

function remove (li) {
  var list = document.getElementById('list')
  list.removeChild(li)
}




//Budget App

var budget = 0;
var expense = 0;
function addBudget() {
  budget = parseFloat(document.getElementById("budget_input").value);
  document.getElementById("budget").textContent = "Budget: " + budget;
  BalanceUpd();
}

function addExpenses() {
  expense += parseFloat(document.getElementById("expense_input").value);
  document.getElementById("expenses").textContent = "Expenses: " + expense;
  BalanceUpd();
  pos_neg();
}

function BalanceUpd() {
  document.getElementById("balance").textContent = "Balance: " + (budget - expense);
}

function pos_neg() {
var current_balance = (budget - expense); 
if (current_balance > 0) {
  document.getElementById("balance").style.color = "Green";
  } else {
    document.getElementById("balance").style.color = "Red";
  }
}

function saveBudget() {
  let budget = document.getElementById("budget");
  let expenses = document.getElementById("expenses");
  let balance = document.getElementById("balance");
  localStorage.setItem("budget", budget.innerHTML);
  localStorage.setItem("expenses", expenses.innerHTML);
  localStorage.setItem("balance", balance.innerHTML);
}

function loadBudget() {
  document.getElementById("budget").innerHTML = localStorage.getItem("budget");
  document.getElementById("expenses").innerHTML = localStorage.getItem("expenses");
  document.getElementById("balance").innerHTML = localStorage.getItem("balance");
}

//Calculator App
var num="";
var op="";
var num2="";
var resultado=0;
function inserirValue(number){

  if (op==""){
    
  num+=number;
  }
  else{
  num2+=number;
  }
  
}

function inserirOp(operator){
op=operator;
}

function result(){
  if (op=="+"){
    resultado =parseFloat(num)+ parseFloat(num2);
  }
  if (op=="-"){
    resultado =parseFloat(num)- parseFloat(num2);
  }
  if (op=="/"){
    resultado =parseFloat(num)/ parseFloat(num2);
  }
  if (op=="x"){
    resultado =parseFloat(num)* parseFloat(num2);
  }
 

  document.getElementById("textbox").value=resultado;
  op="";
  num="";
  num2="";
  resultado=0;
}

function deleted(){
  document.getElementById("textbox").value="";
}

