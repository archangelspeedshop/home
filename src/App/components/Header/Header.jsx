import { Link } from 'react-router-dom'
import ArchangelLogo from '../../../assets/vectors/header-logo.svg'
import classes from './Header.module.scss'

const Header = () => {
    return (
        <header className={classes.Header__Container}>
            <div className={classes.Header__Left}>
                <img src={ArchangelLogo} alt="archangel logo"/>
            </div>
            <div className={classes.Header__Right}>
                <div className={classes.Header__Links_Container}>
                    <div className={classes.Header__Links}>
                        <Link to="/"><b>Home</b></Link>
                        <Link to="services"><b>Services</b></Link>
                        <Link to="about-us"><b>About Us</b></Link>
                        <Link to="contact"><b>Contact</b></Link>
                    </div>
                    <div className={classes.Header__CTA}>
                        <Link to="book"><b>Book online</b></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
