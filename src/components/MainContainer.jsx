import React from 'react'
import TotalsDisplay from './TotalDisplay';
import MarketsContainer from './MarketContainer';

const MainContainer = () => {
    // add pertinent state here
    
  
  
    
  
    return (
      <div className="container">
        <div className="outerBox">
          <h1 id="header">MegaMarket Loyalty Cards</h1>
          {/* /* Start adding components here... */}
          <TotalsDisplay />
  
          <MarketsContainer />
        </div>
      </div>
    );
  };
  
  export default MainContainer;