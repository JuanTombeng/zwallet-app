import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const SummaryHistory = ({children}) => {
    return (
        <Fragment>
            <div className="summary wrapper flex-column w-50 h-100">
                <div className="summary-top d-flex align-items-center justify-content-between px-4">
                    <h4 className="summary-history-title">
                    Transaction History
                    </h4>
                    <Link to='/main/history' style={{textDecoration : 'none'}}>
                        <p className="summary-history-link">
                            See all
                        </p>
                    </Link>
                </div>
                <div className="summary-bottom d-flex flex-column">
                    {children}
                </div>
            </div>
        </Fragment>
    )
}

export default SummaryHistory