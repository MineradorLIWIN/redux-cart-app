import { createHashRouter } from "react-router-dom";
import Root from "./Root";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

const router = createHashRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/cart',
                element: <Cart />
            },
        ]
    }
])

export default router