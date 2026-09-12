# Interieur &amp; Schoonmaak Lydia van der Vegt

Website voor Interieur &amp; Schoonmaakbedrijf Lydia van der Vegt uit Zoetermeer:
schoonmaak van bedrijfspanden, centrale hallen, centrale ruimtes en portieken in
Zoetermeer en omstreken, en het schoon opleveren van woningen en panden bij een
verhuizing.

Er zit geen bouwstap in. Open `index.html` in je browser om de site te bekijken.

De twee tekstpagina's staan bewust in een eigen map met een `index.html` erin, zodat de
URL `/voorwaarden/` is en niet `/voorwaarden.html`. Bekijk je ze lokaal via het
bestandssysteem, open dan `voorwaarden/index.html` rechtstreeks.

| Bestand | Wat het is |
| --- | --- |
| `index.html` | de startpagina |
| `voorwaarden/index.html` | algemene voorwaarden, te bereiken als `/voorwaarden/` |
| `privacy/index.html` | privacyverklaring, te bereiken als `/privacy/` |
| `404.html` | de pagina voor een adres dat niet bestaat |
| `stijl.css` | de opmaak van alle drie de pagina's |
| `script.js` | licht/donker, mobiel menu, in beeld schuiven |
| `favicon.svg` | het tabblad-icoon |
| `apple-touch-icon.png` | icoon voor een snelkoppeling op iOS (180x180) |

`404.html` staat er bewust alleen voor: GitHub Pages toont die pagina ook op een diep
adres als `/een/diep/adres/`, terwijl de adresbalk dat pad vasthoudt. Een verwijzing naar
`stijl.css` zou daar op de verkeerde plek zoeken, dus de opmaak en het beeldmerk staan in
die pagina zelf. Pas je de huisstijl aan, werk die pagina dan apart bij.

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

- Telefoon 06 - 14 62 30 23 · info@schoonmaakbedrijf-lydiavandervegt.nl
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
statistieken en hosting bij GitHub Pages. Verandert een van die dingen, dan moet die
tekst mee.

De e-mail loopt sinds september 2026 via Microsoft 365. Dat staat nu met naam in de
privacyverklaring, samen met de doorgifteregeling, zoals de AVG voorschrijft.

## Door Lydia te controleren

De plaatsen in het rijtje bij "Over mij" zijn een aanname, geen opgave van haar. Den Haag
is er op haar verzoek afgehaald; Leidschendam-Voorburg, Pijnacker-Nootdorp en Bleiswijk
staan er nog en zijn nooit bevestigd. Vraag haar even waar ze wel en niet komt.

## Nog te doen

- Het echte logo in de pagina's zetten. Het staat in `merk/`, maar de site gebruikt nog
  de SVG-nabouw van het beeldmerk. Er is een lichte variant nodig voor de donkere delen.
- Contactformulier: nu een `mailto:`-link. Wil Lydia een net formulier, dan kan dat via
  Formspree of Web3Forms zonder eigen server. GitHub Pages kan zelf geen post verwerken.
