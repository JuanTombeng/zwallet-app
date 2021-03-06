import React, { Fragment } from 'react';
import graph from '../../../Assets/Images/graphic.svg'

const Chart = (props) => {
    return (
        <Fragment>
            <div className="chart wrapper d-flex flex-column w-50 h-100">
                <div className="chart-upper d-flex h-25 w-100">
                    <div className="chart-upper-left w-50 d-flex flex-column">
                        <i className="chart-icon fa-solid fa-arrow-down green mb-2" ></i>
                        <p className="chart-income-text mb-2">
                            Income
                        </p>
                        <h4 className="chart-income-balance">
                            Rp {props.income}
                        </h4>
                    </div>
                    <div className="chart-upper-right w-50">
                        <i className="chart-icon fa-solid fa-arrow-up red mb-2" ></i>
                        <p className="chart-outcome-text mb-2">
                            Outcome
                        </p>
                        <h4 className="chart-outcome-balance">
                            Rp {props.outcome} 
                        </h4>
                    </div>
                </div>
                <div className="chart-lower d-flex d-flex justify-content-center h-75 w-100 py-3">
                    <img src={graph} alt="" />
                </div>
            </div>
        </Fragment>
    )
}

export default Chart