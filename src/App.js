import "./App.css";
import ImageSection from "./pages/ImageSection";
import Main from "./pages/Main";
import Nav from "./components/Nav";
import Footer from './pages/Footer'
import PageLoader from "./animatedComponents/PageLoader";

function App() {
    return (
        <>
            <PageLoader />
            <Nav />
            <ImageSection />
            <Main />
            <Footer />
        </>
    );
}

export default App;
