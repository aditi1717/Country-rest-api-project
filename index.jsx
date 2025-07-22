import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import Error from './components/Error.jsx';
import CountryDetail from './components/CountryDetail.jsx';



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement:<Error/>,
        children: [
            {
               path: "/",
              element: <Home/>,

             },
            {
                path: "/about",
                element: <About/>,

            },
            {
                path: "/:country",
                element: <CountryDetail/>,

            }
        ]
    },

]);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={router} />);