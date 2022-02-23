import React, { useState, Fragment } from "react"
import { useNavigate, Link } from "react-router-dom"

// components
import LeftSection from "../../Components/Module/Auth/LeftSection"

// styling
import cx from "classname"
import style from "./signup.module.css"

const Signup = () => {
    return (
        <div className={cx(style.signup, "d-flex")}>
            <div className="container d-flex flex-row bg-white">
                <div className="row">
                    <div className="col d-flex p-0">
                        <LeftSection />
                    </div>
                    <div className="col d-flex p-0">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup