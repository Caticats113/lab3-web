import "./filter.css"

export function Filter({ setFilter }) {
    const handleChange = (e) => {
        console.log("value" + e.target.value);
        setFilter(e.target.value)
    }
    console.log("esxteee " + setFilter);

    return (
        <div id="budget">
            <h2>Filter categories</h2>
            <input list="optionlist" onChange={handleChange} placeholder="Select expense category"/>
            <datalist id="optionlist">
                <option value="All"></option>
                <option value="Savings"></option>
                <option value="Food"></option>
                <option value="House"></option>
                <option value="Miscellaneous Expenses"></option>
                <option value="Leisure"></option>
                <option value="Health"></option>
                <option value="Subscriptions"></option>
            </datalist>
        </div>
    )
}