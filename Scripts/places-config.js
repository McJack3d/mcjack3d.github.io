/*
 * Google Maps Places UI Kit — configuration
 * --------------------------------------------------------------------------
 * Paste your Google Maps Platform API key below, replacing YOUR_MAPS_API_KEY.
 *
 * Requirements for the key (do this in https://console.cloud.google.com/):
 *   1. Enable billing on the project.
 *   2. Enable the "Maps JavaScript API" and the "Places UI Kit"
 *      (a.k.a. Places API New) for the project.
 *   3. Restrict the key:
 *        - Application restriction: HTTP referrers
 *        - Allowed referrers:  mcjack3d.github.io/*   (and  localhost:*  for testing)
 *
 * The key is visible in page source on any public site — the referrer
 * restriction is what keeps it from being usable elsewhere.
 *
 * Until a real key is set, place links simply behave as normal Google Maps
 * links (the rich popover stays inert), so nothing breaks.
 */
window.PLACES_UI_KIT_KEY = "YOUR_MAPS_API_KEY";
