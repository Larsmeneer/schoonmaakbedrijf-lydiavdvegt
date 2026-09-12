# Merkbestanden

Losse iconen, niet gebruikt door de website zelf. Die heeft zijn eigen `favicon.svg`
en `apple-touch-icon.png` in de hoofdmap.

| Bestand | Waarvoor |
| --- | --- |
| `Lydia logo.png` | het echte logo, 2974x1672, transparante achtergrond |
| `Lydia logo.eps` | vectorversie, voor drukwerk en borduren |
| `Lydia logo-1.pdf` | vectorversie als pdf |
| `Lydia logo.jpg` | kleine versie, staat in CMYK en is dus voor druk, niet voor beeldscherm |
| `huis-32.png` | 32x32, voor het favicon-veld bij de Microsoft-aanmeldpagina |
| `huis-32-transparant.png` | zelfde, maar zonder de donkere tegel eronder |
| `huis-48.png` | 48x48, komt af en toe langs als tweede faviconmaat |
| `huis-192.png` | 192x192 |
| `huis-240.png` | 240x240, de maat die Entra vraagt voor een vierkant logo |
| `huis-32.svg` | de bron van de huis-iconen |
| `profielfoto-648.png` | 648x648, profielfoto voor Outlook en Teams |
| `profielfoto.svg` | de bron daarvan |

Alleen het huisje, zonder de sprayflacon en de sterren: die vallen op 32 pixels uit
elkaar. Om dezelfde reden heeft dit huisje twee ruiten in plaats van vier.

De PNG's zijn op 512 pixels gerenderd en daarna teruggeschaald met Lanczos. Direct op
32 pixels renderen geeft harde, korrelige randen. Wil je een andere maat, schaal dan
opnieuw vanaf de SVG en niet vanaf een kleine PNG.

## Over de profielfoto

Outlook en Teams snijden een profielfoto **rond** bij. Het beeldmerk staat daarom
kleiner in het vierkant dan je zou verwachten: zo valt ook de bovenste ster nog binnen
de cirkel. Nagemeten na het renderen, er ligt geen enkele lichte pixel buiten de rand.
De achtergrond vult wel het hele vierkant, want een enkele weergave in Outlook toont de
foto niet rond maar vierkant.

Op de kleinste weergave (ongeveer 48 pixels, in een berichtenlijst) blijven het huis en
de flacon herkenbaar en worden de sterren stipjes. Wil je daar iets strakkers, gebruik
dan `huis-192.png`: alleen het huisje, dat houdt het op elk formaat.

## Over het aangeleverde logo

De PNG is de bruikbare versie voor beeldscherm: hoge resolutie en een transparante
achtergrond. De JPG staat in CMYK, dat is drukwerkkleur; die geeft op een beeldscherm
afwijkende kleuren en is hier dus niet de juiste keuze.

Let op bij gebruik op een donkere achtergrond: de bedrijfsnaam in het logo is
donkerblauw en valt dan weg. Voor de donkere footer en het donkere thema van de site is
een variant met witte letters nodig.
