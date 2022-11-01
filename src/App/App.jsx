import { BrowserRouter, Routes,  Route, Navigate } from 'react-router-dom'
import Header from "./components/Header/Header"
import Home from "../modules/Home";
import Footer from "../modules/Footer";
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
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
