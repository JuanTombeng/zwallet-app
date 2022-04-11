import React, { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Components/Base/Button';
import'./LandingPage.css'
import landingPhone from '../Assets/Images/landing-phone.svg'
import appPhone from '../Assets/Images/app-phone.svg'
import appLock from '../Assets/Images/app-lock.svg'
import appDownload from '../Assets/Images/app-download.svg'
import appImg from '../Assets/Images/app-img.svg'
import user1 from '../Assets/Images/ayase1.jpg'
import user2 from '../Assets/Images/koco.jpg'
import user3 from '../Assets/Images/marin1.jpg'

const LandingPage = () => {
    return (
        <Fragment>
            <div className="container-fluid landing p-0">
                <section className="upper">
                    <div className="header-upper d-flex justify-content-between">
                        <h1 className='landing-title'>Zwallet</h1>
                        <div className="d-flex justify-content-between">
                            <Button className='landing-button' value='Login' />
                            <Button className='landing-button-signup' value='Sign Up' />
                        </div>
                    </div>
                    <div className="hero-upper d-flex">
                        <div className="left-hero d-flex flex-column w-50">
                            <h2>Awesome App For Saving Time.</h2>
                            <p>We bring you a mobile app for banking problems that oftenly wasting much of your times.</p>
                            <Button className='landing-button' value='Try It Free' />
                        </div>
                        <div className="right-hero d-flex w-50 justify-content-center">
                            <img src={landingPhone} alt="" />
                        </div>
                    </div>
                </section>
                <section className="application d-flex flex-column">
                    <div className="application-upper d-flex flex-column align-items-center w-100 justify-content-center">
                        <h2>About the Application.</h2>
                        <p>We have some great features from the application and it’s totally free to use by all users around the world.</p>
                        <div className="d-flex">
                            <div className="application-item-wrapper d-flex flex-column align-items-center">
                                <img src={appPhone} alt="" />
                                <h4>24/7 Support</h4>
                                <p>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
                            </div>
                            <div className="application-item-wrapper d-flex flex-column align-items-center">
                                <img src={appLock} alt="" />
                                <h4>Data Privacy</h4>
                                <p>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
                            </div>
                            <div className="application-item-wrapper d-flex flex-column align-items-center">
                                <img src={appDownload} alt="" />
                                <h4>Easy Download</h4>
                                <p>Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.</p>
                            </div>
                        </div>
                    </div>
                    <div className="application-lower d-flex w-100">
                        <div className="d-flex application-lower-left flex-column justify-content-center align-items-center">
                            <h2>100+ Trusted Partners.</h2>
                            <p>We have reached global level and have 100+ brand partners around the globe.</p>
                        </div>
                        <div className="d-flex application-lower-right">
                            <img src={appImg} alt="" />
                        </div>
                    </div>
                </section>
                <section className="features d-flex">
                    <div className="features-left d-flex w-50 justify-content-center">
                        <img src={landingPhone} alt="" />
                    </div>
                    <div className="features-right d-flex flex-column justify-content-center">
                        <h2>All The Great Zwallet Features.</h2>
                        <div className="features-item-wrapper d-flex flex-column justify-content-between">
                            <h4>1. Small Fee</h4>
                            <p>We only charge 5% of every success transaction done in Zwallet app.</p>
                        </div>
                        <div className="features-item-wrapper d-flex flex-column justify-content-between">
                            <h4>2. Data Secured</h4>
                            <p>All your data is secured properly in our system and it’s encrypted.</p>
                        </div>
                        <div className="features-item-wrapper d-flex flex-column justify-content-between">
                            <h4>3. User Friendly</h4>
                            <p>Zwallet come up with modern and sleek design and not complicated.</p>
                        </div>
                    </div>
                </section>
                <section className="users d-flex flex-column">
                    <div className="users-upper d-flex flex-column align-items-center w-100 justify-content-center">
                        <h2>What Users are Saying.</h2>
                        <p>We have some great features from the application and it’s totally free to use by all users around the world.</p>
                        <div className="d-flex">
                            <div className="users-item-wrapper d-flex flex-column align-items-center">
                                <img src={user1} alt="" />
                                <h4>Ayase Aragaki</h4>
                                <p>“I use this app since 2 years ago and this is the best app that I’ve ever use in my entire life”</p>
                            </div>
                            <div className="users-item-wrapper d-flex flex-column align-items-center">
                                <img src={user2} alt="" />
                                <h4>Shinobu Kocho</h4>
                                <p>“I use Zwallet to manage all financial needs. It’s super easy to use and it’s 100% free app”</p>
                            </div>
                            <div className="users-item-wrapper d-flex flex-column align-items-center">
                                <img src={user3} alt="" />
                                <h4>Kitagawa Marin</h4>
                                <p>“Since I’m using this app, I’m not going to move to another similar app. Thank you Zwallet!”</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer d-flex flex-column">
                        <div className="footer-upper d-flex flex-column justify-content-evenly">
                            <h2>Zwallet</h2>
                            <p>Simplify financial needs and saving much time in banking needs with one single app.</p>
                        </div>
                        <div className="footer-lower d-flex justify-content-between align-items-center">
                            <div className="footer-lower-left d-flex">
                                <p>2020 Zwallet. All right reserved.</p>
                            </div>
                            <div className="footer-lower-right d-flex">
                                <p className='me-5'>+62 5637 8882 9901</p>
                                <p>contact@zwallet.com</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

export default LandingPage