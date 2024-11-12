import React from 'react';


function Award() {
    return (<div className='container mt-5 p-5'>
        <div className='row'>
    <div className='col-6'>
        <img src='media\assets\largestBroker.svg' />
    </div>
    <div className='col-6'>
        <h1>Largest stocks broker in India</h1>
        <p>2+ million zerodha clients contribute to over 15% of all retail order volumes in india daily by tranding and investing in:</p>
        <div className='row mt-5'>
        <div className='col-6'  ><ul>
            <li>Futures and Options</li>
            <li>Commodity Derivatives</li>
            <li>currency Derivatives</li> 
        </ul></div>
        <div className='col-6'>
            <li>Stocks and IPOs </li>
            <li> Direct mutual funds</li>
            <li>Bonds and Govt. securities</li>
        </div>
        </div>

  <img src='media\assets\pressLogos.png' className='mt-5' style={{width:"80%"}}/>

        
    </div>


        </div>
    </div>
    );
}

export default Award;