/* =========================================================
   ESPAÑOL — same structure as en.ts (TypeScript enforces it).
   ========================================================= */
import type { Dict } from "./en";

const es: Dict = {
  meta: {
    title: "Brothers Mobile Detailing | Limpieza Profesional de Autos a Domicilio",
    description: "Detailing profesional a domicilio. Traemos nuestra propia agua filtrada y energía. Detailing completo con shampoo $200. Llama al 702-722-7601.",
  },
  langName: "Español",
  nav: {
    home: "Inicio", services: "Servicios", pricing: "Precios", gallery: "Galería", about: "Nosotros", contact: "Contacto",
    book: "Agenda tu Cita", call: "Llamar", openMenu: "Abrir menú", closeMenu: "Cerrar menú", skip: "Saltar al contenido", main: "Principal",
    switchLabel: "View in English",
  },
  common: {
    home: "Inicio", from: "Desde", quote: "Cotizar", book: "Reservar", bookNow: "Agenda tu Cita", requestQuote: "Solicitar Cotización", getQuote: "Pedir Cotización",
    priceNote: "Los precios pueden variar dependiendo del tamaño y condición del vehículo.",
    mostPopular: "Más popular", specialPrice: "Precio especial",
    veteran: "para veteranos militares:", discount: "de descuento",
    included: "Incluido", notIncluded: "No incluido", stars: "5 de 5 estrellas",
  },
  selfSufficient: {
    eyebrow: "Totalmente equipados",
    title: "Llevamos", highlight: "Todo lo Necesario",
    lead: "No necesitas darnos agua, manguera ni enchufe. Llegamos completamente equipados para trabajar en cualquier lugar.",
    water: { title: "Nuestra Propia Agua Filtrada", text: "Traemos nuestra propia agua filtrada/destilada, que ayuda a prevenir manchas de agua y deja un acabado impecable en tu vehículo." },
    power: { title: "Nuestra Propia Energía", text: "Traemos nuestra propia fuente de energía, así que no necesitamos un enchufe en tu casa u oficina." },
    short: "Traemos nuestra propia agua filtrada y energía",
  },
  home: {
    hero: {
      eyebrow: "Brothers Mobile Detailing",
      l1: "Limpieza Profesional", l2: "de Autos", l3: "Servicio a Domicilio",
      text: "Detailing profesional directamente en tu casa u oficina, con productos de alta calidad y atención cuidadosa a cada detalle de tu vehículo.",
      trust: [["Vamos", "a tu Ubicación"], ["Calidad", "Profesional"], ["Servicio", "Confiable"]],
      ctaServices: "Ver Servicios",
    },
    badges: { from: "Servicios desde", mobileSmall: "Vamos a ti", mobileBig: "A Domicilio", waterSmall: "Autosuficientes", waterBig: "Agua + Energía" },
    highlight: [["Limpieza de Carros", "Interiores y Exteriores"], ["Limpieza Profunda", "Detailing Completo"], ["Restauración de Pintura", "Brillo y Protección Duradera"]],
    services: { title: "Nuestros", highlight: "Servicios", lead: "Cuidado profesional para tu vehículo, con la comodidad de nuestro servicio a domicilio.", cta: "Ver Todos los Servicios" },
    why: {
      eyebrow: "Por qué nosotros", title: "¿Por qué elegir", highlight: "Brothers Mobile Detailing?",
      items: [
        { title: "Servicio a Domicilio", text: "Vamos directamente a tu casa u oficina. Tú sigues con tu día, nosotros cuidamos tu auto." },
        { title: "Agua Filtrada Sin Manchas", text: "Traemos nuestra propia agua filtrada/destilada para ayudar a prevenir manchas de agua en la pintura y los vidrios." },
        { title: "Nuestra Propia Energía", text: "No necesitas enchufe. Traemos nuestra propia energía para trabajar casi en cualquier lugar." },
        { title: "Atención al Detalle", text: "Limpieza profesional con cuidado en cada rincón, superficie y acabado del vehículo." },
        { title: "Productos Profesionales", text: "Usamos productos de calidad diseñados específicamente para el detailing automotriz." },
        { title: "Resultados que Hablan por Sí Solos", text: "Resultados profesionales que devuelven a tu vehículo su mejor apariencia." },
      ],
    },
    ba: { eyebrow: "Antes y Después", title: "Resultados", highlight: "Reales", lead: "Desliza para ver la diferencia que hace un detailing profesional." },
    process: {
      eyebrow: "Fácil y rápido", title: "Así", highlight: "Funciona",
      steps: [
        { title: "Agenda", text: "Elige el servicio de detailing y la fecha que mejor te funcione." },
        { title: "Vamos a Ti", text: "Nuestro equipo móvil llega a tu ubicación con su propia agua, energía y equipo." },
        { title: "Disfruta el Resultado", text: "Tu vehículo queda limpio, detallado y listo para lucir." },
      ],
    },
    pricing: { eyebrow: "Precios", title: "Precios", highlight: "Claros" },
    gallery: { eyebrow: "Galería", title: "Nuestro", highlight: "Trabajo", cta: "Ver Galería Completa" },
    about: {
      eyebrow: "Nosotros", title: "Cuidamos tu Auto Como Si Fuera", highlight: "Nuestro",
      text: "En Brothers Mobile Detailing llevamos el detailing profesional hasta tu ubicación. Sin filas, sin traslados y sin perder tu tiempo: llegamos con el equipo, agua filtrada, energía y productos para dejar tu vehículo impecable.",
      cta: "Conócenos", tag: "Vamos a ti", altMain: "Detallador lavando un auto a mano", altSub: "Interior limpio de un vehículo",
    },
    testimonials: { eyebrow: "Testimonios", title: "Lo que Dicen Nuestros", highlight: "Clientes" },
    contact: {
      eyebrow: "Contacto", title: "Hablemos de tu vehículo", text: "Llámanos o envíanos un mensaje y te respondemos lo antes posible.",
      readyTitle: "¿Listo para reservar?", readyText: "Agenda tu cita en línea en menos de 2 minutos, o envíanos un mensaje con tus preguntas.", message: "Enviar Mensaje",
    },
    heroAlt: "Auto negro de lujo siendo lavado con espuma",
  },
  stats: [
    { title: "Servicio Móvil", sub: "En tu casa u oficina" },
    { title: "Agua Filtrada", sub: "Ayuda a prevenir manchas" },
    { title: "Energía Propia", sub: "No necesitamos enchufe" },
    { title: "Reserva Fácil", sub: "En pocos pasos" },
  ],
  cta: {
    eyebrow: "Reserva hoy", title: "¿Listo para darle a tu auto el cuidado que merece?",
    text: "Agenda tu servicio de detailing a domicilio hoy.", call: "Llámanos",
  },
  offer: {
    eyebrow: "Promoción", title: "Oferta Especial",
    placeholder: "Texto editable: agrega aquí las condiciones reales de la oferta",
    text: "Aprovecha nuestra promoción especial en servicios seleccionados. Contáctanos para conocer los detalles y la disponibilidad.",
    cta: "Aprovechar Oferta", label: "Oferta", special: "Especial",
  },
  ba: { before: "Antes", after: "Después", aria: "Comparar antes y después", altBefore: "Antes: vehículo sucio y opaco", altAfter: "Después: vehículo limpio y brillante" },
  gallery: {
    filters: { all: "Todo", exterior: "Exterior", interior: "Interior", pintura: "Restauración de Pintura", antes: "Antes y Después" },
    items: [
      "Lavado con espuma", "Interior impecable", "Cuidado de faros y pintura", "Acabado brillante", "Rines y llantas", "Brillo profundo",
      "Proceso de lavado a mano", "Pintura restaurada", "Detalle de rines", "Resultado final", "Corrección de pintura", "SUV detallada",
    ],
    aria: "Filtrar galería", dialog: "Imagen ampliada", close: "Cerrar", prev: "Anterior", next: "Siguiente",
  },
  testimonials: [
    { name: "Cliente 1", service: "Detailing Completo con Shampoo", text: "Excelente servicio. Llegaron a mi casa a tiempo y dejaron mi carro como nuevo por dentro y por fuera." },
    { name: "Cliente 2", service: "Limpieza Profunda", text: "Quitaron manchas de los asientos que pensé que eran permanentes. Muy profesionales y cuidadosos." },
    { name: "Cliente 3", service: "Restauración de Pintura", text: "La pintura recuperó su brillo. Se nota la atención al detalle. Los recomiendo totalmente." },
  ],
  services: {
    limpieza: { name: "Limpieza de Carros", short: "Interior y exterior impecable.", features: ["Lavado exterior a mano", "Aspirado completo", "Limpieza de tablero y paneles", "Vidrios sin manchas"] },
    profunda: { name: "Limpieza Profunda", short: "Elimina suciedad, manchas y olores.", features: ["Shampoo de alfombras y asientos", "Eliminación de manchas", "Tratamiento de olores", "Detalle de rincones y rejillas"] },
    pintura: { name: "Restauración de Pintura", short: "Recupera el brillo y la apariencia original.", features: ["Descontaminación de pintura", "Corrección de rayones leves", "Pulido a máquina", "Sellado y protección"] },
    exterior: { name: "Lavado Exterior", short: "Lavado a mano con espuma y secado sin rayas.", features: ["Prelavado con espuma", "Lavado a mano, método de dos cubetas", "Enjuague sin manchas con agua filtrada", "Llantas y rines"] },
    interior: { name: "Detallado Interior", short: "Cabina limpia, fresca y protegida.", features: ["Aspirado profundo", "Limpieza de plásticos y vinil", "Acondicionador de piel", "Vidrios interiores"] },
    completo: { name: "Detailing Completo con Shampoo", short: "Interior y exterior al máximo nivel, con shampoo.", features: ["Todo el lavado exterior", "Todo el detallado interior", "Shampoo de asientos y alfombras", "Acabado de llantas"] },
    pulido: { name: "Pulido de Pintura", short: "Brillo profundo tipo espejo.", features: ["Pulido de una o varias etapas", "Elimina opacidad y marcas", "Realza el color", "Acabado con protección"] },
    llantas: { name: "Llantas y Rines", short: "Rines brillantes y llantas renovadas.", features: ["Descontaminación de rines", "Limpieza de pasos de rueda", "Abrillantador de llantas", "Detalle de birlos"] },
    tapiceria: { name: "Limpieza de Tapicería", short: "Asientos y alfombras como nuevos.", features: ["Shampoo y extracción", "Tela, piel o vinil", "Eliminación de manchas", "Secado rápido"] },
  },
  pricing: {
    limpieza: { name: "Limpieza Básica", desc: "Ideal para el mantenimiento regular de tu vehículo.", features: ["Lavado exterior a mano", "Aspirado interior", "Limpieza de vidrios", "Llantas y rines"] },
    completo: { name: "Detailing Completo con Shampoo", desc: "Limpieza profunda interior y exterior, con shampoo.", features: ["Todo lo de Limpieza Básica", "Shampoo de asientos y alfombras", "Tratamiento de olores", "Protección de pintura"] },
    pintura: { name: "Restauración de Pintura", desc: "Recupera el brillo original de tu pintura.", features: ["Evaluación de la pintura", "Descontaminación", "Pulido a máquina", "Sellado protector"] },
  },
  servicesPage: {
    meta: { title: "Servicios", description: "Lavado exterior, detallado interior, detailing completo con shampoo, limpieza profunda, restauración y pulido de pintura, llantas y tapicería. A domicilio." },
    hero: { crumb: "Servicios", eyebrow: "Nuestros Servicios", title: "Detailing Profesional", highlight: "a Domicilio", text: "Desde un lavado exterior hasta la restauración completa de la pintura. Elige el servicio que tu vehículo necesita y nosotros vamos a ti." },
    catalog: { eyebrow: "Catálogo", title: "Todos los", highlight: "Servicios", lead: "Cada servicio se realiza en tu ubicación con productos profesionales, nuestra propia agua filtrada y nuestra propia energía." },
    interior: {
      eyebrow: "Interior", before: "Una cabina limpia,", highlight: "fresca", after: "y protegida",
      items: [["Aspirado profundo", "de asientos, alfombras, cajuela y rincones."], ["Shampoo y extracción", "de manchas en tela y alfombra."], ["Limpieza y acondicionado", "de piel, vinil y plásticos."], ["Tratamiento de olores", "para un interior fresco."]],
      cta: "Reservar Interior", alt: "Interior de vehículo detallado",
    },
    paint: {
      eyebrow: "Pintura", before: "Recupera el", highlight: "brillo", after: "original",
      items: [["Evaluación", "del estado de la pintura antes de empezar."], ["Descontaminación", "para remover residuos adheridos."], ["Pulido a máquina", "para reducir marcas y opacidad."], ["Sellado protector", "para un brillo más duradero."]],
      cta: "Solicitar Cotización", alt: "Pintura pulida con brillo profundo",
    },
    compare: {
      eyebrow: "Compara", title: "¿Qué incluye", highlight: "cada paquete?",
      cols: ["Incluye", "Limpieza Básica", "Detailing Completo con Shampoo", "Restauración"],
      rows: ["Lavado exterior a mano", "Aspirado interior", "Shampoo de asientos y alfombras", "Tratamiento de olores", "Pulido a máquina", "Sellado protector"],
    },
    faq: {
      eyebrow: "Preguntas", title: "Preguntas", highlight: "Frecuentes",
      items: [
        ["¿Necesito tener agua o electricidad?", "No. Traemos nuestra propia agua filtrada/destilada, que ayuda a prevenir manchas de agua, y nuestra propia fuente de energía. No necesitas manguera ni enchufe."],
        ["¿Cuánto tiempo toma el servicio?", "Depende del servicio, el tamaño y la condición del vehículo. Te damos un tiempo estimado al confirmar tu cita."],
        ["¿A qué zonas dan servicio?", "Somos un servicio móvil. Escríbenos tu zona en el formulario de reserva y confirmamos disponibilidad."],
        ["¿Por qué el precio puede variar?", "El precio final depende del tamaño del vehículo (sedán, SUV, camioneta) y de su condición. Siempre te confirmamos el precio antes de empezar."],
      ],
    },
  },
  pricingPage: {
    meta: { title: "Precios", description: "Precios de detailing a domicilio. Detailing completo con shampoo $200 (antes $280), limpieza básica $150 con 15% de descuento para veteranos militares." },
    hero: { crumb: "Precios", eyebrow: "Precios", title: "Precios Claros,", highlight: "Sin Sorpresas", text: "Te confirmamos el precio final antes de empezar, según el tamaño y la condición de tu vehículo." },
    packages: { eyebrow: "Paquetes", title: "Elige tu", highlight: "Paquete" },
    factors: {
      eyebrow: "Transparencia", title: "¿Qué influye en el", highlight: "precio?",
      items: [["Tamaño del vehículo", "Sedán, SUV, camioneta o van."], ["Nivel de suciedad", "Manchas, pelo de mascota, lodo."], ["Estado de la pintura", "Opacidad, marcas o rayones."], ["Servicios adicionales", "Extras que quieras agregar."]],
    },
    cta: { title: "¿Necesitas una cotización personalizada?", text: "Llámanos o reserva en línea y te confirmamos el precio de tu vehículo." },
  },
  galleryPage: {
    meta: { title: "Galería", description: "Galería de trabajos de detailing: exteriores, interiores, restauración de pintura y antes y después." },
    hero: { crumb: "Galería", eyebrow: "Galería", title: "Nuestro Trabajo", highlight: "Habla por Sí Solo", text: "Una muestra del cuidado y la atención al detalle que ponemos en cada vehículo." },
    ba: { eyebrow: "Antes y Después", title: "Compara el", highlight: "Resultado" },
    cta: "¿Quieres que tu auto sea el próximo?",
  },
  aboutPage: {
    meta: { title: "Nosotros", description: "Conoce a Brothers Mobile Detailing: detailing profesional a domicilio con atención a cada detalle." },
    hero: { crumb: "Nosotros", eyebrow: "Nosotros", title: "Cuidamos tu Auto", highlight: "Como Si Fuera Nuestro", text: "Un servicio de detailing móvil creado para darte resultados profesionales sin que tengas que salir de casa." },
    story: {
      eyebrow: "Nuestra historia", title: "Detailing profesional,", highlight: "donde estés",
      lead: "Brothers Mobile Detailing nació con una idea simple: que cuidar tu vehículo no te quite tiempo. Llegamos a tu casa, oficina o donde lo necesites, con el equipo y los productos para hacer un trabajo profesional.",
      text: "Traemos nuestra propia agua filtrada/destilada para ayudar a prevenir manchas de agua, y nuestra propia fuente de energía para trabajar en cualquier lugar. Tratamos cada auto con el mismo cuidado que le daríamos al nuestro y no terminamos hasta que el resultado se ve bien.",
      tag: "Calidad Profesional", altMain: "Equipo de detailing trabajando", altSub: "Detalle de cerca",
    },
    values: {
      eyebrow: "Nuestros valores", title: "Lo que nos", highlight: "define",
      items: [
        { title: "Puntualidad", text: "Respetamos tu tiempo. Llegamos en el horario acordado." },
        { title: "Detalle", text: "Cada rincón cuenta: rejillas, costuras, rines y vidrios." },
        { title: "Confianza", text: "Trato respetuoso y cuidado total con tu vehículo y tu propiedad." },
        { title: "Honestidad", text: "Precios claros, confirmados antes de comenzar el trabajo." },
      ],
    },
    process: {
      eyebrow: "Proceso", title: "Así", highlight: "Trabajamos",
      steps: [
        { title: "Agenda", text: "Elige el servicio y el horario que prefieras." },
        { title: "Vamos a Ti", text: "Llegamos con nuestra propia agua, energía y equipo." },
        { title: "Disfruta el Resultado", text: "Revisamos el trabajo contigo antes de irnos." },
      ],
    },
    testimonials: { eyebrow: "Testimonios", title: "Clientes", highlight: "Satisfechos" },
  },
  contactPage: {
    meta: { title: "Contacto", description: "Contacta a Brothers Mobile Detailing. Llama al 702-722-7601 o 702-722-8392, o envía tu solicitud en línea." },
    hero: { crumb: "Contacto", eyebrow: "Contacto", title: "Hablemos de", highlight: "tu Vehículo", text: "Escríbenos o llámanos. Te ayudamos a elegir el servicio correcto y confirmamos tu cita." },
    info: {
      eyebrow: "Información", title: "Estamos para ayudarte", text: "Respondemos lo antes posible. Para una atención más rápida, llámanos directamente.",
      phone: "Teléfono", phone2: "Teléfono 2", email: "Email", website: "Sitio web", service: "Servicio", serviceValue: "A domicilio — vamos a ti",
    },
    cta: { title: "¿Prefieres reservar directamente?", text: "Elige servicio, fecha y hora en menos de 2 minutos." },
  },
  form: {
    title: "Envíanos un mensaje", requiredNote: "Los campos con", requiredNote2: "son obligatorios.",
    okTitle: "¡Mensaje enviado!", okText: "Gracias por contactarnos. Te responderemos pronto.",
    errTitle: "Revisa el formulario.", errText: "Algunos campos necesitan corrección.",
    name: "Nombre", phone: "Teléfono", email: "Email", area: "Zona de servicio", areaPh: "Ciudad o código postal",
    date: "Fecha preferida", vehicle: "Tipo de vehículo", service: "Servicio", message: "Mensaje", messagePh: "Cuéntanos sobre tu vehículo y lo que necesitas",
    select: "Selecciona…", other: "Otro / No estoy seguro", send: "Enviar Mensaje", sending: "Enviando…",
    errors: {
      required: "Este campo es obligatorio.", name: "Ingresa tu nombre completo.", email: "Ingresa un correo válido.",
      phone: "Ingresa un teléfono válido (10 dígitos).", future: "Elige una fecha a partir de hoy.",
    },
  },
  vehicles: [
    { name: "Sedán / Coupé", note: "Autos compactos y medianos" },
    { name: "SUV", note: "Crossovers y SUVs" },
    { name: "Camioneta / Pickup", note: "Trucks de cabina doble" },
    { name: "Van / Minivan", note: "Vehículos de 3 filas" },
  ],
  booking: {
    meta: { title: "Agenda tu Cita", description: "Reserva tu servicio de detailing a domicilio en pocos pasos." },
    hero: { crumb: "Reservar", eyebrow: "Reservar", title: "Agenda tu", highlight: "Cita", text: "Elige tu servicio, tu vehículo y el horario. Nosotros vamos a ti." },
    progress: "Progreso de la reserva",
    steps: ["Servicio", "Vehículo", "Fecha", "Tus datos", "Confirmar"],
    s1: { title: "¿Qué servicio necesitas?", text: "Puedes agregar detalles adicionales más adelante.", err: "Selecciona un servicio para continuar." },
    s2: { title: "Tipo de vehículo", text: "El precio final puede variar según el tamaño y la condición.", err: "Selecciona el tipo de vehículo." },
    s3: { title: "Fecha y hora", text: "Elige el día y el horario que prefieras. Te confirmaremos la disponibilidad.", date: "Fecha", time: "Horario", err: "Selecciona una fecha válida y un horario." },
    s4: { title: "Tus datos", text: "Los usamos solo para confirmar tu cita.", address: "Dirección del servicio", notes: "Notas (opcional)", notesPh: "Condición del vehículo, acceso, mascotas, etc." },
    s5: { title: "Confirma tu reserva", text: "Revisa los datos antes de enviar." },
    selfNote: "No necesitas darnos agua ni enchufe: traemos nuestra propia agua filtrada y fuente de energía.",
    done: { title: "¡Solicitud recibida!", text: "Gracias por elegir Brothers Mobile Detailing. Te contactaremos pronto para confirmar tu cita. Si es urgente, llámanos al", or: "o al", back: "Volver al Inicio" },
    nav: { back: "Atrás", next: "Continuar", confirm: "Confirmar Reserva" },
    summary: { service: "Servicio", price: "Precio", vehicle: "Vehículo", date: "Fecha", time: "Hora", name: "Nombre", phone: "Teléfono", email: "Email", address: "Dirección", notes: "Notas", promo: "Promoción", veteran: "Veteranos militares" },
    byQuote: "Por cotizar", promoValue: "Oferta Especial",
  },
  footer: {
    about: "Detailing profesional a domicilio. Llevamos el cuidado de tu vehículo hasta tu casa u oficina, con productos de calidad, nuestra propia agua filtrada y nuestra propia energía.",
    nav: "Navegación", services: "Servicios", contact: "Contacto", book: "Reservar", mobile: "Servicio a domicilio",
    rights: "Todos los derechos reservados.", tagline: "Mobile Car Detailing · Servicio a Domicilio",
  },
  dateLocale: "es-US",
};

export default es;
