import classes from "../../Home.module.scss";

const Contact = () => {
    return (
        <section className={classes.Contact__Section}>
            <h1>Contact</h1>

            <div className={classes.Contact__Options}>
                <div className={classes.Contact__Option}>WhatsApp</div>
                <div className={classes.Contact__Option}>Phone</div>
                <div className={classes.Contact__Option}>Email</div>
                <div className={classes.Contact__Option}>Visit Us</div>
            </div>
        </section>
    )
}

export default Contact
