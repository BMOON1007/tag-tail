import Link from "next/link";
import type { LegalBlock, LegalDocument as LegalDocumentType } from "@/lib/legal";
import { LEGAL_DOCUMENTS } from "@/lib/legal";

function Blocks({ block }: { block: LegalBlock }) {
  return (
    <>
      {block.heading ? <h2>{block.heading}</h2> : null}
      {block.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{linkify(paragraph)}</p>
      ))}
      {block.bullets ? (
        <ul>
          {block.bullets.map((item) => (
            <li key={item}>{linkify(item)}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

function linkify(text: string) {
  const emailMatch = text.match(/^(Email:\s*)(.+@.+\..+)$/i);
  if (emailMatch) {
    return (
      <>
        {emailMatch[1]}
        <a className="textlink" href={`mailto:${emailMatch[2]}`}>
          {emailMatch[2]}
        </a>
      </>
    );
  }

  if (text.startsWith("Website:")) {
    return (
      <>
        Website:{" "}
        <a className="textlink" href="https://www.tag-tails.co.uk">
          www.tag-tails.co.uk
        </a>
      </>
    );
  }

  const privacyOnly = text.match(/^(For questions about cookies or privacy:\s*)(.+@.+\..+)$/i);
  if (privacyOnly) {
    return (
      <>
        {privacyOnly[1]}
        <a className="textlink" href={`mailto:${privacyOnly[2]}`}>
          {privacyOnly[2]}
        </a>
      </>
    );
  }

  const supportOnly = text.match(/^(If you encounter misuse, contact:\s*)(.+@.+\..+)$/i);
  if (supportOnly) {
    return (
      <>
        {supportOnly[1]}
        <a className="textlink" href={`mailto:${supportOnly[2]}`}>
          {supportOnly[2]}
        </a>
      </>
    );
  }

  return text;
}

export function LegalDocument({ document }: { document: LegalDocumentType }) {
  return (
    <div className="wrap">
      <article className="legal">
        <span className="eyebrow">{document.eyebrow}</span>
        <h1>{document.title}</h1>
        <p className="micro">Last updated: {document.updated}</p>
        <nav className="legal-nav" aria-label="Legal documents">
          {LEGAL_DOCUMENTS.map((item) => (
            <Link key={item.slug} href={`/legal/${item.slug}`} className={item.slug === document.slug ? "active" : undefined}>
              {item.title}
            </Link>
          ))}
        </nav>
        {document.sections.map((section, index) => (
          <section key={`${section.heading || "block"}-${index}`}>
            <Blocks block={section} />
            {section.subsections?.map((subsection) => (
              <div key={subsection.heading || subsection.paragraphs?.[0]}>
                <Blocks block={subsection} />
              </div>
            ))}
            {section.closing?.map((paragraph) => (
              <p key={paragraph}>{linkify(paragraph)}</p>
            ))}
          </section>
        ))}
      </article>
    </div>
  );
}
