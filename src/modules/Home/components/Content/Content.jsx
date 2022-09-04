import classes from "../../Home.module.scss";
import MapsLogo from "../../../../assets/vectors/google-maps-logo.svg";
import Phone from "../../../../assets/vectors/phone-icon.svg";
import Instagram from "../../../../assets/vectors/instagram-logo.svg";

const Content = () => {
    return (
        <section className={classes.Content__Wrapper}>
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
                        <p>Find us with Google Maps</p>
                    </div>
                </a>
                <a className={classes.Maps_Wrapper} href="tel:01506368150">
                    <div className={classes.IconWrapper}>
                        <img src={Phone} alt="Google Maps Logo"/>
                    </div>
                    <div className={classes.TextContainer}>
                        <p>0150 636 8150</p>
                    </div>
                </a>
                <a className={classes.Maps_Wrapper} href="https://www.instagram.com/archangel_speedshop" target="__blank">
                    <div className={classes.IconWrapper}>
                        <img src={Instagram} alt="Instagram Logo"/>
                    </div>
                    <div className={classes.TextContainer}>
                        <p>Find us on Instagram</p>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Content
