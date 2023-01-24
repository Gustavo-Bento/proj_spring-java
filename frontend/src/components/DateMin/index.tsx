import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './styles.css'

function DateMin() {
    const min = new Date(
        new Date().setDate(
            new Date().getDate() - 365
        )
    );
    const [minDate, setMinDate] = useState(min);
    return (
        <DatePicker
            selected={minDate}
            onChange={(date: Date) => { setMinDate(date) }}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
        />
    )
}

export default DateMin