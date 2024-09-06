import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import "./expenses.css"

export function Expenses({ budget, expenses }) {
    let remaining = budget - expenses;

    return (
        <div id="expenses">
            <section id="piechart">
                <CircularProgressbar value={expenses*100/budget} maxValue={100} text={`${expenses*100/budget}%`}/>
            </section>
            <section id="expensesText">
                <p><b>Budget: </b>{budget}</p>
                <p><b>Remaining: </b>{remaining}</p>
                <p><b>Expenses: </b>{expenses}</p>
            </section>
        </div>
    )
}