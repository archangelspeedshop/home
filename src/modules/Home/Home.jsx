import classes from './Home.module.scss'
import Content from "./components/Content";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
// import Contact from "./components/Contact";

const Home = () => {
    return (
        <div className={classes.Content} id="home">
            <Content />
            <Services />
            <AboutUs />
            {/*<Contact />*/}
        </div>
    )
}

export default Home
