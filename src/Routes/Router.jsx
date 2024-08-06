import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Messages from '../components/Messages/Messages';
import LandingPage from '../pages/LandingPage/LandingPage';
import Login from '../pages/Login/Login';

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
        path: '/app',
        element: <App></App>,
        children: [
            {
                path: 'messages',
                element: <Messages></Messages>
            }
        ]
    }
]);

export default Router;