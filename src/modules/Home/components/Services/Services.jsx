import classes from "../../Home.module.scss";
import classNames from "classnames";

const Services = () => {
    return (
        <section className={classes.Services_Section}>
            <h1 id="services">Services</h1>
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
        </section>
    )
}

export default Services
