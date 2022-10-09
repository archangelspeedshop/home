import classes from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={classes.Footer__Container}>
            <h1>&copy; { new Date().getFullYear() } Archangel Speedshop</h1>
            <p>Performance & Restoration</p>
        </footer>
    )
}

export default Footer
