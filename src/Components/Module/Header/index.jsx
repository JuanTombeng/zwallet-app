import React, { Fragment } from "react";
import './header.css'
import defaultPict from '../../../Assets/Images/default.jpg'
import bell from '../../../Assets/Images/bell.png'

const Header = (props) => {
    return (
        <Fragment>
            <header className="header d-flex">
                <div className="header-left w-50 d-flex flex-fill align-items-center">
                    <div className="header-title">
                        Zwallet
                    </div>
                </div>
                <div className="header-right w-50 d-flex">
                    <div className="header-user-profile d-flex flex-fill justify-content-end align-items-center text-center">
                        <img className="img-fluid" src={props.profile_picture ? props.profile_picture : defaultPict} width={50}  alt="" />
                        <div className="user-profile-middle mx-3">
                            <p className="header-profile-name">
                                {props.display_name ? props.display_name : `Profile Name`}
                            </p>
                            <p className="header-phone-number">
                                {props.phone_number ? props.phone_number : `Phone Number`}
                            </p>
                        </div>
                            <img src={bell} width={25} alt="" />
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Header