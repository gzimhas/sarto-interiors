import type { Dictionary } from "./types";

/**
 * English edition v3 (editorial lead copy, 19 Oct 2026). Written as its own
 * text, not translated word for word. Operational promises carry an «OP»
 * comment and need Limani's sign-off before launch (COPY_REVIEW.md).
 */
export const en: Dictionary = {
  meta: {
    siteName: "SARTO",
    titleTemplate: "%s · SARTO",
    description:
      "SARTO brings together interior architecture, considered materials and bespoke joinery. Kitchens, wardrobes, bathroom furniture and architectural interiors from our own workshop. Showroom in Spreitenbach near Zurich.",
    ogDescription: "Where craft becomes space. From concept to crafted reality.",
  },
  nav: {
    labels: {
      projects: "Projects",
      expertise: "Expertise",
      professionals: "For Architects",
      developers: "For Developers",
      craft: "Craft",
      story: "Our Story",
      showroom: "Showroom",
      contact: "Contact",
      imprint: "Imprint",
      privacy: "Privacy",
    },
    menu: "Menu",
    close: "Close",
    cta: "Discuss a project",
    switchLabel: "Switch language",
    skip: "Skip to content",
  },
  common: {
    concept: "Concept",
    conceptLong: "Concept study, not an executed project",
    visual: "Visual",
    imageToFollow: "Image to follow",
    toVerify: "to be confirmed",
    readMore: "Read more",
    back: "Back",
    categories: {
      kitchens: "Kitchen",
      wardrobes: "Wardrobes",
      bathrooms: "Bathroom",
      interiors: "Interiors",
      hospitality: "Hospitality",
      residences: "Residences",
    },
    gallery: "Images",
    facts: "Facts",
    nextProject: "Next project",
    allProjects: "All projects",
    pendingNote: "Reference release in progress: scope, year and publication rights are being confirmed.",
  },
  home: {
    hero: {
      kicker: "SARTO · The craft of finished spaces.",
      headline: "Where craft becomes space.",
      sub: "Bespoke kitchens, wardrobes and architectural interiors. Considered in design. Carefully made. Down to the detail.",
      primary: "Explore our work",
      secondary: "Discuss your project",
    },
    work: {
      eyebrow: "Selected work",
      headline: "Spaces with character.",
      intro: [
        "No two spaces are alike. Architecture, materials and the people who live within them give each space its own identity.",
        "We create fitted interiors that belong to their surroundings. Sometimes as a defining feature. Sometimes so naturally that they feel as though they have always been there.",
      ],
      cta: "Explore selected work",
      note: "Executed projects with our own photography. Concept studies are labelled as such.",
    },
    expertise: {
      eyebrow: "Expertise",
      headline: "Made to measure. Down to the detail.",
      intro: [
        "Every space calls for its own response. Sometimes a distinctive statement. Sometimes the restraint to make everything feel effortless.",
        "SARTO creates bespoke interiors shaped by architecture, purpose and material. Depending on the commission: a single element, a coherent interior concept or a package for several units.",
      ],
      cta: "Explore",
    },
    craft: {
      eyebrow: "Craft",
      headline: "The art is in the detail.",
      intro: [
        "The grain of a veneer. The meeting of two materials. An edge finished just right. These are the details that give an interior its character.",
        "Behind SARTO stands the manufacturing expertise of Limani, a family business shaped by generations of knowledge and experience. Traditional skill and modern production come together in work intended to stand the test of time.",
      ],
      themes: [
        { title: "Veneer.", text: "Laid by picture, not by number. The figure runs across the whole front." }, // OP
        { title: "Joint.", text: "Mitre, shadow gap, groove. Where two surfaces meet, the work shows." },
        { title: "Surface.", text: "Oiled, lacquered or brushed. Touch is part of the design." },
        { title: "The hand.", text: "Machines cut precisely. The final fit on site is made by a person." },
      ],
      cta: "Discover our craft",
    },
    audiences: {
      eyebrow: "Working together",
      headline: "Two ways into SARTO.",
      cards: [
        {
          key: "professionals",
          label: "For architects",
          title: "Your vision. Our craftsmanship.",
          text: "Technical development, material coordination and craftsmanship that stays true to the design. Your standard remains the measure.",
          cta: "Work with us",
          image: "corner",
        },
        {
          key: "developers",
          label: "For developers",
          title: "Distinctive by design. Considered at scale.",
          text: "Individual residences, residential developments and selected hospitality projects: bespoke, or as a repeatable package per unit type.",
          cta: "Our offer for developers",
          image: "group-killwangen",
        },
      ],
    },
    showroom: {
      eyebrow: "Showroom Spreitenbach",
      headline: "Experience materials. Explore spaces.",
      intro: [
        "The character of a material is best understood up close. Our planned showroom will bring kitchens, wardrobes, bathrooms and bespoke interiors together in carefully composed settings.",
        "A place to explore materials, compare possibilities and develop ideas.",
      ],
      zonesLabel: "Areas",
      cta: "Discover the showroom",
      status: "In planning. Industriestrasse 160/162, 8957 Spreitenbach. Opening to be announced.",
    },
    final: {
      headline: "Tell us about your project.",
      copy: "A single bespoke piece, a coherent interior concept or a larger package for several units: we reply with a first assessment.",
      primary: "Discuss your project",
      secondary: "Architect and developer enquiries",
    },
  },
  projects: {
    eyebrow: "Projects",
    headline: "Spaces with character.",
    intro: "Executed work in private villas, chalets and residential developments: kitchens, dressing rooms, wine cellars, doors, built-ins and bathroom furniture, made by Limani. Concrete, architectural, unstaged.",
    note: "Further references are being documented. Concept studies are labelled as such.",
    filters: {
      residences: "Residential",
      kitchens: "Kitchens",
      wardrobes: "Wardrobes",
      hospitality: "Hospitality",
    },
    all: "All",
    empty: "No cleared projects are documented in this category yet.",
  },
  expertise: {
    eyebrow: "Expertise",
    headline: "From concept to crafted reality.",
    intro: "Interior architecture, considered materials and bespoke craftsmanship. SARTO develops individual interior concepts, advises on materials and accompanies the agreed work through to completion, with its own joinery workshop and selected specialist partners.",
    detailCta: "Discuss a project",
    otherLabel: "Other areas",
    worldsLabel: "Four product worlds",
    worldsHeadline: "Made to measure. Down to the detail.",
    areas: {
      label: "Six areas of service",
      headline: "What we do ourselves. And what we deliver with partners.",
      intro: "SARTO is a partner for the concept, design and realisation of bespoke interiors. We do not need to carry out every trade ourselves. Our strength lies in connecting interior design, material expertise, our own manufacturing and coordinated execution. We say openly where each part comes from.",
      roles: {
        crafted: { title: "Crafted by us", text: "Our own joinery workshop and bespoke fitted interiors." },
        designed: { title: "Designed with us", text: "Interior architecture, planning and material concepts, with in-house or external specialists depending on the project." },
        delivered: { title: "Delivered together", text: "Complementary services, delivery and installation with selected partners." },
      },
      items: [
        { n: "01", title: "Interior Architecture & Design", text: "Spatial concepts, layout optimisation, design, visualisations and the development of individual interior solutions.", role: "designed" },
        { n: "02", title: "Materials & Finishes", text: "Material concepts, surfaces, veneers, stone, hardware, colours and coordinated material palettes. Sampled on the real thing.", role: "designed" },
        { n: "03", title: "Bespoke Manufacturing", text: "Our own production of kitchens, dressing rooms, fitted wardrobes, bathroom furniture and further bespoke joinery through Limani.", role: "crafted" },
        { n: "04", title: "Project Coordination", text: "Execution planning, technical coordination, sampling, production preparation and coordination of the agreed scope.", role: "designed" },
        { n: "05", title: "Installation & Execution", text: "Delivery, professional installation, quality control and handover. Our own team or qualified installation partners.", role: "delivered" },
        { n: "06", title: "Complementary Solutions", text: "Complementary products and trades through selected partners, coordinated per project.", role: "delivered" },
      ],
      note: "SARTO does not automatically provide all interior trades and does not act as a general contractor. Which services we provide ourselves and which are delivered with partners is set out in writing before a project starts.",
    },
    entries: [
      {
        key: "kitchens",
        title: "Kitchens",
        short: "Where design, function and everyday life come together.",
        lede: "The kitchen is the most used room in the house. It has to work every day and look right for years.",
        materials: {
          title: "What we work with",
          text: "Oak and walnut, on equal terms, plus smoked oak: as veneer or solid timber, the choice follows light and room. Natural stone, ceramic and stainless steel for worktops. Lacquer with open or closed pore. Brass, bronze or blackened steel for handle profiles and edges.",
        },
        applications: {
          title: "Where it is used",
          items: ["Living kitchens with island and tall unit wall", "Kitchens as part of a wall panelling", "Back-of-house: pantry, bar, utility", "Outdoor kitchens in covered areas"],
        },
        options: {
          title: "Your options",
          items: ["Handleless with profile or push-to-open", "Fronts veneered in one continuous figure", "Lighting in the shadow gap", "Appliances integrated or deliberately visible"],
        },
        execution: {
          title: "Execution",
          text: "Site survey, workshop drawings with appliance schedule, coordination with plumbing and electrical. Manufacturing at Limani, inspection before dispatch, installation coordinated with the site. Scope agreed per project.", // OP
        },
        image: "kitchen-light",
      },
      {
        key: "wardrobes",
        title: "Wardrobes & Dressing Rooms",
        short: "Thoughtful storage, seamlessly integrated.",
        lede: "A dressing room is a room, not a cupboard. It orders, displays and conceals, and it needs its own light.",
        materials: {
          title: "What we work with",
          text: "Veneered fronts in walnut, oak or stained ash. Interiors in leather, felt, glass and metal. Fabric-lined back panels, mirrored surfaces, stone shelves.",
        },
        applications: {
          title: "Where it is used",
          items: ["Walk-in dressing rooms", "Wardrobe walls in bedrooms and hallways", "Entrance cloakrooms", "Storage under sloping ceilings and in niches"],
        },
        options: {
          title: "Your options",
          items: ["Open shelving with lit edges", "Closed fronts with shadow gap", "Drawers divided to your wardrobe inventory", "Lifts, trouser pull-outs, jewellery inserts"],
        },
        execution: {
          title: "Execution",
          text: "Planning from the floor plan, internal layout from your wardrobe inventory, lighting with the electrician. Manufacturing at Limani, installation coordinated on site. Scope agreed per project.",
        },
        image: "wardrobe",
      },
      {
        key: "bathrooms",
        title: "Bathrooms",
        short: "Refined forms, carefully considered materials and quiet functionality.",
        lede: "In the bathroom, water, stone and timber meet. That calls for carriers that last and joints that stay tight.",
        materials: {
          title: "What we work with",
          text: "Moisture-resistant carrier boards with veneer or lacquer. Natural stone, ceramic and solid surface for tops and basins. Hardware and handles in matched metals.",
        },
        applications: {
          title: "Where it is used",
          items: ["Vanity units with integrated basins", "Mirror cabinets and wall niches", "Tall units and laundry solutions", "Guest cloakroom and master bathroom"],
        },
        options: {
          title: "Your options",
          items: ["Wall-hung or floor-standing", "Top and front from one piece", "Indirect lighting", "Mirrors with integrated light"],
        },
        execution: {
          title: "Execution",
          text: "Coordination with plumbing design and tiler, workshop drawing with connections. Manufacturing at Limani, installation coordinated. Scope agreed per project.",
        },
        image: "bath",
      },
      {
        key: "interiors",
        title: "Architectural Interiors",
        short: "Doors, wall panelling and bespoke joinery that become part of the architecture.",
        lede: "Where furniture ends and architecture begins: wall systems, fitted pieces and doors in one line.",
        materials: {
          title: "What we work with",
          text: "Oak or walnut, veneered or solid, plus lacquered surfaces, stone, metal and textile. Acoustic surfaces where the room asks for them.",
        },
        applications: {
          title: "Where it is used",
          items: ["Wall panelling and doors in one plane", "Libraries and media walls", "Room dividers and fitted pieces in hallways", "Reception areas and hospitality, selected"],
        },
        options: {
          title: "Your options",
          items: ["Flush doors and fronts", "Concealed hardware", "One joint pattern across wall and furniture", "Integrated technology and lighting"],
        },
        execution: {
          title: "Execution",
          text: "Planning with architect and site management, workshop drawings, sampling. Manufacturing at Limani, installation coordinated. Scope agreed per project.",
        },
        image: "corridor",
      },
    ],
  },
  professionals: {
    eyebrow: "For architects",
    headline: "Your vision. Our craftsmanship.",
    lede: "A considered design deserves equally considered execution.",
    intro: [
      "SARTO works alongside architects and interior designers to bring demanding interiors to life, from technical coordination and material sampling to manufacturing and agreed installation.",
      "Where an architect is in charge, we take on the parts you ask for and respect the design responsibility. Your standard remains the measure. Our craft makes it visible.",
    ],
    pillars: [
      { title: "One contact", text: "From drawing review to handover. Decisions are recorded in writing." },
      { title: "Workshop drawings", text: "Sections, appliance schedules and connection plans based on your drawings. Approval before production starts." },
      { title: "Sampling", text: "Real samples of veneer, stone, lacquer and metal. Sample boards for the client on request." },
      { title: "Dates", text: "Agreed dates for manufacturing and delivery, aligned with the construction programme." }, // OP
      { title: "Quality control", text: "Inspection before dispatch, documented." }, // OP
      { title: "Installation", text: "Our own team or qualified installation partners, coordinated with site management and adjacent trades." },
    ],
    collaboration: {
      eyebrow: "Process",
      headline: "How we work with you.",
      steps: [
        { n: "01", title: "Drawing review", text: "We read your design and flag what needs technical clarification." },
        { n: "02", title: "Sampling", text: "Materials and finishes are decided on the sample." },
        { n: "03", title: "Workshop drawings", text: "Detailing, approval, production start." },
        { n: "04", title: "Manufacturing and installation", text: "Production at Limani, inspection, delivery and installation to the construction programme." },
      ],
    },
    cta: {
      headline: "Discuss a project.",
      text: "Send us drawings or a short description. You will receive a first assessment of feasibility, process and dates.",
      button: "Architect enquiries",
    },
  },
  developers: {
    eyebrow: "For developers",
    headline: "Distinctive by design. Considered at scale.",
    lede: "From exclusive individual residences to larger residential developments: SARTO combines design, material expertise and bespoke interiors with project-specific planning and manufacturing.",
    intro: [
      "Depending on the commission we deliver single bespoke elements, coherent interior concepts or larger packages across several units. Individual design where it creates value. Repeatable solutions where they give certainty.",
      "One contact for the interior fit-out. One shared standard for the result. Which services SARTO provides itself and which are delivered through partners is agreed transparently for each project.",
    ],
    segmentsLabel: "Three project worlds",
    segments: [
      {
        key: "residences",
        title: "Private Residences",
        text: "Villas, penthouses and high-quality individual properties.",
        points: ["Individual design from concept stage", "Material quality sampled on the real thing", "Execution details that carry the design"],
        image: "group-kuesnacht-hide",
      },
      {
        key: "developments",
        title: "Residential Developments",
        text: "Apartment buildings, residential developments, multiple units.",
        points: ["Standardisation where it makes sense", "Individualisation where it creates value", "Kitchen, wardrobe and bathroom packages per unit type"],
        image: "group-killwangen",
      },
      {
        key: "hospitality",
        title: "Hospitality & Commercial",
        text: "Hotels, serviced apartments, selected commercial spaces.",
        points: ["Consistent material and execution standards", "Repeatable units across many rooms", "Coordination with operator and site management"],
        image: "group-bremgarten-hotel",
      },
    ],
    themesLabel: "What a project needs",
    themesHeadline: "Six things we solve for developers.",
    themes: [
      { title: "Material quality", text: "Coordinated material palettes per unit type. Sampled on the real thing, not on screen." },
      { title: "Technical planning", text: "Workshop drawings, appliance schedules and connection plans based on the execution design." },
      { title: "Sampling", text: "A clean sampling process with sample boards for buyers and clients." },
      { title: "Efficient manufacturing", text: "Recurring elements produced in series, variants placed deliberately. Reliable unit costs." },
      { title: "Repeatable units", text: "Kitchen, bathroom furniture and wardrobe package as a defined standard per unit type, with options for buyers." },
      { title: "Project coordination", text: "Phased delivery and project-specific installation planning, aligned with site management and adjacent trades." },
    ],
    process: {
      eyebrow: "Process",
      headline: "From project briefing to handover.",
      steps: [
        { n: "01", title: "Project briefing", text: "Building type, units, scope, realisation period. We establish what the project needs." },
        { n: "02", title: "Concept and standards", text: "Material and fit-out standards per unit type, with defined options." },
        { n: "03", title: "Sampling and costing", text: "Sample boards, workshop drawings and a project-specific calculation per unit." },
        { n: "04", title: "Series production", text: "Production at Limani, recurring elements in series, inspection before dispatch." }, // OP
        { n: "05", title: "Phased delivery and installation", text: "Delivery to the construction programme, installation per phase, handover per unit." },
      ],
      note: "Capacity, dates and scope are agreed per project. We make no blanket promises.",
    },
    cta: {
      headline: "Place a project.",
      text: "Project location, building type, number of units, desired scope and realisation period: with these details we give a first assessment.",
      button: "Discuss a project",
    },
  },
  craft: {
    eyebrow: "Craft",
    headline: "The art is in the detail.",
    lede: "What SARTO delivers is made in the Limani workshop. Here things are measured, chosen, cut and joined.",
    chapters: [
      {
        eyebrow: "Veneer",
        headline: "Laid by picture, not by number.",
        text: "Veneer is laid so the figure runs across the whole front. Stone is cut along the vein, metal chosen by tone.", // OP
        image: "samples",
      },
      {
        eyebrow: "Joint",
        headline: "Where two surfaces meet.",
        text: "Mitre, shadow gap, groove. The joint is the detail you only notice when it is missing.",
        image: "corner",
      },
      {
        eyebrow: "The hand",
        headline: "The final fit is made by a person.",
        text: "Machines cut precisely. Fitting on site, checking the surface, adjusting the front remains handwork.",
        image: "hands",
      },
    ],
    process: {
      eyebrow: "Process",
      headline: "From design to installation.",
      steps: [
        { n: "01", title: "Conversation and project review", text: "We read drawings, listen and establish what the room needs." },
        { n: "02", title: "Design alignment and material choice", text: "Veneer, stone, lacquer, metal. Decided on the sample, not on screen." },
        { n: "03", title: "Technical detailing and approval", text: "Workshop drawings, joint pattern, hardware. Approval before the first board." },
        { n: "04", title: "Manufacturing and quality control", text: "Production in the Limani workshop. Inspection before dispatch." }, // OP
        { n: "05", title: "Delivery, installation and handover", text: "Coordinated with the site. Handed over when everything sits right." },
      ],
      note: "Scope is agreed individually for every project. Not every stage is part of every commission.",
    },
    production: {
      eyebrow: "Production",
      headline: "From cutting to handover.",
      steps: [
        { title: "Cutting and veneering", text: "Carrier boards are cut, veneer laid to plan and pressed." },
        { title: "Joint and edge", text: "Mitres, grooves and edges are made and checked." },
        { title: "Surface", text: "Sanding, oiling, lacquering. The surface is built up in several passes." },
        { title: "Pre-assembly and inspection", text: "Carcasses are assembled and checked in the workshop before they leave." }, // OP
        { title: "Transport and installation", text: "Packed, delivered, installed. Coordinated with the site." },
      ],
    },
  },
  story: {
    eyebrow: "Our story",
    headline: "The art of tailoring space.",
    lede: "SARTO is the name. Limani is the workshop. Between them lies the conviction that a fitted interior is only finished when it belongs to the architecture.",
    name: {
      headline: "The name.",
      text: [
        "Sarto is the Italian word for tailor. A tailor does not make for an average but for a person: their measurements, their posture, the way they move.",
        "SARTO makes for a space. For its proportions, its light and the people who live in it. A SARTO interior is not a piece of furniture placed in a room. It belongs to the house.",
      ],
    },
    limani: {
      headline: "The workshop.",
      text: [
        "Behind SARTO stands Limani, a family business with its own production. Knowledge of timber, veneer and joint is passed on there: from hand to hand, from one generation to the next.",
        "SARTO is the brand you see. Limani is the workshop that builds. Complementary services are realised with selected partners, and we say openly what we do ourselves and what is made with partners.",
      ],
      note: "Limani's history, location and key figures will be added once verified.",
    },
    values: [
      { title: "Quiet confidence", text: "We do not need to be loud. The work speaks." },
      { title: "Material understanding", text: "We know timber, stone and metal and what each does where." },
      { title: "Architectural discipline", text: "Joints, lines and proportions follow the house, not the catalogue." },
      { title: "Timeless form", text: "We build for decades, not for a season." },
    ],
    cta: "Discuss a project",
  },
  showroom: {
    eyebrow: "Showroom Spreitenbach",
    headline: "Experience materials. Explore spaces.",
    lede: "The SARTO showroom at Industriestrasse 160/162 in Spreitenbach is conceived as a house, not an exhibition: rooms to walk through, where material, workmanship and the finished solution can be judged in one place.",
    status: "In planning. Details are based on the POSTARCH design proposal (14 Oct 2026) and may change. Opening to be announced.",
    factsLabel: "Facts",
    facts: [
      { value: "12", label: "areas to walk through" },
      { value: "2", label: "kitchens in two material worlds" },
      { value: "18 m²", label: "material library" },
      { value: "12", label: "seats at the courtyard table" },
    ],
    zonesLabel: "Areas",
    zones: [
      { id: "kitchen-2", title: "Kitchen in walnut and stone", text: "Dark walnut fronts, island with stone top, appliances by Miele and Bora, tap by Gessi.", area: "19 m²", surface: "walnut-dark", image: "hero-kitchen" },
      { id: "kitchen-1", title: "Kitchen in light lacquer", text: "A calm run with tall units, ceramic worktop. The second material world, deliberately different.", area: "13 m²", surface: "ivory", image: "kitchen-light" },
      { id: "wardrobe", title: "Walk-in dressing room", text: "Fronts in a sablé tone, glass doors, island with glass top and lit compartments.", area: "15 m²", surface: "cocoa", image: "wardrobe" },
      { id: "bedroom", title: "Sleeping and storage", text: "Wardrobe wall with mirrored doors, dressing table with stone top and jewellery inserts.", area: "16 m²", surface: "oak", image: "bedroom" },
      { id: "library", title: "Material library", text: "Veneers, stones, lacquers, metals and hardware to touch. With a stone sample table.", area: "18 m²", surface: "stone-light", image: "samples-dark" },
      { id: "bath", title: "Bathroom", text: "Freestanding bath, double vanity in stone with walnut base, mirror cabinets.", area: "7 m²", surface: "stone", image: "bath" },
      { id: "shower", title: "Shower and WC", text: "Stone on wall and floor, vanity with mirror cabinet. The compact solution.", surface: "stone", image: "shower" },
      { id: "wine", title: "Wine cellar", text: "Walnut shelving, three Miele wine coolers behind glass.", area: "8 m²", surface: "walnut-dark", image: "wine" },
      { id: "office", title: "Study", text: "Walnut wall panelling, stone shelving, pocket door. Interiors as they occur in a house.", area: "12 m²", surface: "walnut", image: "door" },
      { id: "consultation", title: "Consultation", text: "Oval table, media wall, cloakroom. Where projects are discussed and samples decided.", area: "14 m²", surface: "walnut", image: "dining-wine" },
      { id: "utility", title: "Utility", text: "Miele washer and dryer, travertine top. Even the back room is designed.", area: "4 m²", surface: "ivory" },
      { id: "courtyard", title: "Courtyard", text: "Olive tree, table for twelve, outdoor kitchen with grill. The showroom does not end at the door.", surface: "stone-light", image: "olive" },
    ],
    planLabel: "Floor plan",
    planCaption: "POSTARCH design proposal, 14 Oct 2026. Not to scale, subject to change.",
    materialsLabel: "Materials in the showroom",
    materials: ["Cleaf Fronda S156 (walnut)", "Cleaf Sablé LR27", "Cleaf Ovatta UB19", "Mirage Taj Mahal", "Mirage Travertine", "Cosentino Dekton Nomak", "Éclos Eclectic Veins"],
    partnersLabel: "Appliances and fittings",
    partners: ["Miele", "Bora", "Gessi", "Dornbracht", "Grohe", "Flammkraft"],
    experience: {
      headline: "Conceived as a house.",
      text: [
        "No furniture in rows. You walk through a kitchen with a window, a dressing room with a door, a bathroom with running water.",
        "That lets you judge what cannot be judged on screen: touch, light on a surface, the joint in raking light.",
      ],
    },
    visit: {
      headline: "Private visit.",
      text: "Visits are by appointment, with time for your project. Leave us your details and we will be in touch to arrange a date once the showroom opens.",
      button: "Register interest",
      addressLabel: "Address",
      mapLabel: "Open map",
    },
  },
  contact: {
    eyebrow: "Contact",
    headline: "Tell us about your project.",
    lede: "A single bespoke piece, an interior concept or a package for several units. Choose the path that fits you.",
    form: {
      pathLabel: "Your enquiry",
      paths: {
        private: { label: "Private project", text: "For clients, owners and families." },
        professional: { label: "Architects", text: "For architects and interior designers." },
        developer: { label: "Developers", text: "For developers, investors and operators." },
      },
      name: "Name",
      email: "Email",
      phone: "Phone (optional)",
      company: "Practice / company",
      location: "Project location",
      projectType: "Project type",
      projectTypes: ["Kitchen", "Wardrobes / dressing room", "Bathroom furniture", "Architectural interiors", "Whole interior", "Other"],
      stage: "Planning stage",
      stages: ["First idea", "Design available", "Building permit granted", "Under construction", "Conversion / renovation"],
      objectType: "Building type",
      objectTypes: ["Villa / single property", "Apartment building", "Residential development", "Hotel / serviced apartments", "Commercial", "Other"],
      units: "Number of units",
      scope: "Desired scope",
      scopes: ["Kitchens", "Wardrobes / dressing rooms", "Bathroom furniture", "Architectural interiors", "Interior architecture / material concept", "Installation"],
      timeframe: "Planned realisation period",
      timeframes: ["Within 6 months", "6 to 12 months", "12 to 24 months", "Later / open"],
      message: "Description (optional)",
      messageHint: "Room, wishes, timeframe. Anything that helps us understand your project.",
      files: "Drawings or reference images (optional)",
      filesHint: "PDF, JPG, PNG. Up to 10 MB per file.",
      consent: "I agree that SARTO uses my details to process this enquiry.",
      submit: "Send enquiry",
      sending: "Sending",
      success: {
        title: "Thank you for your enquiry.",
        text: "We will be in touch personally within a few working days.",
      },
      error: "The enquiry could not be delivered. Please try again or write to us directly at",
      required: "Required",
    },
    direct: {
      headline: "Direct",
      address: "Showroom and consultation",
      email: "Email",
      phone: "Phone",
      hours: "By appointment",
      showroom: "Showroom in planning, visits after opening.",
    },
    showroomCta: "To the showroom",
  },
  legal: {
    imprint: {
      title: "Imprint",
      text: [
        "SARTO is a brand of Fernsicht Immobilien AG.",
        "Fernsicht Immobilien AG, Industriestrasse 160/162, 8957 Spreitenbach, Switzerland.",
        "Commercial register: TO_VERIFY. UID: TO_VERIFY.",
        "Email: contact@sarto-interiors.ch. Phone: TO_VERIFY.",
        "Manufacturing: Limani. Showroom design: POSTARCH.",
      ],
    },
    privacy: {
      title: "Privacy",
      text: [
        "The responsible entity is Fernsicht Immobilien AG, Industriestrasse 160/162, 8957 Spreitenbach. This privacy notice will be completed under the Swiss Data Protection Act (FADP) once the services used (hosting, form processing, analytics) are confirmed. TO_VERIFY.",
        "Details submitted through the contact form are used solely to process the enquiry and are not passed on to third parties.",
      ],
    },
  },
  footer: {
    claim: "The craft of finished spaces.",
    statement: "Bespoke interiors. Craft with character.",
    navLabel: "Navigation",
    legalLabel: "Legal",
    contactLabel: "Contact",
    rights: "All rights reserved.",
    limani: "Manufacturing heritage by Limani.",
    entity: "SARTO is a brand of Fernsicht Immobilien AG.",
  },
};
