import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const RequireAuth = ({ children, redirectTo = "/login" }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Function to check if user is authenticated
    const checkAuthentication = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          // validate the token here  backend
          // unfortunately backend is not available yet
          // For simplicity, let's assume the token is valid if it exists
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default RequireAuth;
