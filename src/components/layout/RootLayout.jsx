import { Outlet, ScrollRestoration } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";


export function RootLayout() {

    return(
        <div className="app-shell">
            <NavBar/>

            <main className="main-content">
                <Outlet />
            </main>

            <ScrollRestoration />
            <Footer />
        </div>
    )

}