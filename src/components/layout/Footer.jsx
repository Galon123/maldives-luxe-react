import { style } from "framer-motion/client"
import styles from "./Footer.module.css"
import { CopyrightIcon } from "lucide-react"

export function Footer() {

    return(
        <div className={styles.footer}>
            <section className={styles.copyright}>
                <span><CopyrightIcon size={14}/> {new Date().getFullYear()}{" "}Maldives Luxe Voyages. All rights reserved</span>
            </section>
            <section className={styles.links}>
                <a href="">Privacy</a>
                <a href="">Terms</a>
                <a href="">Contact</a>
            </section>
        </div>
    )

}