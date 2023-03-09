import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

createRoot(document.getElementById("root") as HTMLElement).render(
    <>
        <BrowserRouter>
            <Header />
            <Routes />
            <Footer />
        </BrowserRouter>
    </>
);
