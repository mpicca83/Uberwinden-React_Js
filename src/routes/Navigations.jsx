import { createBrowserRouter , RouterProvider } from "react-router-dom";
import { NosotrosPage, EventosPage, LoginPage, } from '../pages'
import { ItemListContainer, ItemDetailContainer } from "../components";

const routes = createBrowserRouter ([

    //Solicitados para la segunda pre-entrega
    {
        path: '/',
        element: <ItemListContainer />
    },
    {
        path: '/category/:categoryId',
        element: <ItemListContainer />
    },
    {
        path: '/item/:itemId',
        element: <ItemDetailContainer />
    },

    //Extras
    {
        path: '/nosotros',
        element: <NosotrosPage />
    },
    {
        path: '/eventos',
        element: <EventosPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },

])

export const Navigations = () => {

    return(
        <RouterProvider router={routes} />
    )
}