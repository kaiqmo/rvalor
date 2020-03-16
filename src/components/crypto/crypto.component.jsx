
import React from 'react';
import './crypto.styles.css';

const Crypto = ({ btc }) => (
        <div className="crypto">
              {
                  btc? 
                  
                    <h1 > Bitcoin Hoje:{btc.price}</h1>
                  :
                  <div className='btc_offline'>
                    <h1 className="card-title"> Api Offline</h1>
                  </div>
              }
        </div>
      );
    export default Crypto;