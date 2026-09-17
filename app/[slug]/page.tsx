import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Users, ShieldCheck, ShieldWarning, GraduationCap } from '@phosphor-icons/react/dist/ssr';
import { pages, courses, business, illustrations } from '@/lib/data';
import { metadata, pageSchema, serviceSchema, faqSchema } from '@/lib/seo';
import { Button, Photo, TextLink, Breadcrumbs, BookingCTA, FAQ } from '@/components/ui';
import { SpecialContent } from '@/components/inner-content';
import Schema from '@/components/schema';
import type { Metadata } from 'next';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = pages[slug];
  const course = courses.find((c) => c.slug === slug);
  const desc = p?.description || p?.intro || course?.description || 'Trafikskola i Jakobsberg och Järfälla.';
  return p ? metadata(p.title, desc, `/${slug}`) : { title: 'Sidan finns inte' };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = pages[slug];
  if (!p) notFound();
  const course = courses.find((c) => c.slug === slug);
  const courseDropdownPage = ['handledarkurs', 'riskettan', 'risktvaan'].includes(slug);
  const priceDropdownPage = ['intensivkurs', 'korlektioner', 'paket', 'teori'].includes(
    slug,
  );
  const shopCtaPage = courseDropdownPage || ['intensivkurs', 'korlektioner'].includes(slug);
  const service = [
    'korlektioner',
    'intensivkurs',
    'riskettan',
    'risktvaan',
    'teori',
    'taxiteori',
  ].includes(slug);
  return (
    <>
      <Breadcrumbs
        title={
          slug === 'vagen-till-korkort'
            ? 'Vägen till körkort'
            : p.title.split(' i ')[0]
        }
      />
      <section
        className={`container inner-hero ${p.image ? 'with-image' : ''} ${
          slug === 'vagen-till-korkort' ? 'inner-hero-no-border' : ''
        }`}
      >
        <div>
          {slug === 'vagen-till-korkort' && (
            <span className="eyebrow inner-hero-kicker">Bli Ett Proffs</span>
          )}
          <h1>
            {p.heading.split('\n').map((l, i) => (
              <span key={l}>
                {i > 0 && <br />}
                {l}
              </span>
            ))}
          </h1>
          {p.intro ? <p>{p.intro}</p> : null}
          {p.image &&
            slug !== 'paket' &&
            slug !== 'priser' &&
            slug !== 'kurser' &&
            slug !== 'kurserpris' &&
            slug !== 'teori' &&
            !['kontakt', 'villkor', 'vagen-till-korkort'].includes(slug) && (
            <div className="button-group">
              <Button
                href={shopCtaPage ? business.shop : course ? business.booking : '/boka'}
              >
                {shopCtaPage ? 'BOKA NU' : course ? 'Se kurstillfällen' : 'Planera din utbildning'}
              </Button>
              {!shopCtaPage && <TextLink href="/korlektioner">Se priser</TextLink>}
            </div>
          )}
        </div>
        {p.image && p.image in illustrations ? (
          <div className="inner-hero-illustration">
            <Image
              src={illustrations[p.image as keyof typeof illustrations].src}
              alt={illustrations[p.image as keyof typeof illustrations].alt}
              width={illustrations[p.image as keyof typeof illustrations].width}
              height={illustrations[p.image as keyof typeof illustrations].height}
              priority
              className="hero-illustration"
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
        ) : (
          p.image && <Photo name={p.image} priority />
        )}
      </section>
      {p.facts && (
        <section className="container section facts-section" aria-labelledby={`${slug}-facts-title`}>
          <div className="section-heading">
            <span className="eyebrow">Snabba fakta</span>
            <h2 id={`${slug}-facts-title`}>Det viktigaste om {p.factsTitle ?? p.title}</h2>
          </div>
          <dl className="facts-grid">
            {p.facts.map(([term, value]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}
      {slug === 'handledarkurs' && (
        <section className="container handledar-intro-section" data-reveal>
          <div className="handledar-intro-grid">
            <article className="handledar-card">
              <div className="handledar-card-icon" aria-hidden="true">
                <Users size={26} weight="regular" />
              </div>
              <span className="eyebrow">Rollen som handledare</span>
              <h2>Vad är en handledare?</h2>
              <p>
                En handledare är en person som hjälper och stödjer en elev under privat övningskörning.
                Handledaren är ansvarig för att ge vägledning, feedback och instruktioner för att hjälpa
                eleven att bli en säker och skicklig förare.
              </p>
              <p>
                Handledaren måste vara godkänd av Transportstyrelsen och uppfylla specifika krav beroende på
                vilken typ av körkort eleven siktar på.
              </p>
            </article>
            <article className="handledar-card">
              <div className="handledar-card-icon" aria-hidden="true">
                <ShieldCheck size={26} weight="regular" />
              </div>
              <span className="eyebrow">Krav från Transportstyrelsen</span>
              <h2>Vad krävs för att bli handledare?</h2>
              <p>För att din ansökan om att bli handledare ska godkännas måste du uppfylla vissa krav:</p>
              <ul>
                <li>Du måste vara minst 24 år gammal.</li>
                <li>Du ska ha haft ett giltigt körkort för den behörighet ni ska övningsköra med i minst fem av de senaste tio åren.</li>
                <li>Om ditt körkort är utfärdat i ett annat EES-land, behöver du skicka en kopia på det till Transportstyrelsen.</li>
                <li>Introduktionsutbildning krävs inte längre för privat övningskörning med personbil efter regeländringen den 1 augusti 2026.</li>
                <li>Elevens körkortstillstånd måste vara giltigt, om inte övningskörningen gäller att ta bort ett villkor för automatväxlat fordon eller att utöka B-behörighet.</li>
              </ul>
              <p>
                Källa: Transportstyrelsen om{' '}
                <a href="https://www.transportstyrelsen.se/sv/vagtrafik/korkort/ta-korkort/handledarskap-och-ovningskorning/handledare/">
                  handledarskap och övningskörning
                </a>.
              </p>
            </article>
          </div>
        </section>
      )}
      {slug === 'riskettan' && (
        <section className="container riskettan-intro-section" data-reveal>
          <div className="riskettan-intro-grid">
            <article className="riskettan-card">
              <div className="riskettan-card-icon" aria-hidden="true">
                <ShieldWarning size={26} weight="regular" />
              </div>
              <span className="eyebrow">Obligatorisk del 1</span>
              <h2>Vad är riskettan?</h2>
              <p>
                Riskettan är den första delen av den obligatoriska riskutbildningen för B-körkort.
                Under Riskettan får du lära dig om hur alkohol, droger, trötthet och andra faktorer
                påverkar körförmågan. Utbildningen inkluderar diskussioner om konsekvenserna av dessa
                risker, vad som ökar dem och hur du kan undvika dem för att köra säkrare.
              </p>
            </article>
            <article className="riskettan-card">
              <div className="riskettan-card-icon" aria-hidden="true">
                <GraduationCap size={26} weight="regular" />
              </div>
              <span className="eyebrow">Mål &amp; innehåll</span>
              <h2>Vad innehåller utbildningen:</h2>
              <p>
                Under utbildningen får du lära dig om hur droganvändning,
                rattfylleri och trötthet påverkar körförmågan samt om riskerna med olovlig och farlig
                körning. Du kommer att få insikt i hur du undviker dessa faror, de konsekvenser de
                medför, och vilka riskgrupper som finns. Utbildningen täcker även hur
                mobiltelefonanvändning påverkar säkerheten, viktiga trafiklagar och regler, samt hur
                din attityd påverkar din körning.
              </p>
            </article>
          </div>
        </section>
      )}
      {slug === 'intensivkurs' && <SpecialContent slug={slug} />}
      {p.sections && slug === 'intensivkurs' && (
        <section className="container section intensive-info-grid">
          {p.sections.map((s) => (
            <article key={s.title} data-reveal>
              <h2>{s.title}</h2>
              {s.body.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </article>
          ))}
        </section>
      )}
      {p.sections && slug !== 'intensivkurs' && (
        <section className="container section editorial-content">
          <div className="editorial-label">
            <span className="eyebrow">Din utbildning</span>
            <h2>
              Bra att veta innan du börjar.
            </h2>
            {course && !['handledarkurs', 'riskettan', 'risktvaan'].includes(slug) && (
              <div className="service-price">
                <strong>{new Intl.NumberFormat('sv-SE').format(course.price)} kr</strong>
                <p>
                  {course.regular
                    ? `Publicerat erbjudande. Ordinarie ${course.regular} kr. Bekräfta priset vid bokning.`
                    : slug === 'risktvaan'
                      ? 'Publicerat pris för halkbana.'
                      : 'Bekräfta priset vid bokning.'}
                </p>
              </div>
            )}
          </div>
          <div className="prose">
            {p.sections.map((s) => (
              <section key={s.title} data-reveal>
                <h2>{s.title}</h2>
                {s.body.split('\n\n').map((paragraph, idx) => {
                  const lines = paragraph.split('\n').map((l) => l.trim()).filter(Boolean);
                  if (lines.length > 0 && lines.every((l) => l.startsWith('• ') || l.startsWith('- '))) {
                    return (
                      <ul key={idx}>
                        {lines.map((item, i) => (
                          <li key={i}>{item.replace(/^[•\-]\s*/, '')}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={idx}>{paragraph}</p>;
                })}
              </section>
            ))}
          </div>
        </section>
      )}
      {slug === 'handledarkurs' && (
        <section className="container handledar-columns-section" data-reveal>
          <div className="handledar-columns-grid">
            <div className="handledar-column">
              <h2>Planera privat övningskörning med stöd från trafikskola</h2>
              <p>
                Även utan obligatorisk introduktionsutbildning är det viktigt att den privata
                övningskörningen blir strukturerad. Vi hjälper eleven att se vilka moment som
                behöver tränas och ger handledaren tydligare underlag för träningen hemma.
              </p>
              <p>
                Under kursen kommer ni att få insikt i bilens miljöpåverkan och betydelsen av
                att följa trafikregler för att skapa en trygg och säker trafikmiljö.
              </p>
              <p>
                Ni kommer få exempel på hur handledaren och eleven kan hantera olika argument
                eller olika åsikter under övningskörningen och råd om hur ni får ut det mesta
                av era körlektioner ihop.
              </p>
            </div>
            <div className="handledar-column">
              <h2>Få rätt start efter regeländringen</h2>
              <p>
                Drömmer du om att ta körkort? Om du har en handledare som kan hjälpa dig att
                övningsköra privat, börja med att kontrollera körkortstillstånd och
                handledargodkännande hos Transportstyrelsen. Därefter kan vi hjälpa er med en
                körlektion och en praktisk plan för vad ni bör träna på.
              </p>
              <p>
                Våra pedagoger har lång erfarenhet och kan ge stöd på svenska, engelska,
                arabiska, turkiska och spanska, så att du kan känna dig trygg och bekväm.
              </p>
              <p className="info-lead">Viktig information inför kursen:</p>
              <ul>
                <li>Glöm inte att ta med giltig legitimation till kursen.</li>
                <li>Kontrollera att handledaren har fått sitt godkännande innan ni börjar övningsköra privat.</li>
              </ul>
              <p>
                Välkommen att kontakta Proffs Trafikskola om du vill kombinera privat
                övningskörning med professionella körlektioner.
              </p>
            </div>
          </div>
        </section>
      )}
      {slug !== 'intensivkurs' && <SpecialContent slug={slug} />}
      {p.faqs && <FAQ items={p.faqs} />}
      {(priceDropdownPage || !['boka', 'kontakt', 'villkor'].includes(slug)) && <BookingCTA />}
      <Schema
        data={[
          ...pageSchema(slug, p.title),
          ...(service
            ? [
                serviceSchema(
                  slug,
                  p.title,
                  slug === 'taxiteori' ? 3500 : slug === 'korlektioner' ? 810 : undefined,
                ),
              ]
            : []),
          ...(p.faqs ? [faqSchema(p.faqs)] : []),
          ...(slug === 'vagen-till-korkort' ? [faqSchema()] : []),
        ]}
      />
    </>
  );
}
