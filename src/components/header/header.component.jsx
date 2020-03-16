import React from 'react';
import './header.styles.css';
import Crypto from '../crypto/crypto.component.jsx';

const header = ({btc})=>{
return (
  <div  className="head">
    <div className="row">
      <h1>Real Valor</h1>
      {
        btc?
        <Crypto btc={btc} />: <h3>Api Off</h3>
      }
    </div>
</div>
);
}

export default header;