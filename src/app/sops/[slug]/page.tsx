import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { sops, getSopBySlug } from '@/data/sops';
import SOPDetailContent from '@/components/ui/SOPDetailContent';

export const dynamicParams = false;

export function generateStaticParams() {
  return sops.map((sop) => ({ slug: sop.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sop = getSopBySlug(slug);
  if (!sop) return { title: 'Not Found | Curative OS' };
  return {
    title: `${sop.title} | Curative OS`,
    description: sop.summary,
  };
}

export default async function SOPDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sop = getSopBySlug(slug);
  if (!sop) notFound();
  return <SOPDetailContent sop={sop} />;
}
