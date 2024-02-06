/**
 * ************************************
 *
 * @module  Market
 * @author
 * @date
 * @description presentation component that renders a single box for each market
 *
 * ************************************
 */



const Market = props => {
  
  

  


  
  
  // let cardPercentage = props.market.cards > 0 ? Math.floor((props.market.cards/totalCards)*100) : 0; 
  
  return(
  <div className="marketBox">
    <p>Market ID: </p>
    <p>Location: </p>
    <p>Cards: </p>
    <p>% of total: </p>

    <div>
      <button >Add Card</button>
      <button >Delete Card</button>
    </div>
  </div>
)};

export default Market;