import { useContext } from "react";
import {AuthContext} from '../providers/AuthProvider';
import {Navigate, useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();

    // if(loading) {
    //     // return <progress className="progress w-56"></progress>;
    //     return console.log('Loading...');
    // }
    if(user) {
        return children;
    }
    console.log(user, 'user');
    return (
        <div>
            <Navigate to="/login" state={{from: location}}></Navigate>
        </div>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;