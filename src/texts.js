const texts = {
  fr: {
    homeTitle: "🏠 Accueil",
    cvTitle: "📄 CV",
    projectsTitle: "💻 Projets",
    contactTitle: "📬 Contact",
    homeDescription: `<h1 class="intro-title"> Bonjour, je suis <strong>Mohamed Saad Halli</strong>, développeur web passionné. J'aime créer des sites modernes et dynamiques.</h1>`,
    cvContent: (
      <>
        <div className="section">
          <img className="avatar" src="/images/saad.png" alt="Photo de Mohamed Saad Halli" />
          <h3>🧑‍💻 Présentation</h3>
          <p>
            Je m'appelle <strong>Mohamed Saad Halli</strong>, diplômé en développement digital avec spécialisation Full-Stack. Depuis mes débuts à l'ISTA Sidi Maârouf à Casablanca, je suis passionné par la technologie et la création de solutions web modernes et efficaces.
          </p>
          <p>
            En plus de mes compétences en développement web, je me forme actuellement en autodidacte dans le domaine du <strong>Cloud Computing</strong> afin de diversifier mes compétences et répondre aux besoins d'infrastructure moderne.
          </p>
        </div>
        <div className="section">
          <h3>📇 Informations personnelles</h3>
          <ul>
            <li>📧 Email : <a href="mailto:saadhalli405@gmail.com">saadhalli405@gmail.com</a></li>
            <li>📞 Téléphone : +212 7 06 09 24 22</li>
            <li>📍 Adresse : Casablanca, Maroc</li>
          </ul>
        </div>
        <div className="section">
          <h3>🌐 Langues</h3>
          <ul>
            <li>🇲🇦 Arabe : Natif</li>
            <li>🇫🇷 Français : Courant</li>
            <li>🇬🇧 Anglais : Courant</li>
            <li>🇩🇪 Allemand : Débutant</li>
          </ul>
        </div>
        <div className="section">
          <h3>🛠️ Compétences techniques</h3>
          <ul>
            <li>🌐 HTML5 / CSS3</li>
            <li>⚛️ JavaScript (ES6+), ReactJS</li>
            <li>🐘 PHP avec Laravel</li>
            <li>🗃️ Bases de données : MySQL, MongoDB</li>
            <li>🖥️ WordPress (CMS)</li>
          </ul>
        </div>
        <div className="section">
          <h3>💡 Soft Skills</h3>
          <ul>
            <li>🤝 Esprit d'équipe</li>
            <li>🧠 Autonomie</li>
            <li>🔍 Curiosité</li>
            <li>🔄 Capacité d'adaptation</li>
          </ul>
        </div>
        <div className="section">
          <h3>🎯 Centres d'intérêt</h3>
          <ul>
            <li>✈️ Voyage</li>
            <li>🎵 Musique</li>
            <li>🏋️ Sport</li>
          </ul>
        </div>
      </>
    ),
  },

  en: {
    homeTitle: "🏠 Home",
    cvTitle: "📄 Resume",
    projectsTitle: "💻 Projects",
    contactTitle: "📬 Contact",
    homeDescription: `<h1 class="intro-title"> Hello, I am <strong>Mohamed Saad Halli</strong>, a passionate web developer. I love creating modern and dynamic websites.</h1>`,
    cvContent: (
      <>
        <div className="section">
          <img className="avatar" src="/saad.png" alt="Photo of Mohamed Saad Halli" />
          <h3>🧑‍💻 Introduction</h3>
          <p>
            My name is <strong>Mohamed Saad Halli</strong>, a graduate in digital development with a specialization in Full-Stack. Since my early studies at ISTA Sidi Maârouf in Casablanca, I have been passionate about technology and creating modern and efficient web solutions.
          </p>
          <p>
            In addition to my web development skills, I am currently self-learning in the field of <strong>Cloud Computing</strong> to broaden my skills and meet modern infrastructure needs.
          </p>
        </div>
        <div className="section">
          <h3>📇 Personal Information</h3>
          <ul>
            <li>📧 Email: <a href="mailto:saadhalli405@gmail.com">saadhalli405@gmail.com</a></li>
            <li>📞 Phone: +212 7 06 09 24 22</li>
            <li>📍 Address: Casablanca, Morocco</li>
          </ul>
        </div>
        <div className="section">
          <h3>🌐 Languages</h3>
          <ul>
            <li>🇲🇦 Arabic: Native</li>
            <li>🇫🇷 French: Fluent</li>
            <li>🇬🇧 English: Fluent</li>
            <li>🇩🇪 German: Beginner</li>
          </ul>
        </div>
        <div className="section">
          <h3>🛠️ Technical Skills</h3>
          <ul>
            <li>🌐 HTML5 / CSS3</li>
            <li>⚛️ JavaScript (ES6+), ReactJS</li>
            <li>🐘 PHP with Laravel</li>
            <li>🗃️ Databases: MySQL, MongoDB</li>
            <li>🖥️ WordPress (CMS)</li>
          </ul>
        </div>
        <div className="section">
          <h3>💡 Soft Skills</h3>
          <ul>
            <li>🤝 Team spirit</li>
            <li>🧠 Autonomy</li>
            <li>🔍 Curiosity</li>
            <li>🔄 Adaptability</li>
          </ul>
        </div>
        <div className="section">
          <h3>🎯 Interests</h3>
          <ul>
            <li>✈️ Travel</li>
            <li>🎵 Music</li>
            <li>🏋️ Sports</li>
          </ul>
        </div>
      </>
    ),
  },

  de: {
    homeTitle: "🏠 Startseite",
    cvTitle: "📄 Lebenslauf",
    projectsTitle: "💻 Projekte",
    contactTitle: "📬 Kontakt",
    homeDescription: `<h1 class="intro-title"> Hallo, ich bin <strong>Mohamed Saad Halli</strong>, ein leidenschaftlicher Webentwickler. Ich liebe es, moderne und dynamische Websites zu erstellen.</h1>`,
    cvContent: (
      <>
        <div className="section">
          <img className="avatar" src="/saad.png" alt="Foto von Mohamed Saad Halli" />
          <h3>🧑‍💻 Vorstellung</h3>
          <p>
            Ich heiße <strong>Mohamed Saad Halli</strong> und habe einen Abschluss in digitaler Entwicklung mit Spezialisierung auf Full-Stack. Seit meinem Studium am ISTA Sidi Maârouf in Casablanca bin ich begeistert von Technologie und der Entwicklung moderner, effizienter Weblösungen.
          </p>
          <p>
            Zusätzlich zu meinen Fähigkeiten in der Webentwicklung bilde ich mich derzeit autodidaktisch im Bereich <strong>Cloud Computing</strong> weiter, um meine Kompetenzen zu erweitern und den Anforderungen moderner Infrastrukturen gerecht zu werden.
          </p>
        </div>
        <div className="section">
          <h3>📇 Persönliche Informationen</h3>
          <ul>
            <li>📧 E-Mail: <a href="mailto:saadhalli405@gmail.com">saadhalli405@gmail.com</a></li>
            <li>📞 Telefon: +212 7 06 09 24 22</li>
            <li>📍 Adresse: Casablanca, Marokko</li>
          </ul>
        </div>
        <div className="section">
          <h3>🌐 Sprachen</h3>
          <ul>
            <li>🇲🇦 Arabisch: Muttersprache</li>
            <li>🇫🇷 Französisch: Fließend</li>
            <li>🇬🇧 Englisch: Fließend</li>
            <li>🇩🇪 Deutsch: Anfänger</li>
          </ul>
        </div>
        <div className="section">
          <h3>🛠️ Technische Fähigkeiten</h3>
          <ul>
            <li>🌐 HTML5 / CSS3</li>
            <li>⚛️ JavaScript (ES6+), ReactJS</li>
            <li>🐘 PHP mit Laravel</li>
            <li>🗃️ Datenbanken: MySQL, MongoDB</li>
            <li>🖥️ WordPress (CMS)</li>
          </ul>
        </div>
        <div className="section">
          <h3>💡 Soziale Kompetenzen</h3>
          <ul>
            <li>🤝 Teamgeist</li>
            <li>🧠 Eigenständigkeit</li>
            <li>🔍 Neugierde</li>
            <li>🔄 Anpassungsfähigkeit</li>
          </ul>
        </div>
        <div className="section">
          <h3>🎯 Interessen</h3>
          <ul>
            <li>✈️ Reisen</li>
            <li>🎵 Musik</li>
            <li>🏋️ Sport</li>
          </ul>
        </div>
      </>
    ),
  },

  ar: {
    homeTitle: "🏠 الرئيسية",
    cvTitle: "📄 السيرة الذاتية",
    projectsTitle: "💻 المشاريع",
    contactTitle: "📬 تواصل",
    homeDescription: `<h1 class="intro-title"> مرحبًا، أنا <strong>محمد سعد هلي</strong>، مطور ويب شغوف. أحب إنشاء مواقع حديثة وديناميكية.</h1>`,
    cvContent: (
      <div dir="rtl" style={{ textAlign: "right" }}>
        <div className="section">
          <img className="avatar" src="/saad.png" alt="صورة محمد سعد هلي" />
          <h3>🧑‍💻 مقدمة</h3>
          <p>
            أنا <strong>محمد سعد هلي</strong>، حاصل على دبلوم في التطوير الرقمي بتخصص Full-Stack. منذ دراستي في ISTA سيدي معروف بالدار البيضاء، وأنا شغوف بالتكنولوجيا وإنشاء حلول ويب حديثة وفعالة.
          </p>
          <p>
            بالإضافة إلى مهاراتي في تطوير الويب، أتعلم حاليًا بشكل ذاتي في مجال <strong>الحوسبة السحابية</strong> لتوسيع معارفي ومواكبة احتياجات البنية التحتية الحديثة.
          </p>
        </div>
        <div className="section">
          <h3>📇 المعلومات الشخصية</h3>
          <ul>
            <li>📧 البريد الإلكتروني: <a href="mailto:saadhalli405@gmail.com">saadhalli405@gmail.com</a></li>
            <li>📞 الهاتف: +212 7 06 09 24 22</li>
            <li>📍 العنوان: الدار البيضاء، المغرب</li>
          </ul>
        </div>
        <div className="section">
          <h3>🌐 اللغات</h3>
          <ul>
            <li>🇲🇦 العربية: اللغة الأم</li>
            <li>🇫🇷 الفرنسية: بطلاقة</li>
            <li>🇬🇧 الإنجليزية: بطلاقة</li>
            <li>🇩🇪 الألمانية: مبتدئ</li>
          </ul>
        </div>
        <div className="section">
          <h3>🛠️ المهارات التقنية</h3>
          <ul>
            <li>🌐 HTML5 / CSS3</li>
            <li>⚛️ JavaScript (ES6+), ReactJS</li>
            <li>🐘 PHP مع Laravel</li>
            <li>🗃️ قواعد البيانات: MySQL, MongoDB</li>
            <li>🖥️ WordPress (نظام إدارة المحتوى)</li>
          </ul>
        </div>
        <div className="section">
          <h3>💡 المهارات الشخصية</h3>
          <ul>
            <li>🤝 روح العمل الجماعي</li>
            <li>🧠 الاستقلالية</li>
            <li>🔍 حب الاستطلاع</li>
            <li>🔄 القدرة على التكيف</li>
          </ul>
        </div>
        <div className="section">
          <h3>🎯 الاهتمامات</h3>
          <ul>
            <li>✈️ السفر</li>
            <li>🎵 الموسيقى</li>
            <li>🏋️ الرياضة</li>
          </ul>
        </div>
      </div>
    ),
  },
};

export default texts;
