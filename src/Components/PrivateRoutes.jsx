import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children;
    }
    return <Navigate to={"/signIn"}></Navigate>
   
};

export default PrivateRoutes;
PrivateRoutes.propTypes = {
    children: PropTypes.node,
}