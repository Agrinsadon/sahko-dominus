import React from 'react';
import '../styles/AboutUs.css'; // Import your CSS file
import logo from '/sahkodominus-logo.png'; // Import your logo and update the path


const AboutUs = () => {
  return (
    <div>
      {/* First About Us Container */}
      <div className="about-us-container">
      <h1 className="main-title">Meistä</h1>
      <div className="sections-container">

        <div className="left-section">
        <h2 className="sub-title"><img src={logo} alt="Logo" className="logo" /></h2>
          <p>Tervetuloa Sähkö Dominukseen! Yrityksemme tarina alkoi vuonna 2023 heinäkuussa, kun päätimme perustaa yrityksen intohimostamme sähkötekniikkaan. Tavoitteenamme on kasvattaa yrityksemme ja tehdä siitä johtava sähkötekniikan asiantuntija ja asennuspalvelu alalla.
              Sähkö Dominus perustuu vahvaan sitoutumiseen laatuun ja asiakastyytyväisyyteen. Meillä on ylpeys tarjota ainoastaan kokeneiden ja luotettavien sähköasentajien palveluita, jotka meidän tiimissämme tunnetaan sähkömestareina. Uskomme, että ammattitaitoinen henkilökuntamme on avainasemassa tarjotessamme korkealaatuisia sähköasennuspalveluita.
              Sähkö Dominuksen nimi symboloi vallitsevaa mestaruutta sähköalalla. Se edustaa tinkimätöntä ammattitaitoa ja luotettavuutta, johon voit luottaa jokaisessa projektissa. Olemme ylpeitä siitä, että olemme rakentaneet maineemme luotettavana kumppanina sähkötarpeissasi.
              Liity mukaan matkallemme kohti sähkötekniikan huipulle. Sähkö Dominus – missä kokemus kohtaa mestaruuden.
          </p>
        </div>
        <div className="right-section">
          <div className="right-content-wrapper">
            <p>Kuvat tulee pian</p>
          </div>
        </div>
        </div>
      </div>

      {/* Second About Us Container */}
      <div className="about-us-container">
      <h1 className="main-title">Tiimimme</h1>
      <div className="sections-container">
        <div className="right-section-second">
          <div className="right-content-wrapper">
          <p>Kuvat tulee pian</p>
          </div>
        </div>
        <div className="left-section-second">
          <h2>Diako</h2>
          <p>Hei olen Diako, Sähkö Dominuksen perustaja ja pääsähköasentaja. Sähköalalla olen ollut mukana vuodesta 2015 ja valmistuin koulutuksestani kesällä 2018. Intohimoni sähkötekniikkaan on syvää ja olen sitoutunut aina asettamaan asiakkaiden tarpeet etusijalle.
              Työskentelen innokkaasti sen hyväksi, että jokainen asiakas voi tuntea olonsa mukavaksi ja turvalliseksi. Siksi pyrin aina tutustumaan asiakkaisiin, luoden rennon ilmapiirin työmaalle, jossa yhteistyö sujuu mutkattomasti.
              Olen kerryttänyt yli 6 vuoden kokemuksen alalta ja tässä ajassa olen oppinut kattavasti niin talojen, asuntojen kuin liiketilojenkin sähkötekniikasta ja suunnittelusta – kaapelin vedosta pöytäkirjan laatimiseen saakka. Olen erikoistunut ratkaisemaan ongelmia luovasti, tarvittaessa poiketen perinteisistä asennustavoista.
              Odotan innolla mahdollisuutta tuoda sähköalan osaamiseni käyttöönne ja varmistaa, että sähköratkaisunne ovat juuri sellaiset kuin tarvitsette. Yhteistyössä luomme turvallisen ja toimivan ympäristön.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
