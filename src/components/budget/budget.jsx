import "./budget.css"
import { useState } from 'react'

export function Budget({ onAdd, screen }) {
    const [budget, setBudget] = useState(0)

    const handleChange = (e) => {
        //console.log(e.target.value);
        setBudget(Number(e.target.value))
        
    }
    //console.log("esxteee " + onAdd);

    const handleClick = () => {
        if (budget != 0) {
            console.log("clicked", budget);
            onAdd(budget)
            screen(1)
        } else {
            alert("Set your budget's value please")
        }
    }

    return (
        <div id="budget">
            <h2>Define Budget</h2>
            <input type="number" onChange={handleChange} placeholder="Enter your budget value"/>
            <button onClick={handleClick}>Click to set Budget</button>
        </div>
    )
}