import React from 'react';

import './NFTCard.scss';

const NFTCard = () => {
  return (
    <div className="container">

      <div className="hero">
        <div className="info">
          <h1>Equilibrium #3429</h1>
          <h3>Equilibrium is an NFT that will appeal to many players.</h3>
        </div>
      </div>

      <div className="details">
        <div className="top">
          <div className="left">
            <img
              src={'/static/images/diamond.png'}
              alt='diamond'
            />
            <h3>0.041 ETH</h3>
          </div>

          <div className="right">
            <img
              src={'/static/images/clock.png'}
              alt='clock'
            />
            <p>3 days left</p>
          </div>

        </div>

        <div className="stroke"/>

        <div className="bottom">
          <img
            src={'/static/images/Eva.jpg'}
            alt='Eva'
          />

          <h3>Creation of <span>Eva Smitch</span></h3>
        </div>
      </div>

    </div>
  )
}

export default NFTCard;