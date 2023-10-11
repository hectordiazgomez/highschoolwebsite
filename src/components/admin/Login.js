import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (password === '123456') {
            navigate("/admin");
        } else {
            alert('Contraseña incorrecta');
        }
    }

    return(
        <>
        <div className="flex justify-center h-screen items-center">
            <div className="w-2/3 sm:w-1/4 rounded-lg px-4 bg-gray-100 border-2 border-gray-200 shadow-xl">
                <div className="flex mt-5 justify-center">
                <p className="text-lg font-semibold mb-6 text-blue-500">Ingresar</p>
                </div>
                <div className="flex justify-center">
                <input 
                    type="password"
                    placeholder="Contraseña" 
                    className="p-2 border w-full rounded-lg border-gray-300 focus:border-blue-700 mb-5 outline-none"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                </div>
                <div className="flex justify-center">
                    <button 
                        className="px-4 py-2 bg-blue-500 mb-5 mt-2 rounded-lg text-white font-semibold"
                        onClick={handleLogin}
                    >
                        Acceder
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;