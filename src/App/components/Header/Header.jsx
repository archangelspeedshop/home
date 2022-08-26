import { Link } from 'react-router-dom'
import ArchangelLogo from '../../../assets/vectors/header-logo.svg'
import classes from './Header.module.scss'

const Header = () => {
    return (
        <header className={classes.Header__Container}>
            <img src={ArchangelLogo} alt="archangel logo"/>
            <div className={classes.Header__Links_Container}>
                <div className={classes.Header__Links}>
                    <Link to="/">Home</Link>
                    <Link to="about-us">Services</Link>
                    <Link to="about-us">About Us</Link>
                    <Link to="about-us">Contact</Link>
                </div>
                <div className={classes.Header__CTA}>
                    <Link to="about-us">Book online</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
