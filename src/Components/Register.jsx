import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebaseConfig"; 
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success("User Registered Successfully");
            navigate("/")
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center p-4">
            <div className="w-[20%] flex flex-col items-center justify-center p-4 shadow-xl rounded-lg">
                <p className="text-rose-900 text-xl">Register</p>
                <form className="w-full" onSubmit={handleRegister}>
                    <div className="w-full mb-4">
                        <p>Email*</p>
                        <input 
                            type="email" 
                            className="w-[100%] focus:outline-none p-1 border rounded-lg" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                    </div>
                    <div className="w-full mb-4">
                        <p>Password*</p>
                        <input 
                            type="password" 
                            className="w-[100%] focus:outline-none p-1 border rounded-lg" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required
                        />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <button 
                        type="submit" 
                        className="bg-red-800 rounded-lg shadow-xl p-2 text-white hover:bg-red-900 transition-all"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;