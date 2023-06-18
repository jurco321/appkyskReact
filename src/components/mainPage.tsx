import React, { useEffect, useState, useRef } from 'react';
import styles from './mainPage.module.css';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { firestore } from "../firebase/config";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function MainPage() {

    const emailTo = "hello@appky.sk";

    const [scrolled, setScrolled] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const sluzbyRef = useRef<HTMLDivElement>(null);
    const ONasRef = useRef<HTMLDivElement>(null);
    const postupRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const handleSluzbyClick = () => {
        if (sluzbyRef.current) {
            scroll.scrollTo(sluzbyRef.current.offsetTop, {
                duration: 500,
                smooth: 'easeInOutQuart',
            });
        }
    };

    const handleONasClick = () => {
        if (ONasRef.current) {
            scroll.scrollTo(ONasRef.current.offsetTop, {
                duration: 500,
                smooth: 'easeInOutQuart',
            });
        }
    };

    const handlePostupClick = () => {
        if (postupRef.current) {
            scroll.scrollTo(postupRef.current.offsetTop, {
                duration: 500,
                smooth: 'easeInOutQuart',
            });
        }
    };

    const handleContactClick = () => {
        if (contactRef.current) {
            scroll.scrollTo(contactRef.current.offsetTop, {
                duration: 500,
                smooth: 'easeInOutQuart',
            });
        }
    };

    const mobileMenu = () => {
        setIsOpen((open) => !open);
    };

    const [formData, setFormData] = useState({
        meno: '',
        email: '',
        mobil: '',
        text: '',
        dozvedelisa: '',
        oprojekte: ''
    });

    //require to have access to formData from withing the submitListener
    const formDataRef = useRef(formData);

    const handleChange = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        // Update the formDataRef whenever the formData state changes
        formDataRef.current = formData;
    }, [formData]);


    useEffect(() => {
        const submitListener = () => {

            const currentFormData = formDataRef.current;

            const body = "Meno : <br/> "
                + currentFormData.meno
                + "<br/> ---<br/><br/> Email : <br/> "
                + currentFormData.email
                + "<br/> ---<br/><br/> Mobil : <br/> "
                + currentFormData.mobil
                + "<br/> ---<br/><br/> Ako Vám môžeme pomôcť : <br/> "
                + currentFormData.text
                + "<br/> ---<br/><br/> Ako ste sa o nás dozvedeli : <br/> "
                + currentFormData.dozvedelisa
                + "<br/> ---<br/><br/> O projekte : <br/> "
                + currentFormData.oprojekte;

            // Hide activeSubmitButton and show inactiveSubmitButton
            const activeSubmitButton = document.getElementById("activeSubmitutton");
            const inactiveSubmitButton = document.getElementById("inactiveSubmitutton");

            if (activeSubmitButton && inactiveSubmitButton) {
                activeSubmitButton.style.display = "none";
                inactiveSubmitButton.style.display = "flex";
            }

            // Add a new document with the user-submitted data
            const mailCollection = collection(firestore, 'mail');
            addDoc(mailCollection, {
                to: currentFormData.email,
                replyTo: emailTo,
                message: {
                    subject: 'Kontakt z appky.sk!',
                    html: body,
                },
            })
                .then(() => {

                    // Clear form inputs
                    setFormData({
                        meno: '',
                        email: '',
                        mobil: '',
                        text: '',
                        dozvedelisa: '',
                        oprojekte: ''
                    });

                    alert('Váš email bol odoslaný. Ďakujeme.');
                    console.log("Data successfully written to Firestore!");

                    //brind send button back
                    if (activeSubmitButton && inactiveSubmitButton) {
                        activeSubmitButton.style.display = "flex";
                        inactiveSubmitButton.style.display = "none";
                    }

                })
                .catch((error: any) => {
                    console.error("Error writing document: ", error);

                    // Display an error message to the user
                    alert('Bohužiaľ nastala chyba pri zasielaní emailu. Prosím napíšte nám na hello@appky.sk');

                    //brind send button back
                    if (activeSubmitButton && inactiveSubmitButton) {
                        activeSubmitButton.style.display = "flex";
                        inactiveSubmitButton.style.display = "none";
                    }
                });
        };

        const submitButton = document.getElementById("submitButton");
        submitButton?.addEventListener("click", submitListener);

        // Clean up the event listener when the component is unmounted
        return () => {
            submitButton?.removeEventListener("click", submitListener);
        };
    }, []);


    return (
        <div className={styles.body}>
            <link
                rel="preconnect"
                href="https://fonts.googleapis.com"
            />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin=""
            />
            <link href="https://fonts.googleapis.com/css2?family=Kodchasan:wght@700&family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"></link>

            <div className={`${styles.headerSvg} breathingAnimation `} />
            <div className={`${styles.headerSvg2} breathingAnimation`} />
            <div className={styles.topNavBarParent + (scrolled ? ' ' + styles.scrolled : '')}>
                <div className={styles.topNavBar}>
                    <img src='/public/appkyLogoWhite.png' alt="Logo" className={styles.appkyLogo} />
                    <b className={styles.navBarTitle}>Appky</b>
                    <img src='/public/customMenuIcon.svg' alt="MenuIcon" className={styles.menuIcon}
                        onClick={mobileMenu} />
                    <ScrollLink to="sluzby"
                        className={`${styles.navBarItem} ${isOpen ? styles.navBarItemMobile : ""}`} spy={true}
                        smooth={true} duration={1000} onClick={handleSluzbyClick}>Služby</ScrollLink>
                    <ScrollLink to="onas"
                        className={`${styles.navBarItem} ${isOpen ? styles.navBarItemMobile : ""}`} spy={true} smooth={true}
                        duration={1000} onClick={handleONasClick}>O nás</ScrollLink>
                    <ScrollLink to="postup"
                        className={`${styles.navBarItem} ${isOpen ? styles.navBarItemMobile : ""}`} spy={true}
                        smooth={true} duration={1000} onClick={handlePostupClick}>Postup</ScrollLink>
                    <ScrollLink to="contact"
                        className={`${styles.navBarItemButton} ${styles.scrolled} ${styles.navContactButton}`}
                        spy={true} smooth={true} duration={1000} onClick={handleContactClick}>Kontaktujte
                        nás</ScrollLink>

                </div>
            </div>
            <div className={styles.header}>
                <div className={styles.headerTitle}>
                    <h1 className={`${styles.title} ${styles.flyIn1}`}>Vyvíjame appky,
                        ktoré potešia vašich
                        používatelov a podporia
                        rast vášho podnikania</h1>

                    <p className={`${styles.subTitle} ${styles.flyIn2}`}>Natívna vývojová agentúra, pripravená na návrh,
                        vytvárať a rozvíjať

                        softvérové aplikácie
                        svetovej úrovne.
                    </p>
                    <div className={styles.headerGifSmaller}>
                        <img src='/public/appDesignAndDevelopment.gif' alt="Animation"
                            className={styles.headerGifImgSmaller} />
                    </div>
                    <ScrollLink to="contact" className={styles.headerButton} spy={true} smooth={true} duration={1000}
                        activeClass="none" onClick={handleContactClick}>Kontaktujte nás</ScrollLink>
                </div>
                <div className={styles.headerGif}>
                    <img src="/public/appDesignAndDevelopment.gif" alt="Animation" className={styles.headerGifImg} />
                </div>
            </div>
            <div id="sluzby" className={`${styles.sluzby} ${styles.scrollContainer}`} ref={sluzbyRef}>
                <h1 className={styles.sluzbyTitle}>Naše služby</h1>
                <img className={styles.underLine} src="/public/underLine.svg" alt="Underline" />
                <div className={styles.sluzbyContainer}>
                    <div className={styles.mobilneApps}>
                        <img src="/public/mobilneApps.svg" alt='mobilneApps' className={styles.beruska} />
                        <h2 className={styles.mobilneAppsTitle}>Vývoj
                            mobilných aplikácií
                        </h2>
                        <p className={styles.mobilneAppsSubTitle}>
                            S vysokou odbornosťou a rýchlosťou sa špecializujeme na tvorbu kvalitných mobilných
                            aplikácií
                            prostredníctvom React Native pre systémy Android aj iOS.
                        </p>
                        <a className={styles.zistiViac}>
                            Zisti viac ›
                        </a>
                    </div>
                    <div className={styles.weboveApps}>
                        <img src="/public/weboveApps.svg" alt='weboveApps' className={styles.beruska} />
                        <h2 className={styles.weboveAppsTitle}>Vývoj
                            webových aplikácií
                        </h2>
                        <p className={styles.weboveAppsSubTitle}>
                            Vyvíjame jedinečné webové aplikácie s modernými prístupmi a najnovšími technológiami, aby
                            sme
                            vyhoveli potrebám vášho podnikania.
                        </p>
                        <a className={styles.zistiViac}>
                            Zisti viac ›
                        </a>
                    </div>
                    <div className={styles.uiuxApps}>
                        <img src="public/uiuxApps.svg" alt='uiuxApps' className={styles.beruska} />
                        <h2 className={styles.uiuxAppsTitle}>UI / UX Dizajn</h2>
                        <p className={styles.uiuxAppsSubTitle}>
                            S veľkou vášňou sa venujeme tvorbe nádherných a praktických používateľských rozhraní, ktoré
                            poskytujú plynulý a intuitívny zážitok.
                        </p>
                        <a className={styles.zistiViac}>
                            Zisti viac ›
                        </a>
                    </div>
                </div>
            </div>

            <div id="onas" className={`${styles.oNas} ${styles.scrollContainer}`} ref={ONasRef}>
                <div className={styles.oNasBg2} />

                <div className={styles.iconEllipseContainer}>
                    <img src="public/iconReact.svg" alt="IconReact" className={styles.iconBrandsLogo} />
                    <img src="public/iconFirebase.svg" alt="IconFirebase" className={styles.iconBrandsLogo} />
                    <img src="public/iconAndroid.svg" alt="IconAndroid" className={styles.iconBrandsLogo} />
                    <img src="public/iconGithub.svg" alt="IconGithub" className={styles.iconBrandsLogo} />
                    <img src="public/iconJava.svg" alt="IconJava" className={styles.iconBrandsLogo} />
                    <img src="public/iconFigma.svg" alt="IconFigma" className={styles.iconBrandsLogo} />
                    <img src="public/iconApple.svg" alt="IconApple" className={styles.iconBrandsLogo} />
                    <img src="public/iconNode.svg" alt="IconNode" className={styles.iconBrandsLogo} />
                </div>
                <h2 className={styles.oNasTitle}>
                    Prečo si na vytváranie krásnych aplikácií vybrať Appky?
                </h2>
                <p className={styles.oNasSubTitle}>
                    Appky, Vaša najlepšia voľba pre vytváranie mobilných, webových či interných aplikácií, ti prináša
                    priateľský
                    a profesionálny prístup. S vášňou vytvárame produkty pomocou React Native, čo nám umožňuje ponúknuť
                    jedinečné výhody. S touto modernou technológiou dosahujeme vysokú kvalitu, rýchlosť vývoja a
                    spoľahlivosť,
                    čo nás výrazne odlišuje od ostatných. Vaše aplikácie budú vynikajúce, efektívne a presne
                    prispôsobené Vašim
                    potrebám.
                </p>
                <a className={styles.podmeVyvijat}>
                    Poďme vyvíjať ›
                </a>
            </div>
            <div id="postup" className={`${styles.postup} ${styles.scrollContainer}`} ref={postupRef}>

                <h1 className={styles.postupTitle}>Ako to robíme my?</h1>
                <img className={styles.underLine} src="/public/underLine.svg" alt="Underline" />
                <div className={styles.cards}>

                    <div className={styles.postup1Container}>
                        <div className={styles.postup1Rectangle}>
                            <div className={styles.postupInsideWidth}>
                                <div className={styles.postupIcon}>
                                    <img src="public/meeting.svg" alt="IconMeeting"></img>
                                </div>
                                <span className={styles.postup1SubTitle}>
                                    Zistíme o Vašich <span
                                        className={styles.specialText}>potrebách a požiadavkách,</span> či už pri príjemnej káve, online stretnutí alebo iným spôsobom.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.postup2Container}>
                        <div className={styles.postup2Rectangle}>
                            <div className={styles.postupInsideWidth}>
                                <div className={styles.postupIcon}>
                                    <img src="public/research.svg" alt="IconResearch"></img>
                                </div>
                                <span className={styles.postup2SubTitle}>
                                    Dôkladne porozumieme problému prostredníctvom <span className={styles.specialText}>podrobného primárneho a sekundárneho výskumu.</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.postup3Container}>
                        <div className={styles.postup3Rectangle}>
                            <div className={styles.postupInsideWidth}>
                                <div className={styles.postupIcon}>
                                    <img src="public/brainstorming.svg" alt="IconBrainstorming"></img>
                                </div>
                                <span className={styles.postup3SubTitle}>
                                    Vytvoríme <span className={styles.specialText}>nápady na riešenia</span> pomocou mapovania procesov a definovania architektúry.
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles.cardsSmaller}>

                    <div className={styles.postup1ContainerSmaller}>
                        <div className={styles.postup1RectangleSmaller}>
                            <div className={styles.postupInsideWidth}>
                                <div className={styles.postupIcon}>
                                    <img src="public/meeting.svg" alt="IconMeeting"></img>
                                </div>
                                <span className={styles.postup1SubTitle}>
                                    Zistíme o Vašich <span
                                        className={styles.specialText}>potrebách a požiadavkách,</span> či už pri príjemnej káve, online stretnutí alebo iným spôsobom.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.postup2ContainerSmaller}>
                        <div className={styles.postup2RectangleSmaller}>
                            <div className={styles.postupInsideWidth}>
                                <div className={styles.postupIcon}>
                                    <img src="public/research.svg" alt="IconResearch"></img>
                                </div>
                                <span className={styles.postup2SubTitle}>
                                    Dôkladne porozumieme problému prostredníctvom <span className={styles.specialText}>podrobného primárneho a sekundárneho výskumu.</span>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.cardsSmaller2}>

                    <div className={styles.postup1ContainerSmaller}>
                        <div className={styles.postup1RectangleSmaller}>
                            <div className={styles.postupInsideWidth}>
                                <div className={styles.postupIcon}>
                                    <img src="public/brainstorming.svg" alt="IconBrainstorming"></img>
                                </div>
                                <span className={styles.postup1SubTitle}>
                                    Vytvoríme <span className={styles.specialText}>nápady na riešenia</span> pomocou mapovania procesov a definovania architektúry.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.postup2ContainerSmaller}>
                        <div className={styles.postup2RectangleSmaller}>
                            <div className={styles.postupInsideWidth}>
                                <div className={styles.postupIcon}>
                                    <img src="public/sketching.svg" alt="IconSketching"></img>
                                </div>
                                <span className={styles.postup2SubTitle}>
                                    Navrhujeme <span className={styles.specialText}>krásne, použiteľné a s vašou značkou prepojené</span> produkty, ktoré splnia vaše ciele.
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.cardsSmaller2}>

                    <div className={styles.postup1ContainerSmaller}>
                        <div className={styles.postup1RectangleSmaller}>
                            <div className={styles.postupInsideWidth}>
                                <div className={styles.postupIcon}>
                                    <img src="public/developing.svg" alt="IconDeveloping"></img>
                                </div>
                                <span className={styles.postup1SubTitle}>
                                    Pomocou nových technológií vyvíjame <span className={styles.specialText}>funkčné softvérové produkty,</span> ktoré sú <span
                                        className={styles.specialText}>schopné rásť spolu s vaším podnikaním.</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.postup2ContainerSmaller}>
                        <div className={styles.postup2RectangleSmaller}>
                            <div className={styles.postupInsideWidth}>
                                <div className={styles.postupIcon}>
                                    <img src="public/launch.svg" alt="IconLaunch"></img>
                                </div>
                                <span className={styles.postup2SubTitle}>
                                    Hurá! Spúšťame váš produkt, vyhodnocujeme ho a neustále iterujeme, aby sme <span
                                        className={styles.specialText}>generovali pozitívny vplyv.</span>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles.cardsMobile}>

                    <div className={styles.postup1ContainerMobile}>
                        <div className={styles.postup1RectangleMobile}>
                            <div className={styles.postupInsideWidth}>
                                <div className={styles.postupIcon}>
                                    <img src="public/meeting.svg" alt="IconMeeting"></img>
                                </div>
                                <span className={styles.postup1SubTitle}>
                                    Zistíme o Vašich <span
                                        className={styles.specialText}>potrebách a požiadavkách,</span> či už pri príjemnej káve, online stretnutí alebo iným spôsobom.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.postup2ContainerMobile}>
                        <div className={styles.postup2RectangleMobile}>
                            <div className={styles.postupInsideWidth}>
                                <div className={styles.postupIcon}>
                                    <img src="public/research.svg" alt="IconResearch"></img>
                                </div>
                                <span className={styles.postup2SubTitle}>
                                    Dôkladne porozumieme problému prostredníctvom <span className={styles.specialText}>podrobného primárneho a sekundárneho výskumu.</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.postup2ContainerMobile}>
                        <div className={styles.postup2RectangleMobile}>
                            <div className={styles.postupInsideWidth}>
                                <div className={styles.postupIcon}>
                                    <img src="public/brainstorming.svg" alt="IconBrainstorming"></img>
                                </div>
                                <span className={styles.postup2SubTitle}>
                                    Vytvoríme <span className={styles.specialText}>nápady na riešenia</span> pomocou mapovania procesov a definovania architektúry.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.postup2ContainerMobile}>
                        <div className={styles.postup2RectangleMobile}>
                            <div className={styles.postupInsideWidth}>
                                <div className={styles.postupIcon}>
                                    <img src="public/sketching.svg" alt="IconSketching"></img>
                                </div>
                                <span className={styles.postup2SubTitle}>
                                    Navrhujeme <span className={styles.specialText}>krásne, použiteľné a s vašou značkou prepojené</span> produkty, ktoré splnia vaše ciele.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.postup2ContainerMobile}>
                        <div className={styles.postup2RectangleMobile}>
                            <div className={styles.postupInsideWidth}>
                                <div className={styles.postupIcon}>
                                    <img src="public/developing.svg" alt="IconDeveloping"></img>
                                </div>
                                <span className={styles.postup2SubTitle}>
                                    Pomocou nových technológií vyvíjame <span className={styles.specialText}>funkčné softvérové produkty,</span> ktoré sú <span
                                        className={styles.specialText}>schopné rásť spolu s vaším podnikaním.</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.postup2ContainerMobile}>
                        <div className={styles.postup2RectangleMobile}>
                            <div className={styles.postupInsideWidth}>
                                <div className={styles.postupIcon}>
                                    <img src="public/launch.svg" alt="IconLaunch"></img>
                                </div>
                                <span className={styles.postup2SubTitle}>
                                    Hurá! Spúšťame váš produkt, vyhodnocujeme ho a neustále iterujeme, aby sme <span
                                        className={styles.specialText}>generovali pozitívny vplyv.</span>
                                </span>
                            </div>
                        </div>
                    </div>


                </div>


                <div className={styles.cards2}>

                    <div className={styles.postup1Container}>
                        <div className={styles.postup1Rectangle}>
                            <div className={styles.postupInsideWidth}>
                                <div className={styles.postupIcon}>
                                    <img src="public/sketching.svg" alt="IconSketching"></img>
                                </div>
                                <span className={styles.postup1SubTitle}>
                                    Navrhujeme <span className={styles.specialText}>krásne, použiteľné a s vašou značkou prepojené</span> produkty, ktoré splnia vaše ciele.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.postup2Container}>
                        <div className={styles.postup2Rectangle}>
                            <div className={styles.postupInsideWidth}>
                                <div className={styles.postupIcon}>
                                    <img src="public/developing.svg" alt="IconDeveloping"></img>
                                </div>
                                <span className={styles.postup2SubTitle}>
                                    Pomocou nových technológií vyvíjame <span className={styles.specialText}>funkčné softvérové produkty,</span> ktoré sú <span
                                        className={styles.specialText}>schopné rásť spolu s vaším podnikaním.</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.postup3Container}>
                        <div className={styles.postup3Rectangle}>
                            <div className={styles.postupInsideWidth}>
                                <div className={styles.postupIcon}>
                                    <img src="public/launch.svg" alt="IconLaunch"></img>
                                </div>
                                <span className={styles.postup3SubTitle}>
                                    Hurá! Spúšťame váš produkt, vyhodnocujeme ho a neustále iterujeme, aby sme <span
                                        className={styles.specialText}>generovali pozitívny vplyv.</span>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <div id="contact" className={`${styles.Contact} ${styles.scrollContainer}`} ref={contactRef}>

                <div className={styles.ContactMaxWidth}>
                    <h1 className={styles.ContactTitle}>Vytvorme spoločne úspešné aplikácie!</h1>
                    <img className={styles.underLine} src="/public/underLine.svg" alt="Underline" />

                    <div className={styles.formular}>
                        <div className={styles.me}>
                            <img src='/public/me.png' alt='mePhoto' />
                            <span className={styles.meTitle}>Kontaktujte nás</span>
                            <span className={styles.meSubTitle}>Ahoj, volám sa Juraj, manažér pre rozvoj podnikania pre spoločnosť Appky s.r.o. Rád by som s Vami prebral Váš projekt a Vaše potreby. </span>
                            <span className={styles.meSubTitle}>Vyplňte formulár alebo nám pošlite email na <span
                                className={styles.specialEmailText}>hello@appky.sk.</span>  Odpovieme Vám do 24 hodín! </span>
                        </div>

                        <div className={styles.vyplnovacka}>
                            <div className={styles.menoemail}>
                                <div className={styles.formMeno}>
                                    <label htmlFor="name" className={styles.labelText}>Meno</label>
                                    <input type="text" id="meno" name="meno" className={styles.borderBox} value={formData.meno}  onChange={handleChange} />
                                </div>
                                <div className={styles.formEmail}>
                                    <label htmlFor='email' className={styles.labelText}>E-mail</label>
                                    <input type="text" id="email" name="email" className={styles.borderBox} value={formData.email}  onChange={handleChange} />
                                </div>
                            </div>
                            <div className={styles.mobilpomoc}>
                                <div className={styles.menoemail}>
                                    <div className={styles.formMobil}>
                                        <label htmlFor="name" className={styles.labelText}>Mobil (nepovinné)</label>
                                        <input type="text" id="mobil" name="mobil" className={styles.borderBox} value={formData.mobil}  onChange={handleChange} />
                                    </div>
                                    <div className={styles.formHelp}>
                                        <label htmlFor='email' className={styles.labelText}>Ako Vám môžeme
                                            pomôcť?</label>
                                        <input type="text" id="text" name="text" className={styles.borderBox} value={formData.text}  onChange={handleChange} />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.dozvedeli}>
                                <div className={styles.formFrom}>
                                    <label htmlFor='email' className={styles.labelText}>Ako ste sa o nás
                                        dozvedeli?</label>
                                    <input type="text" id="dozvedelisa" name="dozvedelisa" className={styles.borderBox} value={formData.dozvedelisa}  onChange={handleChange} />
                                </div>
                            </div>

                            <div className={styles.povedztenam}>
                                <div className={styles.formFrom}>
                                    <label htmlFor='email' className={styles.labelText}>Povedzte nám o Vašom
                                        projekte!</label>
                                    <input type="text" id="oprojekte" name="oprojekte"
                                        className={styles.borderBoxLarge} value={formData.oprojekte}  onChange={handleChange}/>
                                </div>
                            </div>
                            <div className={styles.sendButton} id="activeSubmitutton">
                                <button className={styles.sendButtonStyle} id="submitButton">Odoslať</button>
                            </div>
                            <div className={styles.sendButton} id="inactiveSubmitutton" style={{display:'none'}}>
                                <button className={styles.sendButtonStyle} style={{background:'gray'}}>Odosielam</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <footer className={styles.footerParent}>
                <div className={styles.footerChild}>
                    <div className={styles.footerLogoDiv}>
                        <img src='/public/appkyLogoFooter.png' alt="Logo" className={styles.appkyLogoWhite} />
                        <b className={styles.footerBarTitle}>Appky</b>
                    </div>
                    <ScrollLink to="sluzby"
                        className={styles.categoryMobile} spy={true}
                        smooth={true} duration={1000} onClick={handleSluzbyClick}>Služby</ScrollLink>
                    <ScrollLink to="onas"
                        className={styles.categoryMobile} spy={true} smooth={true}
                        duration={1000} onClick={handleONasClick}>O nás</ScrollLink>
                    <ScrollLink to="postup"
                        className={styles.categoryMobile} spy={true}
                        smooth={true} duration={1000} onClick={handlePostupClick}>Postup</ScrollLink>
                    <div className={styles.footerCategories}>
                        <ScrollLink to="contact" className={styles.category} spy={true}
                        smooth={true} duration={1000} onClick={handleContactClick}>Kontakt</ScrollLink>



                        <div className={styles.containerData}>
                            <div className={styles.contactMobil}>
                                <img src='./public/mobilecontact.svg' className={styles.mobileContactSvg}></img>
                                <p className={styles.footerText}>+421 911 892 703</p>
                            </div>
                            <div className={styles.contactMobil}>
                                <img src='./public/emailcontact.svg' className={styles.mobileContactSvg}></img>
                                <p className={styles.footerText}>hello@appky.sk</p>
                            </div>
                            <p className={styles.footerTextAddress}>Appky, s.r.o.</p>
                            <p className={styles.footerTextAddress}>Do Žlebín 5048/3</p>
                            <p className={styles.footerTextAddress}>034 01 Ružomberok</p>
                        </div>
                    </div>
                </div>

            </footer>


        </div>


    );
}

export default MainPage;