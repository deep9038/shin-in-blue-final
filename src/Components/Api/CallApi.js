import { useEffect, useState } from "react"
// const BaseUrl = "https://192.168.29.146:3000"

const FatchData=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("http://192.168.29.146:3000/api/vendorData").then((result)=>{
            result.json().then((resp)=>{
              setData(resp)
              
            })
        })
    },[])
    return data
}
export default FatchData