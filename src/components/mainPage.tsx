import React from 'react';
import styles from './mainPage.module.css';

function mainPage() {
    return (
        <div className={styles.body}>
            <div className={styles.headerSvg}/>
            <div className={styles.headerSvg2}/>
            <div className={styles.topNavBarParent}>
                <div className={styles.topNavBar}>
                    <img src="./assets/appkyLogo.png" alt="Logo" className={styles.appkyLogo}/>
                    <b className={styles.navBarTitle}>Appky</b>
                    <a href="#" className={`${styles.navBarItem} ${styles.scrolled}`}>Služby</a>
                    <a href="#" className={`${styles.navBarItem} ${styles.scrolled}`}>O nás</a>
                    <a href="#" className={`${styles.navBarItem} ${styles.scrolled}`}>Postup</a>
                    <a href="#" className={`${styles.navBarItem} ${styles.scrolled} ${styles.navContactButton}`}>Kontaktujte nás</a>
                </div>
            </div>
            <div className={styles.header}>
                <div className={styles.headerTitle}>
                    <h1 className={styles.title}>Vyvíjame appky,
                        ktoré potešia vašich
                        používatelov a podporia
                        rast vášho podnikania</h1>
                    <p className={styles.subTitle}>Natívna vývojová agentúra, pripravená na návrh, vytvárať a rozvíjať
                        softvérové aplikácie
                        svetovej úrovne.
                    </p>
                    <div className={styles.headerGifSmaller}>
                        <img src="./assets/appDesignAndDevelopment.gif" alt="Animation"
                             className={styles.headerGifImgSmaller}/>
                    </div>
                    <button className={styles.headerButton}>Kontaktujte nás</button>
                </div>
                <div className={styles.headerGif}>
                    <img src="./assets/appDesignAndDevelopment.gif" alt="Animation" className={styles.headerGifImg}/>
                </div>
            </div>
            <div className={styles.sluzby}>
                <h1 className={styles.sluzbyTitle}>Naše služby</h1>
                <img className={styles.underLine} src="./assets/underLine.svg" alt="Underline"/>
                <div className={styles.sluzbyContainer}>
                    <div className={styles.mobilneApps}>
                        <img src="./assets/mobilneApps.svg" className={styles.beruska}/>
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
                        <img src="./assets/weboveApps.svg" className={styles.beruska}/>
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
                        <img src="./assets/uiuxApps.svg" className={styles.beruska}/>
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
                    <img src="./assets/iconEllipse.svg" alt="IconEllipse" className={styles.iconBrandsLogo}/>
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
            </div>
        </div>


    );
}

export default mainPage;