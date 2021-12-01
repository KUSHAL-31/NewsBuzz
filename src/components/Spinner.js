import React from 'react'
import Loading from '../images/loading.gif'
import './compStyle/Spinner.css'

const Spinner = () => {
    return (
        <>
            <div className="spinner">
                <img src={Loading} alt="" />
            </div>
        </>
    )
}

export default Spinner
