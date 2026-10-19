import type { Dictionary } from "./types";

/**
 * Deutsche Textfassung v3 (redaktionelle Leitfassung, 19.10.2026) plus
 * Positionierung «Von der Idee bis zum fertigen Raum» mit dem Rollenmodell
 * Crafted by us / Designed with us / Delivered together.
 * Operative Zusagen sind mit «OP» kommentiert und brauchen die Freigabe von
 * Limani, bevor die Seite öffentlich geht (COPY_REVIEW.md).
 */
export const de: Dictionary = {
  meta: {
    siteName: "SARTO",
    titleTemplate: "%s · SARTO",
    description:
      "SARTO verbindet Innenarchitektur, Materialgestaltung und massgefertigten Innenausbau. Küchen, Ankleiden, Badmöbel und Einbauten mit eigener Fertigung. Showroom in Spreitenbach.",
    ogDescription: "Handwerk, das Raum wird. Von der Idee bis zum fertigen Raum.",
  },
  nav: {
    labels: {
      projects: "Projekte",
      expertise: "Leistungen",
      professionals: "Für Architekten",
      developers: "Für Entwickler",
      craft: "Handwerk",
      story: "Über SARTO",
      showroom: "Showroom",
      contact: "Kontakt",
      imprint: "Impressum",
      privacy: "Datenschutz",
    },
    menu: "Menü",
    close: "Schliessen",
    cta: "Projekt besprechen",
    switchLabel: "Sprache wechseln",
    skip: "Zum Inhalt",
  },
  common: {
    concept: "Konzept",
    conceptLong: "Konzeptstudie, kein ausgeführtes Projekt",
    visual: "Visualisierung",
    imageToFollow: "Bild folgt",
    toVerify: "wird ergänzt",
    readMore: "Mehr erfahren",
    back: "Zurück",
    categories: {
      kitchens: "Küche",
      wardrobes: "Ankleide",
      bathrooms: "Badmöbel",
      interiors: "Innenausbau",
      hospitality: "Hospitality",
      workplace: "Büro & Gewerbe",
      residences: "Wohnhäuser",
    },
    gallery: "Bilder",
    facts: "Eckdaten",
    nextProject: "Nächstes Projekt",
    allProjects: "Alle Projekte",
    pendingNote: "Referenzfreigabe in Arbeit: Leistungsumfang, Jahr und Publikationsrechte werden bestätigt.",
  },
  home: {
    hero: {
      kicker: "SARTO · The craft of finished spaces.",
      headline: "Handwerk, das Raum wird.",
      sub: "Individuelle Küchen, Ankleiden und Innenausbauten. Durchdacht in der Gestaltung. Sorgfältig gefertigt. Bis ins Detail.",
      primary: "Arbeiten entdecken",
      secondary: "Projekt besprechen",
    },
    work: {
      eyebrow: "Ausgewählte Arbeiten",
      headline: "Räume mit Handschrift.",
      intro: [
        "Kein Raum ist wie der andere. Seine Architektur, seine Materialien und die Menschen, die ihn nutzen, machen ihn einzigartig.",
        "Wir fertigen Einbauten, die sich in dieses Zusammenspiel einfügen. Manchmal als bewusster Akzent. Manchmal so selbstverständlich, als wären sie schon immer Teil des Raums gewesen.",
      ],
      cta: "Ausgewählte Arbeiten entdecken",
      note: "Gezeigt werden ausgeführte Projekte mit eigenen Fotografien. Konzeptstudien sind als solche bezeichnet.",
    },
    expertise: {
      eyebrow: "Leistungen",
      headline: "Auf Mass. Bis ins Detail.",
      intro: [
        "Manche Räume verlangen nach einer besonderen Lösung. Andere nach der Kunst, das Wesentliche auf den Punkt zu bringen.",
        "SARTO fertigt individuelle Innenausbauten, abgestimmt auf Architektur, Nutzung und Material. Je nach Auftrag ein einzelnes Element, ein zusammenhängendes Raumkonzept oder ein Leistungspaket für mehrere Einheiten.",
      ],
      cta: "Ansehen",
    },
    craft: {
      eyebrow: "Handwerk",
      headline: "Die Kunst liegt im Detail.",
      intro: [
        "In der Maserung eines Furniers. Im Übergang zweier Materialien. In einer Kante, die präzise abschliesst. Es sind diese scheinbar kleinen Entscheidungen, die einem Innenraum seinen Charakter geben.",
        "Hinter SARTO steht die Fertigungskompetenz von Limani, einem Familienunternehmen, in dem Wissen und Erfahrung über Generationen weitergegeben wurden. Hier treffen handwerkliches Können und moderne Fertigung aufeinander. Nicht als Gegensatz, sondern als Grundlage für Arbeit, die Bestand haben soll.",
      ],
      themes: [
        { title: "Furnier.", text: "Nach Bild gelegt, nicht nach Nummer. Das Muster läuft über die ganze Front." }, // OP
        { title: "Verbindung.", text: "Gehrung, Schattenfuge, Nut. Wo zwei Flächen sich treffen, zeigt sich die Arbeit." },
        { title: "Oberfläche.", text: "Geölt, lackiert oder gebürstet. Die Haptik ist Teil des Entwurfs." },
        { title: "Die Hand.", text: "Maschinen schneiden präzise. Das Anpassen vor Ort macht ein Mensch." },
      ],
      cta: "Unser Handwerk kennenlernen",
    },
    audiences: {
      eyebrow: "Zusammenarbeit",
      headline: "Zwei Wege zu SARTO.",
      cards: [
        {
          key: "professionals",
          label: "Für Architekten",
          title: "Ihr Entwurf. Unser Handwerk.",
          text: "Technische Entwicklung, Materialabstimmung und handwerkliche Realisierung. Ihr gestalterischer Anspruch bleibt der Massstab.",
          cta: "Zusammenarbeit entdecken",
          image: "corner",
        },
        {
          key: "developers",
          label: "Für Entwickler",
          title: "Individuell im Anspruch. Durchdacht in der Serie.",
          text: "Einzelobjekte, Wohnentwicklungen und ausgewählte Hospitality-Projekte: massgefertigt oder als wiederholbares Paket je Wohnungstyp.",
          cta: "Angebot für Entwickler",
          image: "mfh9-07",
        },
      ],
    },
    showroom: {
      eyebrow: "Showroom Spreitenbach",
      headline: "Material sehen. Räume erleben.",
      intro: [
        "Wie fühlt sich eine Oberfläche an? Wie verändert Licht die Wirkung eines Materials? Und wie selbstverständlich kann sich ein Einbau in einen Raum einfügen? Unser geplanter Showroom macht diese Fragen erlebbar.",
        "Küchen, Ankleiden, Badmöbel und ausgewählte Innenausbauten werden hier nicht isoliert gezeigt, sondern als Teil zusammenhängender Wohnwelten. Ein Ort, um Materialien zu entdecken, Möglichkeiten zu vergleichen und Ideen gemeinsam weiterzudenken.",
      ],
      zonesLabel: "Bereiche",
      cta: "Showroom entdecken",
      status: "In Planung. Industriestrasse 160/162, 8957 Spreitenbach. Eröffnung wird bekannt gegeben.",
    },
    final: {
      headline: "Erzählen Sie uns von Ihrem Vorhaben.",
      copy: "Ein einzelner Einbau, ein zusammenhängendes Raumkonzept oder ein grösseres Leistungspaket: Wir melden uns mit einer ersten Einschätzung.",
      primary: "Privates Projekt besprechen",
      secondary: "Als Architekt oder Entwickler anfragen",
    },
  },
  projects: {
    eyebrow: "Projekte",
    headline: "Räume mit Handschrift.",
    intro: "Ausgeführte Arbeiten in Villen, Chalets, Wohnüberbauungen und denkmalgeschützten Altstadthäusern: Küchen, Ankleiden, Weinkeller, Türen, Einbauten und Badmöbel, vom Einzelstück bis zur Serie von 58 Wohnungen und über 15 Büroflächen, gefertigt bei Limani.",
    note: "Weitere Referenzen werden dokumentiert. Konzeptstudien sind als solche bezeichnet.",
    filters: {
      residences: "Wohnbauten",
      kitchens: "Küchen",
      wardrobes: "Ankleiden",
      hospitality: "Hospitality",
      workplace: "Büro & Gewerbe",
    },
    all: "Alle",
    empty: "In dieser Kategorie sind noch keine freigegebenen Projekte dokumentiert.",
  },
  expertise: {
    eyebrow: "Leistungen",
    headline: "Von der Idee bis zum fertigen Raum.",
    intro: "SARTO verbindet Innenarchitektur, Materialgestaltung und massgefertigten Innenausbau. Wir entwickeln individuelle Raumkonzepte, beraten bei der Materialwahl und begleiten die Umsetzung bis zur Fertigstellung der vereinbarten Arbeiten, mit eigener Schreinerfertigung und ausgewählten Fachpartnern.",
    detailCta: "Projekt besprechen",
    otherLabel: "Weitere Bereiche",
    worldsLabel: "Vier Produktwelten",
    worldsHeadline: "Auf Mass. Bis ins Detail.",
    areas: {
      label: "Sechs Leistungsbereiche",
      headline: "Was wir selbst leisten. Und was mit Partnern entsteht.",
      intro: "SARTO ist Partner für Konzeption, Gestaltung und Realisierung massgefertigter Innenräume. Wir müssen nicht alle Gewerke selbst ausführen. Die Stärke liegt in der Verbindung von Interior Design, Materialkompetenz, eigener Fertigung und koordinierter Umsetzung. Was woher kommt, sagen wir offen.",
      roles: {
        crafted: { title: "Crafted by us", text: "Eigene Schreinerfertigung und massgefertigte Einbauten." },
        designed: { title: "Designed with us", text: "Innenarchitektur, Planung und Materialkonzeption, je nach Projekt mit eigenen oder externen Spezialisten." },
        delivered: { title: "Delivered together", text: "Ergänzende Leistungen, Lieferung und Montage mit ausgewählten Partnern." },
      },
      items: [
        { n: "01", title: "Interior Architecture & Design", text: "Raumkonzepte, Grundrissoptimierung, Gestaltung, Visualisierungen und Entwicklung individueller Innenausbaulösungen.", role: "designed" },
        { n: "02", title: "Materials & Finishes", text: "Materialkonzepte, Oberflächen, Furniere, Stein, Beschläge, Farben und aufeinander abgestimmte Materialwelten. Bemustert am Original.", role: "designed" },
        { n: "03", title: "Bespoke Manufacturing", text: "Eigene Fertigung von Küchen, Ankleiden, Einbauschränken, Badmöbeln und weiteren individuellen Schreinerarbeiten über Limani.", role: "crafted" },
        { n: "04", title: "Project Coordination", text: "Ausführungsplanung, technische Abstimmung, Bemusterung, Produktionsvorbereitung und Koordination des vereinbarten Leistungsumfangs.", role: "designed" },
        { n: "05", title: "Installation & Execution", text: "Lieferung, fachgerechte Montage, Qualitätskontrolle und Übergabe. Eigene Ausführung oder qualifizierte Montagepartner.", role: "delivered" },
        { n: "06", title: "Complementary Solutions", text: "Ergänzende Produkte und Gewerke über ausgewählte Partner, projektbezogen koordiniert.", role: "delivered" },
      ],
      note: "SARTO übernimmt nicht automatisch alle Gewerke und tritt nicht als Generalunternehmer auf. Welche Leistungen wir selbst erbringen und welche mit Partnern entstehen, halten wir vor Projektstart schriftlich fest.",
    },
    entries: [
      {
        key: "kitchens",
        title: "Küchen",
        short: "Mehr als ein Ort zum Kochen. Ein Raum, in dem Gestaltung, Funktion und Alltag zusammenfinden.",
        lede: "Die Küche ist der meistgenutzte Raum im Haus. Sie muss täglich funktionieren und über Jahre gut aussehen.",
        materials: {
          title: "Womit wir arbeiten",
          text: "Eiche und Nussbaum, gleichwertig, dazu Räuchereiche: als Furnier oder Massivholz, die Wahl folgt Licht und Raum. Naturstein, Keramik und Edelstahl für Abdeckungen. Lack mit offener oder geschlossener Pore. Messing, Bronze oder Schwarzstahl für Griffprofile und Kanten.",
        },
        applications: {
          title: "Wo es zum Einsatz kommt",
          items: ["Wohnküchen mit Insel und Hochschrankwand", "Küchen als Teil einer Wandverkleidung", "Nebenräume: Vorratsraum, Bar, Hauswirtschaft", "Aussenküchen in gedeckten Bereichen"],
        },
        options: {
          title: "Ihre Optionen",
          items: ["Grifflos mit Griffprofil oder Tip-on", "Fronten durchlaufend furniert", "Beleuchtung in der Schattenfuge", "Geräte integriert oder bewusst sichtbar"],
        },
        execution: {
          title: "Umsetzung",
          text: "Aufmass am Bau, Werkstattzeichnung mit Gerätespiegel, Abstimmung mit Sanitär und Elektro. Fertigung bei Limani, Prüfung vor Versand, Montage koordiniert mit der Baustelle. Der Leistungsumfang wird je Projekt vereinbart.", // OP
        },
        image: "kitchen-light",
      },
      {
        key: "wardrobes",
        title: "Ankleiden & Einbauschränke",
        short: "Stauraum, der nicht wie Stauraum wirkt. Durchdacht bis ins Innere, abgestimmt auf den Raum.",
        lede: "Eine Ankleide ist ein Raum, kein Schrank. Sie ordnet, zeigt und verbirgt, und sie braucht ein eigenes Licht.",
        materials: {
          title: "Womit wir arbeiten",
          text: "Furnierte Fronten in Nussbaum, Eiche oder gebeizter Esche. Innenausbau in Leder, Filz, Glas und Metall. Stoffbespannte Rückwände, Spiegelflächen, Ablagen aus Stein.",
        },
        applications: {
          title: "Wo es zum Einsatz kommt",
          items: ["Begehbare Ankleiden", "Schrankwände in Schlafzimmern und Fluren", "Garderoben im Eingang", "Stauraum unter Dachschrägen und in Nischen"],
        },
        options: {
          title: "Ihre Optionen",
          items: ["Offene Regale mit Lichtkanten", "Geschlossene Fronten mit Schattenfuge", "Schubladen nach Garderobeninventar eingeteilt", "Kleiderlifte, Hosenauszüge, Schmuckeinsätze"],
        },
        execution: {
          title: "Umsetzung",
          text: "Planung ab Grundriss, Innenaufteilung nach Ihrem Garderobeninventar, Lichtplanung mit dem Elektriker. Fertigung bei Limani, Montage koordiniert vor Ort. Leistungsumfang je Projekt vereinbart.",
        },
        image: "wardrobe",
      },
      {
        key: "bathrooms",
        title: "Badmöbel",
        short: "Klare Formen, sorgfältig gewählte Materialien und Lösungen, die Ruhe in den Raum bringen.",
        lede: "Im Bad treffen Wasser, Stein und Holz aufeinander. Das verlangt Trägermaterial, das hält, und Fugen, die dicht bleiben.",
        materials: {
          title: "Womit wir arbeiten",
          text: "Feuchtraumgeeignete Trägerplatten mit Furnier oder Lack. Naturstein, Keramik und Mineralwerkstoff für Abdeckungen und Becken. Beschläge und Griffe in abgestimmten Metallen.",
        },
        applications: {
          title: "Wo es zum Einsatz kommt",
          items: ["Waschtischmöbel mit integrierten Becken", "Spiegelschränke und Wandnischen", "Hochschränke und Wäschelösungen", "Gäste-WC und Masterbad"],
        },
        options: {
          title: "Ihre Optionen",
          items: ["Schwebend oder bodenstehend", "Abdeckung und Front aus einem Stück", "Indirekte Beleuchtung", "Spiegel mit integriertem Licht"],
        },
        execution: {
          title: "Umsetzung",
          text: "Abstimmung mit Sanitärplanung und Plattenleger, Werkstattzeichnung mit Anschlüssen. Fertigung bei Limani, Montage koordiniert. Leistungsumfang je Projekt vereinbart.",
        },
        image: "bath",
      },
      {
        key: "interiors",
        title: "Architektonischer Innenausbau",
        short: "Wandverkleidungen, Türen, Einbauten und individuelle Möbel, die Architektur und Einrichtung miteinander verbinden.",
        lede: "Wo Möbel aufhören und Architektur beginnt: Wandsysteme, Einbauten und Türen in einer Flucht.",
        materials: {
          title: "Womit wir arbeiten",
          text: "Eiche oder Nussbaum, furniert oder massiv, dazu Lackoberflächen, Stein, Metall und Textil. Akustisch wirksame Flächen, wo der Raum es verlangt.",
        },
        applications: {
          title: "Wo es zum Einsatz kommt",
          items: ["Wandverkleidungen und Türen in einer Flucht", "Bibliotheken und Medienwände", "Raumteiler und Einbauten in Fluren", "Empfangsbereiche und Hospitality, ausgewählt"],
        },
        options: {
          title: "Ihre Optionen",
          items: ["Flächenbündige Türen und Fronten", "Verdeckte Beschläge", "Fugenbild über Wand und Möbel durchlaufend", "Integrierte Technik und Beleuchtung"],
        },
        execution: {
          title: "Umsetzung",
          text: "Planung mit Architektur und Bauleitung, Werkstattzeichnung, Bemusterung. Fertigung bei Limani, Montage koordiniert. Leistungsumfang je Projekt vereinbart.",
        },
        image: "corridor",
      },
    ],
  },
  professionals: {
    eyebrow: "Für Architekten",
    headline: "Ihr Entwurf. Unser Handwerk.",
    lede: "Eine gute Idee verdient eine Ausführung, die ihr gerecht wird.",
    intro: [
      "SARTO unterstützt Architekten und Innenarchitekten bei der Realisierung anspruchsvoller Innenausbauten. Von der technischen Abstimmung und Materialbemusterung über die Fertigung bis zur vereinbarten Montage.",
      "Bei Projekten mit bestehender Architektur übernehmen wir die gewünschten Teilbereiche und respektieren die gestalterische Verantwortung. Ihr gestalterischer Anspruch bleibt der Massstab. Unser Handwerk macht ihn sichtbar.",
    ],
    pillars: [
      { title: "Ein Ansprechpartner", text: "Von der Planprüfung bis zur Übergabe. Entscheide werden schriftlich festgehalten." },
      { title: "Werkstattzeichnungen", text: "Schnitte, Gerätespiegel und Anschlusspläne auf Basis Ihrer Pläne. Freigabe vor Produktionsstart." },
      { title: "Bemusterung", text: "Echte Muster von Furnier, Stein, Lack und Metall. Auf Wunsch Mustertafeln für die Bauherrschaft." },
      { title: "Termine", text: "Vereinbarte Daten für Fertigung und Lieferung, abgestimmt auf den Bauablauf." }, // OP
      { title: "Qualitätskontrolle", text: "Prüfung vor dem Versand, dokumentiert." }, // OP
      { title: "Montage", text: "Eigene Ausführung oder qualifizierte Montagepartner, koordiniert mit Bauleitung und Nebengewerken." },
    ],
    collaboration: {
      eyebrow: "Ablauf",
      headline: "So arbeiten wir mit Ihnen.",
      steps: [
        { n: "01", title: "Planprüfung", text: "Wir lesen Ihren Entwurf und melden, was technisch zu klären ist." },
        { n: "02", title: "Bemusterung", text: "Material und Oberflächen werden am Muster entschieden." },
        { n: "03", title: "Werkstattzeichnung", text: "Detaillierung, Freigabe, Produktionsstart." },
        { n: "04", title: "Fertigung und Montage", text: "Produktion bei Limani, Prüfung, Lieferung und Montage nach Bauprogramm." },
      ],
    },
    cta: {
      headline: "Ein Projekt besprechen.",
      text: "Senden Sie uns Pläne oder eine kurze Beschreibung. Sie erhalten eine erste Einschätzung zu Machbarkeit, Ablauf und Terminen.",
      button: "Projekt anfragen",
    },
  },
  developers: {
    eyebrow: "Für Entwickler",
    headline: "Individuell im Anspruch. Durchdacht in der Serie.",
    lede: "Von exklusiven Einzelobjekten bis zu grösseren Wohnentwicklungen: SARTO verbindet Gestaltung, Materialkompetenz und massgefertigten Innenausbau mit projektbezogener Planung und Fertigung.",
    intro: [
      "Je nach Auftrag realisieren wir einzelne massgefertigte Elemente, zusammenhängende Innenraumkonzepte oder grössere Leistungspakete über mehrere Wohneinheiten. Individuelle Gestaltung, wo sie Wert schafft. Wiederholbare Lösungen, wo sie Sicherheit geben.",
      "Ein Ansprechpartner für den Innenausbau. Ein gemeinsamer Anspruch an das Ergebnis. Welche Leistungen SARTO selbst erbringt und welche über Partner erfolgen, wird je Projekt transparent vereinbart.",
    ],
    segmentsLabel: "Drei Projektwelten",
    segments: [
      {
        key: "residences",
        title: "Private Residences",
        text: "Villen, Penthouses und hochwertige Einzelobjekte.",
        points: ["Individuelle Gestaltung ab Konzept", "Materialqualität am Original bemustert", "Ausführungsdetails, die den Entwurf tragen"],
        image: "villa-kitchen",
      },
      {
        key: "developments",
        title: "Residential Developments",
        text: "Mehrfamilienhäuser, Wohnüberbauungen, mehrere Einheiten.",
        points: ["Standardisierung dort, wo sie sinnvoll ist", "Individualisierung dort, wo sie Wert schafft", "Küchen-, Schrank- und Badmöbelpakete je Wohnungstyp"],
        image: "ueberbauung-04",
      },
      {
        key: "hospitality",
        title: "Hospitality & Commercial",
        text: "Hotels, Serviced Apartments, ausgewählte Gewerbeflächen.",
        points: ["Einheitliche Material- und Ausführungsstandards", "Wiederholbare Einheiten über mehrere Räume", "Abstimmung mit Betreiber und Bauleitung"],
        image: "hotel-truss",
      },
    ],
    themesLabel: "Was ein Projekt braucht",
    themesHeadline: "Sechs Dinge, die wir für Entwickler lösen.",
    themes: [
      { title: "Materialqualität", text: "Abgestimmte Materialwelten je Wohnungstyp. Bemustert am Original, nicht am Bildschirm." },
      { title: "Technische Planung", text: "Werkstattzeichnungen, Gerätespiegel und Anschlusspläne auf Basis der Ausführungsplanung." },
      { title: "Bemusterung", text: "Ein sauberer Bemusterungsprozess mit Mustertafeln für Käufer und Bauherrschaft." },
      { title: "Wirtschaftliche Fertigung", text: "Wiederkehrende Elemente in Serie gefertigt, Varianten gezielt gesetzt. Belastbare Stückkosten je Einheit." },
      { title: "Wiederholbare Einheiten", text: "Küche, Badmöbel und Schrankpaket als definierter Standard pro Wohnungstyp, mit Optionen für Käufer." },
      { title: "Projektkoordination", text: "Phasenweise Lieferung und projektbezogene Montageplanung, abgestimmt mit Bauleitung und Nebengewerken." },
    ],
    process: {
      eyebrow: "Ablauf",
      headline: "Vom Projektgespräch zur Übergabe.",
      steps: [
        { n: "01", title: "Projektgespräch", text: "Objekttyp, Einheiten, Leistungsumfang, Realisierungszeitraum. Wir klären, was das Projekt braucht." },
        { n: "02", title: "Konzept und Standards", text: "Material- und Ausbaustandards je Wohnungstyp, mit definierten Optionen." },
        { n: "03", title: "Bemusterung und Kalkulation", text: "Mustertafeln, Werkstattzeichnungen und eine projektbezogene Kalkulation je Einheit." },
        { n: "04", title: "Fertigung in Serie", text: "Produktion bei Limani, wiederkehrende Elemente in Serie, Prüfung vor Versand." }, // OP
        { n: "05", title: "Phasenweise Lieferung und Montage", text: "Lieferung nach Bauprogramm, Montage je Etappe, Übergabe pro Einheit." },
      ],
      note: "Kapazität, Termine und Leistungsumfang werden projektbezogen vereinbart. Wir machen keine pauschalen Zusagen.",
    },
    cta: {
      headline: "Ein Projekt einordnen.",
      text: "Projektstandort, Objekttyp, Anzahl Einheiten, gewünschter Leistungsumfang und Realisierungszeitraum: Mit diesen Angaben geben wir eine erste Einschätzung.",
      button: "Projekt besprechen",
    },
  },
  craft: {
    eyebrow: "Handwerk",
    headline: "Die Kunst liegt im Detail.",
    lede: "Was SARTO liefert, entsteht in der Werkstatt von Limani. Hier wird gemessen, gewählt, geschnitten und gefügt.",
    chapters: [
      {
        eyebrow: "Furnier",
        headline: "Nach Bild gelegt, nicht nach Nummer.",
        text: "Das Furnier wird so gelegt, dass das Muster über die ganze Front läuft. Stein wird nach Ader geschnitten, Metall nach Ton gewählt.", // OP
        image: "samples",
      },
      {
        eyebrow: "Verbindung",
        headline: "Wo zwei Flächen sich treffen.",
        text: "Gehrung, Schattenfuge, Nut. Die Verbindung ist das Detail, das man erst bemerkt, wenn es fehlt.",
        image: "corner",
      },
      {
        eyebrow: "Die Hand",
        headline: "Die letzte Passung macht ein Mensch.",
        text: "Maschinen schneiden präzise. Das Anpassen vor Ort, das Prüfen der Oberfläche, das Einstellen der Front bleibt Handarbeit.",
        image: "hands",
      },
    ],
    process: {
      eyebrow: "Prozess",
      headline: "Vom Entwurf bis zum Einbau.",
      steps: [
        { n: "01", title: "Gespräch und Projektprüfung", text: "Wir lesen Pläne, hören zu und klären, was der Raum braucht." },
        { n: "02", title: "Entwurfsabstimmung und Materialwahl", text: "Furnier, Stein, Lack, Metall. Entschieden am Muster, nicht am Bildschirm." },
        { n: "03", title: "Technische Detaillierung und Freigabe", text: "Werkstattzeichnungen, Fugenbild, Beschläge. Freigabe vor der ersten Platte." },
        { n: "04", title: "Fertigung und Qualitätskontrolle", text: "Produktion in der Werkstatt von Limani. Prüfung vor dem Versand." }, // OP
        { n: "05", title: "Lieferung, Montage und Übergabe", text: "Abgestimmt mit der Baustelle. Übergeben, wenn alles sitzt." },
      ],
      note: "Der Leistungsumfang wird für jedes Projekt einzeln vereinbart. Nicht jede Stufe ist in jedem Projekt Teil des Auftrags.",
    },
    production: {
      eyebrow: "Produktion",
      headline: "Vom Zuschnitt zur Übergabe.",
      steps: [
        { title: "Zuschnitt und Furnierung", text: "Trägerplatten werden zugeschnitten, Furnier nach Plan gelegt und gepresst." },
        { title: "Verbindung und Kante", text: "Gehrungen, Nuten und Kanten werden gefertigt und geprüft." },
        { title: "Oberfläche", text: "Schleifen, Ölen, Lackieren. Die Oberfläche wird in mehreren Gängen aufgebaut." },
        { title: "Vormontage und Kontrolle", text: "Korpusse werden in der Werkstatt aufgebaut und geprüft, bevor sie die Halle verlassen." }, // OP
        { title: "Transport und Montage", text: "Verpackt, geliefert, montiert. Koordiniert mit der Baustelle." },
      ],
    },
  },
  story: {
    eyebrow: "Über SARTO",
    headline: "Die Kunst, Räume zu schneidern.",
    lede: "SARTO ist der Name. Limani ist die Werkstatt. Dazwischen liegt die Überzeugung, dass ein Einbau erst fertig ist, wenn er zur Architektur gehört.",
    name: {
      headline: "Der Name.",
      text: [
        "Sarto ist das italienische Wort für Schneider. Ein Schneider fertigt nicht für einen Durchschnitt, sondern für einen Menschen: seine Masse, seine Haltung, seine Art, sich zu bewegen.",
        "SARTO fertigt für einen Raum. Für seine Proportionen, sein Licht und die Menschen, die darin leben. Ein Einbau von SARTO ist kein Möbel, das in einen Raum gestellt wird. Er gehört zum Haus.",
      ],
    },
    limani: {
      headline: "Die Werkstatt.",
      text: [
        "Hinter SARTO steht Limani, ein Familienunternehmen mit eigener Fertigung. Das Wissen über Holz, Furnier und Verbindung wird dort weitergegeben: von Hand zu Hand, von Generation zu Generation.",
        "SARTO ist die Marke, die Sie sehen. Limani ist die Werkstatt, die baut. Ergänzende Leistungen realisieren wir mit ausgewählten Partnern und sagen offen, was wir selbst leisten und was mit Partnern entsteht.",
      ],
      note: "Geschichte, Standort und Kennzahlen von Limani werden ergänzt, sobald sie verifiziert sind.",
    },
    values: [
      { title: "Ruhige Sicherheit", text: "Wir müssen nicht laut sein. Die Arbeit spricht." },
      { title: "Materialverstand", text: "Wir kennen Holz, Stein und Metall und wissen, was sie an welchem Ort tun." },
      { title: "Architektonische Disziplin", text: "Fugen, Fluchten, Proportionen folgen dem Haus, nicht dem Katalog." },
      { title: "Zeitlose Form", text: "Wir bauen für Jahrzehnte, nicht für eine Saison." },
    ],
    cta: "Projekt besprechen",
  },
  showroom: {
    eyebrow: "Showroom Spreitenbach",
    headline: "Material sehen. Räume erleben.",
    lede: "Der SARTO Showroom an der Industriestrasse 160/162 in Spreitenbach ist als Haus gedacht, nicht als Ausstellung: Räume zum Begehen, in denen Material, Verarbeitung und fertige Lösung an einem Ort zu beurteilen sind.",
    status: "In Planung. Die Angaben beruhen auf der Entwurfsplanung von POSTARCH (Stand 14.10.2026) und können sich ändern. Eröffnung wird bekannt gegeben.",
    factsLabel: "Eckdaten",
    facts: [
      { value: "12", label: "Bereiche zum Begehen" },
      { value: "2", label: "Küchen in zwei Materialwelten" },
      { value: "18 m²", label: "Materialbibliothek" },
      { value: "12", label: "Plätze am Tisch im Innenhof" },
    ],
    zonesLabel: "Bereiche",
    zones: [
      { id: "kitchen-2", title: "Küche in Nussbaum und Stein", text: "Fronten in dunklem Nussbaum, Insel mit Steinabdeckung, Geräte von Miele und Bora, Armatur von Gessi.", area: "19 m²", surface: "walnut-dark", image: "hero-kitchen" },
      { id: "kitchen-1", title: "Küche in hellem Lack", text: "Ruhige Zeile mit Hochschränken, Abdeckung in Keramik. Die zweite Materialwelt, bewusst anders.", area: "13 m²", surface: "ivory", image: "kitchen-light" },
      { id: "wardrobe", title: "Begehbare Ankleide", text: "Fronten in Sablé-Ton, Glastüren, Insel mit Glasabdeckung und beleuchteten Fächern.", area: "15 m²", surface: "cocoa", image: "wardrobe" },
      { id: "bedroom", title: "Schlafen und Stauraum", text: "Schrankwand mit Spiegeltüren, Schminktisch mit Steinplatte und Schmuckeinsätzen.", area: "16 m²", surface: "oak", image: "bedroom" },
      { id: "library", title: "Materialbibliothek", text: "Furniere, Steine, Lacke, Metalle und Beschläge zum Anfassen. Mit Mustertisch aus Stein.", area: "18 m²", surface: "stone-light", image: "samples-dark" },
      { id: "bath", title: "Bad", text: "Freistehende Wanne, Doppelwaschtisch in Stein mit Nussbaumunterbau, Spiegelschränke.", area: "7 m²", surface: "stone", image: "bath" },
      { id: "shower", title: "Dusche und WC", text: "Stein an Wand und Boden, Waschtisch mit Spiegelschrank. Die kompakte Lösung.", surface: "stone", image: "shower" },
      { id: "wine", title: "Weinkeller", text: "Regale aus Nussbaum, drei Weinkühler von Miele hinter Glas.", area: "8 m²", surface: "walnut-dark", image: "wine" },
      { id: "office", title: "Büro", text: "Wandverkleidung in Nussbaum, Regal in Stein, Pocket Door. Innenausbau, wie er im Haus vorkommt.", area: "12 m²", surface: "walnut", image: "door" },
      { id: "consultation", title: "Beratung", text: "Ovaler Tisch, Medienwand, Garderobe. Hier werden Projekte besprochen und Muster entschieden.", area: "14 m²", surface: "walnut", image: "dining-wine" },
      { id: "utility", title: "Reduit", text: "Waschmaschine und Trockner von Miele, Abdeckung in Travertin. Auch der Nebenraum ist gestaltet.", area: "4 m²", surface: "ivory" },
      { id: "courtyard", title: "Innenhof", text: "Olivenbaum, Tisch für zwölf, Aussenküche mit Grill. Der Showroom endet nicht an der Tür.", surface: "stone-light", image: "olive" },
    ],
    planLabel: "Grundriss",
    planCaption: "Entwurfsplanung POSTARCH, Stand 14.10.2026. Nicht massstäblich, Änderungen vorbehalten.",
    materialsLabel: "Materialien im Showroom",
    materials: ["Cleaf Fronda S156 (Nussbaum)", "Cleaf Sablé LR27", "Cleaf Ovatta UB19", "Mirage Taj Mahal", "Mirage Travertine", "Cosentino Dekton Nomak", "Éclos Eclectic Veins"],
    partnersLabel: "Geräte und Armaturen",
    partners: ["Miele", "Bora", "Gessi", "Dornbracht", "Grohe", "Flammkraft"],
    experience: {
      headline: "Als Haus gedacht.",
      text: [
        "Im Showroom stehen keine Möbel in Reihe. Sie gehen durch eine Küche mit Fenster, eine Ankleide mit Türe, ein Bad mit Wasser.",
        "So lässt sich beurteilen, was am Bildschirm nicht zu beurteilen ist: Haptik, Licht auf der Oberfläche, die Fuge im Streiflicht.",
      ],
    },
    visit: {
      headline: "Privater Besuch.",
      text: "Besuche finden nach Vereinbarung statt, mit Zeit für Ihr Projekt. Hinterlassen Sie uns Ihre Kontaktdaten, wir melden uns zur Terminabstimmung, sobald der Showroom eröffnet ist.",
      button: "Besuch vormerken",
      addressLabel: "Adresse",
      mapLabel: "Karte öffnen",
    },
  },
  contact: {
    eyebrow: "Kontakt",
    headline: "Erzählen Sie uns von Ihrem Vorhaben.",
    lede: "Ein einzelner Einbau, ein Raumkonzept oder ein Leistungspaket für mehrere Einheiten. Wählen Sie den Weg, der zu Ihnen passt.",
    form: {
      pathLabel: "Ihr Anliegen",
      paths: {
        private: { label: "Privates Projekt", text: "Für Bauherren, Eigentümer und Familien." },
        professional: { label: "Architekten", text: "Für Architekten und Innenarchitekten." },
        developer: { label: "Entwickler", text: "Für Projektentwickler, Investoren und Betreiber." },
      },
      name: "Name",
      email: "E-Mail",
      phone: "Telefon (optional)",
      company: "Büro / Unternehmen",
      location: "Projektstandort",
      projectType: "Projektart",
      projectTypes: ["Küche", "Ankleide / Einbauschränke", "Badmöbel", "Innenausbau", "Gesamtes Interieur", "Anderes"],
      stage: "Planungsstand",
      stages: ["Erste Idee", "Entwurf liegt vor", "Baubewilligung erteilt", "Im Bau", "Umbau / Renovation"],
      objectType: "Objekttyp",
      objectTypes: ["Villa / Einzelobjekt", "Mehrfamilienhaus", "Wohnüberbauung", "Hotel / Serviced Apartments", "Gewerbe", "Anderes"],
      units: "Anzahl Einheiten",
      scope: "Gewünschter Leistungsumfang",
      scopes: ["Küchen", "Einbauschränke / Ankleiden", "Badmöbel", "Innenausbau", "Innenarchitektur / Materialkonzept", "Montage"],
      timeframe: "Geplanter Realisierungszeitraum",
      timeframes: ["Innerhalb von 6 Monaten", "6 bis 12 Monate", "12 bis 24 Monate", "Später / offen"],
      message: "Beschreibung (optional)",
      messageHint: "Raum, Wünsche, Zeitrahmen. Alles, was uns hilft, Ihr Vorhaben zu verstehen.",
      files: "Pläne oder Referenzbilder (optional)",
      filesHint: "PDF, JPG, PNG. Bis 10 MB pro Datei.",
      consent: "Ich bin einverstanden, dass SARTO meine Angaben zur Bearbeitung der Anfrage verwendet.",
      submit: "Anfrage senden",
      sending: "Wird gesendet",
      success: {
        title: "Danke für Ihre Anfrage.",
        text: "Wir melden uns innert weniger Arbeitstage persönlich bei Ihnen.",
      },
      error: "Die Anfrage konnte nicht übermittelt werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an",
      required: "Pflichtfeld",
    },
    direct: {
      headline: "Direkt",
      address: "Showroom und Beratung",
      email: "E-Mail",
      phone: "Telefon",
      hours: "Nach Vereinbarung",
      showroom: "Showroom in Planung, Besuche nach Eröffnung.",
    },
    showroomCta: "Zum Showroom",
  },
  legal: {
    imprint: {
      title: "Impressum",
      text: [
        "SARTO ist eine Marke der Fernsicht Immobilien AG.",
        "Fernsicht Immobilien AG, Industriestrasse 160/162, 8957 Spreitenbach, Schweiz.",
        "E-Mail: contact@sarto-interiors.ch.",
        "Fertigung: Limani. Showroom-Planung: POSTARCH.",
      ],
    },
    privacy: {
      title: "Datenschutz",
      text: [
        "Verantwortliche Stelle ist die Fernsicht Immobilien AG, Industriestrasse 160/162, 8957 Spreitenbach. Diese Datenschutzerklärung wird nach Klärung der eingesetzten Dienste (Hosting, Formularverarbeitung, Analyse) gemäss Schweizer Datenschutzgesetz (DSG) vervollständigt. TO_VERIFY.",
        "Angaben aus dem Kontaktformular werden ausschliesslich zur Bearbeitung der Anfrage verwendet und nicht an Dritte weitergegeben.",
      ],
    },
  },
  footer: {
    claim: "The craft of finished spaces.",
    statement: "Massgefertigter Innenausbau. Handwerk mit Charakter.",
    navLabel: "Navigation",
    legalLabel: "Rechtliches",
    contactLabel: "Kontakt",
    rights: "Alle Rechte vorbehalten.",
    limani: "Manufacturing heritage by Limani.",
    entity: "SARTO ist eine Marke der Fernsicht Immobilien AG.",
  },
};
