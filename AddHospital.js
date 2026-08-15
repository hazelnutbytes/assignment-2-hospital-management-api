import { useState } from "react";
import API from "../api";

function AddHospital() {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [totalBeds, setTotalBeds] = useState("");
    const [availableBeds, setAvailableBeds] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await API.post("/hospitals", {
                name,
                city,
                totalBeds: Number(totalBeds),
                availableBeds: Number(availableBeds)
            });

            setMessage(response.data.message || "Hospital added successfully");

            setName("");
            setCity("");
            setTotalBeds("");
            setAvailableBeds("");
        } catch (error) {
            setMessage(
                error.response?.data?.message || "Failed to add hospital"
            );
        }
    };

    return (
        <div>
            <h1>Add Hospital</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Hospital Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <br /><br />

                <input
                    type="number"
                    placeholder="Total Beds"
                    value={totalBeds}
                    onChange={(e) => setTotalBeds(e.target.value)}
                />

                <br /><br />

                <input
                    type="number"
                    placeholder="Available Beds"
                    value={availableBeds}
                    onChange={(e) => setAvailableBeds(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Add Hospital
                </button>

            </form>

            <p>{message}</p>
        </div>
    );
}

export default AddHospital;