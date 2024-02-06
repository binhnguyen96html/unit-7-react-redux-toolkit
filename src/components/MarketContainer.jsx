/**
 * ************************************
 *
 * @module  MarketsContainer
 * @author
 * @date
 * @description stateful component that renders MarketCreator and MarketsDisplay
 *
 * ************************************
 */
import MarketCreator from "./MarketCreator";
import MarketsDisplay from "./MarketDisplay";
const MarketsContainer = () => {

  // how can we access needed pieces of state from the redux store?
  

  // returns a function that can dispatch action creators
 

  

  return (
    <div className="innerbox">
      {/* add components here... */}
      <MarketCreator />
      
      <MarketsDisplay />
    </div>
  );
};

export default MarketsContainer;
