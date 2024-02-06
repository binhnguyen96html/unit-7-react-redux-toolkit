import { configureStore } from '@reduxjs/toolkit'
import marketReducer from './marketReducer'

export const store = configureStore({
  reducer: {
    market: marketReducer 
    
  },
})