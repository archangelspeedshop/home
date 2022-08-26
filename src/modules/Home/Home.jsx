import classes from './Home.module.scss'
import MapsLogo from '../../assets/vectors/google-maps-logo.svg'
import Phone from '../../assets/vectors/phone-icon.svg'
import Instagram from '../../assets/vectors/instagram-logo.svg'

const Home = () => {
    return (
        <div className={classes.Content}>
            <div className={classes.Content__Wrapper}>
                <div className={classes.Content__Left}>
                    <div className={classes.Ferrari} />
                </div>
                <div className={classes.Content__Right}>
                    <div className={classes.Description}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis lacus suscipit, ornare augue sed, malesuada lacus. Nullam velit lectus, porttitor a euismod et, semper eget arcu. Donec vitae accumsan </p>
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
        </div>
    )
}

export default Home
