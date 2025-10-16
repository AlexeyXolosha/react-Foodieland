import {Routes, Route} from "react-router-dom";
import Hero from "../layouts/Hero.jsx";
import HomePage from "../pages/HomePage.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Hero/>}>
                <Route index element={<HomePage/>}/>
            </Route>
        </Routes>
    )
}

export default App;