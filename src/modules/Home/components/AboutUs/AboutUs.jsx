import classes from "../../Home.module.scss";
import classNames from "classnames";

const AboutUs = () => {
    return (
        <section className={classes.AboutUs__Section} id="about-us">
            <h1>About Us</h1>

            <div className={classNames(classes.HeroImg, classes.Content)}>
                <div className={classes.Left_Container}>
                    <h2>Ruben</h2>
                    <p>
                        Propietor & Main Mechanic @ Archangel Speedshop.
                    </p>
                    <p>
                        His career in the motortrade has spanned 22 years, first starting as a teaboy in a rotary engine workship in Sussex, then working at Power Italia in Essex in the mid 2000's.
                        After that a stint at Hexagon Modern Classics as Porsche & Lotus Senior Tech/Parts Manager increased his expertise with Stuttgart & Hemels finest to a very high standard, then in 2016 he moved to bonnie Scotland where Archangel Speedshop is currently located.
                    </p>
                </div>
                <div className={classes.Right_Container}>
                    <h2>Esmeralda</h2>
                    <p>
                        Administrator & Junior Mechanic @ Archangel Speedshop.
                    </p>
                    <p>
                        She moved to Scotland in 2019 after completing a masters degree in cinematography but has seemingly chose a career closer to her familys heart in the motor trade. Her Uncle in Argentina competed regularly as a professional rally driver which she spectatated many times
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
