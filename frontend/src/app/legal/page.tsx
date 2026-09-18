import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL_DOCUMENTS } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Legal · Tag-Tails",
  description: "Terms, privacy, cookies and other Tag-Tails Ltd policies.",
};

export default function LegalIndexPage() {
  return (
    <div className="wrap">
      <div className="page-intro">
        <span className="eyebrow">Tag-Tails Ltd</span>
        <h1>
          Policies
          <br />
          <em>& legal notices.</em>
        </h1>
        <p>The official terms and policies for Tag-Tails accounts, QR tags and subscriptions.</p>
      </div>
      <div className="legal-index">
        {LEGAL_DOCUMENTS.map((document) => (
          <article className="account-card" key={document.slug}>
            <span className="pill">{document.updated}</span>
            <h2>{document.title}</h2>
            <p>{document.description}</p>
            <Link className="textlink" href={`/legal/${document.slug}`}>
              Read {document.title}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
