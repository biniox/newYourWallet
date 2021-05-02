import './DatePicker.scss';




const DatePicker = ({dateFrom, dateTo, handlerFrom, handlerTo}) => {

    const handlerDateFrom = (e) => handlerFrom(e.target.value);
    const handlerDateTo = (e) => handlerTo(e.target.value);




    return (
            <div className="DatePickerWrapper">
                    <input type="date" value={dateFrom} onChange={handlerDateFrom} />
                    <p> - </p>
                    <input type="date" value={dateTo} onChange={handlerDateTo}/>     

            </div>

    )
}

export default DatePicker
