import axios from "axios";
const url=`https://www.googleapis.com/books/v1/volumes?q="book"&key=AIzaSyDn3_d0v6u-V64kk5mR1xIVsV0JfLIocyA`;

export const fetchData = async ()=>
{

    
    try{

        const { data: { items }} = await axios.get(url);
        console.log(items);
        return items;     
       }
    catch(error)
    {
        console.log(error);
    }
}

export default {};