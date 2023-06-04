import React from 'react';
import styles from './mainPage.module.css';
import globalStyles from './global.module.css';

function mainPage() {
    return (
        <div className={styles.appkysk}>
            <div className={styles.topnavbar}>
                <div className={styles.topnavbarchild}>
                    <img className={styles.frameIcon5} alt="" src="./public/frame5.svg" id="frameIcon5" />
                    <b className={styles.appky1}>Appky</b>
                    <img className={styles.frameFirst}  alt="" src="./public/frame-1-1@2x.png" />
                    <button id="buttonko" className={styles.button2}>
                        <b className={styles.kontaktujteNas}>Kontaktuje nás</b>
                    </button>
                </div>
            </div>
            <div className={styles.headerClass}>
                <div className={styles.appkyskChild4} />
                <div className={styles.appkyskChild3} />
                <div className={styles.appkyskChild5} />
                <div className={styles.appkyskChild6} />
                <img className={styles.icon}  alt="" src="./public/plus.svg" />
                <img className={styles.icon1}  alt="" src="./public/plus.svg" />
                <img className={styles.icon2}  alt="" src="./public/plus.svg" />
                <img className={styles.icon3}  alt="" src="./public/plus.svg" />
                <img className="responsive-design-5402848-1-icon"  alt="" style={{float: 'right'}} src="./public/responsivedesign5402848-1@2x.png" />
                <div className="rectangle-parent">
                    <div className="group-child" />
                    <div className="group-item" />
                    <div className="tu-nejde-o">#tu nejde o našu aplikáciu</div>
                </div>
                <div className="webky-appky-intern">Webky? Appky? Interné appky? My sme pripravení!</div>
                <div className="naa-firma-je">
                    Naša firma je pripravená vytvoriť Vašu novú mobilnú aplikáciu, web
                    aplikáciu alebo internú appku pre tvoju firmu alebo individuálnu
                    potrebu.
                </div>
                <button id="buttonko1" className="button">
                    <b className="kontaktujte-ns">Kontaktujte nás</b>
                </button>
            </div>
            <div className="sectionTrust">
                <div className="nm-na-vaej">Nám na Vašej novej appke záleží !</div>
                <div className="vyuvame-nae-znalosti">
                    Využívame naše znalosti a skúsenosti na budovanie a rozvoj tvojho
                    digitálneho produktu, aby perfektne splnili potreby Vášho podnikania a
                    Vašich zákazníkov. Sme tu pre Vás, aby sme Vám pomohli vytvoriť a
                    posilniť digitálnu prítomnosť, ktorá prinesie skutočnú hodnotu a
                    konkurenčnú výhodu na trhu.
                </div>
                <div className="iconsContainer">
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div className="mobilne-apps">
                            <div className="mobiln-aplikcie">
                                <p className="po-spolonej-kve">Mobilné</p>
                                <p className="po-spolonej-kve">aplikácie</p>
                            </div>
                            <div className="mobilne-app-child" />
                            <img className="mobilne-app-item"  alt="" src="./public/group-57.svg" />
                        </div>
                        <div className="webove-apps">
                            <div className="mobiln-aplikcie">
                                <p className="po-spolonej-kve">Webové</p>
                                <p className="po-spolonej-kve">aplikácie</p>
                            </div>
                            <div className="mobilne-app-child" />
                            <img className="mobilne-app-item"  alt="" src="./public/group3.svg" />
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div className="interne-apps">
                            <div className="mobiln-aplikcie">
                                <p className="po-spolonej-kve">Interné riešenie</p>
                                <p className="po-spolonej-kve">pre tvoju firmu</p>
                            </div>
                            <div className="mobilne-app-child" />
                            <img className="mobilne-app-item"  alt="" src="./public/group4.svg" />
                        </div>
                        <div className="uiux-apps">
                            <div className="mobiln-aplikcie">
                                <p className="po-spolonej-kve">UI UX</p>
                                <p className="po-spolonej-kve">Dizajn</p>
                            </div>
                            <div className="mobilne-app-child" />
                            <img className="mobilne-app-item"  alt="" src="./public/24vector-graphic.svg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sectionKnowHow">
                <div className="content-container">
                    <img className="rectangle-icon"  alt="" style={{float: 'left'}} src="./public/rectangle-6@2x.png" />
                    <div>
                        <div className="ako-to-robme">Ako to robíme my?</div>
                        <div className="naa-firma-sa">
                            Naša firma sa zaväzuje poskytovať klientom maximálnu pozornosť. Radi sa
                            stretneme, prejednáme váš nový projekt a vytvoríme pohodové prostredie,
                            pričom si môžeme vychutnať šálku kávy.
                            <div className="content-kava">
                                <div className="coffee-child">
                                    <img className="coffee-icon"  alt="" src="./public/vector.svg" />
                                </div>
                                <div className="kava-container">
                                    <div className="kava">Káva</div>
                                    <div className="kava-text">
                                        Vaše potreby a predstavy sú pre nás prioritou a sme tu, aby sme vám
                                        poskytli úplnú podporu a riešenia, ktoré presne zodpovedajú vašim
                                        očakávaniam.
                                    </div>
                                </div>
                            </div>
                            <div className="content-plan">
                                <div className="plan-child">
                                    <img className="plan-icon"  alt="" src="./public/group.svg" />
                                </div>
                                <div className="kava-container">
                                    <div className="kava">Plán</div>
                                    <div className="kava-text">
                                        Po spoločnej káve sa s tímom pustíme do brainstormingu vášho
                                        projektu. Spolu sa budeme zamýšľať nad najlepšími nápadmi a
                                        vytvoríme funkcionality, ktoré budú plne spĺňať vaše očakávania.
                                    </div>
                                </div>
                            </div>
                            <div className="content-designcode">
                                <div className="designcode-child">
                                    <img className="designcode-icon"  alt="" src="./public/group1.svg" />
                                </div>
                                <div className="kava-container">
                                    <div className="kava">Dizajn a vývoj</div>
                                    <div className="kava-text">
                                        Venujeme veľkú pozornosť detailom a zabezpečujeme, aby každý prvok
                                        dizajnu bol špeciálne prispôsobený potrebám Vašich uživatelov. V
                                        priebehu tohto procesu budeme pravidelne komunikovať s vami, aby sme
                                        sa uistili, že dizajn a funkčnosť sú presne také, aké ste si
                                        predstavovali.
                                    </div>
                                </div>
                            </div>
                            <div className="content-delivery">
                                <div className="delivery-child">
                                    <img className="delivery-icon"  alt="" src="./public/group2.svg" />
                                </div>
                                <div className="kava-container">
                                    <div className="kava">Doručenie</div>
                                    <div className="kava-text">
                                        Uistíme sa, že všetko funguje správne a je pripravené na nasadenie.
                                        Pomôžeme vám s inštaláciou a nastavením, aby ste mohli začať využívať
                                        svoj nový projekt. Budeme tu pre vás, aby sme poskytli akýkoľvek ďalší
                                        technický support, ktorý budete potrebovať.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{clear: 'both'}} />
                    </div>
                </div>
            </div>
            <div className="About">
                <div className="about-title">
                    Kreatívna agentúra, ktorá využíva dizajn a kód na riešenie problémov
                </div>
                <div className="line-div" />
                <div className="about-subTitle">
                    Sme priateľská spoločnosť Appky, s.r.o., ktorá sa zameriava na
                    poskytovanie najefektívnejších riešení pre vás alebo vašu firmu. našou
                    odbornosťou a vášou výnimočnosťou spolu dosiahneme skvelé výsledky.
                    Dôverujte nám, aby sme vám pomohli dosiahnuť úspech vo vašom digitálnom
                    svete.
                </div>
            </div>
            <div className="kontaktujnas" id="contactSection">
                <b className="kontaktuj-ns">Kontaktuj nás</b>
                <div className="si-pripravn-na">
                    Si pripravný na spoluprácu? Lebo my áno!
                </div>
            </div>
            <div className="Contact">
                <div className="contactContainer">
                    <div className="ellipse-parent">
                        <b className="kontaktn-daje">Kontaktné údaje</b>
                        <div className="vyplte-formulr-a">
                            Vyplňte formulár a náš tím sa Vám ozve v priebehu 24 hodín.
                        </div>
                        <div className="frame-inner" />
                        <div className="frame-child1" />
                        <div className="frame-child2" />
                        <div className="frame-child3" />
                        <div className="div1">+421 911 892 703</div>
                        <div className="helloappkysk">hello@appky.sk</div>
                        <div className="appkysk1">appky.sk</div>
                        <div className="do-lebn-3">Do žlebín 3, Ružomberok</div>
                        <img className="frame-icon2"  alt="" src="./public/frame2.svg" />
                        <img className="group-icon6"  alt="" src="./public/group5.svg" />
                        <img className="frame-icon3"  alt="" src="./public/frame3.svg" />
                        <img className="frame-icon4"  alt="" src="./public/frame4.svg" />
                    </div>
                    <div className="formular">
                        <form id="emailForm">
                            <div className="menopriezvisko">
                                <div className="menocontent">
                                    <div className="meno">Meno*</div>
                                    <input type="text" placeholder="Vaše meno" id="name" name="name" className="nameinput" />
                                    <div className="contact-line" />
                                </div>
                                <div className="priezviskocontent">
                                    <div className="priezvisko">Priezvisko</div>
                                    <input type="text" placeholder="Vaše priezvisko" id="secondname" name="secondname" className="nameinput" />
                                    <div className="contact-line" />
                                </div>
                            </div>
                            <div className="emailmobil">
                                <div className="emailcontent">
                                    <div className="email">Email*</div>
                                    <input type="email" placeholder="example@appky.sk" id="email" name="email" className="nameinput" />
                                    <div className="contact-line" />
                                </div>
                                <div className="mobilcontent">
                                    <div className="mobil">Mobil*</div>
                                    <input type="tel" placeholder="v tvare +421" id="phone" name="phone" className="nameinput" />
                                    <div className="contact-line" />
                                </div>
                            </div>
                            <div className="oakusluzbuide">
                                <div className="o-ak-slubu">O akú službu ide?</div>
                            </div>
                            <div className="mobilnewebove">
                                <div style={{display: 'flex', flexDirection: 'row', width: 300}}>
                                    <div className="checkcircle" />
                                    <div className="mobiln-aplikcie1">Mobilné aplikácie</div>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <div className="checkcircle" />
                                    <div className="webov-aplikcie1">Webové aplikácie</div>
                                </div>
                            </div>
                            <div className="interneine">
                                <div style={{display: 'flex', flexDirection: 'row', width: 300}}>
                                    <div className="checkcircle" />
                                    <div className="mobiln-aplikcie1">Interné aplikácie</div>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <div className="checkcircle" />
                                    <div className="webov-aplikcie1">Iné</div>
                                </div>
                            </div>
                            <div className="sprava">
                                <div className="menocontent">
                                    <div className="meno">Správa</div>
                                    <input type="text" placeholder="Napíšte Vašu správu" id="message" name="message" className="nameinput" />
                                    <div className="contact-line-longer" />
                                </div>
                            </div>
                            <input type="submit" defaultValue="Odoslat" className="submit-button" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="hiring">
                <div className="hiringText">
                    <div className="hladme-do-nho">Hladáme do nášho tímu developera!</div>
                    <div className="hadme-sksench-vvojrov">
                        Hľadáme skúsených vývojárov v React Native, ktorí majú vášeň pre
                        tvorbu inovatívnych mobilných aplikácií. Ponúkame príležitosť
                        pracovať na zaujímavých projektoch v dynamickom a priateľskom
                        prostredí.
                    </div>
                    <div className="button1">
                        <b className="kontaktujte-ns">Napíš nám</b>
                    </div>
                </div>
                <img className="unsplashsbfmokbk7ju-icon"  alt="" src="./public/unsplashsbfmokbk7ju@2x.png" />
            </div>
            <div className="footer">
                <img className="frame-1-1"  alt="" src="./public/frame-1-1@2x.png" />
                <b className="appky">Appky</b>
                <div className="appky-sro-2023">Appky s.r.o 2023</div>
                <div className="terms-conditions">Terms &amp; Conditions</div>
                <div className="privacy">Privacy</div>
                <div className="footer-child">
                    <img className="instagram-icon"  alt="" src="./public/instagram-icon.svg" />
                </div>
                <div className="footer-item">
                    <img className="facebook-icon"  alt="" src="./public/facebook-icon.svg" />
                </div>
                <div className="footer-inner">
                    <img className="linkedin-icon"  alt="" src="./public/linkedin-icon.svg" />
                </div>
                <div className="footer-child1">
                    <img className="twitter-icon"  alt="" src="./public/twitter-icon.svg" />
                </div>
                <div className="footer-child2">
                    <img className="youtube-icon"  alt="" src="./public/youtube-icon.svg" />
                </div>
            </div>
            --&gt;
        </div>

    );
}

export default mainPage;