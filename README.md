# Interieur &amp; Schoonmaak Lydia van der Vegt

Website voor Interieur &amp; Schoonmaakbedrijf Lydia van der Vegt uit Zoetermeer:
schoonmaak van bedrijfspanden, centrale hallen, centrale ruimtes en portieken in
Zoetermeer en omstreken.

Er zit geen bouwstap in. Open `index.html` in je browser om de site te bekijken.

| Bestand | Wat het is |
| --- | --- |
| `index.html` | de startpagina |
| `voorwaarden.html` | algemene voorwaarden |
| `privacy.html` | privacyverklaring |
| `stijl.css` | de opmaak van alle drie de pagina's |
| `script.js` | licht/donker, mobiel menu, in beeld schuiven |
| `favicon.svg` | het tabblad-icoon |
| `apple-touch-icon.png` | icoon voor een snelkoppeling op iOS (180x180) |

De header, het beeldmerk en de footer van de twee tekstpagina's zijn gegenereerd uit
`index.html`, zodat ze niet uit elkaar gaan lopen. Pas je die aan op de startpagina,
werk ze dan ook even bij op de andere twee.

## Hosting via GitHub Pages

De site is statisch, dus GitHub Pages is genoeg, en gratis. De workflow in
`.github/workflows/static.yml` publiceert bij elke push naar `main`.

Voor een eigen domein (bijvoorbeeld `interieurenschoonmaak.nl`): zet de domeinnaam bij
**Settings > Pages > Custom domain**, laat GitHub het `CNAME`-bestand aanmaken en zet bij
de domeinboer een `CNAME`-record naar `<gebruiker>.github.io`. Vink daarna
**Enforce HTTPS** aan.

## Gegevens die in de pagina's staan

- Telefoon 06 - 14 62 30 23 · lydiavandervegt@icloud.com
- KvK 24021368 · Bermudablauw 26, 2718 JJ Zoetermeer

## Laat Lydia dit nalezen

De algemene voorwaarden en de privacyverklaring zijn geschreven op basis van wat we
weten over haar werk. Op een paar punten moest een keuze gemaakt worden. Die staan nu
zo in de tekst, maar zij moet ze bevestigen:

| Onderwerp | Wat er nu staat |
| --- | --- |
| Betaaltermijn | 14 dagen, maandelijks achteraf factureren |
| Afzeggen van een afspraak | tot 24 uur van tevoren kosteloos |
| Opzegtermijn | een maand, tegen het einde van de maand |
| Prijsaanpassing | een keer per jaar, per 1 januari |
| Geldigheid offerte | 30 dagen |
| Klachttermijn | vijf werkdagen |
| Aansprakelijkheid | beperkt tot wat de verzekering uitkeert, anders drie maandfacturen |
| Rechtbank | Den Haag |

Twee dingen om echt even te controleren:

1. **Heeft ze een bedrijfsaansprakelijkheidsverzekering?** Artikel 10 gaat daarvan uit.
   Heeft ze die niet, dan moet dat artikel anders geformuleerd worden.
2. Dit is geen juridisch advies. Voor een eenmanszaak van deze omvang is deze tekst
   gebruikelijk, maar als ze zekerheid wil, laat een jurist er dan naar kijken.

De privacyverklaring beschrijft de situatie zoals de site nu werkt: geen cookies, geen
statistieken, hosting bij GitHub Pages en e-mail via iCloud. Verandert een van die
dingen, dan moet die tekst mee.

## Nog te doen

- Het echte logobestand in de pagina's zetten (nu staat er een SVG-nabouw van het beeldmerk)
- Contactformulier: nu een `mailto:`-link. Wil Lydia een net formulier, dan kan dat via
  Formspree of Web3Forms zonder eigen server. GitHub Pages kan zelf geen post verwerken.
