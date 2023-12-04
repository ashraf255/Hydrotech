
import { useEffect, useState } from "react";



export default function Fetchdata(){
    const [data, setdata] = useState();
    const api = import.meta.env.VITE_API_URL;
    useEffect(() =>{
        fetch(api + "/get?id=2").then((response) =>response.json()).then((data)=>
        setdata(data))
    }, [])
    return data;
}