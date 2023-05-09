import React from 'react';

import './Summary.scss';

const Summary = () => {
  return (
    <div className='container'>

        <div className="img-container">
            <img
                src='public/hero.jpg'
            />
        </div>

        <div className="details">

            <div className="summary">
                <h1>Ordery Summary</h1>
                <p>You're close! Confirm your purchase and complete your order in the next step</p>
            </div>

            <div className="plan-container">

                <div className="left">
                    <img
                        src='public/90.png'
                    />
                    <div className='element'/>
                    <div className="plan-type">
                        <h2>Annual Plan</h2>
                        <p>$58.99 / year</p>
                    </div>
                </div>

                <div className="right">
                   <h2>Change</h2>
                </div>

            </div>

            <div className="order-options">

                <button>Proceed to Payment</button>
                <h2>Cancel Order</h2>

            </div>

        </div>
    </div>
  )
}

export default Summary