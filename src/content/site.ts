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

const GROUP_CREDIT: Localized = { de: "Projekt der Gruppe · smzh Real Estate Advisory", en: "Group project · smzh Real Estate Advisory" };

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

    /* Reference: Obermumpf AG */
    real("obermumpf-07", 1600, 1067, "ivory", "Obermumpf: Küche mit Insel, grifflose Fronten und Steinabdeckung", "Obermumpf: kitchen with island, handleless fronts and stone worktop"),
    real("obermumpf-08", 1600, 1067, "ivory", "Obermumpf: Geräteturm mit integrierten Backöfen", "Obermumpf: appliance tower with integrated ovens"),
    real("obermumpf-09", 1600, 1067, "stone-light", "Obermumpf: Spüle und Armatur, Detail", "Obermumpf: sink and tap, detail"),
    real("obermumpf-13", 1600, 1067, "ivory", "Obermumpf: Einbauschrank mit Glasfront im Zimmer", "Obermumpf: fitted wardrobe with glass front"),
    real("obermumpf-20", 1600, 1067, "stone-light", "Obermumpf: Bad mit freistehender Wanne", "Obermumpf: bathroom with freestanding bath"),
    real("obermumpf-18", 1600, 1067, "stone-light", "Obermumpf: Waschtischmöbel und Wanne", "Obermumpf: vanity unit and bath"),
    real("obermumpf-10", 1600, 1067, "ivory", "Obermumpf: Küche im Dachgeschoss der Maisonette", "Obermumpf: kitchen on the upper floor of the maisonette"),
    real("obermumpf-17", 1600, 1067, "ivory", "Obermumpf: Schränke unter der Dachschräge", "Obermumpf: wardrobes under the sloping roof"),
    real("obermumpf-05", 1264, 848, "ivory", "Obermumpf: Wohnraum mit offener Küche", "Obermumpf: living room with open kitchen"),

    /* Reference: Gersau SZ */
    real("gersau-06", 1600, 1066, "ivory", "Gersau: Kochinsel mit Steinabdeckung und Blick zum See", "Gersau: island with stone worktop and lake view"),
    real("gersau-07", 1066, 1600, "ivory", "Gersau: Küchenzeile mit Backofen", "Gersau: kitchen run with oven"),
    real("gersau-04", 1600, 1066, "ivory", "Gersau: offener Wohnraum mit Küche", "Gersau: open-plan living with kitchen"),
    real("gersau-09", 1600, 1066, "ivory", "Gersau: Einbauschrank in Zimmer", "Gersau: fitted wardrobe in bedroom"),
    real("gersau-10", 1600, 1066, "ivory", "Gersau: Einbauschrank mit Glasfront", "Gersau: fitted wardrobe with glass front"),
    real("gersau-15", 1066, 1600, "stone-light", "Gersau: Waschtischmöbel mit Spiegelschrank", "Gersau: vanity unit with mirror cabinet"),
    real("gersau-12", 1600, 1066, "stone-light", "Gersau: Bad mit Wanne", "Gersau: bathroom with bath"),
    real("gersau-16", 1600, 1066, "stone-light", "Gersau: Balkon mit Seesicht", "Gersau: balcony with lake view"),

    /* Reference: Grenchen SO */
    real("grenchen-09", 1600, 1066, "ivory", "Grenchen: Küchenzeile mit Hochschränken", "Grenchen: kitchen run with tall units"),
    real("grenchen-07", 1600, 1066, "ivory", "Grenchen: Wohnraum mit Küche", "Grenchen: living room with kitchen"),
    real("grenchen-13", 1600, 1066, "ivory", "Grenchen: Einbauschrank mit Glasfront am Fenster", "Grenchen: fitted wardrobe with glass front by the window"),
    real("grenchen-14", 1600, 1066, "ivory", "Grenchen: Schminktisch und Schrank", "Grenchen: dressing table and wardrobe"),
    real("grenchen-15", 1600, 1066, "ivory", "Grenchen: Einbauschrank", "Grenchen: fitted wardrobe"),
    real("grenchen-17", 1600, 1066, "stone-light", "Grenchen: Doppelwaschtisch und Dusche", "Grenchen: double vanity and shower"),
    real("grenchen-16", 1600, 1066, "stone-light", "Grenchen: Bad mit Wanne und Waschtisch", "Grenchen: bathroom with bath and vanity"),
    real("grenchen-12", 1600, 1066, "ivory", "Grenchen: Treppe in der Wohnung", "Grenchen: staircase within the apartment"),

    /* Reference: Bellikon AG (villa) */
    real("bellikon-kitchen", 1600, 1239, "stone-light", "Bellikon: Küche in Schwarz mit heller Steininsel", "Bellikon: black kitchen with light stone island"),
    real("bellikon-wine", 1600, 1095, "walnut-dark", "Bellikon: Weinkeller mit Flaschenwand aus Schwarzstahl", "Bellikon: wine cellar with blackened-steel bottle wall"),
    real("bellikon-glass", 1600, 1204, "walnut", "Bellikon: Ankleide mit Glastüren und beleuchteten Fächern", "Bellikon: dressing room with glass doors and lit compartments"),
    real("bellikon-hall", 1204, 1600, "stone-light", "Bellikon: Korridor mit raumhohen Türen in dunklem Holz", "Bellikon: corridor with full-height doors in dark wood"),
    real("bellikon-vanity", 1600, 1209, "stone-light", "Bellikon: Doppelwaschtisch mit Spiegelwand", "Bellikon: double vanity with mirror wall"),
    real("bellikon-shelves", 1600, 1570, "stone-light", "Bellikon: beleuchtetes Regal im Eingang", "Bellikon: lit shelving in the entrance"),
    real("bellikon-living", 1600, 973, "ivory", "Bellikon: Wohnraum mit Bibliothekswand", "Bellikon: living room with library wall"),
    real("bellikon-gallery", 1600, 1067, "ivory", "Bellikon: Galerie im Korridor mit flächenbündigen Türen", "Bellikon: gallery corridor with flush doors"),
    real("bellikon-entrance", 1600, 1207, "stone-light", "Bellikon: Eingang mit Spiegel und Garderobe", "Bellikon: entrance with mirror and wardrobe"),
    real("bellikon-dusk", 1600, 1231, "stone", "Bellikon: die Villa am Abend", "Bellikon: the villa at dusk"),

    /* Reference: Arosa GR (chalet apartment) */
    real("arosa-kitchen", 1280, 999, "ivory", "Arosa: Küche mit Steinabdeckung und Weinkühlschrank", "Arosa: kitchen with stone worktop and wine fridge"),
    real("arosa-wardrobe", 1280, 891, "ivory", "Arosa: begehbare Ankleide mit beleuchteten Fächern", "Arosa: walk-in dressing room with lit compartments"),
    real("arosa-door", 1280, 876, "ivory", "Arosa: Eingang mit Türrahmen aus Altholz", "Arosa: entrance with reclaimed-wood door frame"),
    real("arosa-bedroom", 1280, 853, "ivory", "Arosa: Schlafzimmer mit Schrankwand und Bettnischen", "Arosa: bedroom with wardrobe wall and bed niches"),
    real("arosa-bath", 1280, 964, "stone-light", "Arosa: Bad mit freistehender Wanne unter dem Dach", "Arosa: bathroom with freestanding bath under the roof"),
    real("arosa-vanity", 853, 1280, "stone-light", "Arosa: Waschtischmöbel und Dusche", "Arosa: vanity unit and shower"),
    real("arosa-living", 1280, 853, "ivory", "Arosa: Wohnraum mit Kamin und Esstisch", "Arosa: living room with fireplace and dining table"),
    real("arosa-balcony", 1280, 853, "ivory", "Arosa: Sitznische am Fenster mit Blick auf die Berge", "Arosa: window seat with mountain view"),
    real("arosa-house", 1280, 964, "stone", "Arosa: das Haus im Winter", "Arosa: the house in winter"),

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
    slug: { de: "bellikon", en: "bellikon" },
    verification: "pending",
    title: { de: "Bellikon", en: "Bellikon" },
    category: "interiors",
    type: { de: "Villa", en: "Private villa" },
    location: { de: "Aargau", en: "Aargau" },
    image: "bellikon-kitchen",
    gallery: ["bellikon-kitchen", "bellikon-wine", "bellikon-glass", "bellikon-hall", "bellikon-vanity", "bellikon-shelves", "bellikon-living", "bellikon-gallery", "bellikon-entrance", "bellikon-dusk"],
    teaser: { de: "Küche, Weinkeller, Ankleide mit Glastüren, raumhohe Türen und Bibliothekswand in einer Villa.", en: "Kitchen, wine cellar, glass-door dressing room, full-height doors and library wall in a private villa." },
    intro: {
      de: [
        "In Bellikon wurde eine Villa durchgehend ausgebaut: schwarze Küche mit heller Steininsel, Weinkeller mit Flaschenwand aus Schwarzstahl, Ankleide hinter Glastüren mit beleuchteten Fächern.",
        "Raumhohe Türen in dunklem Holz laufen mit den Wandflächen in einer Flucht. Im Wohnraum eine Bibliothekswand, im Bad ein Doppelwaschtisch vor der Spiegelwand, im Eingang Garderobe und beleuchtetes Regal.",
      ],
      en: [
        "In Bellikon a private villa was fitted out throughout: a black kitchen with a light stone island, a wine cellar with a blackened-steel bottle wall, a dressing room behind glass doors with lit compartments.",
        "Full-height doors in dark wood run flush with the wall surfaces. A library wall in the living room, a double vanity in front of the mirror wall, a wardrobe and lit shelving in the entrance.",
      ],
    },
    facts: {
      de: [
        { label: "Leistungen", value: "Küche, Weinkeller, Ankleide, Türen, Einbauten, Badmöbel" },
        { label: "Objekt", value: "Villa" },
        { label: "Fertigung", value: "Limani" },
        { label: "Jahr", value: "TO_VERIFY" },
      ],
      en: [
        { label: "Scope", value: "Kitchen, wine cellar, dressing room, doors, built-ins, bathroom furniture" },
        { label: "Building", value: "Private villa" },
        { label: "Manufacturing", value: "Limani" },
        { label: "Year", value: "TO_VERIFY" },
      ],
    },
  },
  {
    id: "arosa",
    slug: { de: "arosa", en: "arosa" },
    verification: "pending",
    title: { de: "Arosa", en: "Arosa" },
    category: "wardrobes",
    type: { de: "Chalet-Wohnung", en: "Chalet apartment" },
    location: { de: "Graubünden", en: "Graubünden" },
    image: "arosa-wardrobe",
    gallery: ["arosa-wardrobe", "arosa-kitchen", "arosa-door", "arosa-bedroom", "arosa-bath", "arosa-vanity", "arosa-living", "arosa-balcony", "arosa-house"],
    teaser: { de: "Begehbare Ankleide, Küche, Schrankwände und Badmöbel in einer Dachwohnung mit Altholz.", en: "Walk-in dressing room, kitchen, wardrobe walls and bathroom furniture in an attic apartment with reclaimed wood." },
    intro: {
      de: [
        "Unter dem Dach eines Chalets in Arosa wurden Ankleide, Küche, Schlafzimmer und Bäder auf Mass ausgebaut. Altholz am Eingang, helles Holz an den Einbauten, Stein in Küche und Bad.",
        "Die begehbare Ankleide arbeitet mit beleuchteten Fächern und offener Kleiderstange. Im Schlafzimmer fasst eine Schrankwand die Betten; unter der Schräge sitzt die freistehende Wanne.",
      ],
      en: [
        "Under the roof of a chalet in Arosa, dressing room, kitchen, bedrooms and bathrooms were fitted out to measure. Reclaimed wood at the entrance, light wood on the built-ins, stone in kitchen and bath.",
        "The walk-in dressing room works with lit compartments and an open rail. In the bedroom a wardrobe wall frames the beds; the freestanding bath sits under the slope.",
      ],
    },
    facts: {
      de: [
        { label: "Leistungen", value: "Ankleide, Küche, Schrankwände, Türen, Badmöbel" },
        { label: "Objekt", value: "Chalet-Wohnung" },
        { label: "Fertigung", value: "Limani" },
        { label: "Jahr", value: "TO_VERIFY" },
      ],
      en: [
        { label: "Scope", value: "Dressing room, kitchen, wardrobe walls, doors, bathroom furniture" },
        { label: "Building", value: "Chalet apartment" },
        { label: "Manufacturing", value: "Limani" },
        { label: "Year", value: "TO_VERIFY" },
      ],
    },
  },
  {
    id: "obermumpf",
    slug: { de: "obermumpf", en: "obermumpf" },
    verification: "pending",
    title: { de: "Obermumpf", en: "Obermumpf" },
    category: "kitchens",
    type: { de: "Wohnüberbauung mit Maisonetten", en: "Residential development with maisonettes" },
    location: { de: "Aargau", en: "Aargau" },
    image: "obermumpf-07",
    gallery: ["obermumpf-07", "obermumpf-08", "obermumpf-09", "obermumpf-13", "obermumpf-20", "obermumpf-18", "obermumpf-10", "obermumpf-17"],
    teaser: { de: "Grifflose Küchen mit Steinabdeckung, Einbauschränke und Badmöbel über zwei Geschosse.", en: "Handleless kitchens with stone worktops, fitted wardrobes and bathroom furniture over two floors." },
    intro: {
      de: [
        "In Obermumpf wurden Wohnungen und Maisonetten mit durchgehend gleicher Handschrift ausgebaut: Küchen mit Insel und Geräteturm, Einbauschränke mit Glasfronten, Badmöbel mit Waschtisch und Wanne.",
        "Die Küchen sind grifflos ausgeführt, mit Steinabdeckung und integrierten Geräten. Unter den Dachschrägen der Maisonetten wurde der Stauraum nach Mass eingepasst.",
      ],
      en: [
        "In Obermumpf, apartments and maisonettes were fitted out with one consistent signature: kitchens with island and appliance tower, fitted wardrobes with glass fronts, bathroom furniture with vanity and bath.",
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
    slug: { de: "gersau", en: "gersau" },
    verification: "pending",
    title: { de: "Gersau", en: "Gersau" },
    category: "kitchens",
    type: { de: "Wohnungen am Vierwaldstättersee", en: "Apartments on Lake Lucerne" },
    location: { de: "Schwyz", en: "Schwyz" },
    image: "gersau-06",
    gallery: ["gersau-06", "gersau-07", "gersau-04", "gersau-09", "gersau-10", "gersau-15", "gersau-12", "gersau-16"],
    teaser: { de: "Kochinsel mit Steinabdeckung, Einbauschränke und Badmöbel in Wohnungen mit Seesicht.", en: "Island kitchen with stone worktop, fitted wardrobes and bathroom furniture in apartments with lake views." },
    intro: {
      de: [
        "Die Wohnungen in Gersau öffnen sich zum See. Die Küche steht als Insel im Raum, die Zeile mit Backofen und Hochschränken hält sich im Hintergrund.",
        "Einbauschränke mit Glasfronten und Waschtischmöbel mit Spiegelschrank ergänzen den Ausbau, in einer ruhigen, hellen Materialwahl.",
      ],
      en: [
        "The apartments in Gersau open towards the lake. The kitchen stands as an island in the room; the run with oven and tall units keeps to the background.",
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
    slug: { de: "grenchen", en: "grenchen" },
    verification: "pending",
    title: { de: "Grenchen", en: "Grenchen" },
    category: "wardrobes",
    type: { de: "Mehrfamilienhaus", en: "Apartment building" },
    location: { de: "Solothurn", en: "Solothurn" },
    image: "grenchen-09",
    gallery: ["grenchen-09", "grenchen-07", "grenchen-13", "grenchen-14", "grenchen-15", "grenchen-17", "grenchen-16", "grenchen-12"],
    teaser: { de: "Küchenzeilen, Einbauschränke mit Schminktisch und Badmöbel in einem Mehrfamilienhaus.", en: "Kitchen runs, fitted wardrobes with dressing table and bathroom furniture in an apartment building." },
    intro: {
      de: [
        "In Grenchen wurden die Wohnungen eines Mehrfamilienhauses mit Küchenzeilen, Einbauschränken und Badmöbeln ausgestattet. Wiederkehrende Elemente, pro Wohnung angepasst.",
        "Dazu gehören Einbauschränke mit Glasfront am Fenster, ein integrierter Schminktisch und Doppelwaschtische in den Bädern.",
      ],
      en: [
        "In Grenchen, the apartments of a multi-family building were fitted with kitchen runs, wardrobes and bathroom furniture. Recurring elements, adapted per apartment.",
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
