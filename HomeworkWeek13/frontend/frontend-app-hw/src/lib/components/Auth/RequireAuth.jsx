import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const RequireAuth = ({ children, redirectTo = "/login" }) => {
  // check token availability in localStorage
  const isAuthenticated = localStorage.getItem("token") !== null;
  //if available check for valid token
  // unfortunately backend doesn't support
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default RequireAuth;
