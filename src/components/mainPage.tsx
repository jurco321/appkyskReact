import React, {useEffect, useState} from 'react';
import styles from './mainPage.module.css';
import {collection, addDoc, doc, getDoc} from 'firebase/firestore';
import {firestore} from "../firebase/config";

function MainPage() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const getAllData = async () => {
            const docRef = doc(firestore, `mail`, `bWnMEOR3mFmWuroSOTbl`);
            const targetDoc = await getDoc(docRef);
            console.log("targetDoc.data() : ", targetDoc.data());
            return { data: targetDoc.data() };
        };

        getAllData();
    }, []);



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


    useEffect(() => {

        const submitButton = document.getElementById("submitButton");

        const submitListener = () => {

            // Get the values from the input fields
            const emailElement = document.getElementById("email") as HTMLInputElement | null;
            const email = emailElement?.value ?? '';

            const textElement = document.getElementById("text") as HTMLInputElement | null;
            const text = textElement?.value ?? '';

            alert('sending email to : ' + email + ' with text : ' + text);

            // Add a new document with the user-submitted data
            const mailCollection = collection(firestore, 'mail');
            addDoc(mailCollection, {
                to: email,
                message: {
                    subject: 'Hello from Firebase!',
                    html: text,
                },
            }).then(() => {
                alert('MAIL DONE @ ');

                console.log("Data successfully written to Firestore!");
                // Optionally, you can display a success message or redirect the user
            })
                .catch((error: any) => {
                    console.error("Error writing document: ", error);
                    // Display an error message to the user
                });
        };

        submitButton?.addEventListener("click", submitListener);

        // Clean up the event listener when the component is unmounted
        return () => {
            submitButton?.removeEventListener("click", () => {
            });
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
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;500;600;700&display=swap"
                rel="stylesheet"></link>

            <div className={`${styles.headerSvg} breathingAnimation `}/>
            <div className={`${styles.headerSvg2} breathingAnimation`}/>
            <div className={styles.topNavBarParent + (scrolled ? ' ' + styles.scrolled : '')}>
                <div className={styles.topNavBar}>
                    <img src='/public/appkyLogo.png' alt="Logo" className={styles.appkyLogo}/>
                    <b className={styles.navBarTitle}>Appky</b>
                    <a href="#" className={`${styles.navBarItem} ${styles.scrolled}`}>Služby</a>
                    <a href="#" className={`${styles.navBarItem} ${styles.scrolled}`}>O nás</a>
                    <a href="#" className={`${styles.navBarItem} ${styles.scrolled}`}>Postup</a>
                    <a href="#" className={`${styles.navBarItem} ${styles.scrolled} ${styles.navContactButton}`}>Kontaktujte
                        nás</a>
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
                             className={styles.headerGifImgSmaller}/>
                    </div>
                    <button className={styles.headerButton}>Kontaktujte nás</button>
                </div>
                <div className={styles.headerGif}>
                    <img src="/public/appDesignAndDevelopment.gif" alt="Animation" className={styles.headerGifImg}/>
                </div>
            </div>
            <div className={styles.sluzby}>
                <h1 className={styles.sluzbyTitle}>Naše služby</h1>
                <img className={styles.underLine} src="/public/underLine.svg" alt="Underline"/>
                <div className={styles.sluzbyContainer}>
                    <div className={styles.mobilneApps}>
                        <img src="/public/mobilneApps.svg" alt='mobilneApps' className={styles.beruska}/>
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
                        <img src="/public/weboveApps.svg" alt='weboveApps' className={styles.beruska}/>
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
                        <img src="public/uiuxApps.svg" alt='uiuxApps' className={styles.beruska}/>
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
            <div className={styles.oNas}>
                <div className={styles.oNasBg2}/>
                <div className={styles.iconEllipseContainer}>
                    <img src="public/iconReact.svg" alt="IconReact" className={styles.iconBrandsLogo}/>
                    <img src="public/iconFirebase.svg" alt="IconFirebase" className={styles.iconBrandsLogo}/>
                    <img src="public/iconAndroid.svg" alt="IconAndroid" className={styles.iconBrandsLogo}/>
                    <img src="public/iconGithub.svg" alt="IconGithub" className={styles.iconBrandsLogo}/>
                    <img src="public/iconJava.svg" alt="IconJava" className={styles.iconBrandsLogo}/>
                    <img src="public/iconFigma.svg" alt="IconFigma" className={styles.iconBrandsLogo}/>
                    <img src="public/iconApple.svg" alt="IconApple" className={styles.iconBrandsLogo}/>
                    <img src="public/iconNode.svg" alt="IconNode" className={styles.iconBrandsLogo}/>
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
            <div className={styles.postup}>

                <h1 className={styles.postupTitle}>Ako to robíme my?</h1>
                <img className={styles.underLine} src="/public/underLine.svg" alt="Underline"/>
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


            <div className={styles.Contact}>

                <div className={styles.ContactMaxWidth}>
                    <h1 className={styles.ContactTitle}>Vytvorme spoločne úspešné aplikácie!</h1>
                    <img className={styles.underLine} src="/public/underLine.svg" alt="Underline"/>

                    <div className={styles.formular}>
                        <div className={styles.me}>
                            <img src='/public/me.png' alt='mePhoto'/>
                            <span className={styles.meTitle}>Kontaktujte nás</span>
                            <span className={styles.meSubTitle}>Ahoj, volám sa Juraj, manažér pre rozvoj podnikania pre spoločnosť Appky s.r.o. Rád by som s Vami prebral Váš projekt a Vaše potreby. </span>
                            <span className={styles.meSubTitle}>Vyplňte formulár alebo nám pošlite email na <span
                                className={styles.specialEmailText}>hello@appky.sk.</span>  Odpovieme Vám do 24 hodín! </span>
                        </div>

                        <div className={styles.vyplnovacka}>
                            <div className={styles.menoemail}>
                                <div className={styles.formMeno}>
                                    <label htmlFor="name" className={styles.labelText}>Meno</label>
                                    <input type="text" id="name" name="name" className={styles.borderBox}/>
                                </div>
                                <div className={styles.formEmail}>
                                    <label htmlFor='email' className={styles.labelText}>E-mail</label>
                                    <input type="text" id="email" name="email" className={styles.borderBox}/>
                                </div>
                            </div>
                            <div className={styles.mobilpomoc}>
                                <div className={styles.menoemail}>
                                    <div className={styles.formMobil}>
                                        <label htmlFor="name" className={styles.labelText}>Mobil (nepovinné)</label>
                                        <input type="text" id="name" name="name" className={styles.borderBox}/>
                                    </div>
                                    <div className={styles.formHelp}>
                                        <label htmlFor='email' className={styles.labelText}>Ako Vám môžeme
                                            pomôcť?</label>
                                        <input type="text" id="text" name="text" className={styles.borderBox}/>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.dozvedeli}>
                                <div className={styles.formFrom}>
                                    <label htmlFor='email' className={styles.labelText}>Ako ste sa o nás
                                        dozvedeli?</label>
                                    <input type="text" id="name" name="name" className={styles.borderBox}/>
                                </div>
                            </div>

                            <div className={styles.povedztenam}>
                                <div className={styles.formFrom}>
                                    <label htmlFor='email' className={styles.labelText}>Povedzte nám o Vašom
                                        projekte!</label>
                                    <input type="text" id="name" name="name" className={styles.borderBoxLarge}/>
                                </div>
                            </div>
                            <div className={styles.sendButton}>
                                <button className={styles.sendButtonStyle} id="submitButton">Odoslať</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>


    );
}

export default MainPage;