import { createBrowserRouter , RouterProvider } from "react-router-dom";
import { NosotrosPage, EventosPage, LoginPage, CartPage } from '../pages'
import { ItemListContainer, ItemDetailContainer } from "../components";

const routes = createBrowserRouter ([

    //Solicitados para el proyecto final
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
    {
        path: '/cart',
        element: <CartPage />
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