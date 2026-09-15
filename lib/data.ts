export const business = {
  name: 'Proffs Trafikskola',
  legalName: 'Proffs Trafikskola',
  url: 'https://proffstrafikskola.se',
  phone: '08-644 40 01',
  tel: '+4686444001',
  email: 'info@proffstrafikskola.se',
  street: 'Folkungavägen 10C',
  postal: '177 56',
  city: 'Järfälla',
  country: 'SE',
  region: 'Stockholms län',
  place: 'Jakobsberg, Järfälla',
  latitude: 59.4237,
  longitude: 17.835,
  booking: 'https://www.trafikskolaonline.se/sv/skola/proffs/kurser',
  shop: 'https://www.trafikskolaonline.se/sv/skola/proffs/ehandel',
  map: 'https://maps.google.com/maps?q=Folkungav%C3%A4gen%2010c%2C%20177%2056%20J%C3%A4rf%C3%A4lla',
  socials: [
    ['Instagram', 'https://www.instagram.com/proffstrafikskola/'],
    ['Facebook', 'https://www.facebook.com/profile.php?id=61554745685622'],
    ['TikTok', 'https://www.tiktok.com/@proffstrafikskola'],
  ],
  hours: [
    ['Måndag - torsdag', '09:00 - 18:00'],
    ['Fredag', '09:00 - 16:00'],
  ],
  drivingHours: 'Vardagar 08:00 - 18:30',
  languages: ['svenska', 'engelska', 'arabiska', 'spanska', 'turkiska'],
  serviceAreas: ['Jakobsberg', 'Järfälla', 'Barkarby', 'Stockholms län'],
  description:
    'Proffs Trafikskola är en trafikskola i Järfälla, nära Jakobsberg och Barkarby, som erbjuder körlektioner för B-körkort, intensivkurser, teori, riskutbildning, taxiteori och stöd inför teoriprov och körprov.',
};
export const authority = {
  supervision:
    'https://www.transportstyrelsen.se/sv/om-oss/pressrum/nyhetsarkiv/2026/introduktionsutbildningen-tas-bort--det-har-behover-du-ha-koll-pa/',
  tests: 'https://www.trafikverket.se/korkort/ta-korkort/personbil-och-latt-lastbil/',
  permit: 'https://www.transportstyrelsen.se/sv/vagtrafik/korkort/ta-korkort/',
};
export const navigation = [
  ['Körlektioner', '/korlektioner'],
  ['Intensivkurs', '/intensivkurs'],
  ['Paket Pris', '/paket'],
  ['Kontakt', '/kontakt'],
];
export type Price = { name: string; price: number; detail: string };
// Source: dedicated /korlektioner price content. TODO: confirm test duration (homepage says 50 min).
export const lessons: Price[] = [
  { name: 'Testlektion', price: 499, detail: '30-50 minuter' },
  { name: '1 körlektion', price: 810, detail: '50 minuter' },
  ...[
    [3, 2299],
    [5, 3799],
    [10, 7399],
    [15, 10799],
    [20, 14299],
    [30, 21199],
  ].map(([n, price]) => ({ name: `${n} körlektioner`, price, detail: `${n} × 50 minuter` })),
];
export const packages = ['Small', 'Medium', 'Large', 'X-Large', 'Mega'].map((name, i) => ({
  name,
  price: [4699, 8299, 11699, 15199, 22099][i],
  lessons: [5, 10, 15, 20, 30][i],
  detail: 'Riskettan + teori online på svenska/engelska',
}));
export const intensive = [10, 20, 30].map((n, i) => ({
  name: `Intensivkurs ${n} körlektioner`,
  lessons: n,
  price: [9999, 15999, 21999][i],
  duration: ['På en vecka', 'På två veckor', 'På en månad'][i],
  detail: 'Riskettan + Risktvåan + teori online på svenska/engelska',
}));
export const theoryPrices: Price[] = [
  { name: 'Teori online', price: 599, detail: 'Svenska / engelska' },
  { name: 'Teori online, andra språk', price: 749, detail: 'Kontakta oss för språkval' },
  { name: 'Taxiteori', price: 3500, detail: 'Teoriutbildning för taxiförarlegitimation' },
];
// TODO: homepage promotional price 499 vs dedicated price list 599; provider lists other prices. No expiry supplied.
export const courses = [
  {
    slug: 'riskettan',
    name: 'Riskettan',
    price: 499,
    regular: 599,
    caption: 'Förstå riskerna. Kör med insikt.',
    description:
      'Alkohol, droger, trötthet och beteenden i trafiken. Den teoretiska delen av riskutbildningen för B-körkort.',
    image: 'riskettan',
  },
  {
    slug: 'risktvaan',
    name: 'Risktvåan',
    price: 2200,
    regular: 2500,
    caption: 'Lär känna bilens gränser.',
    description:
      'Halkbanan är riskutbildningens praktiska del. Upplev hur underlag och svåra förhållanden påverkar körningen.',
    image: 'risketvan',
  },
  {
    slug: 'handledarkurs',
    name: 'Handledarstöd',
    price: 299,
    regular: 399,
    caption: 'En stabil grund för er privata övningskörning.',
    description:
      'Aktuell vägledning för elev och handledare efter att kravet på introduktionsutbildning slopades den 1 augusti 2026.',
    image: 'handledarutbildning',
  },
];
export const photos: Record<string, { src: string; alt: string; width: number; height: number }> = {
  herodraw: {
    src: '/images/herodraw.png',
    alt: 'Illustration av Proffs Trafikskola övningsbil och vägskyltar mot körkort och frihet',
    width: 1774,
    height: 887,
  },
  'proffs-car': {
    src: '/images/proffs-car.jpg',
    alt: 'Vit Volkswagen med Proffs Trafikskolas logotyp och övningskörningsskylt',
    width: 1200,
    height: 896,
  },
  storefront: {
    src: '/images/storefront.jpg',
    alt: 'Entrén till Proffs Trafikskola med skolans logotyp och trafikmärken i fönstret',
    width: 1200,
    height: 901,
  },
  classroom: {
    src: '/images/classroom.jpg',
    alt: 'Proffs Trafikskolas lektionssal med röda stolar, whiteboard och bildskärm',
    width: 1536,
    height: 1152,
  },
  school: {
    src: '/images/school.jpg',
    alt: 'Skolans interiör med informationsbanderoll om körkortsutbildningar',
    width: 1200,
    height: 896,
  },
  driving: {
    src: '/images/driving.jpg',
    alt: 'En förare håller båda händerna på ratten, sedd från baksätet',
    width: 1024,
    height: 683,
  },
  speedometer: {
    src: '/images/speedometer.jpg',
    alt: 'Närbild av en bils hastighetsmätare',
    width: 1024,
    height: 684,
  },
  risketvan: {
    src: '/images/risketvan.png',
    alt: 'Handritad illustration för Risktvåan med övningsbil och vägskyltar',
    width: 1774,
    height: 887,
  },
  handledarutbildning: {
    src: '/images/Handledarutbildning.png',
    alt: 'Illustration för Handledarutbildning med elev, handledare och övningskörningsbil framför Proffs Trafikskola',
    width: 1536,
    height: 1024,
  },
  riskettan: {
    src: '/images/riskettan.png',
    alt: 'Illustration för Riskettan riskutbildning',
    width: 1774,
    height: 887,
  },
};

