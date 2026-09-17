import StaticRedirect, { redirectMetadata } from '@/components/static-redirect';

const destination = '/boka';

export const metadata = redirectMetadata(destination);

export default function Page() {
  return <StaticRedirect destination={destination} label="Boka" />;
}
