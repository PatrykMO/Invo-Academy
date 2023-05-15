import React from 'react';

import './NFTCard.scss';

const NFTCard = () => {
  return (
    <div className="nftcard-component">

      <div className="nftcard-component_header">
        <div className="nftcard-component_header_content-container">
          <h1 className='nftcard-component_header_content-container_title'>
            Equilibrium #3429
          </h1>
          <h3 className='nftcard-component_header_content-container_desc'>
            Equilibrium is an NFT that will appeal to many players.
          </h3>
        </div>
      </div>

      <div className="nftcard-component_main">
        <div className="nftcard-component_main_content-container">
          <div className="nftcard-component_main_content-container_price">
            <img
              src={'/static/images/diamond.png'}
              alt='diamond'
            />
            <h3>0.041 ETH</h3>
          </div>

          <div className="nftcard-component_main_content-container_time">
            <img
              src={'/static/images/clock.png'}
              alt='clock'
            />
            <p>3 days left</p>
          </div>

        </div>

        <div className="nftcard-component_main_stroke"/>

        <div className="nftcard-component_main_author">
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