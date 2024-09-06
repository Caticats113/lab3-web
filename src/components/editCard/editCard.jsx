import "../popCard/popCard.css"
import { useState } from "react"
export function EditCard({ displayValue, handleEdit, expense, setDisplayValue }) {

//    console.log(expense)

    const [expenseName, setExpenseName] = useState(expense.expenseName)
    const [amount, setAmount] = useState(expense.amount)
    const [category, setCategory] = useState(expense.category)
    const [date, setDate] = useState(expense.date)

    const handleExpenseName = (e) => {
        console.log(e.target.value);
        setExpenseName(e.target.value)
    }
    const handleAmount = (e) => {
        console.log(e.target.value);
        setAmount(Number(e.target.value))
    }
    const handleCategory = (e) => {
        console.log(e.target.value);
        setCategory(e.target.value)
    }
    const handleDate = (e) => {
        console.log(e.target.value);
        setDate(e.target.value)
    }
    const handleEditClick = () => {
        handleEdit({ expenseName: expenseName, amount: amount, category: category, date: date })
        setDisplayValue(false)
        console.log("esteee" + expenseName)
    }

    if (displayValue) {
        return (
            <>
                <div id="blackout"></div>
                <div id="popCard">
                    <p>Expense Name</p>
                    <input type="string" placeholder="Add expense name" onChange={handleExpenseName} defaultValue={expense.expenseName} />
                    <p>Amount</p>
                    <input type="number" onChange={handleAmount} placeholder="Enter your expense cost" defaultValue={expense.amount} />
                    <p>Category</p>
                    <input list="optionlist" onChange={handleCategory} placeholder="Select expense category" defaultValue={expense.category} />
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
                    <input type="date" onChange={handleDate} defaultValue={expense.date} />
                    <button onClick={handleEditClick}>Change Expense</button>
                </div>
            </>
        )
    }
}