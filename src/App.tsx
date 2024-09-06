import { useState, useEffect } from 'react'
import { Budget, Expenses, PopCard, ExpensesCard, Filter, EditCard } from './components/index'
import './App.css'
import { Expense } from './components/definitions'
import { Screens } from './components/definitions'

function App() {
  const [budget, setBudget] = useState(0)
  //initialice expenses
  const [expenses, setExpenses] = useState<Expense[]>([])
  //set screen
  const [screen, setScreen] = useState(0)
  //set filter
  const [filter, setFilter] = useState("All")
  console.log("filter" + filter)

  //add new expenses
  const handleExpense = (newExpense: Expense) => {
    console.log(newExpense)
    setExpenses(prev => [...prev, newExpense])
  }

  //display or not the pop card to add expenses
  const [popDisplayValue, setPopDisplayValue] = useState(false)

  //display or not the pop card to add expenses
  const [editDisplayValue, setEditDisplayValue] = useState(false)

  //expense name when edit button is pressed
  const [expenseEdit, setExpenseEdit] = useState<Expense>()

  //set expenses sum
  let expensesValue = 0;
  expenses.map((i) => {
    expensesValue += Number(i.amount);
  })

  const handleClick = () => {
    setPopDisplayValue(true)
  }

  const handleDelete = (deleteExpense: Expense) => {

    const deleteIndex = expenses.findIndex(i => i.expenseName === deleteExpense?.expenseName)
    const newState = [...expenses]
    newState.splice(deleteIndex, 1)
    setExpenses(newState)
    return (console.log(expenses))
}


const handleEdit = (editedExpense: Expense) => {
  const index = expenses.findIndex(i => i.expenseName === expenseEdit?.expenseName)

  const newState = [...expenses]
  newState[index].expenseName = editedExpense.expenseName
  newState[index].amount = editedExpense.amount
  newState[index].category = editedExpense.category
  newState[index].date = editedExpense.date
  setExpenses(newState)
}

switch (Screens[screen]) {
  case "main":
    return (
      <>
        <Expenses budget={budget} expenses={expensesValue} />
        <PopCard onAdd={handleExpense} displayValue={popDisplayValue} setDisplayValue={setPopDisplayValue} remaining={budget - expensesValue} />
        {editDisplayValue ?
          <EditCard displayValue={editDisplayValue} handleEdit={handleEdit} expense={expenseEdit} setDisplayValue={setEditDisplayValue} />
          :
          console.log("no hay expenses aun")
        }
        <Filter setFilter={setFilter} />
        {expenses.length === 0 ?
          <div><h2>No hay tareas</h2></div>
          :
          expenses.map((i) => {
            console.log(i);
            if (i.category == filter || filter == "All" || filter == "") {

              return (<ExpensesCard expense={i} handleEdit={setExpenseEdit} openEdit={setEditDisplayValue} handleDelete={handleDelete} />)
            }
          })
        }

        <button onClick={handleClick} style={{ display: popDisplayValue ? "none" : "flex" }} id='addExpense'>Add expense</button>
      </>
    )
    break;

  default:
    return (<Budget onAdd={setBudget} screen={setScreen} />)
    break;
}
}

export default App