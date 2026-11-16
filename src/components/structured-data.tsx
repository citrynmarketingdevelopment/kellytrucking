import { structuredData, type PagePath } from '@/lib/seo';

export function StructuredData({ path }: { path: PagePath }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(path)).replace(/</g, '\\u003c') }} />;
}
