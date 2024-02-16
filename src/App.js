import React, { useEffect } from 'react';
import "./App.css";
import ImageSection from "./pages/ImageSection";
import Main from "./pages/Main";
import Nav from "./components/Nav";
import Footer from './pages/Footer'
import PageLoader from "./animatedComponents/PageLoader";
import { Toaster } from "react-hot-toast";

function App() {
    useEffect(() => {
        const onFocus = () => {
            document.title = "Rohit Parihar Portfolio"
        }
        const onBlur = () => {
            document.title = "I miss uh!!!"
        }
        window.addEventListener('focus', onFocus);
        window.addEventListener('blur', onBlur);
        return () => {
            window.removeEventListener('focus', onFocus);
            window.removeEventListener('blur', onBlur);
        }
    }, [])
    return (
        <>
            <Toaster />
            <PageLoader />
            <Nav />
            <ImageSection />
            <Main />
            <Footer />
        </>
    );
}

export default App;
