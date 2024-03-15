import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reduxconfig/userslice.js";

let store=configureStore(
    {
        reducer:{
        
         user:userReducer
        
        }
    }
)

export default store;