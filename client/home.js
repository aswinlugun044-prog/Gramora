import React,{useEffect,useState}
import axios from 'axios'
const[data,setData]=useState([]);
async function getdata(){

    const response=await axios.get("localhost5000/products")
    setData(response);
    console.log(response.data);
}

useEffect(()=>{
getdata();
},[])