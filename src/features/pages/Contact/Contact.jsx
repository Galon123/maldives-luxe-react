// src/pages/Contact/Contact.jsx
import { useState } from "react";
import styles from "./Contact.module.css";
import { Building2, Mail, Phone } from "lucide-react";

export function Contact() {
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', resortCategory: 'water villa with pool', date: '', people: '', extraDetails: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <div className={styles["contact-page"]}>
            <div className={styles.contactCard}>
                
                {/* Brand Showcase Column */}
                <div className={styles.contactLeft}>
                    <h2>Crafting your unwritten legacy</h2>
                    <ul className={styles.contactItems}>
                        <li>
                            <Building2 className={styles.icon} size={28} />
                            <div>
                                <h3>Headquarters</h3>
                                <p>Heily Offices Pvt Ltd, Pallath Square, FACT Kalamassery Rd, Kalamassery P.O, Ernakulam-683104</p>
                            </div>
                        </li>
                        <li>
                            <Phone className={styles.icon} size={28} />
                            <div>
                                <h3>Phone</h3>
                                <p>+91 80890 82841</p>
                            </div>
                        </li>
                        <li>
                            <Mail className={styles.icon} size={28} />
                            <div>
                                <h3>E-mail</h3>
                                <p>maldivesluxevoyages@gmail.com</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Intelligent 2-Column Booking Engine Form */}
                <div className={styles.contactForm}>
                    <div className={styles.formHeader}>
                        <h2>Begin the Journey</h2>
                        <p>Every voyage is bespoke. Tell us about the vision you wish to bring to life.</p>
                    </div>
                    
                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="firstName" className={styles.formField}>
                            <h6>First name *</h6>
                            <input type="text" id="firstName" required value={formData.firstName} onChange={handleChange} />
                        </label>
                        
                        <label htmlFor="lastName" className={styles.formField}>
                            <h6>Last name</h6>
                            <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} />
                        </label>
                        
                        <label htmlFor="resortCategory" className={`${styles.formField} ${styles.fullWidthMobile}`}>
                            <h6>Resort Category</h6>
                            <select id="resortCategory" value={formData.resortCategory} onChange={handleChange}>
                                <option value="beach villa">Beach Villa</option>
                                <option value="beach villa with pool">Beach Villa with Pool</option>
                                <option value="deluxe beach villa">Deluxe Beach Villa</option>
                                <option value="water villa">Water Villa</option>
                                <option value="water villa with pool">Water Villa with Pool</option>
                            </select>
                        </label>
                        
                        <label htmlFor="date" className={styles.formField}>
                            <h6>Date of Travel *</h6>
                            <input type="text" placeholder="Oct 12-16, 2026" id="date" required value={formData.date} onChange={handleChange} />
                        </label>
                        
                        <label htmlFor="people" className={styles.formField}>
                            <h6>No. of Guests *</h6>
                            <input type="number" id="people" required min="1" value={formData.people} onChange={handleChange} />
                        </label>
                        
                        <label htmlFor="extraDetails" className={`${styles.formField} ${styles.fullWidth}`}>
                            <h6>Bespoke Requests & Details</h6>
                            <textarea id="extraDetails" name="details" value={formData.extraDetails} onChange={handleChange} placeholder="Dietary profiles, yacht transfers, celebratory milestones..."></textarea>
                        </label>
                        
                        <div className={styles.btnWrapper}>
                            <button className={styles.submitBtn} type="submit">
                                Request Bespoke Itinerary
                            </button>
                        </div>
                    </form>
                </div>

            </div>  
        </div>
    );
}