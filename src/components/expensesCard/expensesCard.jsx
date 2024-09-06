import "./expensesCard.css"

export function ExpensesCard({ expense, handleEdit, openEdit, handleDelete }) {

const handleEditClick = () => {
    handleEdit(expense)
    openEdit(true)
}
const handleDeleteClick = () => {
    handleDelete(expense)
}

    return (
        <div className="expensesCard">
            <img src={expense.category + ".png"} />
            <section className="expensesCardText">
                <h4>{expense.category}</h4>
                <p className="expenseName">{expense.expenseName}</p>
                <p>{expense.date}</p>
            </section>
            <section>
                <h2>$ {expense.amount}</h2>
                <button className="cardBut" onClick={handleDeleteClick}><img src="./icons8-basura-llena-64.png"/></button>
                <button className="cardBut" onClick={handleEditClick}><img src="./icons8-editar-64.png"/></button>
            </section>
        </div>
    )
}