import { style } from "framer-motion/client"
import styles from "./Contact.module.css"
import { Building, Building2, Locate, LocateIcon, Mail, MapPin, Phone } from "lucide-react"


export function Contact() {

    return(
        <div className={styles["contact-page"]}>
            <div className={styles.contactCard}>
                <div className={styles.contactLeft}>
                    <h2>Crafting your unwritten legacy</h2>
                    <ul className={styles.contactItems}>
                        <li>
                            <Building2 color="white" size={36}/>
                            <div>
                                <h3>Headquarters</h3>
                                <p>Heily Offices Pvt Ltd, Pallath Sqaure, FACT Kalamassery Rd, Kalamassery P.O, Ernakulam-683104</p>
                            </div>
                        </li>
                        <li>
                            <Phone color="white" size={36}/>
                            <div>
                                <h3>Phone</h3>
                                <p>+918089082841</p>
                            </div>
                        </li>
                        <li>
                            <Mail color="white" size={36}/>
                            <div>
                                <h3>E-mail</h3>
                                <p>maldivesluxevoyages@gmail.com</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.contactForm}>
                    <div>
                        <h2>Begin the Journey.</h2>
                        <p>Every voyage is bespoke. Tell us about the vision you wish to bring to life.</p>
                    </div>
                    <form action="" className={styles.form}>
                        <label htmlFor="firstName">
                            <h6>First name :</h6>
                            <input type="text" id="firstName" required/>
                        </label>
                        <span>
                            <label htmlFor="lastName">
                                <h6>Last name :</h6>
                                <input type="text" id="lastName" />
                            </label>
                            <label htmlFor="resortCategory">
                                <h6>Resort Category :</h6>
                                <select id="resortCategory">
                                    <option value="beach villa">Beach Villa</option>
                                    <option value="beach villa with pool">Beach Villa with Pool</option>
                                    <option value="deluxe beach villa">Deluxe Beach Villa</option>
                                    <option value="water villa">Water Villa</option>
                                    <option value="water villa with pool">Water Villa with Pool</option>
                                </select>
                            </label>
                        </span>
                        <span>
                            <label htmlFor="date">
                                <h6>Date of Travel</h6>
                                <input type="text" placeholder="Oct 12-16,2026" id="date" required/>
                            </label>
                            <label htmlFor="people">
                                <h6>No. of People Travelling</h6>
                                <input type="text" id="people" required/>
                            </label>
                        </span>
                        <label htmlFor="extraDetails">
                            <h6>Extra details</h6>
                            <textarea name="details" id="extraDetails"></textarea>
                        </label>
                        <button className={styles.submitBtn} type="submit">
                            Send
                        </button>
                    </form>
                </div>
            </div>  
        </div>
    )

}