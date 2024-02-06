/**
 * ************************************
 *
 * @module  TotalsDisplay
 * @author
 * @date
 * @description presentation component that displays the total cards and total markets
 *
 * ************************************
 */

import React from 'react';
import { useSelector } from 'react-redux';

const TotalsDisplay = () =>{
  const market = useSelector((state) => state.market)
//   console.log(market); 
  return(
  <div className="innerbox" id="totals">
    <label htmlFor="totalCards">Total Cards:</label>
    <span id="totalCards">{market.totalCards}</span>
    <p>
      <label htmlFor="totalMarkets">Total Markets:</label>
      <span id="totalCards">{market.totalMarkets}</span>
    </p>
  </div>
)};
export default TotalsDisplay;