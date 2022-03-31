import React, { Fragment } from 'react';
import Button from '../../Base/Button';

const Bluebar = (props) => {
    return (
        <Fragment>
            <div className="bluebar wrapper d-flex w-100">
                <div className="left-wrapper d-flex flex-column justify-content-between w-50">
                    <p className="bluebar-title">
                        Balance
                    </p>
                    <h2 className="bluebar-balance">
                        Rp {props.balance}
                    </h2>
                    <p className="bluebar-phone-number">
                        {props.phone_number}
                    </p>
                </div>
                <div className="right-wrapper d-flex flex-column w-50 justify-content-evenly align-items-end">
                    {/* <i className="dashboard-icon fa-solid fa-arrow-up" ></i> */}
                    <Button className="dashboard-button"  value="Transfer" />
                    {/* <i className="dashboard-icon-secondary fa-solid fa-arrow-down" ></i> */}
                    <Button className="dashboard-button"  value="Top Up" />
                </div>
            </div>
        </Fragment>
    )
}

export default Bluebar