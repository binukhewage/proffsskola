'use client';
export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className="container section error-page">
      <h1>Något gick fel.</h1>
      <p>Försök ladda sidan igen, eller ring 08-644 40 01 så hjälper vi dig.</p>
      <button className="button" onClick={reset}>
        Försök igen
      </button>
    </section>
  );
}
