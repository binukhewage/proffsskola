import type { Metadata } from 'next';

export function redirectMetadata(destination: string): Metadata {
  return {
    robots: { index: false, follow: false },
    alternates: { canonical: destination },
  };
}

export default function StaticRedirect({
  destination,
  label = 'sidan',
}: {
  destination: string;
  label?: string;
}) {
  return (
    <main className="container section static-redirect">
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(destination)});`,
        }}
      />
      <meta httpEquiv="refresh" content={`0;url=${destination}`} />
      <h1>Vi skickar dig vidare.</h1>
      <p>
        Om inget händer automatiskt kan du öppna{' '}
        <a href={destination}>{label}</a>.
      </p>
    </main>
  );
}
