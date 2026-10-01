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
      'nav.skip': 'Skip to content',
      'nav.menu': 'Menu',
      'nav.cmd': 'Open command menu',

      /* --- Hero (index) --- */
      'hero.now': 'Now — Data Analytics Engineer at L\'Oréal Beauty Tech',
      'hero.lead': 'I turn complex data into',
      'hero.rotate': 'products people actually use|pipelines teams can trust|models that explain themselves|decisions backed by evidence',
      'hero.rot_sr': 'I turn complex data into products people use, pipelines teams can trust, models that explain themselves and decisions backed by evidence.',
      'hero.desc': 'Data & AI professional across Beauty Tech and Finance — from master data and data contracts at L\'Oréal to payment data flows at La Banque Postale and FinBERT-powered return forecasting in my MSc thesis.',
      'hero.btn_projects': 'Explore my work',
      'hero.scroll': 'Scroll',

      /* --- About --- */
      'about.title': 'Professional Summary',
      'about.body': 'Data & AI Professional with a proven track record in building scalable data products across the Beauty Tech and Financial sectors. Experienced in engineering robust data pipelines, enforcing strict data quality standards, and driving statistical analysis. Skilled in Python, SQL, and BI tools, with a strong passion for transforming complex data into actionable business insights.',

      'about.headline': 'From raw data to products, pipelines and decisions.',
      'about.based': 'Based in Paris, France — mobile and open to relocation',
      'about.now_label': 'Currently',
      'about.now_body': 'Data Analytics Engineer in the Global Commerce Data Domain — built <strong>“Find Your Customer”</strong>, a React app on GCP, and formalising data contracts for priority Commerce data flows.',
      'about.stat.customers': 'customers searchable in “Find Your Customer”, the web app I designed — 100+ daily active users',
      'about.stat.mae': 'MAE improvement at the 5-day horizon, statistically significant in my MSc thesis',
      'about.stat.certs': 'certifications — IBM, Anthropic, Bloomberg & SAFe',
      'about.stat.langs': 'languages — French, English, Spanish, Russian, Romanian',
      'about.beyond_label': 'Beyond work',
      'about.travel_title': 'Travel blog',
      'about.travel_body': 'Stories, photos and maps — 1 destination on 1 continent so far, updated monthly.',

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
      'exp.current': 'Current',
      'exp.ongoing': 'Ongoing',
      'exp.more': 'Show {n} more',
      'exp.less': 'Show less',
      'exp.tag.treasury': 'Treasury',
      'exp.tag.reporting': 'Financial reporting',
      'exp.tag.ap': 'Accounts payable',
      'exp.tag.vat': 'VAT',
      'exp.tag.po': 'Product Ownership',
      'exp.tag.market': 'Market analysis',
      'exp.tag.campaigns': 'Email campaigns',
      'exp.tag.ads': 'Digital advertising',
      'exp.army.period': 'Since December 2022 · Fontevraud L\'Abbaye, France',
      'exp.army.role': 'Reserve Soldier',
      'exp.army.li1': 'Reserve soldier in the 6th squadron of a cavalry regiment specialized in NRBC.',
      'exp.army.li2': 'Trained and equipped to operate in and respond to Nuclear, Radiological, Biological, and Chemical (NRBC) threat environments.',
      'exp.army.li3': 'Experience in high-discipline operational settings, teamwork, and readiness for time-constrained missions.',
      'exp.loreal.period': 'July – December 2026 · Clichy, France',
      'exp.loreal.role': 'Data Analytics Engineer – Global Commerce Data Domain',
      'exp.loreal.li1': '<strong>Data Product Build (React &amp; GCP):</strong> Designed and deployed "Find Your Customer", a user-centered React web app on GCP (versioned on GitHub) that lets business and data teams search for a customer, view key information and easily access the underlying data from many sources that were previously scattered and unstructured.',
      'exp.loreal.li2': '<strong>Data Contracts &amp; SLAs:</strong> Contributing to the implementation or formalization of data contracts for the priority data flows of the Commerce scope, defining quality rules, alerting and expected service levels.',
      'exp.loreal.li3': '<strong>Master Data Harmonization:</strong> Structuring massive volumes of complex Master Data (10M customers, 40k+ points of sale, 10k sales reps in the Sales Force Structure) from the SAP ECC and TIBCO EBX source systems into scalable, business-ready assets.',
      'exp.loreal.li4': '<strong>Data Quality &amp; Remediation:</strong> Identifying and prioritizing personal data quality gaps on the Commerce scope, then steering the corrective actions with the IT teams.',
      'exp.loreal.li5': '<strong>Run &amp; Operational Continuity:</strong> Handling requests and incidents on the assigned scope within agreed timeframes, keeping transparent follow-up on open topics and maintaining up-to-date documentation for recurring processes.',
      'exp.loreal.li6': '<strong>Cross-Functional Collaboration:</strong> Working daily with Data Product Owners and Data Engineers on the Global Commerce Transformation strategy, building a structured understanding of Commerce and Data dynamics to become an identified point of contact and share an actionable synthesis with the SDDS Commerce team.',
      'exp.loreal.manager': 'Manager: Mr. Luc Bochet, Lead Data Product Owner',
      'exp.lbp.period': 'January – July 2025 · Paris, France',
      'exp.lbp.role': 'Data Analyst',
      'exp.lbp.li1': '<strong>Data flow governance:</strong> supervised and optimized payment flow processes with focus on SEPA/DSP2/IP compliance.',
      'exp.lbp.li2': '<strong>Business needs analysis &amp; implementation:</strong> partnered with stakeholders to understand needs, analyze processes, and deliver tailored reporting automation and KPI tracking improvements.',
      'exp.lbp.li3': '<strong>Automation &amp; reporting:</strong> built dashboards and monitoring tools (QlikSense, Dataiku, SQL, Python) and automated recurring reporting to reduce manual workload and improve real-time visibility.',
      'exp.lbp.li4': '<strong>XML file mapping:</strong> mapped and structured XML files to improve traceability, usability, and downstream integration.',
      'exp.lbp.li5': '<strong>Data flow optimization:</strong> identified anomalies, improved processes, and supported operational reliability for payment workflows.',
      'exp.lbp.li6': '<strong>Data quality management:</strong> implemented validation rules and automated error-detection mechanisms to increase accuracy and consistency of financial data.',
      'exp.lbp.li7': '<strong>Process improvement:</strong> identified bottlenecks in data workflows and delivered optimizations improving processing time and operational efficiency.',
      'exp.lbp.manager': 'Manager: Mr. Hervé Harvoire, Payment Hub Manager',
      'exp.sienna.period': 'January – July 2024 · Luxembourg',
      'exp.sienna.role': 'Accounts Payable',
      'exp.sienna.li1': '<strong>Treasury management &amp; reporting:</strong> executed daily treasury tasks, reconciled bank statements, and produced liquidity/cash reports; contributed to cash projections and month/year-end processes.',
      'exp.sienna.li2': '<strong>Management reporting &amp; analysis:</strong> supported reporting and performed financial analysis to help monitor portfolios and operational performance.',
      'exp.sienna.li3': '<strong>Accounting &amp; invoicing:</strong> processed and verified supplier invoices; managed sales invoices and maintained accounts payable/receivable; resolved discrepancies with vendors.',
      'exp.sienna.li4': '<strong>Regulatory compliance:</strong> supported VAT and Income Tax preparation and ensured adherence to internal policies and accounting standards.',
      'exp.sienna.li5': '<strong>Documentation &amp; payments:</strong> maintained audit-ready records and supported payment processing (checks, ACH, wire transfers); reconciled employee expense reports.',
      'exp.sienna.manager': 'Manager: Ms. Aija Livca, Account Payable Manager',
      'exp.easy.period': 'April – July 2023 · Issy-les-Moulineaux, France',
      'exp.easy.role': 'Business Development Assistant',
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
      'skills.lang.ro': 'Beginner (A1)',
      'skills.certs': 'Certifications',
      'skills.interests': 'Interests',
      'skills.interest.finance': 'Finance & investing',
      'skills.interest.calisthenics': 'Calisthenics',
      'skills.interest.running': 'Running',
      'skills.interest.travel': 'Travelling',
      'skills.interest.motorsport': 'Motorsports',
      'skills.interest.games': 'Video games',

      /* --- Projects --- */
      'projects.title': 'Selected projects',
      'projects.featured': 'Featured · MSc Thesis · EDHEC 2026',
      'projects.pipeline': 'Five-phase reproducible pipeline',
      'projects.p1': 'Feasibility audit',
      'projects.p2': 'Data engineering',
      'projects.p3': 'FinBERT sentiment scoring',
      'projects.p4': 'LSTM · chronological hold-out',
      'projects.p5': 'SHAP explainability',
      'projects.stat.mae': 'MAE gain at 5 days',
      'projects.stat.articles': 'news articles',
      'projects.stat.days': 'ticker-days',
      'projects.stat.tickers': 'tickers · SMR, LEU, NNE',
      'projects.more_title': 'More in the pipeline',
      'projects.thesis.desc': 'Does FinBERT-derived news sentiment improve short-term return prediction for small-cap nuclear equities? This MSc thesis builds a fully reproducible five-phase pipeline — feasibility audit, data engineering (3,992 ticker-days, 25,885 news articles covering SMR, LEU, NNE), FinBERT sentiment scoring, LSTM training with chronological hold-out, and SHAP explainability. Key finding: sentiment augmentation yields a statistically significant average MAE improvement of <strong>+5.18%</strong> at the 5-day horizon; no aggregate benefit at the 1-day horizon. Hypothesis testing via Diebold-Mariano tests.',
      'projects.thesis.btn_dl': 'Download Thesis (PDF)',
      'projects.thesis.btn_code': 'Source Code',
      'projects.tradbot.title': 'TRAD_BOT — Algorithmic Trading Suite (Binance + IBKR)',
      'projects.tradbot.desc': 'Two independent algorithmic trading bots in one repository. The Binance bot runs a delta-neutral cash-and-carry strategy (long spot + short perpetual) to harvest funding every 8 hours, with an event-driven backtester, walk-forward analysis, real-time WebSocket market data, risk kill-switches and Telegram/email monitoring. The IBKR bot trades US equities through a two-stage sentiment funnel (FinBERT → LLM gatekeeper) with a dollar-neutral portfolio overlay. Multiple execution modes: backtest, paper, dry-run and live.',
      'projects.tradbot.btn_view': 'View on GitHub',
      'projects.folio.title': 'Folio — Nuclear Portfolio Dashboard',
      'projects.folio.desc': 'A personal Streamlit dashboard for a nuclear-heavy equity portfolio, built to check from a phone or laptop. It values positions in EUR (splitting stock moves from currency moves), scores the broad market, the nuclear sector and the portfolio on a −100 to +100 bearish-to-bullish scale (trend, momentum, RSI, CNN Fear & Greed, VIX), and sets bull, base and bear 12-month scenarios with volatility cones and vol-implied odds. News tone (VADER), StockTwits and Reddit hype round it out; the app keeps working when a data source is down, and the calculation code is unit-tested.',
      'projects.folio.btn_app': 'Open the app',
      'projects.folio.btn_code': 'Source Code',
      'projects.kleerer.title': 'kleerer — Open, Science-Based Health Data',
      'projects.kleerer.desc': 'An open-source project making health data available to people looking for evidence-based advice and recommendations, instead of ad-driven content. Ships as a small, fast static site (GitHub Pages) with a comparison tool as its first building block, plus a bot module handling data automation behind the scenes. Actively evolving — more science-based tools are on the way.',
      'projects.kleerer.btn_view': 'Visit website',
      'projects.kleerer.btn_code': 'Source Code',
      'projects.dailynews.title': 'dailynews — A Personal Newspaper for Kindle',
      'projects.dailynews.desc': 'A personal daily newspaper built from my interests and delivered to my Kindle every morning, running free on a GitHub Actions schedule — no server, no app. Each run collects recent articles from a news search per interest plus RSS feeds, drops anything already sent, deduplicates the same story across outlets, ranks the best pieces per section, extracts the full text (respecting robots.txt; paywalled pieces fall back to summary + link), builds a clean EPUB with a clickable front page and emails it via Send to Kindle. Tested with pytest and linted with ruff in CI.',
      'projects.dailynews.btn_view': 'View on GitHub',
      'projects.future.desc': 'New work in data science, quantitative finance and AI is on the way — follow along on GitHub.',
      'projects.github': 'View Projects on GitHub',

      /* --- Contact --- */
      'contact.linkedin': 'LinkedIn',
      'contact.github_label': 'GitHub',
      'contact.open': 'Open to opportunities in data science, AI strategy, and data governance roles. Feel free to reach out!',
      'contact.cv': 'Download CV',
      'contact.banner_title': 'Let\'s work together',
      'contact.banner_body': 'Send me a message — I usually reply within a day.',
      'contact.copy': 'Copy',
      'contact.copy_label': 'Copy email address',
      'contact.copied': 'Email address copied to clipboard',

      /* --- Footer --- */
      'footer.rights': 'All rights reserved.',
      'footer.top': 'Back to top',

      /* --- Command palette (index) --- */
      'cmd.title': 'Command menu',
      'cmd.placeholder': 'Type a command or search…',
      'cmd.nav': 'Navigate',
      'cmd.actions': 'Actions',
      'cmd.copy': 'Copy email address',
      'cmd.thesis': 'Read the MSc thesis (PDF)',
      'cmd.linkedin': 'Open LinkedIn profile',
      'cmd.github': 'Open GitHub profile',
      'cmd.travel': 'Open the travel blog',
      'cmd.lang': 'Passer en français',
      'cmd.empty': 'No results',
      'cmd.hint_nav': 'navigate',
      'cmd.hint_run': 'select',
      'cmd.hint_close': 'close',

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
      'nav.skip': 'Aller au contenu',
      'nav.menu': 'Menu',
      'nav.cmd': 'Ouvrir le menu de commandes',

      /* --- Hero (index) --- */
      'hero.now': 'Actuellement — Data Analytics Engineer chez L’Oréal Beauty Tech',
      'hero.lead': 'Je transforme des données complexes en',
      'hero.rotate': 'produits réellement utilisés|pipelines dignes de confiance|modèles qui s’expliquent|décisions fondées sur les preuves',
      'hero.rot_sr': 'Je transforme des données complexes en produits utiles, en pipelines fiables, en modèles explicables et en décisions fondées sur les preuves.',
      'hero.desc': 'Professionnel Data & IA entre Beauty Tech et Finance — des master data et data contracts chez L’Oréal aux flux de paiement de La Banque Postale, jusqu’à la prévision de rendements pilotée par FinBERT dans ma thèse de MSc.',
      'hero.btn_projects': 'Découvrir mes projets',
      'hero.scroll': 'Défiler',

      /* --- About --- */
      'about.title': 'Résumé professionnel',
      'about.body': 'Data & AI Professional démontrant une solide expérience dans la création de produits data scalables dans les secteurs de la Beauty Tech et de la Finance. Expérimenté dans la conception de pipelines de données robustes, le maintien de standards stricts de qualité des données et l\'analyse statistique. Maîtrisant Python, SQL et les outils de BI, avec une forte volonté de transformer des données complexes en insights actionnables.',

      'about.headline': 'De la donnée brute aux produits, pipelines et décisions.',
      'about.based': 'Basé à Paris, France — mobile et ouvert à la relocalisation',
      'about.now_label': 'Actuellement',
      'about.now_body': 'Data Analytics Engineer au sein du Global Commerce Data Domain — j’ai développé <strong>« Find Your Customer »</strong>, une application React sur GCP, et formalise les data contracts des flux de données Commerce prioritaires.',
      'about.stat.customers': 'clients consultables dans « Find Your Customer », l’application web que j’ai conçue — plus de 100 utilisateurs actifs par jour',
      'about.stat.mae': 'd’amélioration de la MAE à l’horizon 5 jours, statistiquement significative dans ma thèse de MSc',
      'about.stat.certs': 'certifications — IBM, Anthropic, Bloomberg & SAFe',
      'about.stat.langs': 'langues — français, anglais, espagnol, russe, roumain',
      'about.beyond_label': 'En dehors du travail',
      'about.travel_title': 'Blog voyage',
      'about.travel_body': 'Récits, photos et cartes — 1 destination sur 1 continent pour l’instant, mis à jour chaque mois.',

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
      'exp.current': 'En cours',
      'exp.ongoing': 'En parallèle',
      'exp.more': 'Voir {n} de plus',
      'exp.less': 'Voir moins',
      'exp.tag.treasury': 'Trésorerie',
      'exp.tag.reporting': 'Reporting financier',
      'exp.tag.ap': 'Comptabilité fournisseurs',
      'exp.tag.vat': 'TVA',
      'exp.tag.po': 'Product Ownership',
      'exp.tag.market': 'Analyse de marché',
      'exp.tag.campaigns': 'Campagnes e-mail',
      'exp.tag.ads': 'Publicité digitale',
      'exp.army.period': 'Depuis décembre 2022 · Fontevraud L\'Abbaye, France',
      'exp.army.role': 'Soldat de réserve',
      'exp.army.li1': 'Soldat de réserve au 6e escadron d\'un régiment de cavalerie spécialisé NRBC.',
      'exp.army.li2': 'Formé et équipé pour opérer dans des environnements de menace Nucléaire, Radiologique, Biologique et Chimique (NRBC).',
      'exp.army.li3': 'Expérience dans des environnements opérationnels à haute discipline, travail en équipe et réactivité pour des missions sous contrainte de temps.',
      'exp.loreal.period': 'Juillet – Décembre 2026 · Clichy, France',
      'exp.loreal.role': 'Data Analytics Engineer – Global Commerce Data Domain',
      'exp.loreal.li1': '<strong>Développement d\'un produit data (React &amp; GCP) :</strong> conception et déploiement de "Find Your Customer", application web React centrée sur les besoins des utilisateurs, hébergée sur GCP et versionnée sur GitHub, qui permet aux équipes métier et data de rechercher un client, de visualiser ses informations clés et d\'accéder facilement aux données sous-jacentes, issues de nombreuses sources auparavant dispersées et non structurées.',
      'exp.loreal.li2': '<strong>Data contracts &amp; niveaux de service :</strong> contribution à la mise en place ou à la formalisation de data contracts sur les flux de données prioritaires du périmètre Commerce, avec définition des règles de qualité, des alertes et des niveaux de service attendus.',
      'exp.loreal.li3': '<strong>Harmonisation des Master Data :</strong> structuration de volumes massifs de Master Data complexes (10 M de clients, plus de 40 000 points de vente, 10 000 commerciaux dans la Structure de la Force de Vente) en actifs scalables et exploitables, à partir des systèmes sources SAP ECC et TIBCO EBX.',
      'exp.loreal.li4': '<strong>Qualité &amp; fiabilisation des données :</strong> identification et priorisation des écarts de qualité sur les données personnelles du périmètre Commerce, puis pilotage des actions correctrices avec les équipes IT.',
      'exp.loreal.li5': '<strong>Run &amp; continuité opérationnelle :</strong> traitement, dans les délais convenus, des demandes et des incidents sur le périmètre attribué ; suivi transparent des sujets ouverts et maintien d\'une documentation à jour pour les processus récurrents.',
      'exp.loreal.li6': '<strong>Collaboration inter-équipes :</strong> travail quotidien avec les Data Product Owners et les Data Engineers sur la stratégie Global Commerce Transformation, et développement d\'une compréhension structurée des dynamiques Commerce et Data pour devenir un interlocuteur identifié sur ces sujets et partager une synthèse directement exploitable avec l\'équipe SDDS Commerce.',
      'exp.loreal.manager': 'Manager : M. Luc Bochet, Lead Data Product Owner',
      'exp.lbp.period': 'Janvier – Juillet 2025 · Paris, France',
      'exp.lbp.role': 'Data Analyst',
      'exp.lbp.li1': '<strong>Gouvernance des flux de données :</strong> supervision et optimisation des processus de flux de paiements avec un focus sur la conformité SEPA/DSP2/IP.',
      'exp.lbp.li2': '<strong>Analyse des besoins métier &amp; mise en œuvre :</strong> collaboration avec les parties prenantes pour comprendre les besoins, analyser les processus et livrer des améliorations d\'automatisation de reporting et de suivi de KPIs sur mesure.',
      'exp.lbp.li3': '<strong>Automatisation &amp; reporting :</strong> création de tableaux de bord et d\'outils de monitoring (QlikSense, Dataiku, SQL, Python) et automatisation du reporting récurrent pour réduire la charge manuelle et améliorer la visibilité en temps réel.',
      'exp.lbp.li4': '<strong>Cartographie de fichiers XML :</strong> cartographie et structuration de fichiers XML pour améliorer la traçabilité, l\'utilisabilité et l\'intégration en aval.',
      'exp.lbp.li5': '<strong>Optimisation des flux de données :</strong> identification des anomalies, amélioration des processus et soutien à la fiabilité opérationnelle des flux de paiements.',
      'exp.lbp.li6': '<strong>Gestion de la qualité des données :</strong> mise en place de règles de validation et de mécanismes automatisés de détection d\'erreurs pour améliorer la précision et la cohérence des données financières.',
      'exp.lbp.li7': '<strong>Amélioration des processus :</strong> identification des goulots d\'étranglement dans les flux de données et livraison d\'optimisations améliorant les temps de traitement et l\'efficacité opérationnelle.',
      'exp.lbp.manager': 'Manager : M. Hervé Harvoire, Responsable Payment Hub',
      'exp.sienna.period': 'Janvier – Juillet 2024 · Luxembourg',
      'exp.sienna.role': 'Comptabilité Fournisseurs',
      'exp.sienna.li1': '<strong>Gestion de trésorerie &amp; reporting :</strong> exécution des tâches de trésorerie quotidiennes, rapprochement des relevés bancaires et production de rapports de liquidité/trésorerie ; contribution aux projections de trésorerie et aux clôtures mensuelles/annuelles.',
      'exp.sienna.li2': '<strong>Reporting de gestion &amp; analyse :</strong> soutien au reporting et réalisation d\'analyses financières pour le suivi des portefeuilles et de la performance opérationnelle.',
      'exp.sienna.li3': '<strong>Comptabilité &amp; facturation :</strong> traitement et vérification des factures fournisseurs ; gestion des factures de vente et tenue des comptes fournisseurs/clients ; résolution des litiges avec les prestataires.',
      'exp.sienna.li4': '<strong>Conformité réglementaire :</strong> soutien à la préparation de la TVA et de l\'impôt sur le revenu, et garantie du respect des politiques internes et des normes comptables.',
      'exp.sienna.li5': '<strong>Documentation &amp; paiements :</strong> tenue de registres prêts pour audit et soutien au traitement des paiements (chèques, virements) ; rapprochement des notes de frais des employés.',
      'exp.sienna.manager': 'Manager : Mme Aija Livca, Responsable Comptabilité Fournisseurs',
      'exp.easy.period': 'Avril – Juillet 2023 · Issy-les-Moulineaux, France',
      'exp.easy.role': 'Assistant Développement Commercial',
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
      'skills.lang.ro': 'Débutant (A1)',
      'skills.certs': 'Certifications',
      'skills.interests': 'Centres d\'intérêt',
      'skills.interest.finance': 'Finance & investissement',
      'skills.interest.calisthenics': 'Callisthénie',
      'skills.interest.running': 'Course à pied',
      'skills.interest.travel': 'Voyages',
      'skills.interest.motorsport': 'Sports mécaniques',
      'skills.interest.games': 'Jeux vidéo',

      /* --- Projects --- */
      'projects.title': 'Projets sélectionnés',
      'projects.featured': 'À la une · Thèse MSc · EDHEC 2026',
      'projects.pipeline': 'Pipeline reproductible en cinq phases',
      'projects.p1': 'Audit de faisabilité',
      'projects.p2': 'Ingénierie des données',
      'projects.p3': 'Scoring de sentiment FinBERT',
      'projects.p4': 'LSTM · validation chronologique',
      'projects.p5': 'Explicabilité SHAP',
      'projects.stat.mae': 'gain de MAE à 5 jours',
      'projects.stat.articles': 'articles d’actualité',
      'projects.stat.days': 'ticker-jours',
      'projects.stat.tickers': 'tickers · SMR, LEU, NNE',
      'projects.more_title': 'D’autres projets en préparation',
      'projects.thesis.desc': 'Le sentiment issu des actualités via FinBERT améliore-t-il la prédiction des rendements à court terme pour les petites capitalisations nucléaires ? Cette thèse MSc construit un pipeline reproductible en cinq phases — audit de faisabilité, ingénierie des données (3 992 ticker-jours, 25 885 articles couvrant SMR, LEU, NNE), scoring de sentiment FinBERT, entraînement LSTM avec validation chronologique, et explicabilité SHAP. Résultat clé : l\'augmentation par sentiment améliore de manière statistiquement significative la MAE moyenne de <strong>+5,18 %</strong> à l\'horizon 5 jours ; aucun bénéfice agrégé à l\'horizon 1 jour. Tests d\'hypothèses via les tests de Diebold-Mariano.',
      'projects.thesis.btn_dl': 'Télécharger la thèse (PDF)',
      'projects.thesis.btn_code': 'Code source',
      'projects.tradbot.title': 'TRAD_BOT — Suite de trading algorithmique (Binance + IBKR)',
      'projects.tradbot.desc': 'Deux bots de trading algorithmique indépendants dans un même dépôt. Le bot Binance applique une stratégie delta-neutre cash-and-carry (long spot + short perpétuel) pour capter le funding toutes les 8 heures, avec backtester événementiel, analyse walk-forward, données de marché en temps réel via WebSocket, coupe-circuits de risque et monitoring Telegram/email. Le bot IBKR trade des actions américaines via un entonnoir de sentiment à deux étages (FinBERT → filtre LLM) avec une couverture de portefeuille dollar-neutre. Plusieurs modes d’exécution : backtest, paper, dry-run et live.',
      'projects.tradbot.btn_view': 'Voir sur GitHub',
      'projects.folio.title': 'Folio — Tableau de bord d’un portefeuille nucléaire',
      'projects.folio.desc': 'Un tableau de bord Streamlit personnel pour un portefeuille d’actions très exposé au nucléaire, pensé pour être consulté sur téléphone ou ordinateur. Il valorise les positions en EUR (en séparant l’effet du titre de l’effet de change), note le marché global, le secteur nucléaire et le portefeuille sur une échelle de −100 à +100, de baissier à haussier (tendance, momentum, RSI, CNN Fear & Greed, VIX), et construit des scénarios haussier, central et baissier à 12 mois avec cônes de volatilité et probabilités implicites. Le ton des actualités (VADER), StockTwits et l’engouement sur Reddit complètent l’ensemble ; l’application reste fonctionnelle si une source de données tombe, et le code de calcul est couvert par des tests unitaires.',
      'projects.folio.btn_app': 'Ouvrir l’app',
      'projects.folio.btn_code': 'Code source',
      'projects.kleerer.title': 'kleerer — Données de santé ouvertes et scientifiques',
      'projects.kleerer.desc': 'Un projet open-source qui rend les données de santé accessibles aux personnes en quête de conseils et de recommandations fondés sur des preuves, plutôt que sur du contenu publicitaire. Livré sous forme d\'un site statique léger et rapide (GitHub Pages) avec un outil de comparaison comme première brique, et un module bot qui automatise la collecte de données en coulisses. En développement actif — d\'autres outils scientifiques arrivent bientôt.',
      'projects.kleerer.btn_view': 'Voir le site',
      'projects.kleerer.btn_code': 'Code source',
      'projects.dailynews.title': 'dailynews — Un journal personnel pour Kindle',
      'projects.dailynews.desc': 'Un journal quotidien personnel construit à partir de mes centres d’intérêt et livré chaque matin sur ma Kindle, exécuté gratuitement par un planning GitHub Actions — sans serveur ni application. Chaque exécution collecte les articles récents via une recherche d’actualités par thème et des flux RSS, écarte ceux déjà envoyés, dédoublonne une même information reprise par plusieurs médias, sélectionne les meilleurs articles par rubrique, extrait le texte intégral (en respectant robots.txt ; les articles payants se limitent au résumé + lien), génère un EPUB soigné avec une une cliquable et l’envoie via Send to Kindle. Testé avec pytest et vérifié par ruff en CI.',
      'projects.dailynews.btn_view': 'Voir sur GitHub',
      'projects.future.desc': 'De nouveaux projets en data science, finance quantitative et IA arrivent — suivez-les sur GitHub.',
      'projects.github': 'Voir les projets sur GitHub',

      /* --- Contact --- */
      'contact.linkedin': 'LinkedIn',
      'contact.github_label': 'GitHub',
      'contact.open': 'Disponible pour des opportunités en data science, stratégie IA et gouvernance des données. N\'hésitez pas à me contacter !',
      'contact.cv': 'Télécharger le CV',
      'contact.banner_title': 'Travaillons ensemble',
      'contact.banner_body': 'Envoyez-moi un message — je réponds généralement sous 24 h.',
      'contact.copy': 'Copier',
      'contact.copy_label': 'Copier l’adresse e-mail',
      'contact.copied': 'Adresse e-mail copiée dans le presse-papiers',

      /* --- Footer --- */
      'footer.rights': 'Tous droits réservés.',
      'footer.top': 'Retour en haut',

      /* --- Command palette (index) --- */
      'cmd.title': 'Menu de commandes',
      'cmd.placeholder': 'Tapez une commande ou recherchez…',
      'cmd.nav': 'Naviguer',
      'cmd.actions': 'Actions',
      'cmd.copy': 'Copier l’adresse e-mail',
      'cmd.thesis': 'Lire la thèse de MSc (PDF)',
      'cmd.linkedin': 'Ouvrir le profil LinkedIn',
      'cmd.github': 'Ouvrir le profil GitHub',
      'cmd.travel': 'Ouvrir le blog voyage',
      'cmd.lang': 'Switch to English',
      'cmd.empty': 'Aucun résultat',
      'cmd.hint_nav': 'naviguer',
      'cmd.hint_run': 'valider',
      'cmd.hint_close': 'fermer',

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
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var val = tKey(el.getAttribute('data-i18n-aria'), lang);
      if (val !== undefined) el.setAttribute('aria-label', val);
    });
    document.querySelectorAll('.lang-opt').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
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
