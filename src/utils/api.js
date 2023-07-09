import axios from "axios";


const BASE_URL="https://www.googleapis.com/customsearch/v1"


const params={
    key:'AIzaSyA5zJpEDOEfszwRuXJC5Gp-BgTxB6df0pk',
    cx:'23df72452826d4f46'
}


export const fetchDataFromApi = async(payload) => {
   const {data} = await axios.get(BASE_URL,{
   params:{...params, ...payload}
   })
   return data;
};
