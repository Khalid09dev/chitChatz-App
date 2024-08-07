import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Messages from '../components/Messages/Messages';
import LandingPage from '../pages/LandingPage/LandingPage';
import Login from '../pages/Login/Login';
import Signup from "../pages/Signup/Signup";
import PrivateRoute from '../Routes/PrivateRoute';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage></LandingPage>,
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <Signup></Signup>
    },
    {
        path: '/app',
        element: <PrivateRoute><App></App></PrivateRoute>,
        children: [
            {
                path: 'messages',
                element: <Messages></Messages>
            }
        ]
    }
]);

export default Router;