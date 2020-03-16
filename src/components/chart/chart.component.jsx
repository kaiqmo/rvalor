import React from 'react';
import './chart.styles.css';

import {  LineChart, Line, XAxis, YAxis,
     Tooltip, CartesianGrid,  Brush,  AreaChart, Area,
      } from 'recharts';

const Chart = ({props})=>{
    return(
    // <div className="footer-container">
        
    //     <a className="afooter" href={"https://github.com/kaiqmo"}>
    //         <h1 className="h1Footer">Git Kaique</h1>
    //     </a>
    // </div>
    <div className="line-charts chart">
    <div className="line-chart-wrapper">
      <LineChart
        width={600} height={400} data={props}
        margin={{ top: 40, right: 40, bottom: 20, left: 20 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="date" label="" />
        <YAxis domain={['auto', 'auto']} label="" />
        <Tooltip
          wrapperStyle={{
            borderColor: 'white',
            boxShadow: '2px 2px 3px 0px rgb(204, 204, 204)',
          }}
          contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
          labelStyle={{ fontWeight: 'bold', color: '#666666' }}
        />
        <Line dataKey="price" stroke="#ff7300" dot={false} />
        <Brush dataKey="date" startIndex={props.length - 365}>
          <AreaChart>
            <CartesianGrid />
            <YAxis hide domain={['auto', 'auto']} />
            <Area dataKey="price" stroke="#ff7300" fill="#ff7300" dot={false} />
          </AreaChart>
        </Brush>
      </LineChart>
    </div>


  </div>
    
    )
}
export default Chart;

// components n tem life cycle  e state.
//serve para filtrar e retornar um html