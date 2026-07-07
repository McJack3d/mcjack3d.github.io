(function () {
  var LANG_KEY = 'site_lang';

  var T = {
    en: {
      /* --- Navigation --- */
      'nav.about': 'About',
      'nav.education': 'Education',
      'nav.experience': 'Experience',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.travel': 'Travel',
      'nav.contact': 'Contact',

      /* --- Hero (index) --- */
      'hero.role': 'Data and AI specialist',
      'hero.subtitle': 'Data & AI Professional — Beauty Tech & Finance background',
      'hero.desc': 'I turn financial and operational data into reliable insight and automation. Skilled in Python, SQL, Dataiku, QlikSense, BI tools (Tableau & Power BI), and statistical analysis. Professional experience in banking, asset management, and business development.',
      'hero.btn_projects': 'See projects',
      'hero.btn_contact': 'Get in touch',

      /* --- About --- */
      'about.title': 'Professional Summary',
      'about.body': 'Data & AI Professional with a proven track record in building scalable data products across the Beauty Tech and Financial sectors. Experienced in engineering robust data pipelines, enforcing strict data quality standards, and driving statistical analysis. Skilled in Python, SQL, and BI tools, with a strong passion for transforming complex data into actionable business insights.',

      /* --- Education --- */
      'edu.title': 'Education',
      'edu.edhec.period': 'Since 2025 — Lille, France',
      'edu.edhec.desc': 'Ranked #4 Business School in France. Focus on applied data science and AI for business.',
      'edu.edhec.core': '<strong>Core:</strong> Python for data analysis; statistical modeling &amp; inference; data mining &amp; machine learning (clustering/PCA, classification, ensembles), model validation &amp; interpretability.',
      'edu.edhec.advanced': '<strong>Advanced:</strong> Deep learning (Keras), NLP (topic modeling, embeddings, sentiment + intro to LLMs), time series forecasting (ARIMA/SARIMA + ML), scalable data management &amp; analytics engineering (SQL/cloud pipelines, production considerations).',
      'edu.edhec.applied': '<strong>Applied analytics:</strong> Web analytics stack (GA4/GTM, BigQuery SQL, Looker Studio) and business projects translating data into decision-ready dashboards and recommendations.',
      'edu.essca.period': '2022 — 2025 — Paris, France',
      'edu.essca.desc': 'Studied international management with coursework in finance and analytics.',
      'edu.essca.business': '<strong>Business, strategy &amp; project delivery:</strong> project management, strategy, organisational behaviour, cross-cultural management, business simulation.',
      'edu.essca.marketing': '<strong>Marketing, negotiation &amp; communication:</strong> marketing project, negotiation, market research, multimedia communication (campaigns &amp; stakeholder comms).',
      'edu.essca.finance': '<strong>Finance, economics &amp; governance:</strong> finance for managers, economics, political economy, international trade, intro to law &amp; international relations.',

      /* --- Experience --- */
      'exp.title': 'Professional Experience',
      'exp.army.period': 'Since December 2022 · Fontevraud L\'Abbaye, France',
      'exp.army.role': 'Reserve Soldier',
      'exp.army.li1': 'Reserve soldier in the 6th squadron of a cavalry regiment specialized in NRBC.',
      'exp.army.li2': 'Trained and equipped to operate in and respond to Nuclear, Radiological, Biological, and Chemical (NRBC) threat environments.',
      'exp.army.li3': 'Experience in high-discipline operational settings, teamwork, and readiness for time-constrained missions.',
      'exp.loreal.period': 'July – December 2026 · Clichy, France',
      'exp.loreal.role': 'Data Intern – Global Commerce Data Domain',
      'exp.loreal.li1': '<strong>Global B2B Data Visualization:</strong> Developing a webapp dashboard ("Find Your Customer") to bring fragmented B2B and sellout data directly into the hands of business teams across divisions.',
      'exp.loreal.li2': '<strong>Data Harmonization &amp; Quality:</strong> Structuring massive volumes of complex Master Data (Customer, Point of Sale, Sales Force Structure) into scalable, business-ready assets, while ensuring rigorous data quality control.',
      'exp.loreal.li3': '<strong>Cross-Functional Collaboration:</strong> Working daily with Data Product Owners and Data Engineers on the Global Commerce Transformation strategy to optimize data workflows and product delivery.',
      'exp.loreal.manager': 'Manager: Mr. Luc Bochet, Lead Data Product Owner',
      'exp.lbp.period': 'January – July 2025 · Paris, France',
      'exp.lbp.role': 'Data Analyst Intern',
      'exp.lbp.li1': '<strong>Data flow governance:</strong> supervised and optimized payment flow processes with focus on SEPA/DSP2/IP compliance.',
      'exp.lbp.li2': '<strong>Business needs analysis &amp; implementation:</strong> partnered with stakeholders to understand needs, analyze processes, and deliver tailored reporting automation and KPI tracking improvements.',
      'exp.lbp.li3': '<strong>Automation &amp; reporting:</strong> built dashboards and monitoring tools (QlikSense, Dataiku, SQL, Python) and automated recurring reporting to reduce manual workload and improve real-time visibility.',
      'exp.lbp.li4': '<strong>XML file mapping:</strong> mapped and structured XML files to improve traceability, usability, and downstream integration.',
      'exp.lbp.li5': '<strong>Data flow optimization:</strong> identified anomalies, improved processes, and supported operational reliability for payment workflows.',
      'exp.lbp.li6': '<strong>Data quality management:</strong> implemented validation rules and automated error-detection mechanisms to increase accuracy and consistency of financial data.',
      'exp.lbp.li7': '<strong>Process improvement:</strong> identified bottlenecks in data workflows and delivered optimizations improving processing time and operational efficiency.',
      'exp.lbp.manager': 'Manager: Mr. Hervé Harvoire, Payment Hub Manager',
      'exp.sienna.period': 'January – July 2024 · Luxembourg',
      'exp.sienna.role': 'Account Payables Trainee',
      'exp.sienna.li1': '<strong>Treasury management &amp; reporting:</strong> executed daily treasury tasks, reconciled bank statements, and produced liquidity/cash reports; contributed to cash projections and month/year-end processes.',
      'exp.sienna.li2': '<strong>Management reporting &amp; analysis:</strong> supported reporting and performed financial analysis to help monitor portfolios and operational performance.',
      'exp.sienna.li3': '<strong>Accounting &amp; invoicing:</strong> processed and verified supplier invoices; managed sales invoices and maintained accounts payable/receivable; resolved discrepancies with vendors.',
      'exp.sienna.li4': '<strong>Regulatory compliance:</strong> supported VAT and Income Tax preparation and ensured adherence to internal policies and accounting standards.',
      'exp.sienna.li5': '<strong>Documentation &amp; payments:</strong> maintained audit-ready records and supported payment processing (checks, ACH, wire transfers); reconciled employee expense reports.',
      'exp.sienna.manager': 'Manager: Ms. Aija Livca, Account Payable Manager',
      'exp.easy.period': 'April – July 2023 · Issy-les-Moulineaux, France',
      'exp.easy.role': 'Support to the Business Development Manager',
      'exp.easy.li1': 'Conducted market and sales performance analysis to identify trends and opportunities.',
      'exp.easy.li2': 'Coordinated incentive programs, email campaigns, and digital advertising to support client engagement.',
      'exp.easy.li3': 'Supported commercial activity by preparing quotations and assisting with business offers.',

      /* --- Skills --- */
      'skills.title': 'Skills',
      'skills.programming': 'Programming & Data',
      'skills.analytics': 'Analytics & BI Platforms',
      'skills.methods': 'Methods & Soft Skills',
      'skills.languages': 'Languages',
      'skills.lang.fr': 'Native',
      'skills.lang.en_level': 'Advanced (C1)',
      'skills.lang.es': 'Intermediate (B2)',
      'skills.lang.ru': 'Elementary (A2)',
      'skills.certs': 'Certifications',
      'skills.interests': 'Interests',
      'skills.interest.finance': 'Finance & investing',
      'skills.interest.calisthenics': 'Calisthenics',
      'skills.interest.running': 'Running',
      'skills.interest.travel': 'Travelling',
      'skills.interest.motorsport': 'Motorsports',
      'skills.interest.games': 'Video games',

      /* --- Projects --- */
      'projects.title': 'Projects & Portfolio',
      'projects.thesis.desc': 'Does FinBERT-derived news sentiment improve short-term return prediction for small-cap nuclear equities? This MSc thesis builds a fully reproducible five-phase pipeline — feasibility audit, data engineering (3,992 ticker-days, 25,885 news articles covering SMR, LEU, NNE), FinBERT sentiment scoring, LSTM training with chronological hold-out, and SHAP explainability. Key finding: sentiment augmentation yields a statistically significant average MAE improvement of <strong>+5.18%</strong> at the 5-day horizon; no aggregate benefit at the 1-day horizon. Hypothesis testing via Diebold-Mariano tests.',
      'projects.thesis.btn_dl': 'Download Thesis (PDF)',
      'projects.thesis.btn_code': 'Source Code',
      'projects.tradbot.title': '🤖 TRAD_BOT — Algorithmic Trading Suite (Binance + IBKR)',
      'projects.tradbot.desc': 'Two independent algorithmic trading bots in one repository. The Binance bot runs a delta-neutral cash-and-carry strategy (long spot + short perpetual) to harvest funding every 8 hours, with an event-driven backtester, walk-forward analysis, real-time WebSocket market data, risk kill-switches and Telegram/email monitoring. The IBKR bot trades US equities through a two-stage sentiment funnel (FinBERT → LLM gatekeeper) with a dollar-neutral portfolio overlay. Multiple execution modes: backtest, paper, dry-run and live.',
      'projects.tradbot.btn_view': 'View Project',
      'projects.tradbot.btn_code': 'Source Code',
      'projects.future.title': '🚀 More projects coming soon 🏗️',
      'projects.future.desc': 'This space is reserved for upcoming work in data science, quantitative finance and AI. Stay tuned — new projects are on the way.',
      'projects.future.btn_view': 'View Project',
      'projects.future.btn_code': 'Source Code',
      'projects.github': 'View Projects on GitHub',

      /* --- Contact --- */
      'contact.title': 'Contact',
      'contact.email': 'Email',
      'contact.phone': 'Phone',
      'contact.linkedin': 'LinkedIn',
      'contact.github_label': 'GitHub',
      'contact.open': 'Open to opportunities in data science, AI strategy, and data governance roles. Feel free to reach out!',
      'contact.cv': 'Download CV',
      'contact.banner_title': 'Let\'s work together',
      'contact.banner_body': 'Send me a message — I usually reply within a day.',
      'contact.btn_email': 'Email me',

      /* --- Footer --- */
      'footer.rights': 'All rights reserved.',

      /* --- Travel hero --- */
      'travel.hero.title': 'Travel Blog',
      'travel.hero.subtitle': 'Notes, photographs and impressions from the road',
      'travel.hero.desc': 'A personal log of places that have shaped my perspective — cities, mountains, and quiet streets, told through short stories and field notes.',
      'travel.hero.btn_browse': 'Browse Trips',
      'travel.hero.btn_globe': 'Open Globe',

      /* --- Travel intro --- */
      'travel.intro.title': 'About this blog',
      'travel.intro.body': 'Beyond data and finance, travelling has always been the most reliable way I know to learn faster. This page collects short pieces from recent trips — what I saw, what surprised me, and the little practical things worth remembering. Posts are added gradually whenever a destination is worth writing about.',

      /* --- Travel destinations --- */
      'travel.dest.title': 'Destinations',
      'travel.dest.subtitle': 'Click any trip to fly there on the globe below.',
      'travel.dest.recent': 'Recent trips',
      'travel.dest.by_continent': 'More trips by continent',
      'travel.dest.wishlist': 'Wishlist',

      /* --- Travel globe HUD --- */
      'travel.globe.idle': 'Drag to spin · Click a destination above to take off',
      'travel.globe.plotting': 'Plotting course to ',
      'travel.globe.landing': 'Landing in ',
      'travel.globe.soon_suffix': ' — story coming soon',

      /* --- Travel card dynamic text --- */
      'travel.card.soon': 'Soon',
      'travel.card.coming_soon': 'Coming soon',
      'travel.card.trip': 'trip',
      'travel.card.trips': 'trips',

      /* --- Travel CTA --- */
      'travel.cta.title': 'Want to talk travel?',
      'travel.cta.body': 'Recommendations, route ideas, or just sharing photos — happy to chat.',
      'travel.cta.btn_email': 'Send a message',
      'travel.cta.btn_back': 'Back to portfolio'
    },

    fr: {
      /* --- Navigation --- */
      'nav.about': 'À propos',
      'nav.education': 'Formation',
      'nav.experience': 'Expérience',
      'nav.skills': 'Compétences',
      'nav.projects': 'Projets',
      'nav.travel': 'Voyages',
      'nav.contact': 'Contact',

      /* --- Hero (index) --- */
      'hero.role': 'Spécialiste Data et IA',
      'hero.subtitle': 'Data & AI Professional — parcours Data, Beauty Tech & Finance',
      'hero.desc': 'Je transforme les données financières et opérationnelles en insights fiables et en automatisation. Compétences en Python, SQL, Dataiku, QlikSense, outils BI (Tableau & Power BI) et analyse statistique. Expérience professionnelle dans la banque, la gestion d\'actifs et le développement commercial.',
      'hero.btn_projects': 'Voir les projets',
      'hero.btn_contact': 'Prendre contact',

      /* --- About --- */
      'about.title': 'Résumé professionnel',
      'about.body': 'Data & AI Professional démontrant une solide expérience dans la création de produits data scalables dans les secteurs de la Beauty Tech et de la Finance. Expérimenté dans la conception de pipelines de données robustes, le maintien de standards stricts de qualité des données et l\'analyse statistique. Maîtrisant Python, SQL et les outils de BI, avec une forte volonté de transformer des données complexes en insights actionnables.',

      /* --- Education --- */
      'edu.title': 'Formation',
      'edu.edhec.period': 'Depuis 2025 — Lille, France',
      'edu.edhec.desc': 'Classée #4 parmi les grandes écoles de commerce en France. Spécialisation en data science appliquée et IA pour les entreprises.',
      'edu.edhec.core': '<strong>Tronc commun :</strong> Python pour l\'analyse de données ; modélisation statistique et inférence ; data mining et machine learning (clustering/ACP, classification, ensembles), validation de modèles et interprétabilité.',
      'edu.edhec.advanced': '<strong>Avancé :</strong> Deep learning (Keras), NLP (modélisation thématique, embeddings, sentiment + intro aux LLMs), prévision de séries temporelles (ARIMA/SARIMA + ML), gestion des données à grande échelle &amp; analytics engineering (SQL/pipelines cloud, aspects de mise en production).',
      'edu.edhec.applied': '<strong>Analytics appliqués :</strong> Stack web analytics (GA4/GTM, BigQuery SQL, Looker Studio) et projets business traduisant les données en tableaux de bord et recommandations décisionnels.',
      'edu.essca.period': '2022 — 2025 — Paris, France',
      'edu.essca.desc': 'Études en management international avec des cours de finance et d\'analyse.',
      'edu.essca.business': '<strong>Business, stratégie &amp; gestion de projet :</strong> gestion de projet, stratégie, comportement organisationnel, management interculturel, simulation d\'entreprise.',
      'edu.essca.marketing': '<strong>Marketing, négociation &amp; communication :</strong> projet marketing, négociation, étude de marché, communication multimédia (campagnes &amp; communication parties prenantes).',
      'edu.essca.finance': '<strong>Finance, économie &amp; gouvernance :</strong> finance pour managers, économie, économie politique, commerce international, introduction au droit &amp; relations internationales.',

      /* --- Experience --- */
      'exp.title': 'Expérience professionnelle',
      'exp.army.period': 'Depuis décembre 2022 · Fontevraud L\'Abbaye, France',
      'exp.army.role': 'Soldat de réserve',
      'exp.army.li1': 'Soldat de réserve au 6e escadron d\'un régiment de cavalerie spécialisé NRBC.',
      'exp.army.li2': 'Formé et équipé pour opérer dans des environnements de menace Nucléaire, Radiologique, Biologique et Chimique (NRBC).',
      'exp.army.li3': 'Expérience dans des environnements opérationnels à haute discipline, travail en équipe et réactivité pour des missions sous contrainte de temps.',
      'exp.loreal.period': 'Juillet – Décembre 2026 · Clichy, France',
      'exp.loreal.role': 'Stagiaire Data – Global Commerce Data Domain',
      'exp.loreal.li1': '<strong>Visualisation de données B2B :</strong> développement d\\'un tableau de bord web ("Find Your Customer") pour mettre les données B2B et de sellout à la disposition directe des équipes métier.',
      'exp.loreal.li2': '<strong>Harmonisation &amp; Qualité des données :</strong> structuration de volumes massifs de Master Data (Client, Point de Vente, Structure de la Force de Vente) en actifs scalables et exploitables, avec un contrôle qualité rigoureux.',
      'exp.loreal.li3': '<strong>Collaboration inter-équipes :</strong> travail quotidien avec les Data Product Owners et les Data Engineers sur la stratégie Global Commerce Transformation pour optimiser les flux de données.',
      'exp.loreal.manager': 'Manager : M. Luc Bochet, Lead Data Product Owner',
      'exp.lbp.period': 'Janvier – Juillet 2025 · Paris, France',
      'exp.lbp.role': 'Stagiaire Data Analyst',
      'exp.lbp.li1': '<strong>Gouvernance des flux de données :</strong> supervision et optimisation des processus de flux de paiements avec un focus sur la conformité SEPA/DSP2/IP.',
      'exp.lbp.li2': '<strong>Analyse des besoins métier &amp; mise en œuvre :</strong> collaboration avec les parties prenantes pour comprendre les besoins, analyser les processus et livrer des améliorations d\'automatisation de reporting et de suivi de KPIs sur mesure.',
      'exp.lbp.li3': '<strong>Automatisation &amp; reporting :</strong> création de tableaux de bord et d\'outils de monitoring (QlikSense, Dataiku, SQL, Python) et automatisation du reporting récurrent pour réduire la charge manuelle et améliorer la visibilité en temps réel.',
      'exp.lbp.li4': '<strong>Cartographie de fichiers XML :</strong> cartographie et structuration de fichiers XML pour améliorer la traçabilité, l\'utilisabilité et l\'intégration en aval.',
      'exp.lbp.li5': '<strong>Optimisation des flux de données :</strong> identification des anomalies, amélioration des processus et soutien à la fiabilité opérationnelle des flux de paiements.',
      'exp.lbp.li6': '<strong>Gestion de la qualité des données :</strong> mise en place de règles de validation et de mécanismes automatisés de détection d\'erreurs pour améliorer la précision et la cohérence des données financières.',
      'exp.lbp.li7': '<strong>Amélioration des processus :</strong> identification des goulots d\'étranglement dans les flux de données et livraison d\'optimisations améliorant les temps de traitement et l\'efficacité opérationnelle.',
      'exp.lbp.manager': 'Manager : M. Hervé Harvoire, Responsable Payment Hub',
      'exp.sienna.period': 'Janvier – Juillet 2024 · Luxembourg',
      'exp.sienna.role': 'Stagiaire Comptabilité Fournisseurs',
      'exp.sienna.li1': '<strong>Gestion de trésorerie &amp; reporting :</strong> exécution des tâches de trésorerie quotidiennes, rapprochement des relevés bancaires et production de rapports de liquidité/trésorerie ; contribution aux projections de trésorerie et aux clôtures mensuelles/annuelles.',
      'exp.sienna.li2': '<strong>Reporting de gestion &amp; analyse :</strong> soutien au reporting et réalisation d\'analyses financières pour le suivi des portefeuilles et de la performance opérationnelle.',
      'exp.sienna.li3': '<strong>Comptabilité &amp; facturation :</strong> traitement et vérification des factures fournisseurs ; gestion des factures de vente et tenue des comptes fournisseurs/clients ; résolution des litiges avec les prestataires.',
      'exp.sienna.li4': '<strong>Conformité réglementaire :</strong> soutien à la préparation de la TVA et de l\'impôt sur le revenu, et garantie du respect des politiques internes et des normes comptables.',
      'exp.sienna.li5': '<strong>Documentation &amp; paiements :</strong> tenue de registres prêts pour audit et soutien au traitement des paiements (chèques, virements) ; rapprochement des notes de frais des employés.',
      'exp.sienna.manager': 'Manager : Mme Aija Livca, Responsable Comptabilité Fournisseurs',
      'exp.easy.period': 'Avril – Juillet 2023 · Issy-les-Moulineaux, France',
      'exp.easy.role': 'Support au Responsable Développement Commercial',
      'exp.easy.li1': 'Réalisation d\'analyses de marché et de performance commerciale pour identifier les tendances et opportunités.',
      'exp.easy.li2': 'Coordination de programmes d\'incentives, de campagnes email et de publicité digitale pour soutenir l\'engagement client.',
      'exp.easy.li3': 'Soutien à l\'activité commerciale par la préparation de devis et l\'aide à la rédaction d\'offres commerciales.',

      /* --- Skills --- */
      'skills.title': 'Compétences',
      'skills.programming': 'Programmation & Data',
      'skills.analytics': 'Plateformes Analytics & BI',
      'skills.methods': 'Méthodes & Savoir-être',
      'skills.languages': 'Langues',
      'skills.lang.fr': 'Natif',
      'skills.lang.en_level': 'Avancé (C1)',
      'skills.lang.es': 'Intermédiaire (B2)',
      'skills.lang.ru': 'Élémentaire (A2)',
      'skills.certs': 'Certifications',
      'skills.interests': 'Centres d\'intérêt',
      'skills.interest.finance': 'Finance & investissement',
      'skills.interest.calisthenics': 'Callisthénie',
      'skills.interest.running': 'Course à pied',
      'skills.interest.travel': 'Voyages',
      'skills.interest.motorsport': 'Sports mécaniques',
      'skills.interest.games': 'Jeux vidéo',

      /* --- Projects --- */
      'projects.title': 'Projets & Portfolio',
      'projects.thesis.desc': 'Le sentiment issu des actualités via FinBERT améliore-t-il la prédiction des rendements à court terme pour les petites capitalisations nucléaires ? Cette thèse MSc construit un pipeline reproductible en cinq phases — audit de faisabilité, ingénierie des données (3 992 ticker-jours, 25 885 articles couvrant SMR, LEU, NNE), scoring de sentiment FinBERT, entraînement LSTM avec validation chronologique, et explicabilité SHAP. Résultat clé : l\'augmentation par sentiment améliore de manière statistiquement significative la MAE moyenne de <strong>+5,18 %</strong> à l\'horizon 5 jours ; aucun bénéfice agrégé à l\'horizon 1 jour. Tests d\'hypothèses via les tests de Diebold-Mariano.',
      'projects.thesis.btn_dl': 'Télécharger la thèse (PDF)',
      'projects.thesis.btn_code': 'Code source',
      'projects.tradbot.title': '🤖 TRAD_BOT — Suite de trading algorithmique (Binance + IBKR)',
      'projects.tradbot.desc': 'Deux bots de trading algorithmique indépendants dans un même dépôt. Le bot Binance applique une stratégie delta-neutre cash-and-carry (long spot + short perpétuel) pour capter le funding toutes les 8 heures, avec backtester événementiel, analyse walk-forward, données de marché en temps réel via WebSocket, coupe-circuits de risque et monitoring Telegram/email. Le bot IBKR trade des actions américaines via un entonnoir de sentiment à deux étages (FinBERT → filtre LLM) avec une couverture de portefeuille dollar-neutre. Plusieurs modes d’exécution : backtest, paper, dry-run et live.',
      'projects.tradbot.btn_view': 'Voir le projet',
      'projects.tradbot.btn_code': 'Code source',
      'projects.future.title': '🚀 D’autres projets bientôt 🏗️',
      'projects.future.desc': 'Cet espace est réservé aux projets à venir en data science, finance quantitative et IA. Restez à l’écoute — de nouveaux projets arrivent bientôt.',
      'projects.future.btn_view': 'Voir le projet',
      'projects.future.btn_code': 'Code source',
      'projects.github': 'Voir les projets sur GitHub',

      /* --- Contact --- */
      'contact.title': 'Contact',
      'contact.email': 'Email',
      'contact.phone': 'Téléphone',
      'contact.linkedin': 'LinkedIn',
      'contact.github_label': 'GitHub',
      'contact.open': 'Disponible pour des opportunités en data science, stratégie IA et gouvernance des données. N\'hésitez pas à me contacter !',
      'contact.cv': 'Télécharger le CV',
      'contact.banner_title': 'Travaillons ensemble',
      'contact.banner_body': 'Envoyez-moi un message — je réponds généralement sous 24 h.',
      'contact.btn_email': 'M\'écrire',

      /* --- Footer --- */
      'footer.rights': 'Tous droits réservés.',

      /* --- Travel hero --- */
      'travel.hero.title': 'Blog Voyage',
      'travel.hero.subtitle': 'Notes, photos et impressions du voyage',
      'travel.hero.desc': 'Un journal personnel des lieux qui ont façonné ma perspective — villes, montagnes et ruelles tranquilles, racontés à travers de courts récits et des notes de terrain.',
      'travel.hero.btn_browse': 'Explorer les destinations',
      'travel.hero.btn_globe': 'Ouvrir le globe',

      /* --- Travel intro --- */
      'travel.intro.title': 'À propos de ce blog',
      'travel.intro.body': 'Au-delà des données et de la finance, voyager a toujours été pour moi le moyen le plus fiable d\'apprendre plus vite. Cette page rassemble de courts textes issus de voyages récents — ce que j\'ai vu, ce qui m\'a surpris, et les petites choses pratiques qui méritent d\'être retenues. Les articles sont ajoutés progressivement dès qu\'une destination mérite d\'être racontée.',

      /* --- Travel destinations --- */
      'travel.dest.title': 'Destinations',
      'travel.dest.subtitle': 'Cliquez sur un voyage pour le visualiser sur le globe ci-dessous.',
      'travel.dest.recent': 'Voyages récents',
      'travel.dest.by_continent': 'Plus de voyages par continent',
      'travel.dest.wishlist': 'Liste de souhaits',

      /* --- Travel globe HUD --- */
      'travel.globe.idle': 'Faites glisser pour tourner · Cliquez sur une destination pour décoller',
      'travel.globe.plotting': 'Calcul du trajet vers ',
      'travel.globe.landing': 'Atterrissage à ',
      'travel.globe.soon_suffix': ' — récit à venir',

      /* --- Travel card dynamic text --- */
      'travel.card.soon': 'Bientôt',
      'travel.card.coming_soon': 'Bientôt disponible',
      'travel.card.trip': 'voyage',
      'travel.card.trips': 'voyages',

      /* --- Travel CTA --- */
      'travel.cta.title': 'Envie de parler voyages ?',
      'travel.cta.body': 'Recommandations, idées d\'itinéraires ou simple échange de photos — avec plaisir.',
      'travel.cta.btn_email': 'Envoyer un message',
      'travel.cta.btn_back': 'Retour au portfolio'
    }
  };

  function tKey(key, lang) {
    lang = lang || document.documentElement.lang || 'en';
    return (T[lang] && T[lang][key] !== undefined ? T[lang][key] : (T['en'][key] || key));
  }

  function applyLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = tKey(el.getAttribute('data-i18n'), lang);
      if (val !== undefined) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = tKey(el.getAttribute('data-i18n-html'), lang);
      if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll('.lang-opt').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  function setLang(lang) {
    if (lang !== 'en' && lang !== 'fr') lang = 'en'; // ro retired — saved prefs fall back
    var effective = lang;
    document.documentElement.lang = effective;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    applyLang(effective);
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: effective } }));
  }

  function getSavedLang() {
    try { return localStorage.getItem(LANG_KEY) || 'en'; } catch (e) { return 'en'; }
  }

  window.T = T;
  window.tKey = tKey;
  window.setLang = setLang;
  window.currentLang = function () { return document.documentElement.lang || 'en'; };

  document.addEventListener('DOMContentLoaded', function () {
    setLang(getSavedLang());
  });
})();
