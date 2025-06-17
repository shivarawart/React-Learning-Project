import { createSlice } from "@reduxjs/toolkit";


const initalState = {
    status:false,
    userData:null
}

const authSclice = createSlice({
name:"auth",
initalState,
reducers:{
    login:(stae,action) =>{
            state.status = true;
            state.userData = action.playload.userData;
        },
       
    logout:(state) =>{
        state.status = false;
        state.userData = null;

    },
    post:(state,actions) =>{
        state.status = true;
        state.status = userData;

    }
}
})

//post assignment


export const {login,logout} = authSclice.actions;
export default authSclice.reducer;
