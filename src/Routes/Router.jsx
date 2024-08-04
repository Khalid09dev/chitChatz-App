import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Messages from '../components/Messages/Messages';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/messages',
                element: <Messages></Messages>
            }
        ]
    }
]);

export default Router;