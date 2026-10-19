import type { ImageAsset, ImageStatus, Localized, Project, Surface } from "./types";

/**
 * Language-independent site facts.
 * Anything not confirmed carries TO_VERIFY. Nothing here is a claim until
 * the placeholder is replaced with a verified value.
 */
export const site = {
  name: "SARTO",
  claim: "The craft of finished spaces.",
  /** Public origin used for canonical URLs, sitemap and Open Graph. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sarto-interiors.ch",
  /** Legal entity behind SARTO (trading company). Register/UID: TO_VERIFY. */
  legalEntity: "Fernsicht Immobilien AG",
  contact: {
    /** Stated by GH 19.10.2026 as contact@sarto…; domain assumed. TO_VERIFY mailbox exists. */
    email: "contact@sarto-interiors.ch",
    phone: "TO_VERIFY",
    address: {
      street: "Industriestrasse 160/162",
      zip: "8957",
      city: "Spreitenbach",
      canton: "AG",
      country: "Switzerland",
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Industriestrasse+160%2C+8957+Spreitenbach",
  },
  /** Showroom status flag. Do not describe the showroom as open until true. */
  showroomOpen: false,
  /** Design plan: POSTARCH, proposal design, dated 14.10.2026. */
  showroomPlanDate: "14.10.2026",
  showroomArchitect: "POSTARCH",
  social: {} as Record<string, string>,
} as const;

/* ------------------------------------------------------------------ */
/* Image manifest                                                      */
/* ------------------------------------------------------------------ */

type ImgInput = {
  status: ImageStatus;
  src?: string;
  w?: number;
  h?: number;
  surface: Surface;
  gap?: "h" | "v" | "none";
  alt: Localized;
  credit?: Localized;
  brief: string;
};

function img(id: string, i: ImgInput): ImageAsset {
  return { id, status: i.status, src: i.src, width: i.w, height: i.h, surface: i.surface, gap: i.gap ?? "none", alt: i.alt, credit: i.credit, brief: i.brief };
}

/** Concept visuals (moodboards, Oct 2026). Upscaled from the mood tiles; replace with full-resolution renders. */
const concept = (id: string, w: number, h: number, surface: Surface, de: string, en: string, brief = "Concept visual from the SARTO moodboard. Labelled as visual. Replace with full-resolution render or photograph.") =>
  img(id, { status: "CONCEPT_IMAGE", src: `/images/concept/${id}.jpg`, w, h, surface, alt: { de, en }, brief });

/** Real photographs of executed work (reference projects). */
const real = (id: string, w: number, h: number, surface: Surface, de: string, en: string) =>
  img(id, { status: "REAL", src: `/images/projects/${id}.jpg`, w, h, surface, alt: { de, en }, brief: "Reference photograph. Scope and year to be confirmed by Limani (MISSING_ASSETS.md)." });

const GROUP_CREDIT: Localized = { de: "Projekt der Unternehmensgruppe", en: "Group project" };

export const images: Record<string, ImageAsset> = Object.fromEntries(
  [
    /* Hero and atmosphere */
    img("showroom-axo", { status: "CONCEPT_IMAGE", src: "/images/showroom-axo.jpg", w: 1774, h: 887, surface: "cocoa", alt: { de: "Axonometrie des SARTO Showrooms: Eingang, Project Lounge, Ankleide, zwei Küchen, Innenhof", en: "Axonometric view of the SARTO showroom: entrance, project lounge, dressing room, two kitchens, courtyard" }, brief: "Showroom visual based on the POSTARCH plan. Labelled as visual." }),
    concept("hero-kitchen", 1774, 887, "walnut-dark", "Küche aus dunklem Nussbaum mit Natursteininsel, Blick auf See und Berge", "Dark walnut kitchen with a natural stone island, view across lake and mountains", "Hero render (GH, 19.10.2026). Labelled as visual until the first finished SARTO space is photographed."),
    concept("kitchen-light", 1500, 778, "walnut", "Küche mit Steininsel und Nussbaumfronten im Tageslicht", "Kitchen with stone island and walnut fronts in daylight"),
    concept("wardrobe", 1400, 1155, "cocoa", "Begehbare Ankleide aus Nussbaum mit beleuchteten Fächern und Insel", "Walk-in walnut dressing room with lit compartments and island"),
    concept("wardrobe-alt", 1300, 866, "cocoa", "Ankleide mit offenen Regalen und Mittelinsel", "Dressing room with open shelving and central island"),
    concept("bath", 1400, 1161, "stone", "Waschtisch aus Naturstein mit Nussbaumunterbau", "Natural stone vanity with walnut base"),
    concept("door", 1100, 1107, "walnut", "Flächenbündige Nussbaumtüre mit Griffleiste", "Flush walnut door with handle rail"),
    concept("corridor", 1100, 1295, "walnut-dark", "Korridor mit Wandverkleidung aus Nussbaum", "Corridor with walnut wall panelling"),
    concept("corner", 1000, 1333, "stone", "Kante: Naturstein trifft Nussbaumfront", "Edge: natural stone meets walnut front"),
    concept("drawer", 1100, 1370, "walnut", "Auszug mit Steinabdeckung, Detail", "Drawer with stone top, detail"),
    concept("handle", 1100, 814, "walnut-dark", "Griffprofil in Bronze auf Nussbaum", "Bronze handle profile on walnut"),
    concept("hands", 1000, 1392, "oak", "Hände beim Hobeln von Nussbaum", "Hands planing walnut"),
    concept("plane", 1100, 711, "oak", "Handhobel und Späne auf der Werkbank", "Hand plane and shavings on the bench"),
    concept("samples", 1200, 811, "stone-light", "Materialmuster auf Plänen: Nussbaum, Stein, Bronze", "Material samples on drawings: walnut, stone, bronze"),
    concept("samples-dark", 1000, 992, "stone", "Muster: Naturstein, Nussbaum, Textil, Bronze", "Samples: natural stone, walnut, textile, bronze"),
    concept("dining-wine", 1400, 1019, "walnut-dark", "Esszimmer mit Weinvitrine aus Nussbaum und Glas", "Dining room with walnut and glass wine display"),
    concept("wine", 1000, 1110, "walnut-dark", "Weinkeller mit beleuchteten Regalen", "Wine cellar with lit shelving"),
    concept("living", 1400, 1109, "stone", "Wohnraum mit Kamin aus Naturstein und Nussbaumwand", "Living room with natural stone fireplace and walnut wall"),
    concept("olive", 1400, 1050, "stone-light", "Innenhof mit Olivenbaum vor dem Showroom", "Courtyard with olive tree in front of the showroom"),
    concept("bedroom", 1300, 1026, "cocoa", "Schlafzimmer mit Nussbaum-Schrankwand", "Bedroom with walnut wardrobe wall"),
    concept("shower", 1000, 1181, "stone", "Dusche in Naturstein mit Glaswand", "Natural stone shower with glass wall"),
    concept("bedroom-wide", 1200, 717, "cocoa", "Schlafzimmer mit Einbauten und Seesicht", "Bedroom with fitted joinery and lake view"),
    concept("stone-island", 1200, 811, "stone", "Kücheninsel aus Naturstein, Blick auf den See", "Natural stone kitchen island, lake view"),

    /* Reference: family house (efh) */
    real("efh-wardrobe", 1600, 1200, "cocoa", "Einfamilienhaus: Schrankwand in dunkler Eiche mit Glastüren und beleuchteten Fächern", "Family house: dark oak wardrobe wall with glass doors and lit compartments"),
    real("efh-kitchen", 1600, 1200, "cocoa", "Einfamilienhaus: Küche in dunklem Holz mit Steininsel", "Family house: dark wood kitchen with stone island"),
    real("efh-corridor", 1200, 1600, "cocoa", "Einfamilienhaus: Korridor mit durchlaufender Wandverkleidung", "Family house: corridor with continuous wall panelling"),
    real("efh-wall", 1600, 1200, "cocoa", "Einfamilienhaus: Schrankwand, flächenbündig", "Family house: wardrobe wall, flush"),
    real("efh-wardrobe-open", 1200, 1600, "cocoa", "Einfamilienhaus: Ankleide, Glastür geöffnet", "Family house: dressing room, glass door open"),
    real("efh-switch", 1200, 1600, "cocoa", "Einfamilienhaus: Schalter in der Holzverkleidung, Detail", "Family house: switch set into the wood panelling, detail"),
    real("efh-bath", 1600, 1200, "stone", "Einfamilienhaus: Bad in dunklem Marmor mit Waschtisch aus Stein", "Family house: dark marble bathroom with stone vanity"),
    real("efh-tap", 1600, 1200, "stone", "Einfamilienhaus: Armatur in Bronze auf Marmor, Detail", "Family house: bronze tap on marble, detail"),
    real("efh-tub", 1200, 1600, "stone-light", "Einfamilienhaus: freistehende Wanne vor Einbaumöbel", "Family house: freestanding bath in front of fitted joinery"),
    real("efh-bar", 1200, 1600, "cocoa", "Einfamilienhaus: Bar in dunklem Holz", "Family house: bar in dark wood"),

    /* Reference: apartment building, 9 units (mfh9) */
    real("mfh9-07", 1600, 1067, "ivory", "Mehrfamilienhaus: Küche mit Insel, grifflose Fronten und Steinabdeckung", "Apartment building: kitchen with island, handleless fronts and stone worktop"),
    real("mfh9-08", 1600, 1067, "ivory", "Mehrfamilienhaus: Geräteturm mit integrierten Backöfen", "Apartment building: appliance tower with integrated ovens"),
    real("mfh9-09", 1600, 1067, "stone-light", "Mehrfamilienhaus: Spüle und Armatur, Detail", "Apartment building: sink and tap, detail"),
    real("mfh9-13", 1600, 1067, "ivory", "Mehrfamilienhaus: Einbauschrank mit Glasfront im Zimmer", "Apartment building: fitted wardrobe with glass front"),
    real("mfh9-20", 1600, 1067, "stone-light", "Mehrfamilienhaus: Bad mit freistehender Wanne", "Apartment building: bathroom with freestanding bath"),
    real("mfh9-18", 1600, 1067, "stone-light", "Mehrfamilienhaus: Waschtischmöbel und Wanne", "Apartment building: vanity unit and bath"),
    real("mfh9-10", 1600, 1067, "ivory", "Mehrfamilienhaus: Küche im Dachgeschoss der Maisonette", "Apartment building: kitchen on the upper floor of the maisonette"),
    real("mfh9-17", 1600, 1067, "ivory", "Mehrfamilienhaus: Schränke unter der Dachschräge", "Apartment building: wardrobes under the sloping roof"),
    real("mfh9-05", 1264, 848, "ivory", "Mehrfamilienhaus: Wohnraum mit offener Küche", "Apartment building: living room with open kitchen"),

    /* Reference: lakeside development, 30 apartments (ueberbauung) */
    real("ueberbauung-06", 1600, 1066, "ivory", "Überbauung: Kochinsel mit Steinabdeckung und Blick zum See", "Development: island with stone worktop and lake view"),
    real("ueberbauung-07", 1066, 1600, "ivory", "Überbauung: Küchenzeile mit Backofen", "Development: kitchen run with oven"),
    real("ueberbauung-04", 1600, 1066, "ivory", "Überbauung: offener Wohnraum mit Küche", "Development: open-plan living with kitchen"),
    real("ueberbauung-09", 1600, 1066, "ivory", "Überbauung: Einbauschrank in Zimmer", "Development: fitted wardrobe in bedroom"),
    real("ueberbauung-10", 1600, 1066, "ivory", "Überbauung: Einbauschrank mit Glasfront", "Development: fitted wardrobe with glass front"),
    real("ueberbauung-15", 1066, 1600, "stone-light", "Überbauung: Waschtischmöbel mit Spiegelschrank", "Development: vanity unit with mirror cabinet"),
    real("ueberbauung-12", 1600, 1066, "stone-light", "Überbauung: Bad mit Wanne", "Development: bathroom with bath"),
    real("ueberbauung-16", 1600, 1066, "stone-light", "Überbauung: Balkon mit Seesicht", "Development: balcony with lake view"),

    /* Reference: apartment building (mfh) */
    real("mfh-09", 1600, 1066, "ivory", "Mehrfamilienhaus: Küchenzeile mit Hochschränken", "Apartment building: kitchen run with tall units"),
    real("mfh-07", 1600, 1066, "ivory", "Mehrfamilienhaus: Wohnraum mit Küche", "Apartment building: living room with kitchen"),
    real("mfh-13", 1600, 1066, "ivory", "Mehrfamilienhaus: Einbauschrank mit Glasfront am Fenster", "Apartment building: fitted wardrobe with glass front by the window"),
    real("mfh-14", 1600, 1066, "ivory", "Mehrfamilienhaus: Schminktisch und Schrank", "Apartment building: dressing table and wardrobe"),
    real("mfh-15", 1600, 1066, "ivory", "Mehrfamilienhaus: Einbauschrank", "Apartment building: fitted wardrobe"),
    real("mfh-17", 1600, 1066, "stone-light", "Mehrfamilienhaus: Doppelwaschtisch und Dusche", "Apartment building: double vanity and shower"),
    real("mfh-16", 1600, 1066, "stone-light", "Mehrfamilienhaus: Bad mit Wanne und Waschtisch", "Apartment building: bathroom with bath and vanity"),
    real("mfh-12", 1600, 1066, "ivory", "Mehrfamilienhaus: Treppe in der Wohnung", "Apartment building: staircase within the apartment"),

    /* Reference: villa */
    real("villa-kitchen", 1600, 1239, "stone-light", "Villa: Küche in Schwarz mit heller Steininsel", "Villa: black kitchen with light stone island"),
    real("villa-wine", 1600, 1095, "walnut-dark", "Villa: Weinkeller mit Flaschenwand aus Schwarzstahl", "Villa: wine cellar with blackened-steel bottle wall"),
    real("villa-glass", 1600, 1204, "walnut", "Villa: Ankleide mit Glastüren und beleuchteten Fächern", "Villa: dressing room with glass doors and lit compartments"),
    real("villa-hall", 1204, 1600, "stone-light", "Villa: Korridor mit raumhohen Türen in dunklem Holz", "Villa: corridor with full-height doors in dark wood"),
    real("villa-vanity", 1600, 1209, "stone-light", "Villa: Doppelwaschtisch mit Spiegelwand", "Villa: double vanity with mirror wall"),
    real("villa-shelves", 1600, 1570, "stone-light", "Villa: beleuchtetes Regal im Eingang", "Villa: lit shelving in the entrance"),
    real("villa-living", 1600, 973, "ivory", "Villa: Wohnraum mit Bibliothekswand", "Villa: living room with library wall"),
    real("villa-gallery", 1600, 1067, "ivory", "Villa: Galerie im Korridor mit flächenbündigen Türen", "Villa: gallery corridor with flush doors"),
    real("villa-entrance", 1600, 1207, "stone-light", "Villa: Eingang mit Spiegel und Garderobe", "Villa: entrance with mirror and wardrobe"),
    real("villa-dusk", 1600, 1231, "stone", "Villa: die Villa am Abend", "Villa: the villa at dusk"),

    /* Reference: chalet apartment */
    real("chalet-kitchen", 1280, 999, "ivory", "Chalet: Küche mit Steinabdeckung und Weinkühlschrank", "Chalet: kitchen with stone worktop and wine fridge"),
    real("chalet-wardrobe", 1280, 891, "ivory", "Chalet: begehbare Ankleide mit beleuchteten Fächern", "Chalet: walk-in dressing room with lit compartments"),
    real("chalet-door", 1280, 876, "ivory", "Chalet: Eingang mit Türrahmen aus Altholz", "Chalet: entrance with reclaimed-wood door frame"),
    real("chalet-bedroom", 1280, 853, "ivory", "Chalet: Schlafzimmer mit Schrankwand und Bettnischen", "Chalet: bedroom with wardrobe wall and bed niches"),
    real("chalet-bath", 1280, 964, "stone-light", "Chalet: Bad mit freistehender Wanne unter dem Dach", "Chalet: bathroom with freestanding bath under the roof"),
    real("chalet-vanity", 853, 1280, "stone-light", "Chalet: Waschtischmöbel und Dusche", "Chalet: vanity unit and shower"),
    real("chalet-living", 1280, 853, "ivory", "Chalet: Wohnraum mit Kamin und Esstisch", "Chalet: living room with fireplace and dining table"),
    real("chalet-balcony", 1280, 853, "ivory", "Chalet: Sitznische am Fenster mit Blick auf die Berge", "Chalet: window seat with mountain view"),
    real("chalet-house", 1280, 964, "stone", "Chalet: das Haus im Winter", "Chalet: the house in winter"),

    /* Group projects (smzh Real Estate Advisory). Remote, credited. */
    img("group-kuesnacht-hide", { status: "REAL", src: "https://cms.smzh.ch/uploads/kusnacht_hide_6_978f160c20.jpg", w: 1600, h: 1067, surface: "stone-light", alt: { de: "Küsnacht ZH, HIDE: Schlafzimmer mit Terrasse", en: "Küsnacht ZH, HIDE: bedroom with terrace" }, credit: GROUP_CREDIT, brief: "Private residence example. Group project; not an executed SARTO interior." }),
    img("group-killwangen", { status: "REAL", src: "https://cms.smzh.ch/uploads/Aussenansicht_der_fertigen_Ueberbauung_36773d3b2e.jpg", w: 1600, h: 1067, surface: "stone", alt: { de: "Killwangen AG: zwei Mehrfamilienhäuser", en: "Killwangen AG: two apartment buildings" }, credit: GROUP_CREDIT, brief: "Residential development example. Group project." }),
    img("group-bremgarten-hotel", { status: "REAL", src: "https://cms.smzh.ch/uploads/bremgarten_sonne_8_d8d04f572a.jpg", w: 1600, h: 1067, surface: "oak", alt: { de: "Bremgarten AG: Hotelzimmer nach Umnutzung", en: "Bremgarten AG: hotel room after conversion" }, credit: GROUP_CREDIT, brief: "Hospitality example. Group project." }),
    img("group-bremgarten-kitchen", { status: "REAL", src: "https://cms.smzh.ch/uploads/bremgarten_drei_koenige_3_6171f430db.jpg", w: 1600, h: 1067, surface: "ivory", alt: { de: "Bremgarten AG: Küche in der Altstadtliegenschaft", en: "Bremgarten AG: kitchen in the old-town property" }, credit: GROUP_CREDIT, brief: "Residential example. Group project." }),

    /* Still required */
    img("workshop-wide", { status: "REAL_IMAGE_REQUIRED", surface: "stone-light", alt: { de: "Werkstatt von Limani", en: "The Limani workshop" }, brief: "Craft / Our Story. Wide view of the real workshop, people at work, natural light. Landscape, min. 2800px." }),
    img("team", { status: "REAL_IMAGE_REQUIRED", surface: "ivory", alt: { de: "Das Team hinter SARTO und Limani", en: "The team behind SARTO and Limani" }, brief: "Our Story. Authentic team portrait in the workshop. Landscape 3:2." }),
  ].map((a) => [a.id, a]),
);

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

/**
 * Reference projects. Photographs delivered 19.10.2026 (Liegenschaftsfotos).
 * Scope, year and client attribution: TO_VERIFY by Limani (see MISSING_ASSETS.md).
 * Never invent a client name.
 */
export const projects: Project[] = [
  {
    id: "bellikon",
    slug: { de: "villa-aargau", en: "villa-aargau" },
    verification: "verified",
    title: { de: "Villa im Aargau", en: "Villa in Aargau" },
    category: "interiors",
    type: { de: "Einzelobjekt", en: "Private residence" },
    location: { de: "Aargau", en: "Aargau" },
    image: "villa-kitchen",
    gallery: ["villa-kitchen", "villa-wine", "villa-glass", "villa-hall", "villa-vanity", "villa-shelves", "villa-living", "villa-gallery", "villa-entrance", "villa-dusk"],
    teaser: { de: "Küche, Weinkeller, Ankleide mit Glastüren, raumhohe Türen und Bibliothekswand in einer Villa.", en: "Kitchen, wine cellar, glass-door dressing room, full-height doors and library wall in a private villa." },
    intro: {
      de: [
        "Eine Villa im Aargau, durchgehend ausgebaut: schwarze Küche mit heller Steininsel, Weinkeller mit Flaschenwand aus Schwarzstahl, Ankleide hinter Glastüren mit beleuchteten Fächern.",
        "Raumhohe Türen in dunklem Holz laufen mit den Wandflächen in einer Flucht. Im Wohnraum eine Bibliothekswand, im Bad ein Doppelwaschtisch vor der Spiegelwand, im Eingang Garderobe und beleuchtetes Regal.",
      ],
      en: [
        "A private villa in Aargau, fitted out throughout: a black kitchen with a light stone island, a wine cellar with a blackened-steel bottle wall, a dressing room behind glass doors with lit compartments.",
        "Full-height doors in dark wood run flush with the wall surfaces. A library wall in the living room, a double vanity in front of the mirror wall, a wardrobe and lit shelving in the entrance.",
      ],
    },
    facts: {
      de: [
        { label: "Leistungen", value: "Küche, Weinkeller, Ankleide, Türen, Einbauten, Badmöbel" },
        { label: "Objekt", value: "Villa" },
        { label: "Bauherrschaft", value: "Privat" },
        { label: "Fertigung", value: "Limani" },
      ],
      en: [
        { label: "Scope", value: "Kitchen, wine cellar, dressing room, doors, built-ins, bathroom furniture" },
        { label: "Building", value: "Private villa" },
        { label: "Client", value: "Private" },
        { label: "Manufacturing", value: "Limani" },
      ],
    },
  },
  {
    id: "arosa",
    slug: { de: "chalet-berge", en: "chalet-mountains" },
    verification: "verified",
    title: { de: "Chalet in den Bergen", en: "Chalet in the mountains" },
    category: "wardrobes",
    type: { de: "Dachwohnung", en: "Attic apartment" },
    location: { de: "Graubünden", en: "Grisons" },
    image: "chalet-wardrobe",
    gallery: ["chalet-wardrobe", "chalet-kitchen", "chalet-door", "chalet-bedroom", "chalet-bath", "chalet-vanity", "chalet-living", "chalet-balcony", "chalet-house"],
    teaser: { de: "Begehbare Ankleide, Küche, Schrankwände und Badmöbel in einer Dachwohnung mit Altholz.", en: "Walk-in dressing room, kitchen, wardrobe walls and bathroom furniture in an attic apartment with reclaimed wood." },
    intro: {
      de: [
        "Unter dem Dach eines Chalets in den Bündner Bergen wurden Ankleide, Küche, Schlafzimmer und Bäder auf Mass ausgebaut. Altholz am Eingang, helles Holz an den Einbauten, Stein in Küche und Bad.",
        "Die begehbare Ankleide arbeitet mit beleuchteten Fächern und offener Kleiderstange. Im Schlafzimmer fasst eine Schrankwand die Betten; unter der Schräge sitzt die freistehende Wanne.",
      ],
      en: [
        "Under the roof of a chalet in the Grisons mountains, dressing room, kitchen, bedrooms and bathrooms were fitted out to measure. Reclaimed wood at the entrance, light wood on the built-ins, stone in kitchen and bath.",
        "The walk-in dressing room works with lit compartments and an open rail. In the bedroom a wardrobe wall frames the beds; the freestanding bath sits under the slope.",
      ],
    },
    facts: {
      de: [
        { label: "Leistungen", value: "Ankleide, Küche, Schrankwände, Türen, Badmöbel" },
        { label: "Objekt", value: "Chalet-Wohnung" },
        { label: "Bauherrschaft", value: "Privat" },
        { label: "Fertigung", value: "Limani" },
      ],
      en: [
        { label: "Scope", value: "Dressing room, kitchen, wardrobe walls, doors, bathroom furniture" },
        { label: "Building", value: "Chalet apartment" },
        { label: "Client", value: "Private" },
        { label: "Manufacturing", value: "Limani" },
      ],
    },
  },
  {
    id: "oberrohrdorf",
    slug: { de: "einfamilienhaus-aargau", en: "family-house-aargau" },
    verification: "pending",
    title: { de: "Einfamilienhaus im Aargau", en: "Family house in Aargau" },
    category: "interiors",
    type: { de: "Einzelobjekt", en: "Private residence" },
    location: { de: "Aargau", en: "Aargau" },
    image: "efh-wardrobe",
    gallery: ["efh-wardrobe", "efh-kitchen", "efh-corridor", "efh-wall", "efh-wardrobe-open", "efh-switch", "efh-bath", "efh-tap", "efh-tub", "efh-bar"],
    teaser: { de: "Dunkle Eiche, Stein und Bronze: Küche, Ankleide, Wandverkleidungen und Badmöbel aus einer Hand.", en: "Dark oak, stone and bronze: kitchen, dressing room, wall panelling and bathroom furniture from one hand." },
    intro: {
      de: [
        "In diesem Einfamilienhaus zieht sich eine Materialwahl durch das ganze Haus: dunkle Eiche an Küche, Schrankwänden und Korridoren, Stein als Insel und Waschtisch, Bronze an Armaturen und Griffen.",
        "Die Ankleide arbeitet mit Glastüren und beleuchteten Fächern. Schalter und Technik sitzen in der Verkleidung. Im Bad trifft dunkler Marmor auf einen Waschtisch aus hellem Stein.",
      ],
      en: [
        "In this family house one material palette runs through the whole house: dark oak on kitchen, wardrobe walls and corridors, stone for island and vanity, bronze on taps and handles.",
        "The dressing room works with glass doors and lit compartments. Switches and services sit within the panelling. In the bathroom dark marble meets a vanity in light stone.",
      ],
    },
    facts: {
      de: [
        { label: "Leistungen", value: "Küche, Ankleide, Schrankwände, Wandverkleidungen, Badmöbel, Bar" },
        { label: "Objekt", value: "Einfamilienhaus" },
        { label: "Bauherrschaft", value: "Privat" },
        { label: "Fertigung", value: "Limani" },
        { label: "Jahr", value: "TO_VERIFY" },
      ],
      en: [
        { label: "Scope", value: "Kitchen, dressing room, wardrobe walls, wall panelling, bathroom furniture, bar" },
        { label: "Building", value: "Private house" },
        { label: "Client", value: "Private" },
        { label: "Manufacturing", value: "Limani" },
        { label: "Year", value: "TO_VERIFY" },
      ],
    },
  },
  {
    id: "obermumpf",
    slug: { de: "mehrfamilienhaus-9-einheiten", en: "apartment-building-9-units" },
    verification: "pending",
    title: { de: "Mehrfamilienhaus mit 9 Einheiten", en: "Apartment building with 9 units" },
    category: "kitchens",
    type: { de: "Wohnbau", en: "Residential" },
    location: { de: "Aargau", en: "Aargau" },
    image: "mfh9-07",
    gallery: ["mfh9-07", "mfh9-08", "mfh9-09", "mfh9-13", "mfh9-20", "mfh9-18", "mfh9-10", "mfh9-17"],
    teaser: { de: "Grifflose Küchen mit Steinabdeckung, Einbauschränke und Badmöbel über zwei Geschosse.", en: "Handleless kitchens with stone worktops, fitted wardrobes and bathroom furniture over two floors." },
    intro: {
      de: [
        "In einem Mehrfamilienhaus mit neun Einheiten wurden Wohnungen und Maisonetten mit durchgehend gleicher Handschrift ausgebaut: Küchen mit Insel und Geräteturm, Einbauschränke mit Glasfronten, Badmöbel mit Waschtisch und Wanne.",
        "Die Küchen sind grifflos ausgeführt, mit Steinabdeckung und integrierten Geräten. Unter den Dachschrägen der Maisonetten wurde der Stauraum nach Mass eingepasst.",
      ],
      en: [
        "In an apartment building with nine units, apartments and maisonettes were fitted out with one consistent signature: kitchens with island and appliance tower, fitted wardrobes with glass fronts, bathroom furniture with vanity and bath.",
        "The kitchens are handleless, with stone worktops and integrated appliances. Under the sloping roofs of the maisonettes, storage was fitted to measure.",
      ],
    },
    facts: {
      de: [
        { label: "Leistungen", value: "Küchen, Einbauschränke, Badmöbel" },
        { label: "Objekt", value: "Wohnüberbauung mit Maisonetten" },
        { label: "Fertigung", value: "Limani" },
        { label: "Jahr", value: "TO_VERIFY" },
      ],
      en: [
        { label: "Scope", value: "Kitchens, fitted wardrobes, bathroom furniture" },
        { label: "Building", value: "Residential development with maisonettes" },
        { label: "Manufacturing", value: "Limani" },
        { label: "Year", value: "TO_VERIFY" },
      ],
    },
  },
  {
    id: "gersau",
    slug: { de: "ueberbauung-30-wohnungen", en: "development-30-apartments" },
    verification: "pending",
    title: { de: "Überbauung mit 30 Wohnungen", en: "Development with 30 apartments" },
    category: "kitchens",
    type: { de: "Wohnbau am See", en: "Lakeside residential" },
    location: { de: "Vierwaldstättersee", en: "Lake Lucerne" },
    image: "ueberbauung-06",
    gallery: ["ueberbauung-06", "ueberbauung-07", "ueberbauung-04", "ueberbauung-09", "ueberbauung-10", "ueberbauung-15", "ueberbauung-12", "ueberbauung-16"],
    teaser: { de: "Kochinsel mit Steinabdeckung, Einbauschränke und Badmöbel in Wohnungen mit Seesicht.", en: "Island kitchen with stone worktop, fitted wardrobes and bathroom furniture in apartments with lake views." },
    intro: {
      de: [
        "Dreissig Wohnungen einer Überbauung am Vierwaldstättersee, alle zum See hin geöffnet. Die Küche steht als Insel im Raum, die Zeile mit Backofen und Hochschränken hält sich im Hintergrund.",
        "Einbauschränke mit Glasfronten und Waschtischmöbel mit Spiegelschrank ergänzen den Ausbau, in einer ruhigen, hellen Materialwahl.",
      ],
      en: [
        "Thirty apartments in a development on Lake Lucerne, all opening towards the lake. The kitchen stands as an island in the room; the run with oven and tall units keeps to the background.",
        "Fitted wardrobes with glass fronts and vanity units with mirror cabinets complete the fit-out, in a calm, light material palette.",
      ],
    },
    facts: {
      de: [
        { label: "Leistungen", value: "Küchen, Einbauschränke, Badmöbel" },
        { label: "Objekt", value: "Wohnungen am See" },
        { label: "Fertigung", value: "Limani" },
        { label: "Jahr", value: "TO_VERIFY" },
      ],
      en: [
        { label: "Scope", value: "Kitchens, fitted wardrobes, bathroom furniture" },
        { label: "Building", value: "Lakeside apartments" },
        { label: "Manufacturing", value: "Limani" },
        { label: "Year", value: "TO_VERIFY" },
      ],
    },
  },
  {
    id: "grenchen",
    slug: { de: "mehrfamilienhaus-mittelland", en: "apartment-building-mittelland" },
    verification: "pending",
    title: { de: "Mehrfamilienhaus im Mittelland", en: "Apartment building in the Mittelland" },
    category: "wardrobes",
    type: { de: "Wohnbau", en: "Residential" },
    location: { de: "Solothurn", en: "Solothurn" },
    image: "mfh-09",
    gallery: ["mfh-09", "mfh-07", "mfh-13", "mfh-14", "mfh-15", "mfh-17", "mfh-16", "mfh-12"],
    teaser: { de: "Küchenzeilen, Einbauschränke mit Schminktisch und Badmöbel in einem Mehrfamilienhaus.", en: "Kitchen runs, fitted wardrobes with dressing table and bathroom furniture in an apartment building." },
    intro: {
      de: [
        "Die Wohnungen eines Mehrfamilienhauses im Mittelland wurden mit Küchenzeilen, Einbauschränken und Badmöbeln ausgestattet. Wiederkehrende Elemente, pro Wohnung angepasst.",
        "Dazu gehören Einbauschränke mit Glasfront am Fenster, ein integrierter Schminktisch und Doppelwaschtische in den Bädern.",
      ],
      en: [
        "The apartments of a multi-family building in the Mittelland were fitted with kitchen runs, wardrobes and bathroom furniture. Recurring elements, adapted per apartment.",
        "These include wardrobes with glass fronts by the window, an integrated dressing table and double vanities in the bathrooms.",
      ],
    },
    facts: {
      de: [
        { label: "Leistungen", value: "Küchen, Einbauschränke, Badmöbel" },
        { label: "Objekt", value: "Mehrfamilienhaus" },
        { label: "Fertigung", value: "Limani" },
        { label: "Jahr", value: "TO_VERIFY" },
      ],
      en: [
        { label: "Scope", value: "Kitchens, fitted wardrobes, bathroom furniture" },
        { label: "Building", value: "Apartment building" },
        { label: "Manufacturing", value: "Limani" },
        { label: "Year", value: "TO_VERIFY" },
      ],
    },
  },
];

export function isPublished(p: Project): boolean {
  return p.verification === "verified" || p.verification === "pending";
}

export function projectFromSlug(locale: "de" | "en", slug: string): Project | null {
  return projects.find((p) => p.slug[locale] === slug) ?? null;
}
