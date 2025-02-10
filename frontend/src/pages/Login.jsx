// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import { handleError, handleSuccess } from '../../utils';

// function Login() {
//     const [loginInfo, setLoginInfo] = useState({
//         email: '',
//         password: '',
//     });

//     const navigate = useNavigate();

//     // For Vite:
//     const API_URL = import.meta.env.VITE_API_URL || "https://weexist99.onrender.com";
//     // For Create React App:
//     // const API_URL = process.env.REACT_APP_API_URL || "https://weexist99.onrender.com";

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setLoginInfo((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         const { email, password } = loginInfo;

//         if (!email || !password) {
//             return handleError('Email and password are required.');
//         }

//         console.log("API_URL:", API_URL);  // Debugging

//         try {
//             const response = await fetch(`${API_URL}/auth/login`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(loginInfo),
//             });

//             const result = await response.json();
//             const { success, message, jwtToken, name, error } = result;

//             if (success) {
//                 handleSuccess(message);
//                 localStorage.setItem('token', jwtToken);
//                 localStorage.setItem('loggedInUser', name);
//                 setTimeout(() => navigate('/home'), 1000);
//             } else {
//                 handleError(error?.details?.[0]?.message || message);
//             }
//         } catch (err) {
//             handleError(err.message || 'Something went wrong.');
//         }
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 to-purple-300">
//             <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md transition-all duration-300 hover:shadow-2xl">
//                 <h1 className="text-3xl font-bold text-gray-700 text-center font-handwriting mb-6">Login</h1>
//                 <form onSubmit={handleLogin} className="space-y-5 font-poppins">
//                     <div className="flex flex-col">
//                         <label htmlFor="email" className="text-lg font-semibold text-gray-700">Email Address</label>
//                         <input
//                             onChange={handleChange}
//                             type="email"
//                             name="email"
//                             placeholder="Enter your email"
//                             value={loginInfo.email}
//                             className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="password" className="text-lg font-semibold text-gray-700">Password</label>
//                         <input
//                             onChange={handleChange}
//                             type="password"
//                             name="password"
//                             placeholder="Enter your password"
//                             value={loginInfo.password}
//                             className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200"
//                     >
//                         Login
//                     </button>
//                     <p className="text-center text-gray-600 mt-3">
//                         Don't have an account?{' '}
//                         <Link to="/signup" className="text-purple-600 hover:text-purple-700 font-semibold ml-1">Sign Up</Link>
//                     </p>
//                 </form>
//                 <ToastContainer />
//             </div>
//         </div>
//     );
// }

// export default Login;
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../../utils';
import { useAuth } from "../context/AuthContext.jsx";

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();
    
    // Get the redirect path from state, URL params, or default to home
    const from = location.state?.from || new URLSearchParams(location.search).get('redirect') || "/home";

    // For Vite:
    const API_URL = import.meta.env.VITE_API_URL || "https://weexist99.onrender.com";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;

        if (!email || !password) {
            return handleError('Email and password are required.');
        }

        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginInfo),
            });

            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;

            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                login({ name, email }); // Update authentication context

                const redirectPath = location.state?.from || new URLSearchParams(location.search).get('redirect') || '/home';

                
                // Use the stored redirect path
                setTimeout(() => {
                    navigate(from, { replace: true });
                }, 1000);
            } else {
                handleError(error?.details?.[0]?.message || message);
            }
        } catch (err) {
            handleError(err.message || 'Something went wrong.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 to-purple-300">
            <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md transition-all duration-300 hover:shadow-2xl">
                <h1 className="text-3xl font-bold text-gray-700 text-center font-handwriting mb-6">Login</h1>
                <form onSubmit={handleLogin} className="space-y-5 font-poppins">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg font-semibold text-gray-700">Email Address</label>
                        <input
                            onChange={handleChange}
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={loginInfo.email}
                            className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-lg font-semibold text-gray-700">Password</label>
                        <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={loginInfo.password}
                            className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200"
                    >
                        Login
                    </button>
                    <p className="text-center text-gray-600 mt-3">
                        Don't have an account?{' '}
                        <Link 
                            to={`/signup?redirect=${encodeURIComponent(from)}`} 
                            className="text-purple-600 hover:text-purple-700 font-semibold ml-1"
                        >
                            Sign Up
                        </Link>
                    </p>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default Login;