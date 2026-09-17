import {
  ArrowUpRight,
  SteeringWheel,
  BookOpen,
  Lightning,
  RoadHorizon,
  Phone,
  Translate,
} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import Image from 'next/image';
import {
  Button,
  CourseGrid,
  FAQ,
  Location,
  BookingCTA,
} from '@/components/ui';
import SchoolHeroVideo from '@/components/school-hero-video';
import Schema from '@/components/schema';
import { metadata, faqSchema } from '@/lib/seo';
import { business } from '@/lib/data';
export const generateMetadata = () =>
  metadata(
    'Trafikskola i Jakobsberg, Järfälla & Barkarby',
    'Proffs Trafikskola i Järfälla erbjuder körlektioner med automat och manuell bil, intensivkurser, teori, Riskettan, Risktvåan och taxiteori nära Jakobsberg och Barkarby.',
  );
export default function Home() {
  return (
    <>
      <section className="school-hero" aria-labelledby="school-hero-title">
        <SchoolHeroVideo />
        <div className="container school-hero-content">
            <div className="school-hero-copy">
              <h1 id="school-hero-title">
                Välkommen till<br />
                <span>Proffs</span><br />Trafikskola.
              </h1>
              <p className="school-hero-intro">En pålitlig trafikskola med bra priser.<br />I Jakobsberg, Järfälla & Barkarby.</p>
              <a className="school-hero-phone" href={`tel:${business.tel}`}>
                <Phone size={21} />
                <span>Prata med oss<strong>{business.phone}</strong></span>
              </a>
              <div className="school-hero-actions">
                <Button href={business.shop}>Boka nu</Button>
                <Link href="/priser" className="school-hero-prices">Priser <ArrowUpRight size={19} /></Link>
              </div>
            </div>
        </div>
      </section>
      <section className="home-offers" aria-labelledby="home-offers-title">
        <div className="container">
          <div className="home-offers-heading">
            <div>
              <h2 id="home-offers-title">Våra erbjudanden</h2>
              <p>Här kan du se våra nya erbjudanden för dig som är intresserad att ta körkort.</p>
            </div>
          </div>
          <div className="home-offers-grid">
            {[
              { title: 'Privat övningskörning', price: '299', regular: '399', description: 'Kontakta oss för aktuellt stöd efter nya handledarregler.', icon: BookOpen },
              { title: 'Risk 1', price: '499', regular: '599', description: 'Passa på och ta risk 1.', icon: Lightning },
              { title: 'Halkbana', price: '2 200', regular: '2 500', description: 'Passa på och ta halkbana.', icon: RoadHorizon },
              { title: 'Testlektion', price: '499', regular: null, description: 'Kom förbi och testa.', icon: SteeringWheel },
            ].map(({ title, price, regular, description, icon: Icon }) => (
              <a className="home-offer" href={business.shop} key={title} aria-label={`Boka ${title}, ${price} kr`}>
                <Icon className="home-offer-icon" size={28} aria-hidden="true" />
                <h3>{title}</h3>
                <div className="home-offer-price"><strong>{price}</strong><span>kr</span></div>
                <div className="home-offer-regular">{regular ? <>Ord. <s>{regular} kr</s></> : 'Testlektion'}</div>
                <p>{description}</p>
                <span className="home-offer-action">Boka nu <ArrowUpRight size={20} aria-hidden="true" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="school-why" aria-labelledby="school-why-title">
        <div className="container school-why-layout">
          <div className="school-why-copy">
            <h2 id="school-why-title">Varför ska du<br />välja oss?</h2>
            <p className="school-why-lead">Välj Proffs Trafikskola för en körutbildning utöver det vanliga.</p>
            <p>Med erfarna instruktörer, individanpassad undervisning och fokus på trafiksäkerhet, skapar vi en lärorik och trygg miljö för din körkortsresa.</p>
            <p>Kontakta oss idag och låt oss guida dig mot körkortet med professionalitet och engagemang!</p>
            <Button href="/kontakt">Kontakta oss</Button>
          </div>
          <div className="school-why-gallery">
            <div className="school-why-photo school-why-photo-main">
              <Image src="/images/storefront.jpg" alt="Entrén till Proffs Trafikskola med skolans skylt och trafikmärken i fönstret" fill sizes="(max-width: 767px) 90vw, 38vw" />
            </div>
            <div className="school-why-photo">
              <Image src="/images/school.jpg" alt="Välkomsthörnan inne på Proffs Trafikskola" fill sizes="(max-width: 767px) 44vw, 20vw" />
            </div>
            <div className="school-why-photo">
              <Image src="/images/classroom.jpg" alt="Skolans klassrum med röda stolar och utrustning för teoriundervisning" fill sizes="(max-width: 767px) 44vw, 20vw" />
            </div>
          </div>
        </div>
      </section>
      <section className="school-services" aria-labelledby="school-services-title">
        <div className="container">
          <h2 id="school-services-title">Vad vi erbjuder hos<br />Proffs Trafikskola</h2>
          <div className="school-services-grid">
            {[
              { title: 'Kurser', icon: RoadHorizon, items: ['Stöd vid privat övningskörning', 'Riskettan B', 'Risktvåan (Halkbana)'], href: '/kurserpris' },
              { title: 'Körlektioner', icon: SteeringWheel, items: ['Testlektion 50 min', '1 körlektion 50 min', '5 körlektioner', '10 körlektioner', '15 körlektioner', '20 körlektioner', '30 körlektioner'], href: '/korlektioner' },
              { title: 'Teori Online', icon: BookOpen, items: ['Körkortsteori bok', 'Teorifrågor på nätet', 'Taxiteori – 3 500 kr'], href: '/teori' },
              { title: 'Språk', icon: Translate, items: ['Svenska', 'Engelska', 'Arabiska', 'Spanska', 'Turkiska'], href: null },
            ].map(({ title, icon: Icon, items, href }) => (
              <div className="school-service" key={title}>
                <Icon size={30} className="school-service-icon" aria-hidden="true" />
                <h3>{title}</h3>
                {!href && <p>Vi utbildar på:</p>}
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
                {href && <Link href={href} className="school-service-link" aria-label={`Priser för ${title}`}>Priser <ArrowUpRight size={20} aria-hidden="true" /></Link>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section container courses-section">
        <div className="section-heading">
          <h2>
            Mer kunskap.
            <br />
            Säkrare på vägen.
          </h2>
          <p>Utbildningar som ger dig en stabil grund.</p>
        </div>
        <CourseGrid />
      </section>
      <section className="intensive-packages" aria-labelledby="intensive-packages-title">
        <div className="container">
          <div className="intensive-packages-heading">
            <h2 id="intensive-packages-title">Är du trött på att inte ha körkortet än?</h2>
            <p>Vi har tre olika intensiva paket för dig som vill ta körkortet snabbt.</p>
          </div>
          <div className="intensive-package-grid">
            {[
              {
                lessons: '10 körlektioner',
                title: 'Intensiv kurs 10 körlektioner',
                price: '9 999 kr',
                pace: 'På en vecka',
                href: 'https://www.trafikskolaonline.se/sv/skola/proffs/ehandel/11261/',
              },
              {
                lessons: '20 körlektioner',
                title: 'Intensiv kurs 20 körlektioner',
                price: '15 999 kr',
                pace: 'På två veckor',
                href: 'https://www.trafikskolaonline.se/sv/skola/proffs/ehandel/11262/',
                featured: true,
              },
              {
                lessons: '30 körlektioner',
                title: 'Intensiv kurs 30 körlektioner',
                price: '21 999 kr',
                pace: 'På en månad',
                href: 'https://www.trafikskolaonline.se/sv/skola/proffs/ehandel/11263/',
              },
            ].map(({ lessons, title, price, pace, href, featured }) => (
              <article className={`intensive-package ${featured ? 'is-featured' : ''}`} key={title}>
                {featured && <span className="intensive-package-badge">Mest valt</span>}
                <span className="intensive-package-lessons">{lessons}</span>
                <h3>{title}</h3>
                <strong>{price}</strong>
                <ul>
                  <li>{lessons}</li>
                  <li>Risk 1 & Risk 2</li>
                  <li>Teori online sv/en</li>
                  <li>{pace}</li>
                </ul>
                <a className="intensive-package-link" href={href}>
                  BOKA NU
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="school-intro" aria-labelledby="school-intro-title">
        <div className="container school-intro-grid">
          <article className="school-intro-lead">
            <h2 id="school-intro-title">Proffs Trafikskola i Jakobsberg, Järfälla & Barkarby</h2>
            <p>Välkommen till Proffs Trafikskola, belägen i Järfälla mellan Jakobsberg och Barkarby. Vi erbjuder ett brett utbud av körutbildningar, från enstaka körlektioner till intensivkurser och körprov.</p>
            <p>Våra erfarna lärare har hjälpt många elever att köra bil, och vi tror att alla har potential att lyckas ta körkort med rätt pedagogiskt stöd. Vårt mål är att vara just det stödet, och att guida våra elever hela vägen till deras körkort.</p>
            <p>Vi erbjuder undervisning på svenska, engelska, spanska, arabiska och turkiska, samt tillhandahåller teoriböcker på flera språk. Detta ökar tillgängligheten och underlättar för alla som vill ta körkort hos oss.</p>
          </article>
          <div className="school-intro-photo">
            <Image src="/images/driving.jpg" alt="Elev kör bil under en körlektion med fokus på trygg körning" fill sizes="(max-width: 767px) 100vw, 44vw" />
          </div>
          <article className="school-intro-card">
            <span>Hela vägen till körkortet</span>
            <h3>Vår trafikskola hjälper dig att ta körkort</h3>
            <p>Oavsett hur du vill ta ditt körkort hjälper vi dig hela vägen dit. Hos oss kan du gå Riskettan, Risktvåan, taxiteori, intensivkurs, teorilektioner och körlektioner, samt få vägledning inför privat övningskörning, teoriprov och körprov. Vi erbjuder det praktiska stöd du behöver för att kunna ta ditt körkort.</p>
            <p>Våra trafiklärare brinner för trafikutbildning och vårt mål är inte bara att du ska ta körkort, utan även att du ska bli en säker och skicklig förare. Vi utvecklas ständigt genom att utbilda nya elever och förbättra våra kurser för att kunna erbjuda dig den bästa undervisningen för personbil.</p>
            <p>Vi erbjuder även flexibla tider och har öppet alla dagar i veckan utom söndagar.</p>
          </article>
          <article className="school-intro-card school-intro-card-muted">
            <span>Trygg utbildning</span>
            <h3>En trygg och säker trafikskola i Jakobsberg, Järfälla och Barkarby</h3>
            <p>Utöver att hjälpa våra elever att snabbt ta körkort, är vi noga med att den snabba vägen inte ska vara en genväg utan en effektiv och säker väg till körkortet.</p>
            <p>Vi lägger minst lika stor vikt vid att våra elever ska ha rätt kunskap och vara försiktiga i trafiken när de väl kör iväg efter att ha fått sitt körkort.</p>
            <p>Vårt mål är att skapa skickliga förare som är uppmärksamma i trafiken och kör smidigt. Hos oss utbildas förare som sköter sig ute på vägarna, för allas säkerhet och välbefinnande.</p>
          </article>
        </div>
      </section>
      <FAQ />
      <section className="course-depth" aria-labelledby="course-depth-title">
        <div className="container course-depth-layout">
          <div className="course-depth-visual">
            <Image src="/images/speedometer.jpg" alt="Närbild av en hastighetsmätare i bil" fill sizes="(max-width: 767px) 100vw, 34vw" />
            <div>
              <span>Planera smart</span>
              <strong>Kurser, teori och körning i samma riktning.</strong>
            </div>
          </div>
          <div className="course-depth-content">
            <article>
              <h2 id="course-depth-title">Våra kurser</h2>
              <p>Hos oss får du lära dig att köra bil med B-behörighet och ta körkort för personbilar och lätta lastbilar.</p>
              <ul>
                <li>Vi erbjuder körlektioner, teorilektioner, Riskettan, Risktvåan och stöd inför körprov. Vår erfarna personal anpassar kurserna efter dina behov och önskemål, så att vägen till körkortet blir så lugn och lärorik som möjligt.</li>
                <li>Vår <Link href="/intensivkurs">intensivutbildning</Link> är skräddarsydd efter dina förkunskaper, för att ge dig bästa möjliga chans att klara körprovet.</li>
                <li>Vi erbjuder även <Link href="/handledarkurs">aktuell vägledning för handledare och privat övningskörning</Link> efter att kravet på introduktionsutbildning slopades den 1 augusti 2026.</li>
              </ul>
              <p>Kontakta oss för att boka en testkörning och ta ditt första steg mot att ta körkort.</p>
            </article>
            <div className="course-depth-two">
              <article>
                <h3>Taxiteori</h3>
                <p>Vi erbjuder taxiteoriutbildning för att hjälpa dig klara teoriprovet och få din taxiförarlegitimation. Under kursen lär du dig att använda olika hjälpmedel för att öka din effektivitet och förbättra ditt kundbemötande.</p>
                <p>Du får även kunskap om hur du kan bistå personer med funktionsvariationer och sjukdomar, förstå risker i yrket, olika fordon, miljöpåverkan, ekonomi, trafikregler och vägmärken.</p>
              </article>
              <article>
                <h3>Erfarna och ambitiösa pedagoger</h3>
                <p>Våra pedagoger fokuserar på dina mål och förväntningar inför övningskörningen och stöttar dig hela vägen fram till körkortet.</p>
                <p>Oavsett om du har försökt ta körkort i flera år eller aldrig har suttit bakom ratten, hjälper vi dig att nå ditt mål inom en tidsram som både du och din pedagog tycker är lämplig.</p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="school-info-note" aria-labelledby="school-info-note-title">
        <div className="school-info-note-shell">
          <div className="container">
            <div className="school-info-note-hero">
              <h2 id="school-info-note-title">Stöd hela vägen till körkortet</h2>
              <p>Språk, teori och intensivkurs samlat i ett tydligt upplägg för din körkortsresa.</p>
            </div>
            <div className="school-info-note-grid">
              <article>
                <h3>Vår trafikskola undervisar på ett flertal språk</h3>
                <p>Våra pedagoger erbjuder undervisning på svenska, engelska, arabiska, spanska och turkiska, både för körlektioner och teorilektioner.</p>
                <p>För privat övningskörning med personbil krävs inte längre introduktionsutbildning från och med 1 augusti 2026. Handledaren måste fortfarande vara godkänd av Transportstyrelsen och eleven behöver körkortstillstånd. Vi hjälper gärna elev och handledare att planera körningen på svenska, engelska, arabiska, spanska och turkiska.</p>
                <p>Vi tillhandahåller även digitala teoriböcker på arabiska, albanska, bosniska, engelska, finska, franska, kroatiska, persiska, turkiska, ryska, serbiska, somaliska, sorani, spanska, svenska, thailändska och tyska.</p>
                <div className="school-info-tags" aria-label="Språk">
                  {['Svenska', 'Engelska', 'Arabiska', 'Spanska', 'Turkiska'].map((language) => (
                    <span key={language}>{language}</span>
                  ))}
                </div>
              </article>
              <article>
                <h3>Skräddarsydd intensivkurs för dig som vill ta körkort snabbt</h3>
                <p>Vi erbjuder intensivkurser för dig som vill ta körkort så fort som möjligt. För att vi ska kunna anpassa kursen efter dina behov och förutsättningar börjar vi med en testlektion.</p>
                <p>Därefter planerar vi intensivkursen baserat på dina förkunskaper för att undvika onödiga lektioner och utgifter.</p>
                <p>Våra intensivkurser inkluderar körlektioner, teorilektioner, digital teori, Riskettan och Risktvåan. Kursen förbereder dig för att ta körkort inom önskad tidsram.</p>
                <div className="school-info-note-metric">
                  <strong>1 vecka - 1 månad</strong>
                  <span>Intensivkurser med längd efter dina förkunskaper.</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <Location />
      <BookingCTA />
      <Schema data={[faqSchema()]} />
    </>
  );
}
