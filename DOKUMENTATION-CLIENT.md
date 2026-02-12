# Dokumentation Website – ilu Aesthetic Studio Frankfurt

**Projekt:** Website ilu Aesthetic Studio
**Domain:** www.ilu-concept.com
**Datum:** Februar 2026

---

## Inhaltsverzeichnis

1. [Technische Dokumentation](#1-technische-dokumentation)
2. [Manual de utilizare / Bedienungsanleitung](#2-bedienungsanleitung)
3. [GDPR / Datenschutz & Cookies](#3-datenschutz--cookies--gdpr)

---

## 1. Technische Dokumentation

### 1.1 Technologien

| Komponente | Technologie |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Fonts | Google Fonts (Cormorant Garamond, Montserrat) |
| Analytics | Google Analytics 4 (GA4) |
| Cookie Consent | Cookiebot |
| Karte | Google Maps Embed |
| Hosting | Static Website (kein Backend/Server noetig) |

### 1.2 Dateistruktur

```
ilu-Beauty-Salon-main/
|
|-- index.html              <- Startseite (Deutsch)
|-- index-en.html           <- Startseite (Englisch)
|-- preise.html             <- Behandlungen & Preise (Deutsch)
|-- preise-en.html          <- Behandlungen & Preise (Englisch)
|-- kundenkarte.html        <- Kundenkarte (Deutsch)
|-- kundenkarte-en.html     <- Kundenkarte / Membership Card (Englisch)
|
|-- style-index.css         <- Styles Startseite DE
|-- style-index-en.css      <- Styles Startseite EN
|-- style-preise.css        <- Styles Preise DE
|-- style-preise-en.css     <- Styles Preise EN
|-- style-kundenkarte.css   <- Styles Kundenkarte DE
|-- style-kundenkarte-en.css <- Styles Kundenkarte EN
|
|-- image/                  <- Alle Bilder
```

### 1.3 Seiten-Uebersicht

| Seite | URL | Beschreibung |
|---|---|---|
| Home DE | `/index.html` | Startseite mit Hero, Behandlungen, Ergebnisse, Testimonials, Kontakt |
| Home EN | `/index-en.html` | Englische Version der Startseite |
| Preise DE | `/preise.html` | Vollstaendige Preisliste, Spezialistin-Profil |
| Preise EN | `/preise-en.html` | Englische Version der Preisseite |
| Kundenkarte DE | `/kundenkarte.html` | Jahresmitgliedschaft mit FAQ |
| Kundenkarte EN | `/kundenkarte-en.html` | Englische Version der Kundenkarte |

### 1.4 Externe Dienste & Zugangsdaten (vom Kunden zu verwalten)

| Dienst | Zweck | Dashboard |
|---|---|---|
| Google Analytics 4 | Website-Statistiken | https://analytics.google.com |
| Cookiebot | Cookie-Consent Banner | https://www.cookiebot.com |
| Google Maps | Standort-Karte auf der Website | Kein Login noetig |
| Instagram | Social Media Link | @ilu_concept |

**Wichtig:** Die Zugangsdaten fuer Google Analytics und Cookiebot muessen vom Kunden sicher aufbewahrt werden.

### 1.5 Funktionen der Website

- **Responsive Design** - funktioniert auf Desktop, Tablet und Smartphone
- **Zweisprachig** - Deutsch und Englisch, umschaltbar ueber DE/EN Buttons
- **Scroll-Animationen** - Elemente erscheinen mit Fade-In und Slide-Effekten
- **Floating Contact Buttons** - WhatsApp und Telefon sind immer sichtbar
- **Google Maps** - Eingebettete Karte mit Standort
- **FAQ Bereich** - Aufklappbare haeufig gestellte Fragen (Kundenkarte-Seite)
- **Parallax Hero** - Hintergrundbild bewegt sich beim Scrollen
- **Statistik-Zaehler** - Animierte Zahlen (150+ Kunden, 5+ Jahre etc.)

---

## 2. Bedienungsanleitung

### 2.1 Inhalte aendern

Da die Website aus statischen HTML-Dateien besteht, muessen Aenderungen direkt in den HTML-Dateien vorgenommen werden. Hier die wichtigsten Stellen:

#### Preise aendern
Datei: `preise.html` (DE) / `preise-en.html` (EN)

Suchen Sie nach dem Behandlungsnamen und aendern Sie den Preis:
```html
<span class="price-name">Wimpernlifting / Wimpernlaminierung</span>
<span class="price-value">55 EUR</span>   <!-- Preis hier aendern -->
```

Fuer Waxing/Sugaring mit Kundenkarten-Preis:
```html
<span class="price-name">Bikini brasilianisch</span>
<div class="price-dual">
  <span class="price-regular">29 EUR</span>      <!-- Normalpreis -->
  <span class="price-with-card">22 EUR</span>     <!-- Kundenkarten-Preis -->
</div>
```

**Wichtig:** Aenderungen muessen in BEIDEN Sprachversionen (DE + EN) vorgenommen werden!

#### Oeffnungszeiten aendern
Die Oeffnungszeiten stehen im Footer jeder Seite. Suchen Sie nach "Oeffnungszeiten" / "Opening Hours":
```html
<h3>Oeffnungszeiten</h3>
<p>Mo, Mi, Fr: 10:00 - 15:00</p>
<p>Di, Do: 12:00 - 19:00</p>
<p>Sa: 12:00 - 16:00</p>
<p>So: Geschlossen</p>
```

**Wichtig:** Oeffnungszeiten stehen in ALLEN 6 HTML-Dateien im Footer. Alle aendern!

#### Kontaktdaten aendern
- **Telefonnummer:** Suchen Sie nach `4901637394921` und ersetzen Sie ueberall
- **E-Mail:** Suchen Sie nach `iluconcept2026@gmail.com` und ersetzen Sie
- **Adresse:** Suchen Sie nach `Egenolffstrasse 19`

#### Bilder aendern
Bilder liegen im Ordner `/image/`. Um ein Bild zu aendern:
1. Neues Bild in den Ordner `/image/` legen
2. In der HTML-Datei den Dateinamen anpassen:
```html
<img src="./image/NEUER-DATEINAME.jpg" alt="Beschreibung" />
```

### 2.2 Google Analytics nutzen

**Login:** https://analytics.google.com
**Property ID:** G-GCESVR7HGB

Was Sie dort sehen koennen:
- **Echtzeit** - Wer ist gerade auf der Website?
- **Berichte > Akquisition** - Woher kommen die Besucher? (Google, Instagram, direkt)
- **Berichte > Engagement** - Welche Seiten werden am meisten besucht?
- **Berichte > Demografie** - Alter, Geschlecht, Standort der Besucher

**Hinweis:** Google Analytics sammelt nur Daten, wenn der Besucher im Cookie-Banner auf "Akzeptieren" klickt. Besucher die Cookies ablehnen werden NICHT getrackt (GDPR-konform).

### 2.3 Cookiebot Dashboard

**Login:** https://www.cookiebot.com
**Cookiebot ID:** 85fbd661-6ec4-42d1-aecf-edbbd04a08de

Funktionen im Dashboard:
- **Banner anpassen** - Farben, Texte und Sprache des Cookie-Banners
- **Berichte** - Wie viele Besucher akzeptieren/ablehnen Cookies
- **Domain verwalten** - Sicherstellen dass die Domain korrekt eingetragen ist
- **Scan** - Cookiebot scannt die Website regelmaessig nach neuen Cookies

---

## 3. Datenschutz / Cookies / GDPR

### 3.1 Aktuelle Cookie-Implementierung

Die Website verwendet **Cookiebot** als Cookie Consent Management Platform (CMP). Das bedeutet:

| Situation | Was passiert |
|---|---|
| Besucher hat noch nicht entschieden | Cookie-Banner wird angezeigt, Google Analytics ist BLOCKIERT |
| Besucher klickt "Alle akzeptieren" | Google Analytics wird aktiviert, Daten werden gesammelt |
| Besucher klickt "Nur notwendige" | Google Analytics bleibt BLOCKIERT, keine Datensammlung |
| Besucher klickt "Ablehnen" | Google Analytics bleibt BLOCKIERT, keine Datensammlung |

**Technische Umsetzung:**
- Google Analytics Scripte haben `type="text/plain"` (Browser fuehrt sie nicht aus)
- Markiert mit `data-cookieconsent="statistics"` (Cookiebot Kategorie)
- Cookiebot aendert den Typ zu `text/javascript` nur nach Zustimmung
- IP-Anonymisierung ist aktiviert (`anonymize_ip: true`)

### 3.2 Cookies auf der Website

| Cookie | Typ | Zweck | Blockiert ohne Consent? |
|---|---|---|---|
| Google Analytics (_ga, _gid) | Statistik | Besucheranalyse | Ja |
| Cookiebot (CookieConsent) | Notwendig | Speichert Cookie-Einstellung | Nein (notwendig) |

### 3.3 Eingebettete Drittanbieter-Dienste

| Dienst | Datenschutz-Relevanz |
|---|---|
| Google Maps (iframe) | Laedt Inhalte von Google-Servern. Google kann IP-Adresse des Besuchers sehen. |
| Google Fonts | Schriftarten werden von Google-Servern geladen. Google kann IP-Adresse sehen. |
| WhatsApp Links | Nur externe Links, keine Daten werden uebertragen bis der Besucher klickt. |
| Instagram Link | Nur externer Link, keine Daten werden uebertragen bis der Besucher klickt. |

### 3.4 Was der Kunde noch braucht (WICHTIG)

Fuer volle GDPR/DSGVO-Konformitaet werden folgende Seiten empfohlen, die noch NICHT auf der Website vorhanden sind:

#### a) Impressum (gesetzlich PFLICHT in Deutschland)
Eine Seite mit:
- Vollstaendiger Name des Geschaeftsinhabers
- Anschrift: Egenolffstrasse 19, 60316 Frankfurt am Main
- Telefon: +49 0163 7394921
- E-Mail: iluconcept2026@gmail.com
- Umsatzsteuer-ID (falls vorhanden)
- Zustaendige Aufsichtsbehoerde (falls zutreffend)

**Empfehlung:** Impressum-Seite erstellen und im Footer verlinken.

#### b) Datenschutzerklaerung (gesetzlich PFLICHT)
Eine Seite mit:
- Wer ist verantwortlich fuer die Datenverarbeitung?
- Welche Daten werden gesammelt? (Cookies, Analytics, Google Maps, Google Fonts)
- Rechtsgrundlage (Art. 6 Abs. 1 DSGVO)
- Rechte der Besucher (Auskunft, Loeschung, Widerspruch)
- Kontaktdaten des Datenschutzverantwortlichen
- Cookiebot als Cookie-Management-Tool
- Google Analytics 4 Beschreibung

**Empfehlung:** Professionelle Datenschutzerklaerung erstellen lassen (z.B. ueber einen Rechtsanwalt oder einen Generator wie e-recht24.de).

#### c) Cookie-Richtlinie
Cookiebot kann automatisch eine Cookie-Richtlinie generieren. Diese sollte auf der Website verlinkt werden.

### 3.5 Empfohlene Massnahmen

| Prioritaet | Massnahme | Status |
|---|---|---|
| HOCH | Impressum erstellen | Ausstehend |
| HOCH | Datenschutzerklaerung erstellen | Ausstehend |
| MITTEL | Cookie-Richtlinie von Cookiebot verlinken | Ausstehend |
| MITTEL | Google Fonts lokal hosten (um Google-Server-Anfragen zu vermeiden) | Optional |
| NIEDRIG | Google Maps erst nach Cookie-Consent laden | Optional |

---

## Kontakt fuer technische Fragen

Bei technischen Fragen zur Website wenden Sie sich an Ihren Webentwickler.

---

*Dokumentation erstellt: Februar 2026*
