import React from "react"
import styles from "./Input.module.css"

const Input=({lbl, type, errorMsg, fnChange, name})=>{
    return (
        <div className="row mb-3">
            <div className="col-sm-5 text-end">
                <b>{lbl}</b>

            </div>
            <div className="col-sm-3">
                <input name={name} fnChange={fnChange} type={type} className="form-control"/>

            </div>
            <div className="col-sm-4">
              {errorMsg &&  <b className="text-danger">{errorMsg}</b>}
            </div>

        </div>
    )

}

export default Input