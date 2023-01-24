import DatePicker from "react-datepicker";
import './styles.css'

function Data() {
    return (
        <DatePicker
            selected={new Date()}
            onChange={(date: Date) => {}}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
        />
    )
}

export default Data