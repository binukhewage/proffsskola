import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { business } from '@/lib/data';
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="footer-brand">
            <Image
              src="/images/proffslogga-black.png"
              alt="Proffs Trafikskola"
              width={252}
              height={84}
            />
          </Link>
          <p>
            Din körkortsresa börjar i Järfälla.
            <br />
            Vi hjälper dig hela vägen.
          </p>
          <div className="socials">
            {business.socials.map(([name, url]) => (
              <a key={name} href={url}>
                {name}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2>Utbildning</h2>
          <Link href="/korlektioner">Körlektioner</Link>
          <Link href="/intensivkurs">Intensivkurs</Link>
          <Link href="/handledarkurs">Handledare & övningskörning</Link>
          <Link href="/riskettan">Riskettan</Link>
          <Link href="/risktvaan">Risktvåan</Link>
          <Link href="/teori">Teori</Link>
          <Link href="/taxiteori">Taxiteori</Link>
        </div>
        <div>
          <h2>Priser & boka</h2>
          <Link href="/korlektioner">Körlektioner pris</Link>
          <Link href="/paket">Paket pris</Link>
          <Link href="/kurserpris">Kurser pris</Link>
          <a href={business.booking}>Boka kurs</a>
          <a href={business.shop}>E-handel</a>
        </div>
        <div>
          <h2>Proffs</h2>
          <Link href="/kontakt">Kontakt</Link>
          <Link href="/villkor">Villkor & personuppgifter</Link>
          <h2 className="footer-subheading">Välkommen förbi</h2>
          <address>
            {business.street}
            <br />
            {business.postal} {business.city}
          </address>
          <a href={`tel:${business.tel}`}>{business.phone}</a>
          <a href={`mailto:${business.email}`}>{business.email}</a>
          <p>
            Mån - tors 09:00 - 18:00
            <br />
            Fredag 09:00 - 16:00
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Proffs Trafikskola</span>
        <span>Jakobsberg · Järfälla · Barkarby</span>
      </div>
    </footer>
  );
}
