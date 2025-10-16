import {Outlet} from "react-router-dom";
import Header from "../components/Header/index.jsx";

function Hero(){
    return (
        <div className="app-wrapper">
            <Header />
            <main className="app-wrapper-content">
                <Outlet />
            </main>
        </div>
    )
}

export default Hero