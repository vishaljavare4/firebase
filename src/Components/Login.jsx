import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../Utils/firebaseConfig";
import { toast } from "react-toastify";
import { Link } from "react-router-dom"; 

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Login was successful!");
        } catch (error) {
            setError(error.message);
            toast.error("Login failed: " + error.message);
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center p-4">
            <div className="w-[20%] flex flex-col items-center justify-center p-4 shadow-xl rounded-lg">
                <p className="text-blue-600 text-xl">Login</p>
                <form onSubmit={handleLogin} className="w-full p-4">
                    <div className="w-full mb-4">
                        <p className="text-xl font-thin">Email</p>
                        <input 
                            className="focus:outline-none border rounded-lg w-full p-2" 
                            type="email" 
                            required 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="w-full mb-4">
                        <p className="text-xl font-thin">Password</p>
                        <input 
                            className="focus:outline-none border rounded-lg w-full p-2" 
                            type="password" 
                            required 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-sm text-red-500 w-full">{error}</p>}
                    <button 
                        type="submit" 
                        className="bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-500 transition-all"
                    >
                        Login
                    </button>
                </form>
                <p className="text-xs">
                    New User? <Link to="/register" className="text-blue-600 hover:underline">Create account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;