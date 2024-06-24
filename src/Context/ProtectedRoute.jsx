import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const location = useLocation();
  if (!currentUser) {
    console.log(currentUser)
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};

export default ProtectedRoute;