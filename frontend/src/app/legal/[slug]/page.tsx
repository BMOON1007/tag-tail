import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalDocument } from "@/components/LegalDocument";
import { getLegalDocument, LEGAL_DOCUMENTS } from "@/lib/legal";

export function generateStaticParams() {
  return LEGAL_DOCUMENTS.map((document) => ({ slug: document.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const document = getLegalDocument(slug);

  if (!document) {
    return { title: "Legal · Tag-Tails" };
  }

  return {
    title: `${document.title} · Tag-Tails`,
    description: document.description,
  };
}

export default async function LegalSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const document = getLegalDocument(slug);

  if (!document) {
    notFound();
  }

  return <LegalDocument document={document} />;
}
