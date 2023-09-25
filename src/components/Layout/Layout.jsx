import { NavbarTop, NavBar, Footer } from ".."

export const Layout = ({children}) => {
    
    return(
        <>
            <header>
                <NavbarTop />
                <NavBar />
            </header>

            <main>
                {children}
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}