import { useEffect, useState } from "react"

export function NavBar() {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return(
        <div className="navWrapper">
            <div className={`navBar ${isScrolled? 'scrolled' : ''}`}>
                <div className="logo">
                    <span>MALDIVES</span>
                    <span>LUXE</span>
                    <span>V o y a g e s</span>
                </div>
                <div className="navItems">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Project</a>
                </div>
            </div>
        </div>
    )

}