import {useEffect, useState} from 'react';

import ArchangelLogo from '../../../assets/vectors/header-logo.svg'
import classes from './Header.module.scss'
import classNames from "classnames";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false)

    const handleScroll = () => {
        const headerHeight = 152
        const scrollY = window.scrollY

        setIsSticky(scrollY >= headerHeight)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <>
            <header>
                <div className={classes.Header__Container}>
                    <div className={classes.Header__Left}>
                        <img src={ArchangelLogo} alt="archangel logo"/>
                    </div>
                    {/*<div className={classes.Header__Right}>*/}
                    {/*    <div className={classes.Header__CTA_Container}>*/}
                    {/*        <div className={classes.Header__CTA}>*/}
                    {/*            <Link to="book"><b>Book online</b></Link>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

            </header>
            <div className={classNames(classes.Header__Links, isSticky && classes.Sticky)}>
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#about-us">About Us</a>
                {/*<Link to="contact">Contact</Link>*/}
            </div>
        </>
    )
}

export default Header
