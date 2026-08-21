import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

function Hospitals() {
    const [hospitals, setHospitals] = useState([]);
    const [message, setMessage] = useState("");

    const [editingId, setEditingId] = useState(null);

    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [totalBeds, setTotalBeds] = useState("");
    const [availableBeds, setAvailableBeds] = useState("");

    const getHospitals = async () => {
        try {
            const response = await API.get("/hospitals");
            setHospitals(response.data);
        } catch (error) {
            setMessage("Failed to load hospitals");
        }
    };

    useEffect(() => {
        getHospitals();
    }, []);

    // DELETE
    const deleteHospital = async (id) => {
        try {
            await API.delete(`/hospitals/${id}`);

            setMessage("Hospital deleted successfully");

            getHospitals();
        } catch (error) {
            setMessage("Failed to delete hospital");
        }
    };

    // START EDITING
    const startEdit = (hospital) => {
        setEditingId(hospital._id);

        setName(hospital.name);
        setCity(hospital.city);
        setTotalBeds(hospital.totalBeds);
        setAvailableBeds(hospital.availableBeds);
    };

    // UPDATE
    const updateHospital = async (e) => {
        e.preventDefault();

        try {
            await API.put(`/hospitals/${editingId}`, {
                name,
                city,
                totalBeds: Number(totalBeds),
                availableBeds: Number(availableBeds)
            });

            setMessage("Hospital updated successfully");

            setEditingId(null);

            setName("");
            setCity("");
            setTotalBeds("");
            setAvailableBeds("");

            getHospitals();
        } catch (error) {
            setMessage("Failed to update hospital");
        }
    };

    return (
        <div>
            <h1>Hospitals</h1>

            {/* ADD HOSPITAL BUTTON */}
            <Link to="/add-hospital">
                <button>Add Hospital</button>
            </Link>

            <p>{message}</p>

            {/* HOSPITAL LIST */}
            {hospitals.map((hospital) => (
                <div key={hospital._id}>

                    <h2>{hospital.name}</h2>

                    <p>City: {hospital.city}</p>

                    <p>Total Beds: {hospital.totalBeds}</p>

                    <p>Available Beds: {hospital.availableBeds}</p>

                    <button onClick={() => startEdit(hospital)}>
                        Edit
                    </button>

                    <button onClick={() => deleteHospital(hospital._id)}>
                        Delete
                    </button>

                    <hr />

                </div>
            ))}

            {/* EDIT FORM */}
            {editingId && (
                <div>
                    <h2>Edit Hospital</h2>

                    <form onSubmit={updateHospital}>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Hospital Name"
                        />

                        <br /><br />

                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="City"
                        />

                        <br /><br />

                        <input
                            type="number"
                            value={totalBeds}
                            onChange={(e) => setTotalBeds(e.target.value)}
                            placeholder="Total Beds"
                        />

                        <br /><br />

                        <input
                            type="number"
                            value={availableBeds}
                            onChange={(e) => setAvailableBeds(e.target.value)}
                            placeholder="Available Beds"
                        />

                        <br /><br />

                        <button type="submit">
                            Update Hospital
                        </button>

                        <button
                            type="button"
                            onClick={() => setEditingId(null)}
                        >
                            Cancel
                        </button>

                    </form>
                </div>
            )}
        </div>
    );
}

export default Hospitals;
