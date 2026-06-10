import { div } from "framer-motion/client"
import styles from "./Loader.module.css"


export function Loader() {

    return(
        <div className={styles['loader-overlay']}>
            <div className={styles['loader-container']}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    className={styles['tropical-svg']}
                >
                    <circle cx="50" cy="45" r="18" className={styles.svgSun} />

                    <path
                        d="M20,60 Q35,50 50,60 T80,60" 
                        fill="none"
                        strokeWidth="3" 
                        strokeLinecap="round"
                        className={styles.svgWave}
                    />
                </svg>
                <span className={styles.loaderText}>Readying your escape...</span>
            </div>
        </div>
    )

}