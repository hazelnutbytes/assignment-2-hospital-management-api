import { useState } from "react";
import API from "../api";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await API.post("/register", {
                username,
                email,
                password
            });

            setMessage(response.data.message);

            setUsername("");
            setEmail("");
            setPassword("");
        } catch (error) {
            setMessage(
                error.response?.data?.message || "Registration failed"
            );
        }
    };

    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <br /><br />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br /><br />

                <button type="submit">Register</button>
            </form>

            <p>{message}</p>
        </div>
    );
}

export default Register;
