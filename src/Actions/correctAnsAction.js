


import { SELECTED_OPTION } from "../Constants/optionConst"


export const selectedOption = (id) =>{
    return{
        type:SELECTED_OPTION,
        payload:id
    }

}



