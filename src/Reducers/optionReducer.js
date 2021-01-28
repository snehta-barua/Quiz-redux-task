


import { SAGA_SELECTED_OPT_ID } from "../Constants/optionConst";


export const optionReducer = (state = { isSeleceted:false,selectedOptId:-1},action) =>{
   
    switch(action.type){
        case SAGA_SELECTED_OPT_ID:{
            return{               
                isSeleceted:true,
                selectedOptId:action.index
            }
        }           
            
            default:
                return state;
                             
    }
}
