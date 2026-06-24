import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import logoWhite from "../../assets/logo_white.png"
import logoBlue from "../../assets/logo_blue.png"
import styles from './NavBar.module.css';
import { MenuIcon } from "lucide-react";

export function NavBar() {

    const [isScrolled, setIsScrolled] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const dropDownBtn = document.getElementById("dropDownBtn")

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

    useEffect(() => {
        const handleDropDown = () => {
            const dropdown = document.getElementById("dropdownMenu")

            if(isDropdownOpen && window.innerWidth <= 580) {
                dropdown.style.display = "flex"
            }
            else {
                dropdown.style.display = "none"
            }
        };
        handleDropDown()
    }, [isDropdownOpen])


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
                    <NavLink to="/resorts">Resorts</NavLink>
                </div>
                <div className={styles.mobileNavItems}>
                    <button onClick={toggleDropdown} id="dropDownBtn">
                        <MenuIcon size={30}/>
                    </button>
                </div>
            </div>
            <div id="dropdownMenu" className={`${styles.dropdownMenu} ${isScrolled? `${styles.scrolled}`: ''}`}>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/resorts">Resorts</NavLink>
            </div>
        </div>
    )

}