import React from 'react';
import './header.styles.css';
import {Col} from 'react-bootstrap';
import Real from '../../assets/image/real.png';

const header = ({btc_hoje})=>{
return (
  <div  className="head">
    <Col  xs={6} md={4}>
      
    </Col>
    <Col  xs={6} md={4}>
     <img src={Real} className="image" />
    </Col>
    <Col  xs={6} md={4}>
      <h3> Cotaçoes do dia</h3>
      {
        btc_hoje?
            <h4>Bitcoin: {btc_hoje} </h4>    
        :''
      }
      <h4>Renda Fixa: 10%</h4>
    </Col>
    
</div>
);
}

export default header;