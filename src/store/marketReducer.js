import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalMarkets: 0,
    totalCards: 0,
    marketList: [],
    lastMarketId: 10000,
    newLocation: "",
  };

export const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    addMarket: (state, action) => {
    // increment lastMarketId and totalMarkets counters
    state.lastMarketId++;
    state.totalMarkets++;

    const newMarket = {
        // what goes in here?
        marketId: state.lastMarketId,
        location: action.payload,
        cards: 0,
    }
    // push the new market onto a copy of the market list
    state.marketList = state.marketList.slice();
    state.marketList.push(newMarket); // should we return something here?
    },
    addCard: (state, action) => {
      state.marketList.map((market) => {
        if (market.marketId === action.payload) {
          
        }
      })
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { addMarket } = marketSlice.actions

export default marketSlice.reducer


// case types.ADD_MARKET:
//     // increment lastMarketId and totalMarkets counters
//     state.lastMarketId++;
//     state.totalMarkets++;
//     console.log("invoked");

//     // create the new market object from provided data
//     const newMarket = {
//       // what goes in here?
//       marketId: state.lastMarketId,
//       location: action.payload,
//       cards: 0,
      
//     };

//     console.log("action.payload", action.payload);

//     // push the new market onto a copy of the market list
//     marketList = state.marketList.slice();
//     marketList.push(newMarket);

//     // return updated state
//     return {
//       ...state,
//       marketList,
//       lastMarketId: state.lastMarketId,
//       totalMarkets: state.totalMarkets,
//       newLocation: '',
//     };