export const illustrations = {
  herodraw: {
    src: '/images/herodraw.png',
    alt: 'Illustration av övningskörningsbil och vägskyltar mot körkort och frihet',
    width: 1774,
    height: 887,
  },
  handledarutbildning: {
    src: '/images/Handledarutbildning.png',
    alt: 'Illustration för Handledarutbildning med elev, handledare och övningskörningsbil framför Proffs Trafikskola',
    width: 1536,
    height: 1024,
  },
  'vagen-till-korkort': {
    src: '/images/vagen-till-korkort.png',
    alt: 'Illustration: Bli Ett Proffs – Vägen Till Körkort steg för steg',
    width: 1774,
    height: 887,
  },
  villkor: {
    src: '/images/villkor.png',
    alt: 'Illustration: Villkor och regler för bokning och utbildning hos Proffs Trafikskola',
    width: 1774,
    height: 887,
  },
  riskettan: {
    src: '/images/riskettan.png',
    alt: 'Illustration för Riskettan riskutbildning',
    width: 1774,
    height: 887,
  },
  risketvan: {
    src: '/images/risketvan.png',
    alt: 'Illustration för Risktvåan med övningsbil och vägskyltar',
    width: 1774,
    height: 887,
  },
  intensivkurs: {
    src: '/images/intensivkurs.png',
    alt: 'Illustration för intensivkurs med övningsbil och väg mot körkort',
    width: 1774,
    height: 887,
  },
  paket: {
    src: '/images/paket.png',
    alt: 'Illustration för körkortspaket hos Proffs Trafikskola',
    width: 1774,
    height: 887,
  },
  kurser: {
    src: '/images/kurser.png',
    alt: 'Illustration för kurser hos Proffs Trafikskola',
    width: 1774,
    height: 887,
  },
  teori: {
    src: '/images/teori.png',
    alt: 'Illustration för teoriutbildning hos Proffs Trafikskola',
    width: 1774,
    height: 887,
  },
  korlektioner: {
    src: '/images/kolektioner.png',
    alt: 'Illustration för körlektioner med övningsbil och väg mot körkort',
    width: 1774,
    height: 887,
  },
};
export const faqs = [
  {
    q: 'Vilka utbildningar erbjuder Proffs Trafikskola?',
    a: 'Vi erbjuder körlektioner för B-körkort, intensivkurser, teori online, Riskettan, Risktvåan, taxiteori och stöd för dig som kombinerar trafikskola med privat övningskörning.',
  },
  {
    q: 'Kan jag gå en intensivkurs om jag vill ta körkort snabbt?',
    a: 'Ja. Våra intensivkurser planeras efter dina förkunskaper. Vi börjar med en testlektion och lägger sedan upp en kurs som kan vara från en vecka till en månad beroende på din nivå.',
  },
  {
    q: 'Vilka språk erbjuder ni undervisning på?',
    a: 'Vi erbjuder undervisning på svenska, engelska, arabiska, spanska och turkiska. Vi har även digitala teoriböcker på flera språk.',
  },
  {
    q: 'Behöver jag gå Riskettan, Risktvåan eller introduktionsutbildning?',
    a: 'Riskettan och Risktvåan är obligatoriska delar av riskutbildningen för B-körkort. Kravet på introduktionsutbildning för handledare och elev vid privat övningskörning med personbil slopades den 1 augusti 2026, men handledaren måste fortfarande bli godkänd av Transportstyrelsen och eleven behöver körkortstillstånd.',
  },
  {
    q: 'Var ligger trafikskolan och hur bokar jag?',
    a: 'Vi finns på Folkungavägen 10C i Järfälla, nära Jakobsberg och Barkarby. Du kan boka kurser och paket via vår e-handel eller kontakta oss om du vill ha hjälp att planera din utbildning.',
  },
];
export const steps = [
  {
    name: 'Steg 1: Skriv in dig hos oss',
    text: 'Vi hjälper dig med att ansöka om körkortstillstånd, genomföra synundersökning och planera din utbildning.',
  },
  {
    name: 'Steg 2: Teoriutbildning',
    text: 'Studera på egen hand eller delta i våra lärarledda lektioner. Vi ser till att du är väl förberedd inför provet!',
  },
  {
    name: 'Steg 3: Körutbildning',
    text: 'Vi har erfarna lärare och bilar som är redo att möta dina behov som elev. Vi hjälper dig genom att skapa en personlig plan för dina lektioner och erbjuder professionell vägledning. Våra bilar och utbildade instruktörer är här för att ge dig det stöd du behöver och förbereda dig grundligt inför förarprovet.',
  },
  {
    name: 'Steg 4: Riskutbildning',
    text: 'Riskettan är obligatorisk och måste genomföras på en trafikskola som är godkänd av Transportstyrelsen. Vi är godkända och erbjuder Riskutbildning del 1.\n\nDel två av riskutbildningen, ofta kallad halkbanan, är också obligatorisk. Det är en praktisk utbildning där du får öva på att köra på halt underlag och uppleva svåra trafikssituationer på ett säkert sätt.',
  },
  {
    name: 'Steg 5: Teoriprov',
    text: 'För att gå vidare till körprovet måste du först klara av teoriprovet. Du behöver få minst 52 poäng för att bli godkänd. Provet innehåller frågor inom olika kategorier som trafikregler, miljö och fordonssäkerhet. Se till att förbereda dig noggrant för att öka dina chanser att lyckas.',
  },
  {
    name: 'Steg 6: Förarprov',
    text: 'Nu är det dags att sätta all din kunskap på prov. Körprovet är den praktiska delen av din körutbildning. Det är viktigt att boka körprovet i god tid, eftersom du har endast 4 månader på dig att göra provet efter att du slutfört den teoretiska delen. Bokningen görs via Trafikverket.se/korkort. Vi hjälper gärna till med bokningen på plats.\n\nLycka till!',
  },
];
export type Page = {
  title: string;
  heading: string;
  intro: string;
  image?: string;
  sections?: { title: string; body: string }[];
  description?: string;
  faqs?: { q: string; a: string }[];
  facts?: [string, string][];
};
export const pages: Record<string, Page> = {
  priser: {
    title: 'Priser hos Proffs Trafikskola',
    heading: 'Priser',
    intro:
      'En samlad överblick över körlektioner, paket, intensivkurs, kurser och teori.',
    image: 'herodraw',
    description:
      'Samlad prisöversikt för Proffs Trafikskolas körlektioner, paket, intensivkurser, kurser och teori i Järfälla.',
  },
  kurser: {
    title: 'Kurser hos Proffs Trafikskola',
    heading: 'Kurser',
    intro:
      'Hitta rätt riskutbildning eller stöd för privat övningskörning hos Proffs Trafikskola.',
    image: 'kurser',
    description:
      'Översikt över Proffs Trafikskolas kurser, inklusive handledarstöd, Riskettan och Risktvåan.',
  },
  paket: {
    title: 'Körkortspaket i Järfälla',
    heading: 'Paket Pris',
    intro: 'Välj ett paket som passar din nivå och fortsätt mot körkortet med tydliga priser.',
    image: 'paket',
    description:
      'Körkortspaket hos Proffs Trafikskola i Järfälla med körlektioner, Riskettan och teori online på svenska eller engelska.',
    facts: [
      ['Passar för', 'Elever som vill samla körlektioner, Riskettan och teori i ett paket.'],
      ['Ingår', '5, 10, 15, 20 eller 30 körlektioner, Riskettan och teori online.'],
      ['Bokning', 'Paket köps i skolans e-handel via Trafikskola Online.'],
    ],
  },
  kurserpris: {
    title: 'Kurser Pris hos Proffs Trafikskola',
    heading: 'Kurser Pris',
    intro: 'Aktuella priser för Riskettan, Risktvåan och andra kurser hos Proffs Trafikskola.',
    image: 'kurser',
    description:
      'Prisöversikt för Proffs Trafikskolas kurser i Järfälla, inklusive Riskettan, Risktvåan och teori.',
  },
  intensivkurs: {
    title: 'Intensivkurs i Jakobsberg, Järfälla & Barkarby',
    heading: 'Boka intensivkurs i Jakobsberg, Järfälla & Barkarby',
    intro: 'Vill du ta körkortet snabbt planerar vi en intensivkurs efter din nivå, dina förkunskaper och din tillgängliga tid.',
    image: 'intensivkurs',
    description:
      'Intensivkurs för B-körkort i Järfälla med körlektioner, Riskettan, Risktvåan och teori online.',
    facts: [
      ['Plats', 'Järfälla, nära Jakobsberg och Barkarby.'],
      ['Längd', 'Vanligen 1 vecka, 2 veckor eller 1 månad beroende på paket och förkunskaper.'],
      ['Innehåll', 'Körlektioner, Riskettan, Risktvåan och teori online på svenska eller engelska.'],
      ['Start', 'Vi rekommenderar en testlektion så att kursen kan planeras efter din nivå.'],
    ],
    faqs: [
      {
        q: 'Vad ingår i intensivkursen?',
        a: 'Intensivkurserna innehåller körlektioner, Riskettan, Risktvåan och teori online på svenska eller engelska.',
      },
      {
        q: 'Hur lång tid tar en intensivkurs?',
        a: 'Proffs Trafikskola erbjuder intensivkurser på ungefär en vecka, två veckor eller en månad. Rätt upplägg beror på dina förkunskaper och hur mycket tid du kan lägga på utbildningen.',
      },
      {
        q: 'Kan nybörjare boka intensivkurs?',
        a: 'Ja. Kursen planeras efter din nivå, men en testlektion rekommenderas så att skolan kan bedöma hur många lektioner du behöver.',
      },
    ],
    sections: [
      {
        title: 'En effektiv intensivkurs i Jakobsberg, Järfälla och Barkarby',
        body: 'Vi på Proffs Trafikskola specialanpassar intensivkursen utifrån din kunskap och erfarenhet men målet på slutet av kursen förblir densamma, att du ska lyckas ta körkort vid kursens slut.\n\nIntensivkursen innehåller körlektioner, teorilektioner, Riskettan, Risktvåan och digital teori.\n\nVi erbjuder vår intensivutbildning på ett flertal språk, bland annat svenska, engelska, arabiska, turkiska och spanska.\n\nAlla är välkomna att gå våra intensivkurser oavsett förkunskaper, se bara till att ha ett giltigt körkortstillstånd från Trafikverket och tillräckligt med tid att kunna fokusera på kursen.\n\nKontakta oss redan idag för att boka in en testlektion i steg mot ditt körkort.',
      },
      {
        title: 'Intensivkurs för dig som vill ta körkort snabbt',
        body: 'Våra erfarna pedagoger har lång erfarenhet av att utbilda elever till skickliga och säkra förare som klarar körprovet och teoriprovet inom den angivna tidsramen för kursen. Vi är experter på att motivera våra elever och hålla lektioner som effektivt överför körkunskap.\n\nVår intensivkurs är noggrant planerad med hänsyn till dina individuella förkunskaper. Detta innebär att dina lektioner är skräddarsydda för att fokusera på de områden du behöver förbättra för att framgångsrikt klara din uppkörning.\n\nEftersom det är mycket körlektioner under en kort tid minns våra elever det de lär sig under intensivkursen vilket gjort att det varit ett effektivt sätt för dem att ta körkort.',
      },
      {
        title: 'Varför välja vår intensivutbildning?',
        body: 'Vår intensivutbildning är ett prisvärt alternativ eftersom du slipper resa till en annan stad och bo på annan ort.\n\nVår trafikskola är centralt belägen i Järfälla, vilket gör att du kan bo hemma under hela kursen.\n\nGenom att bo i din vanliga miljö minskar du mängden nya intryck, vilket gör att du kan fokusera på dina lektioner och hemmiljön gör att du sover bättre. Detta förbättrar din koncentrationsförmåga och maximerar dina chanser att ta körkort i slutet av kursen.\n\nEftersom vår intensivutbildning också är specialanpassad efter dig är det en större chans att du tar körkort i slutet av kursen.',
      },
      {
        title: 'Vi lär dig bli en säker förare i trafiken',
        body: 'För att starta en intensivkurs hos oss bokar vi först in dig för en testlektion där vi ser hur mycket förkunskap du har. En intensivkurs för en person som aldrig suttit bakom ratten kommer se annorlunda ut än för den som övningskört i flera år. Men oavsett vart på skalan du faller ordnar vi så att du kommer ha möjlighet att ta körkort efter kursens slut.\n\nVåra pedagoger hjälper dig med teorin och övningskörningen för att du ska känna dig trygg och säker inför teoriprovet och uppkörningen.\n\nVi har genom åren hjälpt många elever att bli duktiga förare och vi ser fram emot att hjälpa dig att ta körkort!',
      },
    ],
  },
  korlektioner: {
    title: 'Körlektioner med automat och manuell i Järfälla',
    heading: 'Körlektioner',
    intro:
      'Lär dig köra med automat eller manuell bil. Personlig vägledning, 50 minuters körlektioner och en plan som passar din nivå.',
    image: 'korlektioner',
    description:
      'Körlektioner för B-körkort med automat och manuell bil i Järfälla, Jakobsberg och Barkarby.',
    facts: [
      ['Lektionstid', 'Ordinarie körlektioner är 50 minuter.'],
      ['Bilar', 'Undervisning erbjuds med automat och manuell bil.'],
      ['Pris', 'En körlektion kostar 810 kr enligt publicerad prislista.'],
      ['Första steg', 'Testlektion kan bokas för att planera rätt utbildningsnivå.'],
    ],
    faqs: [
      {
        q: 'Erbjuder ni körlektioner med både automat och manuell bil?',
        a: 'Ja. Proffs Trafikskola erbjuder körlektioner med både automat och manuell bil.',
      },
      {
        q: 'Hur lång är en körlektion?',
        a: 'En ordinarie körlektion är 50 minuter.',
      },
      {
        q: 'Vad kostar en körlektion?',
        a: 'En körlektion kostar 810 kr enligt skolans publicerade prislista. Paket med flera lektioner finns också.',
      },
    ],
  },
  riskettan: {
    title: 'Riskettan i Jakobsberg och Järfälla',
    heading: 'Se riskerna.\nGör säkrare val.',
    intro: 'Riskettan är den teoretiska delen av den obligatoriska riskutbildningen för B-körkort.',
    image: 'riskettan',
    description:
      'Riskettan i Järfälla för B-körkort. Teoretisk riskutbildning om alkohol, droger, trötthet och trafiksäkerhet.',
    facts: [
      ['Typ', 'Obligatorisk teoretisk riskutbildning, del 1, för B-körkort.'],
      ['Tid', 'Cirka 3 timmar med full närvaro.'],
      ['Pris', 'Publicerat erbjudande 499 kr, ordinarie 599 kr.'],
      ['Efter kursen', 'Godkänd utbildning registreras hos Transportstyrelsen.'],
    ],
    faqs: [
      {
        q: 'Vad är Riskettan?',
        a: 'Riskettan är den teoretiska delen av den obligatoriska riskutbildningen för B-körkort. Den handlar bland annat om alkohol, droger, trötthet, beteende och risker i trafiken.',
      },
      {
        q: 'Hur lång är Riskettan?',
        a: 'Riskettan varar i cirka 3 timmar och full närvaro krävs för att bli godkänd.',
      },
    ],
    sections: [
      {
        title: 'Boka din utbildning',
        body: 'Du bokar via Trafikskola Online, där du väljer bland tillgängliga kurstillfällen. Kontakta skolan om du behöver hjälp med bokningen eller har frågor om språk och upplägg.',
      },
      {
        title: 'Viktigt att tänka på inför kursen',
        body: '• Glöm inte att ta med giltig legitimation (ID-kort eller pass) till kurstillfället.\n• Kursen varar i cirka 3 timmar och full närvaro krävs för att bli godkänd.\n• Efter genomförd utbildning registrerar vi ditt godkännande direkt hos Transportstyrelsen.',
      },
    ],
  },
  risktvaan: {
    title: 'Risktvåan halkbana i Järfälla',
    heading: 'RISKTVÅAN',
    intro: 'Praktisk riskutbildning som hjälper dig förstå bilens beteende i svårare körlägen.',
    image: 'risketvan',
    description:
      'Risktvåan, ofta kallad halkbana, är den praktiska delen av riskutbildningen för B-körkort.',
    facts: [
      ['Typ', 'Obligatorisk praktisk riskutbildning, del 2, för B-körkort.'],
      ['Fokus', 'Bilens beteende, halt underlag, hastighet, säkerhetsmarginaler och riskbedömning.'],
      ['Pris', 'Publicerat pris 2 200 kr.'],
      ['Mål', 'Att du ska förstå bilens begränsningar och dina egna reaktioner i riskfyllda situationer.'],
    ],
    faqs: [
      {
        q: 'Vad är Risktvåan?',
        a: 'Risktvåan är den praktiska delen av riskutbildningen för B-körkort och kallas ofta halkbana.',
      },
      {
        q: 'Kan man bli underkänd på Risktvåan?',
        a: 'Ja. Om säkerhetsrutiner inte följs eller momenten inte genomförs på ett godtagbart sätt kan utbildningen behöva göras om.',
      },
    ],
    sections: [
      {
        title: 'Vad är risktvåan(Halkbana)?',
        body: 'Risktvåan, eller halkbanan, är den praktiska delen av riskutbildningen för B-körkort. Under denna utbildning får du öva på att köra på halkiga och ojämna ytor för att uppleva hur bilen beter sig under sådana förhållanden. Målet är att ge dig erfarenhet av att hantera svåra trafik­situationer och att öka din förståelse för bilens begränsningar och din egen reaktionsförmåga i farliga situationer.',
      },
      {
        title: 'Kan jag bli underkänd?',
        body: 'Ja, det är möjligt att bli underkänd på risktvåan (halkbanan). Om du inte kan hantera bilens rörelser på halt underlag eller inte följer säkerhetsrutinerna kan du få en bedömning som innebär att du behöver genomgå utbildningen igen för att få det godkänt. Syftet med halkbanan är att säkerställa att du kan hantera svåra körförhållanden på ett säkert sätt.',
      },
    ],
  },
  handledarkurs: {
    title: 'Handledare och privat övningskörning i Järfälla',
    heading: 'Handledare och\nprivat övningskörning',
    intro: 'Från 1 augusti 2026 krävs inte längre introduktionsutbildning för privat övningskörning med personbil, men handledare och elev måste fortfarande uppfylla Transportstyrelsens krav.',
    image: 'handledarutbildning',
    description:
      'Aktuell information om handledare, privat övningskörning och de nya reglerna efter att introduktionsutbildningen slopades 1 augusti 2026.',
    facts: [
      ['Regeländring', 'Kravet på introduktionsutbildning för B-körkort slopades den 1 augusti 2026.'],
      ['Handledare', 'Handledaren måste ansöka och bli godkänd av Transportstyrelsen.'],
      ['Elev', 'Eleven behöver giltigt körkortstillstånd och måste uppfylla ålderskraven.'],
      ['Stöd från skolan', 'Proffs Trafikskola kan hjälpa med körlektioner, planering och råd inför privat övningskörning.'],
    ],
    faqs: [
      {
        q: 'Krävs handledarutbildning för privat övningskörning med personbil?',
        a: 'Nej. Kravet på introduktionsutbildning för handledare och elev vid privat övningskörning med personbil slopades den 1 augusti 2026.',
      },
      {
        q: 'Vad krävs fortfarande för att vara handledare?',
        a: 'Handledaren måste vara godkänd av Transportstyrelsen, ha fyllt 24 år, ha giltigt körkort för behörigheten och uppfylla kravet på körkortsinnehav under minst fem av de senaste tio åren.',
      },
      {
        q: 'Kan Proffs Trafikskola hjälpa om jag övningskör privat?',
        a: 'Ja. Skolan kan hjälpa eleven och handledaren med körlektioner, planering och råd om vad ni bör träna på mellan lektionerna.',
      },
    ],
    sections: [
      {
        title: 'Nya regler från 1 augusti 2026',
        body: 'Kravet på introduktionsutbildning, tidigare kallad handledarutbildning, är borttaget för privat övningskörning med personbil och lätt lastbil. Det betyder att elev och handledare inte längre behöver en giltig introduktionsutbildning för B-körkort.\n\nDet finns fortfarande viktiga krav. Handledaren måste ansöka och bli godkänd av Transportstyrelsen, och eleven behöver ett giltigt körkortstillstånd. För säker och strukturerad privat övningskörning rekommenderar vi att elev och handledare kompletterar med körlektioner hos trafikskola.',
      },
      {
        title: 'Viktigt att tänka på',
        body: 'För att bli godkänd som handledare för B-körkort krävs bland annat:\n\n• Du måste vara minst 24 år gammal.\n• Du ska ha ett giltigt körkort för behörigheten.\n• Du ska ha haft körkort för behörigheten i minst 5 av de senaste 10 åren.\n• Du måste ansöka om handledarskap och bli godkänd av Transportstyrelsen.\n\nFör eleven gäller bland annat:\n\n• Eleven behöver ett giltigt körkortstillstånd.\n• Eleven måste uppfylla ålderskravet för övningskörning.\n• Eleven ska kunna visa giltig ID-handling vid övningskörning.',
      },
    ],
  },
  teori: {
    title: 'Teori hos Proffs Trafikskola',
    heading: 'Teori',
    intro: 'Träna på körkortsteorin digitalt och komplettera med stöd från våra lärare när du behöver struktur.',
    image: 'teori',
    description:
      'Teori online för B-körkort hos Proffs Trafikskola, med alternativ på svenska, engelska och flera andra språk.',
    facts: [
      ['Format', 'Digital teori för B-körkort.'],
      ['Språk', 'Svenska, engelska och flera andra språk beroende på paket.'],
      ['Pris', 'Teori online från 599 kr enligt publicerad prislista.'],
      ['Komplettering', 'Kan kombineras med körlektioner, intensivkurs och riskutbildning.'],
    ],
  },
  taxiteori: {
    title: 'Taxiteori i Järfälla',
    heading: 'Nästa steg\ni ditt yrkesliv.',
    intro: 'Teoriutbildning för dig som förbereder dig för taxiförarlegitimation. Pris: 3 500 kr.',
    image: 'driving',
    description:
      'Taxiteori i Järfälla för dig som förbereder dig inför teoriprovet för taxiförarlegitimation.',
    sections: [
      {
        title: 'Kunskap för yrket',
        body: 'Taxiteorin tar upp trafikregler, vägmärken, fordon och miljöpåverkan samt ekonomiska aspekter av taxiyrket. Utbildningen ska hjälpa dig att förbereda dig inför teoriprovet.',
      },
      {
        title: 'Säkerhet och kundbemötande',
        body: 'Du lär dig om hjälpmedel, kundbemötande och hur du kan bistå personer med funktionsvariationer och sjukdomar. Kursen tar också upp risker i arbetet som taxiförare och hur de kan hanteras.',
      },
      {
        title: 'Planera din utbildning',
        body: 'Kontakta Proffs Trafikskola för att få information om nästa utbildningstillfälle, språk och upplägg. Det publicerade priset för taxiteori är 3 500 kr.',
      },
    ],
    facts: [
      ['Målgrupp', 'Personer som förbereder sig för taxiförarlegitimation.'],
      ['Pris', '3 500 kr enligt publicerad prislista.'],
      ['Innehåll', 'Trafikregler, vägmärken, fordon, miljö, ekonomi, kundbemötande och säkerhet.'],
    ],
  },
  'vagen-till-korkort': {
    title: 'Vägen till B-körkort, steg för steg',
    heading: 'Vägen Till Körkort',
    intro:
      'Körkortstillstånd, teori, körning och prov. Vi hjälper dig att få överblick och planera vägen framåt.',
    image: 'vagen-till-korkort',
    description:
      'Steg för steg-guide till B-körkort: körkortstillstånd, teori, körlektioner, riskutbildning, teoriprov och körprov.',
  },
  kontakt: {
    title: 'Kontakt och öppettider i Järfälla',
    heading: 'Vi ses på\nFolkungavägen.',
    intro:
      'Boka en testlektion, fråga om en kurs eller kom förbi skolan. Vi hjälper dig med nästa steg.',
    image: 'herodraw',
    description:
      'Kontaktuppgifter, adress och öppettider för Proffs Trafikskola på Folkungavägen 10C i Järfälla.',
    facts: [
      ['Adress', 'Folkungavägen 10C, 177 56 Järfälla.'],
      ['Telefon', '08-644 40 01.'],
      ['E-post', 'info@proffstrafikskola.se.'],
      ['Reception', 'Måndag-torsdag 09:00-18:00, fredag 09:00-16:00.'],
    ],
  },
  boka: {
    title: 'Boka kurser och köp körkortspaket',
    heading: 'Ditt nästa steg\nbörjar här.',
    intro:
      'Välj kursbokning eller e-handel hos Trafikskola Online. För en testlektion och personlig planering hjälper vi dig på telefon.',
    description:
      'Boka kurser eller köp körlektioner och paket hos Proffs Trafikskola via Trafikskola Online.',
  },
  villkor: {
    title: 'Villkor och personuppgifter',
    heading: 'Bra att veta\ninnan du bokar.',
    intro:
      'Här finns skolans publicerade villkor för utbildning, bokning och personuppgifter. Läs även villkoren som visas vid köp hos Trafikskola Online.',
    image: 'villkor',
  },
};
export const money = (n: number) => new Intl.NumberFormat('sv-SE').format(n) + ' kr';
