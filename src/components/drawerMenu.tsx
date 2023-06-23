import React from 'react';
import styles from "./drawerMenu.module.css";
import {Link as ScrollLink} from "react-scroll/modules"; // Import the CSS file for styling

type DrawerMenuProps = {
    handleSluzbyClick: () => void;
    handleONasClick: () => void;
    handlePostupClick: () => void;
    handleContactClick: () => void;
    mobileMenu: () => void;
    isOpen?: boolean; // Add className prop with optional "?" modifier
};

const DrawerMenu: React.FC<DrawerMenuProps> = ({
                        handleSluzbyClick,
                    handleONasClick,
                    handlePostupClick,
                    handleContactClick, mobileMenu, isOpen}) => {
    return (
        <div className={`${styles.drawerMenu} ${isOpen ? styles.open : ""}`} >
            <div className={styles.navBar}>
                <div className={styles.hamburgerIcon}>
                    <img src='/public/customExitIcon.svg' alt="ExitIcon" className={styles.menuIcon}
                         onClick={mobileMenu} />
                </div>

                <ScrollLink to="sluzby"
                            className={styles.navBarItemMobile} spy={true}
                            smooth={true} duration={1000} onClick={handleSluzbyClick}>Služby</ScrollLink>
                <ScrollLink to="onas"
                            className={styles.navBarItemMobile} spy={true} smooth={true}
                            duration={1000} onClick={handleONasClick}>O nás</ScrollLink>
                <ScrollLink to="postup"
                            className={styles.navBarItemMobile} spy={true}
                            smooth={true} duration={1000} onClick={handlePostupClick}>Postup</ScrollLink>
                <ScrollLink to="contact"
                            className={styles.navBarItemMobile}
                            spy={true} smooth={true} duration={1000} onClick={handleContactClick}>Kontaktujte
                    nás</ScrollLink>


            </div>

        </div>
    );
};

export default DrawerMenu;