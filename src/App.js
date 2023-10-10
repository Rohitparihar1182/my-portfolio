import "./App.css";
import ImageSection from "./pages/ImageSection";
import Main from "./pages/Main";
import Nav from "./components/Nav";
import Footer from './pages/Footer'
import PageLoader from "./animatedComponents/PageLoader";
import { Toaster } from "react-hot-toast";

function App() {
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
