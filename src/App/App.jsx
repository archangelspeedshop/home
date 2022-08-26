import { BrowserRouter, Routes,  Route } from 'react-router-dom'
import Header from "./components/Header/Header"
import Home from "../modules/Home";
import AboutUs from "../modules/About-Us";

import './App.module.scss'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/about-us"
                    element={<AboutUs />}
                />
                <Route path="*" element={<p>There's nothing here!</p>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
