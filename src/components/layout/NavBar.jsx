import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import logoWhite from "../../assets/logo_white.png"
import logoBlue from "../../assets/logo_blue.png"
import styles from './NavBar.module.css';

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
        <div className={styles.navWrapper}>
            <div className={`${styles.navBar} ${isScrolled? `${styles.scrolled}` : ''}`}>
                <div className={styles.logo}>
                    <img src={`${isScrolled? `${logoBlue}`: `${logoWhite}`}`} alt="" />
                    <span className={styles.logoText}>
                        <span>MALDIVES</span>
                        <span>LUXE</span>
                        <span>V o y a g e s</span>
                    </span>
                </div>
                <div className={styles.navItems}>
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/packages">Packages</NavLink>
                </div>
            </div>
        </div>
    )

}