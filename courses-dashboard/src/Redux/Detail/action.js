import axios from "axios"
import * as types from "../actionTypes"

const getDetails = (payload) => ({
 type:types.GET_DETAILS,
 payload
})

export const getDetailData = () => {
    return async (dispatch)=>{
        try{
            const response = await axios.get('http://localhost:8080/syllabus')
            const detailData = response.data

            dispatch(getDetails(detailData))
        }
        catch(error){
            console.error('Error fetching detail:', error);
         }
    }
}