import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Messages from '../components/Messages/Messages';
import LandingPage from '../pages/LandingPage/LandingPage';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage></LandingPage>
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