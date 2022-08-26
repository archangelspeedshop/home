import classes from './Home.module.scss'
import MapsLogo from '../../assets/vectors/google-maps-logo.svg'
import Phone from '../../assets/vectors/phone-icon.svg'
import Instagram from '../../assets/vectors/instagram-logo.svg'
import classNames from "classnames";

const Home = () => {
    return (
        <div className={classes.Content}>
            <div className={classes.Content__Wrapper}>
                <div className={classes.Content__Left}>
                    <div className={classes.Ferrari} />
                </div>
                <div className={classes.Content__Right}>
                    <div className={classes.Description}>
                        <h1>Archangel Speedshop Portal</h1>
                        <p>Find below quick access to our social and contact details.</p>
                        <p>Online booking is a feature currently under development, for the time being please call us if you have any inquiry.</p>
                    </div>
                    <a className={classes.Maps_Wrapper} href="https://goo.gl/maps/scKABvQ37xKSHrB77" target="__blank">
                        <div className={classes.IconWrapper}>
                            <img src={MapsLogo} alt="Google Maps Logo"/>
                        </div>
                        <div className={classes.TextContainer}>
                            <p>Find us in Google Maps</p>
                        </div>
                    </a>
                    <a className={classes.Maps_Wrapper} href="tel:01506368150">
                        <div className={classes.IconWrapper}>
                            <img src={Phone} alt="Google Maps Logo"/>
                        </div>
                        <div className={classes.TextContainer}>
                            <p>0150 6368150</p>
                        </div>
                    </a>
                    <a className={classes.Maps_Wrapper} href="https://www.instagram.com/archangel_speedshop" target="__blank">
                        <div className={classes.IconWrapper}>
                            <img src={Instagram} alt="Instagram Logo"/>
                        </div>
                        <div className={classes.TextContainer}>
                            <p>Find us in Instagram</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className={classes.Services_Section}>
                <h1>Services</h1>
                <div className={classes.Services_List}>

                    <div className={classes.Service__Container}>
                        <div className={classNames(classes.Service__Image, classes.wheel_alignment)} />
                        <div className={classes.Service__Description}>
                            Wheel Alignment
                        </div>
                    </div>

                    <div className={classes.Service__Container}>
                        <div className={classNames(classes.Service__Image, classes.ac)} />
                        <div className={classes.Service__Description}>
                            AC Reconditioning
                        </div>
                    </div>

                    <div className={classes.Service__Container}>
                        <div className={classNames(classes.Service__Image, classes.wheel_refurbishment)} />
                        <div className={classes.Service__Description}>
                            Tire Balancing & Refurbishment
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
