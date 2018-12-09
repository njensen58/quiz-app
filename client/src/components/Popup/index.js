import React from 'react'
import './popupStyle.css'

const Popup = (props) => {
    const { question, toggleClose, method, id } =props
    return (
        <div className="popup-container">
            <div className="popup-contents">
                <div>
                    { question }
                </div>
                <div>
                    <button onClick={toggleClose}>Cancel</button>
                    <button onClick={() => method(id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Popup