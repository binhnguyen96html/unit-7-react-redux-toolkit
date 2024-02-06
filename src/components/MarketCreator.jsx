/**
 * ************************************
 *
 * @module  MarketCreator
 * @author
 * @date
 * @description presentation component that takes user input for new market creation
 *
 * ************************************
 */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMarket } from "../store/marketReducer";

const MarketCreator = props => {
    const [location, setLocation] = useState('');
    const dispatch = useDispatch()

    // const market = useSelector((state) => state.market)
      // console.log(market); 

    const onChangeHandler = (e) => {
        setLocation(e.target.value);
        // console.log(e.target.value); 
      }

      const onClickHandler = () => {
        dispatch(addMarket(location))
        setLocation(''); 
      }
  
  
  return(
  // how do we create the circuit between the store and an input field?
  // how do we update the store from a presentation component?
  <div>
    <label>Create New Market</label>
   <div>
   <label>Location</label>
    <input onChange={onChangeHandler} value={location}/>
    <button onClick={onClickHandler}>Add Market</button>
   </div>
</div>
)};



export default MarketCreator;