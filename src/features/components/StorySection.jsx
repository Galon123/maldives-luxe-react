import { motion,easeOut } from "framer-motion"
import styles from "./StorySection.module.css"


export function StorySection() {

    return(
        <section className={styles.storyGrid}>
            <motion.div 
            className={styles.imgContainer}
            initial={{opacity: 0, x: -60}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: "-100px"}}
            transition={{duration: 0.8, ease: easeOut}}
            >
                <img src="/cardImg.png" alt="" />
                <div className={styles.years}>
                    <span>15+</span>
                    <span>Years of Experience</span>
                </div>
            </motion.div>
            <div className={styles.infoContainer}>
                <h2>Redefining Your Maldives Story</h2>
                <p>"With us, your Maldives story is not just about where you stay, but how you feel."</p>
                <p>At <em>Maldives Luxe Voyages</em>, we specialise exclusively in the Maldives, curating bespoke luxury escapes tailored for travelers, honeymooners, and elite corporate groups who seek noing but the best.</p>
                <p>From the iconic overwater villas and private island retreats to personalized yacht cruises and immersive cultural encounters, every detail is handpicked to reflect you style, pace and preferences.</p>
            </div>
        </section>
    )

}