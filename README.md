# Interieur &amp; Schoonmaak Lydia van der Vegt

Eenpagina-website voor Interieur &amp; Schoonmaakbedrijf Lydia van der Vegt uit Zoetermeer:
schoonmaak van bedrijfspanden, centrale hallen, centrale ruimtes en portieken.

Er zit geen bouwstap in: `index.html` is de hele site en kan zo op elke webserver.
Open het bestand in je browser om het te bekijken.

| Bestand | Wat het is |
| --- | --- |
| `index.html` | de pagina zelf, met de stijl en het beeldmerk erin |

## Hosting via GitHub Pages

De site is één statisch bestand, dus GitHub Pages is genoeg, en gratis:

1. Repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**, branch `main`, map `/ (root)`
3. Opslaan; na een minuut staat hij op `https://<gebruiker>.github.io/<repo>/`

Voor een eigen domein (bijvoorbeeld `interieurenschoonmaak.nl`): zet de domeinnaam bij
**Custom domain**, laat GitHub het `CNAME`-bestand aanmaken en zet bij de domeinboer een
`CNAME`-record naar `<gebruiker>.github.io`. Vink daarna **Enforce HTTPS** aan.

## Gegevens die in de pagina staan

- Telefoon 06 - 14 62 30 23 · lydiavandervegt@icloud.com
- KvK 24021368 · Bermudablauw 26, 2718 JJ Zoetermeer

## Nog te doen

- Het echte logobestand in de pagina zetten (nu staat er een SVG-nabouw van het beeldmerk)
- Contactformulier: nu een `mailto:`-link. Wil Lydia een net formulier, dan kan dat via
  Formspree of Web3Forms zonder eigen server. GitHub Pages kan zelf geen post verwerken.
