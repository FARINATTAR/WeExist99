import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Pass the full current path (including search params and hash) to be used after login
    const currentPath = `${location.pathname}${location.search}${location.hash}`;
    
    // First redirect to signup, but also pass the eventual redirect path
    return <Navigate 
      to={`/signup?redirect=${encodeURIComponent(currentPath)}`} 
      state={{ from: currentPath }} 
      replace 
    />;
  }

  return children;
};

export default ProtectedRoute;