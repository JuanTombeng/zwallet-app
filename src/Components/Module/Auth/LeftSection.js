import React, { Fragment } from "react"
import leftBackgroud from '../../../Images/bg-app.svg'

// styling
import cx from "classname"
import style from "./leftsection.module.css"

const LeftSection = () => {
    return (
        <Fragment>
            <div className={cx(style['left-section'], 'd-flex flex-column flex-fill')}>
                <div className={style['top-left-title']}>Zwallet</div>
                <img className="bg-app" src={leftBackgroud} alt="" width="500"/>
                <h2 className={style['bottom-left-title']}>App that Covering Banking Needs.</h2>
                <p className={style['bottom-left-parag']}>Zwallet is an application that focussing in banking needs for all users
                in the world. Always updated and always following world trends.
                5000+ users registered in Zwallet everyday with worldwide
                users coverage.</p>
            </div>
        </Fragment>
    )
}

export default LeftSection