
import { Award, Clock, Globe, Heart, Shield } from "lucide-react"
import styles from "./About.module.css"

const VALUES = [
    {'title' : 'Excellence', 'area': 'excellence', 'icon' : Award, 'desc' : 'We maintain the highest standards in planning, service, and execution to deliver premium travel experiences.'},
    {'title' : 'Customers First', 'area': 'customers', 'icon' : Heart, 'desc' : 'Your satisfaction, comfort, and peace of mind remain at the heart of everything we do.'},
    {'title' : 'Trust & Reliability', 'area': 'trust', 'icon' : Shield, 'desc' : 'We build long-term relationships through transparency, professionalism, and dependable support.'},
    {'title' : 'Global Expertise', 'area': 'global', 'icon' : Globe, 'desc' : 'Our extensive international partnerships enable us to provide flexible, high-quality travel solutions worldwide.'},
    {'title' : '24/7 Assistance', 'area': 'assistance', 'icon' : Clock, 'desc' : 'Travel never sleeps — neither do we. Our dedicated support team is available whenever you need assistance during your journey.'}
]

export function About() {

    return(
        <div className={styles.aboutSection}>
            <div className={styles.storyOverlay}></div>
            <img src="blue-bg.jpg" alt="" />
            <div className={styles.storyContent}>
                <h2 className={styles.mainHeading}>Our Story</h2>
                <p className={styles.para}>Operating from our base at Heiley Offices, Pallath Square, Kalamassery, Luxe Voyages brings together global travel partnerships and local expertise to create exceptional journeys tailored to every traveler’s expectations.</p>
                <p className={styles.para}>Our strength lies in our carefully built international network of trusted partners, premium accommodations, curated experiences, and reliable travel support systems that ensure every trip is smooth, secure, and memorable.</p>
                <p className={styles.para}>Whether you seek a serene overwater villa in the Maldives, the magical Northern Lights of Lapland, a romantic European escape, or an unforgettable Antarctic expedition, our team is committed to transforming your travel vision into reality.</p>
            </div>
                
            <div className={styles.card}>
                <h3>Our Mission</h3>
                <p>To deliver world-class luxury travel experiences through personalized service, global partnerships, and meticulous attention to detail, ensuring every customer travels with confidence, comfort, and peace of mind.</p>
                  
                <h3>Our Vision</h3>
                <p>To become a trusted global luxury travel brand recognized for exceptional service, curated experiences, and customer-first travel solutions.</p>
            </div>

            <div className={styles.coreValues}>
                <h3 className={styles.coreValuesHeading}>Our Core Values</h3>
                <p className={styles.subText}>We are built on a foundation of trust, quality, and a relentless focus on our travelers' experience.</p>

                <div className={styles.valueGrid}>
                    {
                        VALUES.map((item, index) => {
                            const ItemComponent = item.icon;

                            return(
                                <div key={index} className={styles.valueItem}>
                                    <ItemComponent size={28} className={styles.valueIcon}/>
                                    <h4 className={styles.valueTitle}>{item.title}</h4>
                                    <p className={styles.valueDesc}>{item.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}