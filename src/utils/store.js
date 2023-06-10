//step-1 

import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = configureStore({
//step 3 
reducer:{
    app:appSlice, //now added appSlice into store
},
});

export default store

//step-4 is provide the store to the app 