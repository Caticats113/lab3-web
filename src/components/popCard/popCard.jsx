import "./popCard.css"
import { useState } from "react"
export function PopCard({ onAdd, displayValue, setDisplayValue, remaining }) {

    const [expenseName, setExpenseName] = useState(null)
    const [amount, setAmount] = useState(null)
    const [category, setCategory] = useState(null)
    const [date, setDate] = useState(null)

    const handleExpenseName = (e) => {
        setExpenseName(e.target.value)
    }
    const handleAmount = (e) => {
        setAmount(Number(e.target.value))
    }
    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const handleExpense = () => {
        console.log("acaaaaa" + amount <= remaining)
        if (expenseName && amount && category && date) {
            if (amount <= remaining) {
                onAdd({ expenseName: expenseName, amount: amount, category: category, date: date })
                setDisplayValue(false)
            } else {
                alert("Tu gasto es mayor a tu presupuesto")
            }
        } else {
            alert("Completa todos los campos antes")
        }
    }

    if (displayValue) {return (
        <>
        <div id="blackout"></div>
        <div id="popCard">
            <p>Expense Name</p>
            <input type="string" placeholder="Add expense name" onChange={handleExpenseName} />
            <p>Amount</p>
            <input type="number" onChange={handleAmount} placeholder="Enter your expense cost"/>
            <p>Category</p>
            <input list="optionlist" onChange={handleCategory} placeholder="Select expense category"/>
            <datalist id="optionlist">
                <option value="Savings"></option>
                <option value="Food"></option>
                <option value="House"></option>
                <option value="Miscellaneous Expenses"></option>
                <option value="Leisure"></option>
                <option value="Health"></option>
                <option value="Subscriptions"></option>
            </datalist>
            <p>Expense Date</p>
            <input type="date" onChange={handleDate} />
            <button onClick={handleExpense}>Register Expense</button>
        </div>
        </>
    )}
}