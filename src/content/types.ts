import type { ExpertiseKey } from "@/lib/routes";

export type Surface =
  | "walnut"
  | "walnut-dark"
  | "stone"
  | "stone-light"
  | "cocoa"
  | "ivory"
  | "oak";

export type ImageStatus =
  /** A real photograph of executed work, cleared for use. */
  | "REAL"
  /** A conceptual visual (rendering, mood image). Always labelled, never presented as executed work. */
  | "CONCEPT_IMAGE"
  /** No genuine photograph yet. The placeholder surface is shown, labelled. */
  | "REAL_IMAGE_REQUIRED";

export type Localized = Record<"de" | "en", string>;

export type ImageAsset = {
  id: string;
  status: ImageStatus;
  /** Path under /public, or an absolute URL for cleared remote images. */
  src?: string;
  width?: number;
  height?: number;
  /** Placeholder rendering while src is missing. */
  surface: Surface;
  gap?: "h" | "v" | "none";
  alt: Localized;
  /** Shown as a small caption where the context asks for a source, e.g. group projects. */
  credit?: Localized;
  /** Shot brief for the photographer, from the master brief. */
  brief: string;
};

export type ProjectCategory = ExpertiseKey | "hospitality";

export type Project = {
  id: string;
  /** URL slug per language. */
  slug: Localized;
  /** pending: executed and photographed, release of scope/year/publication rights outstanding. */
  verification: "verified" | "pending";
  title: Localized;
  category: ProjectCategory;
  /** What kind of building, e.g. "Wohnüberbauung". */
  type: Localized;
  location: Localized;
  /** Cover image id. */
  image: string;
  /** Gallery image ids for the detail page. */
  gallery: string[];
  /** Short one-liner for cards. */
  teaser: Localized;
  /** Detail page copy. */
  intro: Record<"de" | "en", string[]>;
  /** Facts rendered as a definition list. Values are plain strings, TO_VERIFY where unknown. */
  facts: Record<"de" | "en", { label: string; value: string }[]>;
};

export type ProcessStep = { n: string; title: string; text: string };

/** Transparency model: what SARTO does itself, with partners, or delivers together. */
export type ServiceRole = "crafted" | "designed" | "delivered";

export type ExpertiseEntry = {
  key: ExpertiseKey;
  title: string;
  short: string;
  lede: string;
  materials: { title: string; text: string };
  applications: { title: string; items: string[] };
  options: { title: string; items: string[] };
  execution: { title: string; text: string };
  image: string;
};

export type ShowroomZone = {
  id: string;
  title: string;
  text: string;
  /** Floor area from the design plan, e.g. "19 m²". */
  area?: string;
  surface: Surface;
  image?: string;
};

export type ContactFields = {
  pathLabel: string;
  paths: {
    private: { label: string; text: string };
    professional: { label: string; text: string };
    developer: { label: string; text: string };
  };
  name: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  projectType: string;
  projectTypes: string[];
  stage: string;
  stages: string[];
  /* Developer path */
  objectType: string;
  objectTypes: string[];
  units: string;
  scope: string;
  scopes: string[];
  timeframe: string;
  timeframes: string[];
  message: string;
  messageHint: string;
  files: string;
  filesHint: string;
  consent: string;
  submit: string;
  sending: string;
  success: { title: string; text: string };
  error: string;
  required: string;
};

export type Dictionary = {
  meta: {
    siteName: string;
    titleTemplate: string;
    description: string;
    ogDescription: string;
  };
  nav: {
    labels: Record<string, string>;
    menu: string;
    close: string;
    cta: string;
    switchLabel: string;
    skip: string;
  };
  common: {
    concept: string;
    conceptLong: string;
    visual: string;
    imageToFollow: string;
    toVerify: string;
    readMore: string;
    back: string;
    categories: Record<string, string>;
    gallery: string;
    facts: string;
    nextProject: string;
    allProjects: string;
    pendingNote: string;
  };
  home: {
    hero: { kicker: string; headline: string; sub: string; primary: string; secondary: string };
    work: { eyebrow: string; headline: string; intro: string[]; cta: string; note: string };
    expertise: { eyebrow: string; headline: string; intro: string[]; cta: string };
    craft: {
      eyebrow: string;
      headline: string;
      intro: string[];
      themes: { title: string; text: string }[];
      cta: string;
    };
    audiences: {
      eyebrow: string;
      headline: string;
      cards: { key: "professionals" | "developers"; label: string; title: string; text: string; cta: string; image: string }[];
    };
    showroom: { eyebrow: string; headline: string; intro: string[]; zonesLabel: string; cta: string; status: string };
    final: { headline: string; copy: string; primary: string; secondary: string };
  };
  projects: {
    eyebrow: string;
    headline: string;
    intro: string;
    note: string;
    filters: Record<string, string>;
    all: string;
    empty: string;
  };
  expertise: {
    eyebrow: string;
    headline: string;
    intro: string;
    entries: ExpertiseEntry[];
    detailCta: string;
    otherLabel: string;
    worldsLabel: string;
    worldsHeadline: string;
    areas: {
      label: string;
      headline: string;
      intro: string;
      roles: Record<ServiceRole, { title: string; text: string }>;
      items: { n: string; title: string; text: string; role: ServiceRole }[];
      note: string;
    };
  };
  professionals: {
    eyebrow: string;
    headline: string;
    lede: string;
    intro: string[];
    pillars: { title: string; text: string }[];
    collaboration: { eyebrow: string; headline: string; steps: ProcessStep[] };
    cta: { headline: string; text: string; button: string };
  };
  developers: {
    eyebrow: string;
    headline: string;
    lede: string;
    intro: string[];
    segmentsLabel: string;
    segments: { key: string; title: string; text: string; points: string[]; image: string }[];
    themesLabel: string;
    themesHeadline: string;
    themes: { title: string; text: string }[];
    process: { eyebrow: string; headline: string; steps: ProcessStep[]; note: string };
    cta: { headline: string; text: string; button: string };
  };
  craft: {
    eyebrow: string;
    headline: string;
    lede: string;
    chapters: { eyebrow: string; headline: string; text: string; image: string }[];
    process: { eyebrow: string; headline: string; steps: ProcessStep[]; note: string };
    production: { eyebrow: string; headline: string; steps: { title: string; text: string }[] };
  };
  story: {
    eyebrow: string;
    headline: string;
    lede: string;
    name: { headline: string; text: string[] };
    limani: { headline: string; text: string[]; note: string };
    values: { title: string; text: string }[];
    cta: string;
  };
  showroom: {
    eyebrow: string;
    headline: string;
    lede: string;
    status: string;
    factsLabel: string;
    facts: { value: string; label: string }[];
    zonesLabel: string;
    zones: ShowroomZone[];
    planLabel: string;
    planCaption: string;
    materialsLabel: string;
    materials: string[];
    partnersLabel: string;
    partners: string[];
    experience: { headline: string; text: string[] };
    visit: { headline: string; text: string; button: string; addressLabel: string; mapLabel: string };
  };
  contact: {
    eyebrow: string;
    headline: string;
    lede: string;
    form: ContactFields;
    direct: { headline: string; address: string; email: string; phone: string; hours: string; showroom: string };
    showroomCta: string;
  };
  legal: {
    imprint: { title: string; text: string[] };
    privacy: { title: string; text: string[] };
  };
  footer: {
    claim: string;
    statement: string;
    navLabel: string;
    legalLabel: string;
    contactLabel: string;
    rights: string;
    limani: string;
    entity: string;
  };
};
