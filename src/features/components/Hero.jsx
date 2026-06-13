import styles from './Hero.module.css'

export function Hero() {
    
    return(
        <main>
            <section className={styles.hero}>
                <div className={styles['hero-overlay']}></div>
                <div class={styles['hero-content']}>
                    <h1>Redefining the Art of <br/><em>Maldivian Luxury</em></h1>
                    <p>With us, your Maldives story is not just about where you stay, but how you feel.</p>
                    <button class={styles['cta-btn']}>Explore Packages</button>
                </div>
            </section>
        </main>
    )

}