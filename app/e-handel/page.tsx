import StaticRedirect, { redirectMetadata } from '@/components/static-redirect';
import { business } from '@/lib/data';

const destination = business.shop;

export const metadata = redirectMetadata(destination);

export default function Page() {
  return <StaticRedirect destination={destination} label="e-handeln" />;
}
