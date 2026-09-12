# Merkbestanden

Losse iconen, niet gebruikt door de website zelf. Die heeft zijn eigen `favicon.svg`
en `apple-touch-icon.png` in de hoofdmap.

| Bestand | Waarvoor |
| --- | --- |
| `huis-32.png` | 32x32, voor het favicon-veld bij de Microsoft-aanmeldpagina |
| `huis-32-transparant.png` | zelfde, maar zonder de donkere tegel eronder |
| `huis-48.png` | 48x48, komt af en toe langs als tweede faviconmaat |
| `huis-192.png` | 192x192 |
| `huis-240.png` | 240x240, de maat die Entra vraagt voor een vierkant logo |
| `huis-32.svg` | de bron; hieruit zijn alle PNG's gerenderd |

Alleen het huisje, zonder de sprayflacon en de sterren: die vallen op 32 pixels uit
elkaar. Om dezelfde reden heeft dit huisje twee ruiten in plaats van vier.

De PNG's zijn op 512 pixels gerenderd en daarna teruggeschaald met Lanczos. Direct op
32 pixels renderen geeft harde, korrelige randen. Wil je een andere maat, schaal dan
opnieuw vanaf de SVG en niet vanaf een kleine PNG.
