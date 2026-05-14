/*
 * Trips data — single source of truth for the travel.html homepage.
 *
 * Order = newest first. Each entry powers:
 *   - the "Recent trips" big cards (top 4)
 *   - the continent groupings (remaining)
 *   - the globe markers (lat/lng/color)
 *   - the click-to-fly arc animation (color/gradTo/href)
 *
 * MIGRATION NOTE
 * As destinations are migrated to Markdown in _src/travel/*.md, we will
 * eventually replace this hardcoded list with a collection-derived version
 * (sourced from each .md file's front matter). For now this file is the
 * single source of truth.
 */
module.exports = [
  { id: "vietnam",   continent: "asia",   label: "Vietnam",   emoji: "🛵", title: "Vietnam — south to north",            date: "May–Jun 2026", lat: 21.0285, lng: 105.8542, color: "#27ae60", gradFrom: "#27ae60", gradTo: "#1a5e38", href: "travel/vietnam.html",   sub: "Hanoi · Hội An · Ha Long Bay" },
  { id: "italy",     continent: "europe", label: "Italy",     emoji: "🍕", title: "Italy — ruins, heat, espresso",        date: "Apr–May 2025", lat: 41.9028, lng: 12.4964,  color: "#e74c3c", gradFrom: "#e74c3c", gradTo: "#922b21", href: "travel/italy.html",     sub: "Rome · Naples" },
  { id: "moldova",   continent: "europe", label: "Moldova",   emoji: "🍷", title: "Moldova — the hidden cellar",          date: "Mar 2025",     lat: 47.0105, lng: 28.8638,  color: "#8e44ad", gradFrom: "#8e44ad", gradTo: "#6c3483", href: "travel/moldova.html",   sub: "Chișinău · Milestii Mici" },
  { id: "brussels",  continent: "europe", label: "Brussels",  emoji: "🏛️", title: "Brussels — EU bubble, waffle reality", date: "Mar 2025",     lat: 50.8503, lng: 4.3517,   color: "#f39c12", gradFrom: "#f39c12", gradTo: "#d35400", href: "travel/brussels.html",  sub: "Belgium · Grand Place" },
  { id: "morocco",   continent: "africa", label: "Morocco",   emoji: "🕌", title: "Morocco — contrast and colour",        date: "Jan 2025",     lat: 31.6295, lng: -7.9811,  color: "#e67e22", gradFrom: "#e67e22", gradTo: "#8e0f0f", href: "travel/morocco.html",   sub: "Marrakech · Fès · Sahara" },
  { id: "amsterdam", continent: "europe", label: "Amsterdam", emoji: "🚲", title: "Amsterdam — canals & afternoons",      date: "Nov 2024",     lat: 52.3676, lng: 4.9041,   color: "#1a6fa8", gradFrom: "#e67e22", gradTo: "#1a6fa8", href: "travel/amsterdam.html", sub: "Netherlands · 3 days" },
  { id: "dublin",    continent: "europe", label: "Dublin",    emoji: "🍺", title: "Dublin — pubs, craic and cliffs",      date: "Oct 2024",     lat: 53.3498, lng: -6.2603,  color: "#1abc9c", gradFrom: "#1abc9c", gradTo: "#148f77", href: "travel/dublin.html",    sub: "Ireland · city & coast" },
  { id: "armenia",   continent: "asia",   label: "Armenia",   emoji: "⛪", title: "Armenia — ancient and wild",           date: "Oct 2024",     lat: 40.1792, lng: 44.4991,  color: "#e74c3c", gradFrom: "#c0392b", gradTo: "#641e16", href: "travel/armenia.html",   sub: "Yerevan · Geghard · Tatev" },
  { id: "china",     continent: "asia",   label: "China",     emoji: "🏯", title: "China — a country at full speed",      date: "Aug 2024",     lat: 39.9042, lng: 116.4074, color: "#c0392b", gradFrom: "#c0392b", gradTo: "#7b0d0d", href: "travel/china.html",     sub: "Beijing · Shanghai · Chengdu" },
  { id: "menorca",   continent: "europe", label: "Menorca",   emoji: "🏖️", title: "Menorca — the quieter Balearic",       date: "May 2024",     lat: 39.9497, lng: 4.0882,   color: "#0097a7", gradFrom: "#00bcd4", gradTo: "#006064", href: "travel/menorca.html",   sub: "Spain · island escape" }
];
