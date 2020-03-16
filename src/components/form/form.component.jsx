
import React from 'react';
import './form.styles.css';
import {IoIosAddCircle, IoIosRemoveCircle} from 'react-icons/io';
import Button from 'react-bootstrap/Button';


const Form = ({ handleChange,handleSubs,handleUps, label, labelinput,value })=>{
    return(
        <div className="initial_money">
        <div className="money-choice">
            <label id="initial_money">{label} </label>
            <span clas="value">{labelinput}<input className="money_input" placeholder={value}  value={value} onChange={ handleChange  }></input>
                <Button variant="success" size="lg" className="button"  onClick={handleSubs}>
                    <IoIosRemoveCircle center />
                </Button>
                <Button variant="danger" size="lg" className="button" onClick={handleUps}>
                    <IoIosAddCircle/>
                </Button> 
            </span>
            <br/>
        </div>            
    </div>
    )
}
export default Form;