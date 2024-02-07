/**
 * ************************************
 *
 * @module  MarketsDisplay
 * @author
 * @date
 * @description presentation component that renders n Market components
 *
 * ************************************
 */

import { useSelector } from "react-redux";
import Market from "./Market";




const MarketsDisplay = props => {
  const market = useSelector(state => state.market)
  console.log(market)
  const markets = market.marketList.map((market, index) => (
    <Market market={market} key={index}/>
  ))

  return(
    <div className="displayBox">
      <h4>Markets</h4>
       {/* iterate marketList to create Market  */}
      {markets}
    </div>
  );
};

export default MarketsDisplay;