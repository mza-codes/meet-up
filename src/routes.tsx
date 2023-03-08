import { useRoutes } from "react-router-dom";
import App from "./App";
import Success from "./pages/Success";

export default function Routes() {

    return useRoutes([
        {
            path: "/",
            element: <App />
        }, {
            path: "/success",
            element: <Success />
        }
    ]);
}

