export const WHATSAPP_NUMBER = "5491126985198";
export const WHATSAPP_LINK = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const PILLARS = [
  {
    title: "Taller autorizado PEC",
    body: "Productores de Equipos Completos, habilitados por Enargas. Respaldo oficial en cada trabajo.",
  },
  {
    title: "+23 años de experiencia",
    body: "Instalando equipos completos de GNC desde 2002 en zona oeste.",
  },
  {
    title: "Conversión en el día",
    body: "Convertimos tu auto a GNC en el día.",
  },
];

export const SERVICES = [
  {
    icon: "flame",
    title: "Conversión a GNC",
    body: "Instalación completa con certificación PEC",
  },
  {
    icon: "scan-line",
    title: "Diagnóstico computarizado",
    body: "Escaneo digital completo del motor",
    highlight: true,
  },
  {
    icon: "file-check",
    title: "Renovación de oblea",
    body: "En el acto, mismo día",
  },
  {
    icon: "gauge",
    title: "Prueba hidráulica",
    body: "Obligatoria cada 5 años",
  },
  {
    icon: "search",
    title: "Control de pérdidas",
    body: "Revisión completa del sistema de gas",
  },
  {
    icon: "settings",
    title: "Cambio de reguladores y rampa",
    body: "Reemplazo de piezas clave del equipo",
  },
  {
    icon: "wrench",
    title: "Mecánica ligera",
    body: "Mantenimiento general del auto",
  },
  {
    icon: "handshake",
    title: "Servicio a talleres",
    body: "Renovamos trámites a más de 30 talleres de la zona",
  },
] as const;

export type FeaturedService = {
  title: string;
  info: string;
};

export const FEATURED_SERVICES: FeaturedService[] = [
  {
    title: "Renovación de oblea\nen el acto",
    info: "Renovamos tu oblea vencida en el momento, sin dejar el auto ni sacar turno previo.",
  },
  {
    title: "Conversión 5ta generación\n60L en el día",
    info: "Equipo de última generación con tanque de 60 litros, instalado y certificado el mismo día.",
  },
  {
    title: "Conversión con Landi Renzo\nen el día",
    info: "Instalamos equipos de Landi Renzo, marca líder mundial en GNC, con garantía y certificación oficial.",
  },
  {
    title: "Diagnóstico sin cargo",
    info: "No es solo para la conversión a GNC: incluye escaneo computarizado y revisión de mecánica ligera, sin costo y sin compromiso.",
  },
];

export const FINANCING_NOTE = "Hasta 3 cuotas sin interés";
export const FINANCING_DETAIL = "Con tu tarjeta bancaria preferida, solo los miércoles";

export const ABOUT_PARAGRAPHS = [
  "Fundamos GVD Gas GNC en septiembre de 2002, en Rafael Castillo, cuando la conversión a GNC recién empezaba a crecer en zona oeste. Desde el primer día tuvimos una idea simple: hacer bien lo que otros hacen a medias, y tratar cada auto que entra al taller como si fuera el nuestro.",
  "Somos taller PEC — Productor de Equipos Completos — así que instalamos y certificamos equipos con habilitación oficial. Hacemos algo de mecánica ligera, pero nos dedicamos sobre todo al GNC: colocación de equipos, renovación de obleas, pruebas hidráulicas y cambio de repuestos. Al ser PEC, también le renovamos los trámites a otros talleres habilitados de la zona.",
  "Hoy seguimos en el mismo barrio, con la misma gente y la misma costumbre de siempre: explicarte lo que tiene tu auto sin vueltas, y hacerlo bien, en el día.",
];

export type BackingBadge =
  | { type: "logo"; src: string; alt: string; caption: string }
  | { type: "text"; label: string; caption: string };

export const BACKING: BackingBadge[] = [
  {
    type: "logo",
    src: "/logo-enargas.svg",
    alt: "ENARGAS — Ente Nacional Regulador del Gas",
    caption: "Ente Nacional Regulador del Gas",
  },
  {
    type: "text",
    label: "PEC",
    caption: "Productor de Equipos Completos",
  },
  {
    type: "logo",
    src: "/logo-landirenzo.svg",
    alt: "Landi Renzo",
    caption: "Equipos Landi Renzo",
  },
];

export const CONTACT = {
  address: "Av. Don Bosco 6700 esq. Albarracín, Rafael Castillo, Zona Oeste",
  phones: ["11 2698-5198", "4485-0725"],
  instagram: "@gvdgasgnc",
  mapEmbedSrc:
    "https://www.google.com/maps?q=GVDGAS,+Av.+Don+Bosco+6700,+B1756+Rafael+Castillo,+Provincia+de+Buenos+Aires&output=embed",
};
