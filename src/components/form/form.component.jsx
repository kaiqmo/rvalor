
import React from 'react';
import './form.styles.css';
import {IoIosAddCircle, IoIosRemoveCircle} from 'react-icons/io';


const Form = ({ props,handleChange,handleSubs,handleUps, label, labelinput,value })=>{
    return(
        <div className="initial_money">
        <div className="money-choice">
            <label id="initial_money">{label} </label>
            <span clas="value">{labelinput}<input className="money_input" placeholder={value}  value={value} onChange={ handleChange  }></input>
            <div className="buttons_money">
                <button className="buttons buttom-remove" onClick={handleSubs}>
                    <IoIosRemoveCircle />
                </button>
                <button className="buttons buttom-add" onClick={handleUps}>
                    <IoIosAddCircle/>
                </button> 
            </div>
            </span>
            <br/>
        </div>            
    </div>
    )
}
export default Form;