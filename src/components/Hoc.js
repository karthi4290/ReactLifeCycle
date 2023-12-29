import { useState } from 'react';


const HocAuth = (WrappedComponent) => {
    return function Authentication() {
        const [isAutenticated, setIsAuthenticated] = useState(true);


        const handleLogin = () => {
            setIsAuthenticated(true);
        }

        const handleLogout = () => {
            setIsAuthenticated(false);
        }
        return isAutenticated ? (<WrappedComponent handleLogout={handleLogout} />) : (<p>This is protected route you need to login,<button onClick={handleLogin}>Login</button></p>)
    }
}


export default HocAuth;
