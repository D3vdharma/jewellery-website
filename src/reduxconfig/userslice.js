import {createSlice} from "@reduxjs/toolkit";

let slice=createSlice({

    name:"user",
    initialState:{
        value:{

            user:{},
            isLoggedin:false

        }
       
    }, reducers:{

         setCurrentuser:(state,actions)=>
         {
            state.value.user=actions.payload;
            state.value.isLoggedin=true
         }
       , logout: (state,action)=>
        {
            console.log("come to logout");
            state.value.user = {};
            state.value.isLoggedin =false;
          
        }
    
    }
});

export const {logout, setCurrentuser}  = slice.actions;

export default slice.reducer;