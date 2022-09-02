import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface IDetails{
    details:{
        used:string[];
        description:string;
        webLink:string;
        gitLink:string;
    }
}



const initialState:IDetails= {
    details:{
        used:[],
        description:'',
        webLink:'',
        gitLink:''
    }
}

export const detailsSlice = createSlice({
    name:'details',
    initialState,
    reducers:{
        setDetails:(state,action:PayloadAction<any>)=>{                 
                state.details.used=action.payload.used;
                state.details.description=action.payload.description;
                state.details.webLink=action.payload.webLink;
                state.details.gitLink=action.payload.gitLink;
            }    
    }
})


export const {setDetails} = detailsSlice.actions;
export default detailsSlice.reducer;