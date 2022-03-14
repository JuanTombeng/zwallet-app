import React, { Fragment } from 'react';

const Chart = () => {
    return (
        <Fragment>
            <div className="chart wrapper d-flex flex-column w-50 h-100">
                <div className="chart-upper d-flex h-50 w-100">
                    <div className="chart-upper-left w-50 d-flex flex-column">
                        <i className="chart-icon fa-solid fa-arrow-down green mb-2" ></i>
                        <p className="chart-income-text mb-2">
                            Income
                        </p>
                        <h4 className="chart-income-balance">
                            Rp 2.100.200
                        </h4>
                    </div>
                    <div className="chart-upper-right w-50">
                        <i className="chart-icon fa-solid fa-arrow-up red mb-2" ></i>
                        <p className="chart-outcome-text mb-2">
                            Outcome
                        </p>
                        <h4 className="chart-outcome-balance">
                            Rp 2.100.200   
                        </h4>
                    </div>
                </div>
                <div className="chart-lower d-flex d-flex h-50 w-100">
                    
                </div>
            </div>
        </Fragment>
    )
}

export default Chart