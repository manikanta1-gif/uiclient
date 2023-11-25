"use client"
import React, { useState } from "react"
import Input from "@/components/inputControls/Input"
import configuration from "./configuration.json"
const Login=()=>{
    const [dataObj, setDataObj] = useState({})
    const fnLogin=()=>{
        console.log(dataObj)
        alert("clicked ")
    }
    const fnChange=(eve)=>{
        const {name, value} = eve.target
        setDataObj({
            ...dataObj,
            [name] : value
        })

    }

    return <div className="container-fluid">
        <h3 className="text-center my-3">Login</h3>
         {
            configuration.map((obj, ind)=>{

                return(
                     <Input key={`input_${ind}`} fnChange={fnChange} {...obj}/>
                )
                    
            })
         }
        
       <div className="offset-sm-5 col-sm-7">
        <div>
         <button onClick={fnLogin} className="btn btn-primary" >Login</button>
        </div>
       </div>
    </div>

}
export default Login;