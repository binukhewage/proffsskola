import {
  ArrowUpRight,
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import {
  business,
  authority,
  courses,
  lessons,
  packages,
  intensive,
  theoryPrices,
  photos,
} from '@/lib/data';
import { Button, PriceList, PackageCard, CourseGrid, Timeline, Photo, TextLink, FAQ } from './ui';
import terms from '@/lib/terms.json';
const socialIcons = {
  Instagram: InstagramLogo,
  Facebook: FacebookLogo,
  TikTok: TiktokLogo,
};
const coursePriceCards = [
  { name: 'Handledarstöd', price: 'Kontakta oss' },
  { name: 'Riskettan', price: '599kr' },
  { name: 'Risk 2 (Halkbana)', price: '2200kr' },
];
const theoryPriceCards = [
  { name: 'Teori online – svenska/engelska', price: '599kr' },
  { name: 'Teori online andra språk', price: '749kr' },
  { name: 'Taxiteori', price: '3500kr' },
];
const priceOverviewCards = [
  {
    label: 'Snabb utbildning',
    title: 'Intensivkurs',
    text: 'Paket med körlektioner, Risk 1, Risk 2 och teori online.',
    meta: 'Från 9 999 kr',
    href: '/intensivkurs',
  },
  {
    label: 'Körträning',
    title: 'Körlektioner',
    text: 'Enstaka lektioner, testlektion och flera lektionspaket.',
    meta: 'Från 499kr',
    href: '/korlektioner',
  },
  {
    label: 'Paket',
    title: 'Paket pris',
    text: 'Samla körlektioner, Riskettan och teori online i ett paket.',
    meta: 'Från 4 699 kr',
    href: '/paket',
  },
  {
    label: 'Riskutbildning',
    title: 'Kurser pris',
    text: 'Aktuella priser för Riskettan, Risktvåan och handledarstöd.',
    meta: 'Från 599kr',
    href: '/kurserpris',
  },
  {
    label: 'Studier',
    title: 'Teori',
    text: 'Teori online på svenska, engelska, andra språk och taxi.',
    meta: 'Från 599kr',
    href: '/teori',
  },
];
const courseOverviewCards = [
  {
    label: 'Privat övningskörning',
    title: 'Handledare & övningskörning',
    text: 'Få en tydlig grund för privat övningskörning och vad som gäller.',
    meta: 'För elev och handledare',
    href: '/handledarkurs',
  },
  {
    label: 'Riskutbildning del 1',
    title: 'Riskettan',
    text: 'Teoretisk utbildning om risker, beteenden och trafiksäkerhet.',
    meta: 'Obligatorisk för B-körkort',
    href: '/riskettan',
  },
  {
    label: 'Riskutbildning del 2',
    title: 'Risktvåan',
    text: 'Praktisk utbildning där du upplever bilens gränser i svårare lägen.',
    meta: 'Halkbana',
    href: '/risktvaan',
  },
];
export function Pricing({ mode = 'all' }: { mode?: string }) {
  const lessonsOnly = mode === 'lessons';
  return (
    <div className="container pricing-content">
      {(mode === 'all' || mode === 'lessons') && (
        <section
          id="korlektioner"
          className={`section pricing-section${lessonsOnly ? ' pricing-section-prices-only' : ''}`}
        >
          {!lessonsOnly && (
            <div>
              <h2>Körlektioner</h2>
              <p>
                Ordinarie lektioner är 50 minuter. Börja med en testlektion eller välj ett
                lektionspaket.
              </p>
              <Button href="/boka">Boka din start</Button>
            </div>
          )}
          <PriceList items={lessons} />
        </section>
      )}
      {(mode === 'all' || mode === 'intensive') && (
        <section id="intensivkurs" className="section">
          <div className="section-heading">
            <h2>Intensivkurs</h2>
            <p>
              Intensivkurser med körlektioner, Risk 1 & Risk 2 och teori online sv/en.
            </p>
          </div>
          <div className="package-grid">
            {intensive.map((p) => (
              <PackageCard key={p.name} {...p} count={p.lessons} intensive />
            ))}
          </div>
        </section>
      )}
      {(mode === 'all' || mode === 'packages') && (
        <section id="paket" className="section">
          {mode === 'all' && (
            <div className="section-heading">
              <h2>Körkortspaket</h2>
              <p>
                Samtliga paket innehåller Riskettan och teori online på svenska/engelska. Risktvåan
                ingår i intensivpaketen, men inte i dessa paket.
              </p>
            </div>
          )}
          <div className="package-grid package-grid-five">
            {packages.map((p) => (
              <PackageCard key={p.name} {...p} count={p.lessons} />
            ))}
          </div>
        </section>
      )}
      {mode === 'all' && (
        <section id="kurser" className="section pricing-section">
          <div>
            <h2>Kurser</h2>
            <p>Välj ett tillgängligt tillfälle i kursbokningen.</p>
            <p className="small">
              Riskettans erbjudandepris kommer från startsidan. Prislistan anger ordinarie 599 kr.
              Kontrollera priset för ditt tillfälle vid bokning.
            </p>
            <Button href={business.booking}>Se kurstillfällen</Button>
          </div>
          <div>
            <PriceList
              items={courses
                .filter((c) => c.slug !== 'handledarkurs')
                .map((c) => ({
                  name: c.name,
                  price: c.price,
                  detail:
                    c.slug === 'riskettan'
                      ? 'Publicerat erbjudande · ordinarie 599 kr'
                      : 'Halkbana',
                }))}
            />
            <div className="notice">
              <h3>Handledare och privat övningskörning</h3>
              <p>
                Tidigare publicerat erbjudande: 299 kr (ordinarie 399 kr). Kravet på
                introduktionsutbildning är borttaget. Kontakta oss om aktuellt utbud och pris.
              </p>
              <TextLink href="/handledarkurs">Läs om de nya reglerna</TextLink>
            </div>
          </div>
        </section>
      )}
      {(mode === 'all' || mode === 'theory') && (
        <section id="teori" className="section pricing-section">
          <div>
            <h2>Teori</h2>
            <p>Digitala studier för B-körkort och teoriutbildning för taxiförarlegitimation.</p>
            <TextLink href="/taxiteori">Läs om taxiteori</TextLink>
          </div>
          <PriceList items={theoryPrices} />
        </section>
      )}
    </div>
  );
}
export function CoursePricesContent() {
  return (
    <section className="container section">
      <div className="section-heading">
        <h2>Kurser</h2>
      </div>
      <div className="course-price-grid">
        {coursePriceCards.map((course) => (
          <article className="course-price-card" key={course.name}>
            <h3>{course.name}</h3>
            <div>
              <span>Aktuellt pris</span>
              <strong>{course.price}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export function TheoryPricesContent() {
  return (
    <section className="container section">
      <div className="section-heading">
        <h2>Teori</h2>
      </div>
      <div className="course-price-grid">
        {theoryPriceCards.map((item) => (
          <article className="course-price-card" key={item.name}>
            <h3>{item.name}</h3>
            <div>
              <span>Aktuellt pris</span>
              <strong>{item.price}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
function OverviewCards({
  title,
  text,
  cards,
}: {
  title: string;
  text: string;
  cards: typeof priceOverviewCards;
}) {
  return (
    <section className="container section overview-section">
      <div className="section-heading">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="overview-grid">
        {cards.map((card) => (
          <Link className="overview-card" href={card.href} key={card.href}>
            <span>{card.label}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <div>
              <strong>{card.meta}</strong>
              <ArrowUpRight size={22} aria-hidden="true" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
export function PricesOverviewContent() {
  return (
    <OverviewCards
      title="Välj prisområde"
      text="Gå vidare till den prislista som matchar din utbildning eller ditt nästa steg."
      cards={priceOverviewCards}
    />
  );
}
export function CoursesOverviewContent() {
  return (
    <OverviewCards
      title="Välj kurs"
      text="Här hittar du våra viktigaste kurser och utbildningsmoment samlade på ett ställe."
      cards={courseOverviewCards}
    />
  );
}
export function ContactContent() {
  const mapEmbed =
    'https://www.google.com/maps?cid=7373633510116988312&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-US&source=embed&output=embed';
  return (
    <section className="container section contact-grid">
      <div>
        <h2>Prata körkort med oss.</h2>
        <p>Vi hjälper dig med bokning, utbildningsplanering och frågor om kurser.</p>
        <div className="contact-method">
          <span>Ring oss</span>
          <a href={`tel:${business.tel}`}>{business.phone}</a>
        </div>
        <div className="contact-method">
          <span>Mejla oss</span>
          <a href={`mailto:${business.email}`}>{business.email}</a>
        </div>
        <Button href="/boka">Bokning & e-handel</Button>
      </div>
      <div className="contact-details">
        <h2>Besök skolan</h2>
        <address>
          {business.street}
          <br />
          {business.postal} {business.city}
        </address>
        <TextLink href={business.map}>Öppna vägbeskrivning</TextLink>
        <div className="contact-socials" aria-label="Sociala medier">
          {business.socials.map(([name, url]) => {
            const Icon = socialIcons[name as keyof typeof socialIcons];
            return (
              <a href={url} key={name} aria-label={name}>
                {Icon && <Icon size={22} weight="bold" />}
              </a>
            );
          })}
        </div>
        <div className="contact-hours">
          <h3>Receptionens öppettider</h3>
          <dl className="hours">
            {business.hours.map(([d, t]) => (
              <div key={d}>
                <dt>{d}</dt>
                <dd>{t}</dd>
              </div>
            ))}
          </dl>
          <h3>Körtider</h3>
          <p>{business.drivingHours}</p>
        </div>
      </div>
      <div className="contact-map">
        <iframe
          src={mapEmbed}
          title="Proffs Trafikskola på Google Maps"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
export function BookingContent() {
  return (
    <section className="container section booking-options">
      <article>
        <span className="eyebrow">Kursbokning</span>
        <h2>Hitta din nästa kurs.</h2>
        <p>
          Se tillgängliga kurstillfällen och boka hos Trafikskola Online. Du väljer kurs och slutför
          bokningen där.
        </p>
        <Button href={business.booking}>Till kursbokningen</Button>
      </article>
      <article>
        <span className="eyebrow">E-handel</span>
        <h2>Välj din utbildning.</h2>
        <p>
          Se skolans utbildningar och paket i e-handeln. Aktuellt pris och köpvillkor visas innan du
          betalar.
        </p>
        <Button href={business.shop}>Till e-handeln</Button>
      </article>
    </section>
  );
}
export function TermsContent() {
  return (
    <section className="container section legal-layout">
      <aside>
        <h2>Villkor</h2>
        {terms.map((t) => (
          <a href={`#villkor-${t.title[0]}`} key={t.title}>
            {t.title}
          </a>
        ))}
      </aside>
      <div className="prose">
        {terms.map((t) => (
          <section key={t.title} id={`villkor-${t.title[0]}`}>
            <h2>{t.title}</h2>
            {t.body
              .split('\n\n')
              .filter(Boolean)
              .map((p, i) => (
                <p key={i}>{p}</p>
              ))}
          </section>
        ))}
      </div>
    </section>
  );
}
export function SpecialContent({ slug }: { slug: string }) {
  switch (slug) {
    case 'priser':
      return <PricesOverviewContent />;
    case 'kurser':
      return <CoursesOverviewContent />;
    case 'kurserpris':
      return <CoursePricesContent />;
    case 'paket':
      return <Pricing mode="packages" />;
    case 'intensivkurs':
      return <Pricing mode="intensive" />;
    case 'korlektioner':
      return <Pricing mode="lessons" />;
    case 'teori':
      return <TheoryPricesContent />;
    case 'kontakt':
      return <ContactContent />;
    case 'boka':
      return <BookingContent />;
    case 'villkor':
      return <TermsContent />;
    case 'vagen-till-korkort':
      return (
        <>
          <section className="container section">
            <Timeline full />
          </section>
          <FAQ />
        </>
      );
    default:
      return null;
  }
}
