import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Hospitals from "./pages/Hospitals";
import AddHospital from "./pages/AddHospital";

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route path="/hospitals" element={<Hospitals />} />

                <Route path="/add-hospital" element={<AddHospital />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;