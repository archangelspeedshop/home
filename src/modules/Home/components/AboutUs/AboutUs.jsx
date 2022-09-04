import classes from "../../Home.module.scss";
import classNames from "classnames";

const AboutUs = () => {
    return (
        <section className={classes.AboutUs__Section}>
            <h1>About Us</h1>

            <div className={classNames(classes.HeroImg, classes.Content)}>
                <div className={classes.Left_Container}>
                    <h3>Established in 2018</h3>
                </div>
                <div className={classes.Right_Container}>
                    Abaculuss cadunt in regius berolinum!<br />
                    Calcaria de placidus compater, prensionem abactor<br />
                    Peregrinationes inciviliter ducunt ad gratis glos.
                </div>
            </div>
        </section>
    )
}

export default AboutUs
