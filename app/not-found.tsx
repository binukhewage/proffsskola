import { Button } from '@/components/ui';
export default function NotFound() {
  return (
    <section className="container section error-page">
      <span className="eyebrow">404</span>
      <h1>Här tog vägen slut.</h1>
      <p>Sidan finns inte. Fortsätt till startsidan eller kontakta oss så hjälper vi dig.</p>
      <div className="button-group">
        <Button href="/">Till startsidan</Button>
        <Button href="/kontakt" secondary>
          Kontakta oss
        </Button>
      </div>
    </section>
  );
}
