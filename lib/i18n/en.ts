/* =========================================================
   ENGLISH (main language) — edit text here.
   Spanish lives in es.ts and must keep the same structure.
   ========================================================= */
const en = {
  meta: {
    title: "Brothers Mobile Detailing | Professional Mobile Car Detailing",
    description: "Professional mobile car detailing at your home or office. We bring our own filtered water and power. Full detail with shampoo $200. Call 702-722-7601.",
  },
  langName: "English",
  nav: {
    home: "Home", services: "Services", pricing: "Pricing", gallery: "Gallery", about: "About", contact: "Contact",
    book: "Book Now", call: "Call", openMenu: "Open menu", closeMenu: "Close menu", skip: "Skip to content", main: "Main",
    switchLabel: "Ver en español",
  },
  common: {
    home: "Home", from: "From", quote: "Quote", book: "Book", bookNow: "Book Now", requestQuote: "Request a Quote", getQuote: "Get a Quote",
    priceNote: "Prices may vary depending on the size and condition of the vehicle.",
    mostPopular: "Most popular", specialPrice: "Special price",
    veteran: "off for military veterans:", discount: "discount",
    included: "Included", notIncluded: "Not included", stars: "5 out of 5 stars", addon: "Add-on",
  },
  /* Filtered water + own power — shown across the site */
  selfSufficient: {
    eyebrow: "Fully self-contained",
    title: "We Bring", highlight: "Everything We Need",
    lead: "You don't need to provide water, a hose or an outlet. We arrive fully equipped so the job gets done anywhere.",
    water: { title: "Our Own Filtered Water", text: "We bring our own filtered/distilled water, which helps prevent water spots and leaves a spotless finish on your vehicle." },
    power: { title: "Our Own Power Supply", text: "We bring our own power supply, so we don't need an outlet at your home or office." },
    short: "We bring our own filtered water and power",
  },
  home: {
    hero: {
      eyebrow: "Brothers Mobile Detailing",
      l1: "Professional", l2: "Car Detailing", l3: "We Come to You",
      text: "Professional mobile detailing right at your home or office, with high-quality products and careful attention to every detail of your vehicle.",
      trust: [["We Come", "to Your Location"], ["Professional", "Quality"], ["Reliable", "Service"]],
      ctaServices: "View Services",
    },
    badges: { from: "Services from", mobileSmall: "We come to you", mobileBig: "Mobile Service", waterSmall: "Self-contained", waterBig: "Water + Power" },
    highlight: [["Car Cleaning", "Interior & Exterior"], ["Deep Cleaning", "Full Detailing"], ["Paint Restoration", "Lasting Shine & Protection"]],
    services: { title: "Our", highlight: "Services", lead: "Professional care for your vehicle, with the convenience of our mobile service.", cta: "View All Services" },
    why: {
      eyebrow: "Why us", title: "Why choose", highlight: "Brothers Mobile Detailing?",
      items: [
        { title: "Mobile Service", text: "We come straight to your home or office. You carry on with your day while we take care of your car." },
        { title: "Spot-Free Filtered Water", text: "We bring our own filtered/distilled water to help prevent water spots on your paint and glass." },
        { title: "Our Own Power Supply", text: "No outlet needed. We bring our own power, so we can work almost anywhere." },
        { title: "Attention to Detail", text: "Professional cleaning with care for every corner, surface and finish of your vehicle." },
        { title: "Professional Products", text: "We use quality products made specifically for automotive detailing." },
        { title: "Results That Speak for Themselves", text: "Professional results that bring back your vehicle's best look." },
      ],
    },
    ba: { eyebrow: "Before & After", title: "Real", highlight: "Results", lead: "Drag to see the difference a professional detail makes." },
    process: {
      eyebrow: "Quick and easy", title: "How It", highlight: "Works",
      steps: [
        { title: "Book", text: "Choose your detailing service and the date that works best for you." },
        { title: "We Come to You", text: "Our mobile team arrives at your location with its own water, power and equipment." },
        { title: "Enjoy the Result", text: "Your vehicle is cleaned, detailed and ready to shine." },
      ],
    },
    pricing: { eyebrow: "Pricing", title: "Clear", highlight: "Pricing" },
    gallery: { eyebrow: "Gallery", title: "Our", highlight: "Work", cta: "View Full Gallery" },
    about: {
      eyebrow: "About us", title: "We Treat Your Car Like It's", highlight: "Our Own",
      text: "At Brothers Mobile Detailing we bring professional detailing to your location. No lines, no driving and no wasted time: we arrive with the equipment, filtered water, power and products to leave your vehicle spotless.",
      cta: "Get to Know Us", tag: "We come to you", altMain: "Detailer hand-washing a car", altSub: "Clean vehicle interior",
    },
    testimonials: { eyebrow: "Testimonials", title: "What Our", highlight: "Customers Say" },
    contact: {
      eyebrow: "Contact", title: "Let's talk about your vehicle", text: "Call us or send a message and we'll get back to you as soon as possible.",
      readyTitle: "Ready to book?", readyText: "Book your appointment online in under 2 minutes, or send us a message with your questions.", message: "Send a Message",
    },
    heroAlt: "Luxury black car being foam washed",
  },
  stats: [
    { title: "Mobile Service", sub: "At your home or office" },
    { title: "Filtered Water", sub: "Helps prevent water spots" },
    { title: "Own Power Supply", sub: "No outlet needed" },
    { title: "Easy Booking", sub: "In just a few steps" },
  ],
  cta: {
    eyebrow: "Book today", title: "Ready to give your car the care it deserves?",
    text: "Book your mobile detailing service today.", call: "Call us",
  },
  offer: {
    eyebrow: "Promotion", title: "Special Offer",
    placeholder: "Editable text: add the real offer conditions here",
    text: "Take advantage of our special promotion on selected services. Contact us for details and availability.",
    cta: "Claim Offer", label: "Offer", special: "Special",
  },
  ba: { before: "Before", after: "After", aria: "Compare before and after", altBefore: "Before: dirty, dull vehicle", altAfter: "After: clean, glossy vehicle" },
  gallery: {
    filters: { all: "All", exterior: "Exterior", interior: "Interior", pintura: "Paint Restoration", antes: "Before & After" },
    items: [
      "Foam wash", "Spotless interior", "Headlight & paint care", "Glossy finish", "Wheels & tires", "Deep shine",
      "Hand-wash process", "Restored paint", "Wheel detail", "Final result", "Paint correction", "Detailed SUV",
    ],
    aria: "Filter gallery", dialog: "Enlarged image", close: "Close", prev: "Previous", next: "Next",
  },
  // Placeholder testimonials — replace with real customer reviews
  testimonials: [
    { name: "Customer 1", service: "Full Detail with Shampoo", text: "Excellent service. They arrived at my house on time and left my car looking brand new inside and out." },
    { name: "Customer 2", service: "Deep Cleaning", text: "They removed seat stains I thought were permanent. Very professional and careful." },
    { name: "Customer 3", service: "Paint Restoration", text: "The paint got its shine back. You can tell they pay attention to detail. Highly recommended." },
  ],
  services: {
    limpieza: { name: "Car Cleaning", short: "Spotless inside and out.", features: ["Exterior hand wash", "Full vacuum", "Dashboard & panel cleaning", "Streak-free windows"] },
    profunda: { name: "Deep Cleaning", short: "Removes dirt, stains and odors.", features: ["Carpet & seat shampoo", "Stain removal", "Odor treatment", "Vents & crevices detailed"] },
    pintura: { name: "Paint Restoration", short: "Brings back the original shine and look.", features: ["Paint decontamination", "Light scratch correction", "Machine polishing", "Sealant & protection"] },
    exterior: { name: "Exterior Wash", short: "Foam hand wash with a streak-free dry.", features: ["Foam pre-wash", "Two-bucket hand wash", "Spot-free rinse with filtered water", "Wheels & tires"] },
    interior: { name: "Interior Detailing", short: "A clean, fresh and protected cabin.", features: ["Deep vacuum", "Plastic & vinyl cleaning", "Cup holder cleaning", "Optional: leather seat cleaning & conditioning (+$30)", "Interior glass"] },
    completo: { name: "Full Detail with Shampoo", short: "Interior and exterior at the highest level, with shampoo.", features: ["Full exterior wash", "Full interior detail", "Seat & carpet shampoo", "Cup holder cleaning", "Leather seat cleaning & conditioning included (if equipped)", "Tire finish"] },
    pulido: { name: "Paint Polishing", short: "Deep, mirror-like shine.", features: ["Single or multi-stage polish", "Removes dullness and marks", "Enhances color", "Protective finish"] },
    llantas: { name: "Wheels & Tires", short: "Shiny rims and renewed tires.", features: ["Rim decontamination", "Wheel well cleaning", "Tire shine", "Lug nut detail"] },
    tapiceria: { name: "Upholstery Cleaning", short: "Seats and carpets like new.", features: ["Shampoo & extraction", "Fabric, leather or vinyl", "Stain removal", "Quick drying"] },
    piel: { name: "Leather Seat Cleaning & Conditioning", short: "Cleans, nourishes and protects leather seats.", features: ["Gentle leather cleaning", "Conditioning treatment", "Included in Full Detail with Shampoo", "Optional add-on with any other service: +$30"] },
    molduras: { name: "Trim Restoration", short: "Brings faded exterior trim back to life.", features: ["Trim cleaning and prep", "Restores faded plastic and rubber", "Richer, darker finish"] },
    ozono: { name: "Interior Ozone Treatment", short: "Eliminates odors from cigarettes, marijuana and other unpleasant smells.", features: ["Targets cigarette and marijuana odors", "Treats other unpleasant smells", "Treats the full cabin"] },
  },
  pricing: {
    limpieza: { name: "Basic Wash", desc: "Ideal for regular maintenance of your vehicle.", features: ["Exterior hand wash", "Interior vacuum", "Window cleaning", "Wheels & tires", "Optional: leather seat care (+$30)"] },
    completo: { name: "Full Detail with Shampoo", desc: "Deep interior and exterior cleaning, with shampoo.", features: ["Everything in Basic Wash", "Seat & carpet shampoo", "Cup holder cleaning", "Leather seat cleaning & conditioning included (if equipped)", "Odor treatment", "Paint protection"] },
    pintura: { name: "Paint Restoration", desc: "Bring back your paint's original shine.", features: ["Paint assessment", "Decontamination", "Machine polishing", "Protective sealant"] },
  },
  servicesPage: {
    meta: { title: "Services", description: "Exterior wash, interior detailing, full detail with shampoo, leather conditioning, ozone treatment, trim and paint restoration, wheels and upholstery. Mobile service." },
    hero: { crumb: "Services", eyebrow: "Our Services", title: "Professional Detailing", highlight: "That Comes to You", text: "From an exterior wash to full paint restoration. Choose the service your vehicle needs and we'll come to you." },
    catalog: { eyebrow: "Catalog", title: "All", highlight: "Services", lead: "Every service is done at your location with professional products, our own filtered water and our own power." },
    interior: {
      eyebrow: "Interior", before: "A clean,", highlight: "fresh", after: "and protected cabin",
      items: [["Deep vacuum", "of seats, carpets, trunk and corners."], ["Shampoo & extraction", "of stains on fabric and carpet."], ["Leather seat cleaning & conditioning", "included in Full Detail with Shampoo, optional (+$30) with other services."], ["Cup holder cleaning", "plus vinyl and plastic surfaces."], ["Interior ozone treatment", "available for cigarette, marijuana and other unpleasant odors."], ["Odor treatment", "for a fresh interior."]],
      cta: "Book Interior", alt: "Detailed vehicle interior",
    },
    paint: {
      eyebrow: "Paint", before: "Bring back the original", highlight: "shine", after: "",
      items: [["Assessment", "of the paint condition before we start."], ["Decontamination", "to remove bonded contaminants."], ["Machine polishing", "to reduce marks and dullness."], ["Protective sealant", "for a longer-lasting shine."]],
      cta: "Request a Quote", alt: "Polished paint with a deep shine",
    },
    compare: {
      eyebrow: "Compare", title: "What does", highlight: "each package include?",
      cols: ["Includes", "Basic Wash", "Full Detail with Shampoo", "Restoration"],
      rows: ["Exterior hand wash", "Interior vacuum", "Seat & carpet shampoo", "Odor treatment", "Machine polishing", "Protective sealant"],
    },
    faq: {
      eyebrow: "Questions", title: "Frequently Asked", highlight: "Questions",
      items: [
        ["Do I need to provide water or electricity?", "No. We bring our own filtered/distilled water, which helps prevent water spots, and our own power supply. You don't need a hose or an outlet."],
        ["Can you remove smoke and other strong odors?", "Yes. Our interior ozone treatment eliminates odors from cigarettes, marijuana and other unpleasant smells."],
        ["How long does the service take?", "It depends on the service, the size and the condition of the vehicle. We give you an estimated time when we confirm your appointment."],
        ["What areas do you serve?", "We're a mobile service. Enter your area in the booking form and we'll confirm availability."],
        ["Why can the price vary?", "The final price depends on the vehicle size (sedan, SUV, truck) and its condition. We always confirm the price before we start."],
      ],
    },
  },
  pricingPage: {
    meta: { title: "Pricing", description: "Mobile detailing pricing. Full detail with shampoo $200 (reg. $280), basic wash $150 with 15% off for military veterans." },
    hero: { crumb: "Pricing", eyebrow: "Pricing", title: "Clear Pricing,", highlight: "No Surprises", text: "We confirm the final price before we start, based on the size and condition of your vehicle." },
    packages: { eyebrow: "Packages", title: "Choose Your", highlight: "Package" },
    factors: {
      eyebrow: "Transparency", title: "What affects the", highlight: "price?",
      items: [["Vehicle size", "Sedan, SUV, truck or van."], ["How dirty it is", "Stains, pet hair, mud."], ["Paint condition", "Dullness, marks or scratches."], ["Add-on services", "Extras you'd like to add."]],
    },
    cta: { title: "Need a custom quote?", text: "Call us or book online and we'll confirm the price for your vehicle." },
  },
  galleryPage: {
    meta: { title: "Gallery", description: "Our detailing work: exteriors, interiors, paint restoration and before & after." },
    hero: { crumb: "Gallery", eyebrow: "Gallery", title: "Our Work", highlight: "Speaks for Itself", text: "A look at the care and attention to detail we put into every vehicle." },
    ba: { eyebrow: "Before & After", title: "Compare the", highlight: "Result" },
    cta: "Want your car to be next?",
  },
  aboutPage: {
    meta: { title: "About", description: "Meet Brothers Mobile Detailing: professional mobile detailing with attention to every detail." },
    hero: { crumb: "About", eyebrow: "About", title: "We Treat Your Car", highlight: "Like It's Our Own", text: "A mobile detailing service built to give you professional results without leaving home." },
    story: {
      eyebrow: "Our story", title: "Professional detailing,", highlight: "wherever you are",
      lead: "Brothers Mobile Detailing started with a simple idea: taking care of your vehicle shouldn't take up your time. We come to your home, office or wherever you need us, with the equipment and products to do a professional job.",
      text: "We bring our own filtered/distilled water to help prevent water spots, and our own power supply, so we can work anywhere. We treat every car with the same care we'd give our own and don't finish until the result looks right.",
      tag: "Professional Quality", altMain: "Detailing team at work", altSub: "Detailing close-up",
    },
    values: {
      eyebrow: "Our values", title: "What", highlight: "defines us",
      items: [
        { title: "Punctuality", text: "We respect your time and arrive at the agreed time." },
        { title: "Detail", text: "Every corner counts: vents, seams, rims and glass." },
        { title: "Trust", text: "Respectful service and full care for your vehicle and property." },
        { title: "Honesty", text: "Clear prices, confirmed before we start the job." },
      ],
    },
    process: {
      eyebrow: "Process", title: "How We", highlight: "Work",
      steps: [
        { title: "Book", text: "Choose the service and the time you prefer." },
        { title: "We Come to You", text: "We arrive with our own water, power and equipment." },
        { title: "Enjoy the Result", text: "We review the work with you before we leave." },
      ],
    },
    testimonials: { eyebrow: "Testimonials", title: "Happy", highlight: "Customers" },
  },
  contactPage: {
    meta: { title: "Contact", description: "Contact Brothers Mobile Detailing. Call 702-722-7601 or 702-722-8392, or send your request online." },
    hero: { crumb: "Contact", eyebrow: "Contact", title: "Let's Talk About", highlight: "Your Vehicle", text: "Message or call us. We'll help you choose the right service and confirm your appointment." },
    info: {
      eyebrow: "Information", title: "We're here to help", text: "We reply as soon as possible. For a faster response, call us directly.",
      phone: "Phone", phone2: "Phone 2", email: "Email", website: "Website", service: "Service", serviceValue: "Mobile — we come to you",
    },
    cta: { title: "Prefer to book directly?", text: "Choose your service, date and time in under 2 minutes." },
  },
  form: {
    title: "Send us a message", requiredNote: "Fields marked with", requiredNote2: "are required.",
    okTitle: "Message sent!", okText: "Thanks for contacting us. We'll get back to you soon.",
    errTitle: "Please check the form.", errText: "Some fields need to be corrected.",
    name: "Name", phone: "Phone", email: "Email", area: "Service area", areaPh: "City or ZIP code",
    date: "Preferred date", vehicle: "Vehicle type", service: "Service", message: "Message", messagePh: "Tell us about your vehicle and what you need",
    select: "Select…", other: "Other / Not sure", send: "Send Message", sending: "Sending…",
    errors: {
      required: "This field is required.", name: "Please enter your full name.", email: "Please enter a valid email.",
      phone: "Please enter a valid phone number (10 digits).", future: "Please choose today or a later date.",
    },
  },
  vehicles: [
    { name: "Sedan / Coupe", note: "Compact and mid-size cars" },
    { name: "SUV", note: "Crossovers and SUVs" },
    { name: "Truck / Pickup", note: "Crew-cab trucks" },
    { name: "Van / Minivan", note: "3-row vehicles" },
  ],
  booking: {
    meta: { title: "Book Now", description: "Book your mobile detailing service in a few steps." },
    hero: { crumb: "Book", eyebrow: "Book", title: "Book Your", highlight: "Appointment", text: "Choose your service, your vehicle and a time. We come to you." },
    progress: "Booking progress",
    steps: ["Service", "Vehicle", "Date", "Your details", "Confirm"],
    s1: { title: "What service do you need?", text: "You can add extra details later.", err: "Please choose a service to continue." },
    s2: { title: "Vehicle type", text: "The final price may vary depending on size and condition.", err: "Please choose your vehicle type." },
    s3: { title: "Date and time", text: "Choose the day and time you prefer. We'll confirm availability.", date: "Date", time: "Time", err: "Please choose a valid date and a time." },
    s4: { title: "Your details", text: "We only use them to confirm your appointment.", address: "Service address", notes: "Notes (optional)", notesPh: "Vehicle condition, access, pets, etc." },
    s5: { title: "Confirm your booking", text: "Review your details before sending." },
    selfNote: "No need to provide water or an outlet: we bring our own filtered water and power supply.",
    done: { title: "Request received!", text: "Thanks for choosing Brothers Mobile Detailing. We'll contact you soon to confirm your appointment. If it's urgent, call us at", or: "or", back: "Back to Home" },
    nav: { back: "Back", next: "Continue", confirm: "Confirm Booking" },
    summary: { service: "Service", price: "Price", vehicle: "Vehicle", date: "Date", time: "Time", name: "Name", phone: "Phone", email: "Email", address: "Address", notes: "Notes", promo: "Promotion", veteran: "Military veterans", addon: "Optional add-on" },
    byQuote: "By quote", addon: "Optional add-on", addonText: "Leather seat cleaning & conditioning", promoValue: "Special Offer",
  },
  footer: {
    about: "Professional mobile detailing. We bring the care your vehicle needs to your home or office, with quality products, our own filtered water and our own power.",
    nav: "Navigation", services: "Services", contact: "Contact", book: "Book", mobile: "Mobile service",
    rights: "All rights reserved.", tagline: "Mobile Car Detailing · We Come to You",
  },
  dateLocale: "en-US",
};

export default en;
export type Dict = typeof en;
