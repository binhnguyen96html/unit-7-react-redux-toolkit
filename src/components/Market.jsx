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

import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../store/marketReducer";
import { deleteCard } from "../store/marketReducer";

const Market = props => {
  const dispatch = useDispatch()
  const totalCards = useSelector((state) => state.market.totalCards)

  const addCardHandler = () => {
    dispatch(addCard(props.market.marketId))
  }

  const deleteCardHandler = () => {
    dispatch(deleteCard(props.market.marketId))
  }

  let cardPercentage = props.market.cards > 0 ? Math.floor((props.market.cards/totalCards)*100) : 0; 
  
  return(
  <div className="marketBox">
    <p>Market ID: {props.market.marketId}</p>
    <p>Location: {props.market.location}</p>
    <p>Cards: {props.market.cards}</p>
    <p>% of total: {cardPercentage.toFixed(2)}</p>

    <div>
      <button onClick={addCardHandler} >Add Card</button>
      <button onClick={deleteCardHandler}>Delete Card</button>
    </div>
  </div>
)};

export default Market;