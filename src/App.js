import React, { useState, useEffect } from "react";
import texts from "./texts";
import contact from "./contact.png";
import "./App.css";
import ContactSection from "./ContactSection";

const sections = ["home", "cv", "projects", "contact"]; 

export default function Portfolio() {
  const [selected, setSelected] = useState("home");
  const [lang, setLang] = useState("fr");
  const [menuOpen, setMenuOpen] = useState(false); 

  
  useEffect(() => {
    const savedSection = localStorage.getItem("selectedSection");
    if (savedSection && sections.includes(savedSection)) {
      setSelected(savedSection);
    }
  }, []);

   
  useEffect(() => {
    const app = document.getElementById("app");
    if (app) app.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.body.style.textAlign = lang === "ar" ? "right" : "left";
  }, [lang]);

  const t = texts[lang] || texts["fr"];

  function handleLangChange(e) {
    setLang(e.target.value);
    setSelected("home");
    localStorage.setItem("selectedSection", "home");
  }

  return (
    <div id="app">
      <header>
        
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <nav className={menuOpen ? "open" : ""}>
          {sections.map((sec) => (
            <button
              key={sec}
              className={selected === sec ? "active" : ""}
              onClick={() => {
                setSelected(sec);
                localStorage.setItem("selectedSection", sec);
                setMenuOpen(false); // Ferme le menu après clic
              }}
            >
              {t[sec + "Title"] || sec.toUpperCase()}
            </button>
          ))}
        </nav>

        {/* Select de langue aligné à droite */}
        <div className="lang-select">
          <select value={lang} onChange={handleLangChange}>
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="ar">AR</option>
          </select>
        </div>
      </header>

      <main>
        {/* Section Home */}
        <section id="home" className={selected === "home" ? "active" : ""}>
          <img src={contact} alt="avatar" className="avatar" />
          <div
            className="intro-title"
            dangerouslySetInnerHTML={{ __html: t.homeDescription }}
          />
          <div className="socials">
           <a href="https://github.com/Saadhalli-stack" target="_blank" rel="noreferrer">
              GitHub
            </a>           
          </div>
        </section>

        {/* Section CV */}
        <section id="cv" className={selected === "cv" ? "active" : ""}>
          <div className="content">{t.cvContent}</div>
          <div style={{ textAlign: "center", marginTop: "25px" }}>
            <a
              href={
                lang === "fr"
                  ? "/cv_fr.pdf"
                  : lang === "en"
                  ? "/cv_en.pdf"
                  : lang === "de"
                  ? "/cv_deu.pdf"
                  : "/cv_ar.pdf"
              }
              download
              className="download-cv-button"
            >
              {lang === "ar" && "تحميل السيرة الذاتية PDF"}
              {lang === "fr" && "Télécharger le CV en PDF"}
              {lang === "en" && "Download PDF Resume"}
              {lang === "de" && "PDF-Lebenslauf herunterladen"}
            </a>
          </div>
        </section>
        {/* Section Projects */}
       <section id="projects" className={selected === "projects" ? "active" : ""}>
  <h2>{t.projectsTitle}</h2>
  <div className="projects-list">
    <div className="project">
      <h3>Zohra of Africa</h3>
      <p>
        {lang === "ar" && "منصة تساهم في بناء المدارس للأطفال في القرى النائية بالمغرب."}
        {lang === "fr" &&
          "Une plateforme qui aide à construire des écoles pour les enfants dans les villages reculés du Maroc."}
        {lang === "en" &&
          "A platform helping build schools for children in remote Moroccan villages."}
        {lang === "de" &&
          "Eine Plattform, die beim Bau von Schulen für Kinder in abgelegenen marokkanischen Dörfern hilft."}
      </p>
      <a
        href="https://saadhalli-stack.github.io/zohra_association-demo-/"
        target="_blank"
        rel="noreferrer"
      >
        {lang === "ar" && "عرض النسخة التجريبية"}
        {lang === "fr" && "Voir la démo (version publique)"}
        {lang === "en" && "View the demo (public version)"}
        {lang === "de" && "Demo anzeigen (öffentliche Version)"}
      </a>
      <p style={{ fontStyle: "italic", fontSize: "0.9em", color: "#ccc" }}>
        {lang === "ar" && "الموقع الرسمي غير متاح لأسباب تتعلق بالخصوصية."}
        {lang === "fr" &&
          "Le site officiel n'est pas public pour des raisons de confidentialité."}
        {lang === "en" && "Official website is private due to confidentiality reasons."}
        {lang === "de" &&
          "Offizielle Website aus Datenschutzgründen nicht öffentlich."}
      </p>
    </div>
  </div>
</section>
{selected === "contact" && <ContactSection lang={lang} />}

      
       
      </main>
    </div>
  );
}
